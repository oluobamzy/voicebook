import { useEffect } from 'react';
import { config } from '../config';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

const GA_FLAG = '__ga_loaded';
const TAWK_FLAG = '__tawk_loaded';

function loadGoogleAnalytics(id: string) {
  if (!id || id.includes('XXXX') || (window as unknown as Record<string, boolean>)[GA_FLAG]) return;
  (window as unknown as Record<string, boolean>)[GA_FLAG] = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);
}

function loadTawk(propertyId: string, widgetId: string) {
  if (
    !propertyId ||
    !widgetId ||
    propertyId.includes('YOUR_') ||
    widgetId.includes('YOUR_') ||
    (window as unknown as Record<string, boolean>)[TAWK_FLAG]
  )
    return;
  (window as unknown as Record<string, boolean>)[TAWK_FLAG] = true;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
  s.charset = 'UTF-8';
  s.setAttribute('crossorigin', '*');
  document.head.appendChild(s);
}

interface Props {
  enabled: boolean;
}

const AnalyticsScripts = ({ enabled }: Props) => {
  useEffect(() => {
    if (!enabled) return;
    loadGoogleAnalytics(config.googleAnalyticsId);
    loadTawk(config.tawkPropertyId, config.tawkWidgetId);
  }, [enabled]);

  return null;
};

export default AnalyticsScripts;
