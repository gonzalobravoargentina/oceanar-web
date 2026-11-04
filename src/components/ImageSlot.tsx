// Placeholder for a photo or video still that hasn't been chosen yet.
// It shows where an image goes and what it should show, in the page's
// palette, so the layout can be judged before the real material arrives.
type Tone = "kelp" | "sea" | "sky" | "night";

const tones: Record<Tone, string> = {
  kelp: "from-kelp-olive via-kelp-ochre to-kelp-amber",
  sea: "from-ink via-sea-deep to-sea-grey",
  sky: "from-sea-grey via-sky to-wind",
  night: "from-sea-deep via-[#35566b] to-sea-grey",
};

type Props = {
  pending: string;
  description: string;
  tone?: Tone;
  className?: string;
  /** Put the caption at the top when text sits over the bottom of the image. */
  captionTop?: boolean;
};

export function ImageSlot({
  pending,
  description,
  tone = "sea",
  className = "",
  captionTop = false,
}: Props) {
  return (
    <div
      role="img"
      aria-label={`${pending}: ${description}`}
      className={`relative overflow-hidden ${className}`}
    >
      <div className={`drift absolute inset-0 bg-linear-to-br ${tones[tone]}`}>
        {/* Soft light shafts, as seen from under the water. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgb(246_243_236/0.35),transparent_60%)]" />
      </div>
      <p
        className={`label bg-ink/60 text-foam absolute left-3 rounded-sm px-2 py-1 ${captionTop ? "top-3" : "bottom-3"}`}
      >
        {pending} · {description}
      </p>
    </div>
  );
}
