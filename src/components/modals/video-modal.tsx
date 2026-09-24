import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Pause, Play } from "lucide-react";
import { useUi } from "@/lib/ui-store";

const FRAMES = [
  {
    src: "/images/hero-scene.jpg",
    caption: "People + AI, working as one team.",
  },
  {
    src: "/images/workshop.jpg",
    caption: "We start with the work — not the model.",
  },
  {
    src: "/images/case-healthcare.jpg",
    caption: "Healthcare teams get hours back.",
  },
  {
    src: "/images/case-finance.jpg",
    caption: "Documents that used to take days now take minutes.",
  },
  {
    src: "/images/cta-banner.jpg",
    caption: "Bolder. Smarter. Together.",
  },
];

export function VideoModal() {
  const open = useUi((s) => s.videoOpen);
  const close = useUi((s) => s.closeVideo);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!open) {
      setI(0);
      setPlaying(true);
      return;
    }
    if (!playing) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % FRAMES.length), 3200);
    return () => window.clearInterval(id);
  }, [open, playing]);

  const frame = FRAMES[i];

  return (
    <Dialog.Root open={open} onOpenChange={(v) => (!v ? close() : useUi.getState().openVideo())}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/70" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(920px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-navy shadow-[var(--shadow-card)] focus:outline-none">
          <Dialog.Title className="sr-only">ABI Tech — How we implement AI</Dialog.Title>
          <Dialog.Close className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-navy/40 text-on-media hover:bg-navy/70">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
          <div className="relative aspect-video bg-navy">
            {FRAMES.map((f, idx) => (
              <img
                key={f.src}
                src={f.src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                style={{ opacity: idx === i ? 1 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
            <p className="absolute bottom-16 left-6 right-6 text-lg font-semibold text-on-media sm:text-2xl">
              {frame.caption}
            </p>
            <div className="absolute bottom-5 left-6 right-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                className="inline-flex size-10 items-center justify-center rounded-full bg-on-media/15 text-on-media hover:bg-on-media/25"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? <Pause className="size-4" /> : <Play className="size-4 ml-0.5" />}
              </button>
              <div className="flex flex-1 gap-1.5">
                {FRAMES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Scene ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className="h-1 flex-1 overflow-hidden rounded-full bg-on-media/25"
                  >
                    <span
                      className="block h-full bg-on-media transition-[width] duration-300"
                      style={{ width: idx <= i ? "100%" : "0%" }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
