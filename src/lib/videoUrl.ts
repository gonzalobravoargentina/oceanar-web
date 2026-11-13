// Bump this number whenever the files in public/videos/home are replaced. The
// videos are cached for a day under the same name, and a new query string
// makes every browser fetch the new files right away.
const VIDEO_VERSION = "2";

export const videoUrl = (path: string) => `${path}?v=${VIDEO_VERSION}`;
