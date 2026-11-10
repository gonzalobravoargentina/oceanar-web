// Some browsers refuse to autoplay a video until the visitor touches the page
// (iPhone low power mode, in-app browsers such as WhatsApp or Instagram). Try
// again on the first tap, as long as the video is still on screen.
export function retryPlayOnTouch(video: HTMLVideoElement) {
  const retry = () => {
    const box = video.getBoundingClientRect();
    const onScreen = box.bottom > 0 && box.top < window.innerHeight;
    if (video.isConnected && video.paused && onScreen) {
      video.play().catch(() => {});
    }
  };
  document.addEventListener("touchend", retry, { once: true, passive: true });
  document.addEventListener("click", retry, { once: true });
}
