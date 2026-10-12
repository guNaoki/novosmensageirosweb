// Analytics & Tracking Hub - Microsoft Clarity & Google Analytics 4 (GA4)

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initAnalytics() {
  const clarityId = import.meta.env.VITE_CLARITY_ID;
  const gaId = import.meta.env.VITE_GA4_MEASUREMENT_ID;

  // 1. Microsoft Clarity (Heatmaps, Gravações de Sessão e Gargalos de Scroll/Cliques)
  if (clarityId && typeof window !== 'undefined') {
    (function(c: Window & { [key: string]: unknown }, l: Document, a: string, r: string, i: string) {
      c[a] = c[a] || function() { ((c[a] as unknown as { q: unknown[] }).q = (c[a] as unknown as { q: unknown[] }).q || []).push(arguments) };
      const t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      const y = l.getElementsByTagName(r)[0];
      y?.parentNode?.insertBefore(t, y);
    })(window as unknown as Window & { [key: string]: unknown }, document, "clarity", "script", clarityId);
  }

  // 2. Google Analytics 4 (GA4 - Origem de Tráfego, Métricas de Páginas e Conversões)
  if (gaId && typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', gaId, {
      anonymize_ip: true,
    });
  }
}

// Disparador de eventos customizados para rastrear gargalos ou ações importantes
export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
    if (window.clarity) {
      window.clarity('event', `${category}_${action}`);
    }
  }
}
