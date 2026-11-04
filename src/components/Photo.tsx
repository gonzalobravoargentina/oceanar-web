import Image from "next/image";

type Props = {
  /** File name in public/images/photos, without extension. */
  name: string;
  alt: string;
  /** Hint for the browser about the rendered width (mobile first). */
  sizes?: string;
  className?: string;
  /** Slow parallax while scrolling (skipped with reduced motion). */
  drift?: boolean;
  preload?: boolean;
};

// A photo that fills its positioned parent. next/image serves a light
// version for each screen, which matters on slow coastal connections.
export function Photo({
  name,
  alt,
  sizes = "100vw",
  className = "",
  drift = false,
  preload = false,
}: Props) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        src={`/images/photos/${name}.webp`}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover ${drift ? "drift" : ""}`}
      />
    </div>
  );
}
