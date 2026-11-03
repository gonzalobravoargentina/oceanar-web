import { drawings, isDrawingName } from "@/drawings";

type Props = { name: string; label: string; className?: string };

// Renders one of the hand-drawn illustrations from src/drawings.
export function Drawing({ name, label, className }: Props) {
  if (!isDrawingName(name)) return null;
  const Svg = drawings[name];
  return <Svg role="img" aria-label={label} className={className} />;
}
