import type { ReactNode } from "react";

type Props = {
  title?: string;
  eyebrow?: string;
  id?: string;
  children?: ReactNode;
};

// Neutral content block. Visual treatment arrives in stage 2.
export function Section({ title, eyebrow, id, children }: Props) {
  const headingId = id && title ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-3xl space-y-4 px-4 py-12"
    >
      {eyebrow && (
        <p className="text-sm tracking-widest uppercase opacity-70">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 id={headingId} className="text-2xl font-semibold">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
