import {
  Lightbulb,
  Code2,
  Settings2,
  Users,
  Search,
  PenLine,
  Rocket,
  BarChart3,
  Globe2,
  ThumbsUp,
  Trophy,
  Sparkles,
  Bot,
  Workflow,
  Headset,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  code: Code2,
  cog: Settings2,
  users: Users,
};

export const STEP_ICONS: Record<string, LucideIcon> = {
  search: Search,
  pen: PenLine,
  code: Code2,
  rocket: Rocket,
  bars: BarChart3,
};

export const STAT_ICONS: Record<string, LucideIcon> = {
  globe: Globe2,
  users: Users,
  thumb: ThumbsUp,
  trophy: Trophy,
};

export const PILL_ICONS = [Sparkles, Bot, Workflow, Headset] as const;
