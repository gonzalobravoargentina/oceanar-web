"use client";

import { useId, useState } from "react";
import { LoopVideo } from "@/components/LoopVideo";

type Props = {
  index: number;
  headline: string;
  clip: string;
  openLabel: string;
  closeLabel: string;
  placeholder: string;
};

export function HeadlinePanel({
  index,
  headline,
  clip,
  openLabel,
  closeLabel,
  placeholder,
}: Props) {
  const [open, setOpen] = useState(false);
  const windowId = useId();
  const titleId = useId();

  return (
    <section
      data-open={open}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) setOpen(false);
      }}
      className="group relative isolate flex min-h-[85svh] items-end overflow-hidden"
    >
      <LoopVideo name={clip} className="absolute inset-0 -z-20" />

      {/* Soft edges so neighbouring videos and the page blend into each other. */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 -z-10 bg-gradient-to-b to-transparent ${
          index === 0
            ? "from-ocean-ink via-ocean-ink/60 h-[55%]"
            : "h-1/6 from-black/30"
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/45 to-transparent"
      />

      <div className="relative z-20 flex w-full items-end justify-between gap-6 px-6 pb-12 sm:px-12 sm:pb-16">
        {/* The window repeats the headline as its title, so it fades out here. */}
        <div className="transition-opacity duration-500 group-data-[open=true]:opacity-0 motion-reduce:transition-none">
          <p className="font-heading text-sm tracking-[0.3em] opacity-70">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="font-display text-4xl leading-none font-black sm:text-7xl">
            {headline}
          </h2>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={windowId}
          aria-label={`${open ? closeLabel : openLabel}: ${headline}`}
          onClick={() => setOpen((o) => !o)}
          className="grid size-14 shrink-0 place-items-center rounded-full border border-white/70 bg-black/10 backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            className={`transition-transform duration-500 motion-reduce:transition-none ${
              open ? "rotate-45" : ""
            }`}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>

      {/* The curtain: slides in from the right and covers the whole video. */}
      <div
        id={windowId}
        role="region"
        aria-labelledby={titleId}
        data-open={open}
        inert={!open}
        className="bg-ocean-deep/85 absolute inset-0 z-10 translate-x-full overflow-y-auto backdrop-blur-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] data-[open=true]:translate-x-0 motion-reduce:transition-none"
      >
        <div className="flex flex-col gap-6 px-8 pt-12 pb-32 sm:px-12 sm:pt-16">
          <h3
            id={titleId}
            className="font-display text-3xl leading-tight font-black sm:text-4xl"
          >
            {headline}
          </h3>
          <p className="text-lg opacity-80">{placeholder}</p>
        </div>
      </div>
    </section>
  );
}
