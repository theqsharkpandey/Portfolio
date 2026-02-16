export const trackEvent = (eventName, props = {}) => {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props });
  }
};

export const trackPageView = (path) => {
  trackEvent("pageview", { path });
};
