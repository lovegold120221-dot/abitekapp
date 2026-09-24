#!/usr/bin/env node
/**
 * Creates public-read blog_posts on Supabase and upserts seed articles.
 * Pass SEED_DATABASE_URL (Postgres, ssl). Never commit that URL.
 */
import pg from "pg";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const url = process.env.SEED_DATABASE_URL?.trim();
if (!url) {
  console.error("[seed] SEED_DATABASE_URL is required");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const seedMod = await import(pathToFileURL(join(root, "src/lib/blog-seed.ts")).href);
const posts = seedMod.SEED_POSTS;

const client = new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
await client.connect();

await client.query(`
create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  seo_title text not null,
  seo_description text not null,
  cover_image text,
  cover_alt text,
  tags text[] not null default '{}',
  author_name text not null default 'ABI Tech',
  author_role text not null default 'Editorial',
  reading_minutes int not null default 8,
  published_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  content jsonb not null default '[]'::jsonb,
  faqs jsonb not null default '[]'::jsonb
);
alter table blog_posts enable row level security;
do $$ begin
  if not exists (
    select 1 from pg_policies where tablename = 'blog_posts' and policyname = 'Public read blog posts'
  ) then
    create policy "Public read blog posts" on blog_posts for select using (true);
  end if;
end $$;
grant select on blog_posts to anon, authenticated;
notify pgrst, 'reload schema';
`);

for (const post of posts) {
  await client.query(
    `insert into blog_posts (
      slug, title, excerpt, seo_title, seo_description, cover_image, cover_alt,
      tags, author_name, author_role, reading_minutes, published_at, updated_at, content, faqs
    ) values (
      $1,$2,$3,$4,$5,$6,$7,$8::text[],$9,$10,$11,$12,$13,$14::jsonb,$15::jsonb
    )
    on conflict (slug) do update set
      title = excluded.title,
      excerpt = excluded.excerpt,
      seo_title = excluded.seo_title,
      seo_description = excluded.seo_description,
      cover_image = excluded.cover_image,
      cover_alt = excluded.cover_alt,
      tags = excluded.tags,
      author_name = excluded.author_name,
      author_role = excluded.author_role,
      reading_minutes = excluded.reading_minutes,
      published_at = excluded.published_at,
      updated_at = excluded.updated_at,
      content = excluded.content,
      faqs = excluded.faqs`,
    [
      post.slug,
      post.title,
      post.excerpt,
      post.seo_title,
      post.seo_description,
      post.cover_image,
      post.cover_alt,
      post.tags,
      post.author_name,
      post.author_role,
      post.reading_minutes,
      post.published_at,
      post.updated_at,
      JSON.stringify(post.content),
      JSON.stringify(post.faqs),
    ],
  );
  console.log("[seed] upserted", post.slug);
}

await client.end();
console.log("[seed] done");
