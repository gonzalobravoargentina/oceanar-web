const poster = "/videos/hero-ocean-poster.jpg";

// Decorative looping video that fills its positioned parent. Visitors who
// prefer reduced motion get the still poster instead.
export function BackgroundVideo() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        className="h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/videos/hero-ocean.webm" type="video/webm" />
        <source src="/videos/hero-ocean.mp4" type="video/mp4" />
      </video>
      <div
        className="hidden h-full w-full bg-cover bg-center motion-reduce:block"
        style={{ backgroundImage: `url(${poster})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
