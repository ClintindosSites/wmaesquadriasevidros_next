export const GA_TRACKING_ID = "G-2S5S8CWBY1";

type EventProps = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const event = ({ action, category, label, value }: EventProps) => {
  // 🔥 impede quebra do site
  if (typeof window === "undefined") return;

  // 🔥 impede erro se gtag não carregou
  if (typeof window.gtag !== "function") {
    console.warn("gtag ainda não carregou");
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
