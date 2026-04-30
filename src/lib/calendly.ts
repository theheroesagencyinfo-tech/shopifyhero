// Helper to open Calendly as a popup overlay on the same page.
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export function openCalendlyPopup(url: string): boolean {
  if (typeof window === "undefined") return false;
  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
    return true;
  }
  return false;
}
