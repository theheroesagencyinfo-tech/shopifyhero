// Meta Pixel helper. Base pixel + PageView are loaded in index.html.
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const fbqTrack = (
  event: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      window.fbq("track", event, params);
    } catch {
      // no-op
    }
  }
};

export {};