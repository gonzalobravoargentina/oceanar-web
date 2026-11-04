import Image from "next/image";

// Real pixel sizes of the exported drawings (keep in step with
// scripts/optimize-media.mjs) so they never stretch.
const sizes = {
  fish: [900, 276],
  crab: [900, 748],
  kelp: [900, 572],
  "kelp-forest": [900, 442],
  "fish-school": [900, 440],
  "sea-lion": [900, 689],
  jellyfish: [900, 512],
} as const;

export type SketchName = keyof typeof sizes;

export const isSketchName = (value: string): value is SketchName =>
  value in sizes;

type Props = {
  name: SketchName;
  /** Empty string when the drawing is only decorative. */
  alt: string;
  /** Approximate rendered width in CSS pixels, for choosing the file size. */
  displayWidth?: number;
  className?: string;
  /** White lines for dark backgrounds. */
  onDark?: boolean;
};

// One of Cande's hand drawings (black line, white fill). On light paper the
// white fill blends into the page; on dark water the drawing is inverted.
// It uncovers itself with the scroll, like a line being drawn.
export function Sketch({
  name,
  alt,
  displayWidth = 400,
  className = "",
  onDark = false,
}: Props) {
  return (
    <Image
      src={`/images/drawings/${name}.webp`}
      alt={alt}
      width={sizes[name][0]}
      height={sizes[name][1]}
      sizes={`${displayWidth}px`}
      className={`unveil h-auto ${onDark ? "mix-blend-screen invert" : "mix-blend-multiply"} ${className}`}
    />
  );
}
