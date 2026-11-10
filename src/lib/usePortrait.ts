import { useSyncExternalStore } from "react";

const query = "(orientation: portrait)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

// True when the window is taller than it is wide (phones held upright,
// tablets in portrait). Renders as false on the server and during hydration,
// then follows the real orientation.
export function usePortrait() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
