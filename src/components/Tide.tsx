// A slow horizontal band of words moving like a current. Decorative
// repetition is hidden from screen readers; the list is read once.
type Props = { items: string[]; label: string };

export function Tide({ items, label }: Props) {
  const row = items.join("  ·  ") + "  ·  ";
  return (
    <div className="overflow-hidden">
      <ul className="sr-only" aria-label={label}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p
        aria-hidden="true"
        className="flex w-max font-serif text-4xl whitespace-pre italic motion-safe:animate-[tide_60s_linear_infinite] md:text-6xl"
      >
        <span>{row}</span>
        <span>{row}</span>
      </p>
    </div>
  );
}
