'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Calendly?: { initInlineWidget?: (opts: { url: string; parentElement: HTMLElement }) => void };
  }
}

export function CalendlyEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = 'calendly-widget-script';
    const ensureScript = () =>
      new Promise<void>((resolve) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        document.head.appendChild(link);
        const s = document.createElement('script');
        s.id = id;
        s.src = 'https://assets.calendly.com/assets/external/widget.js';
        s.async = true;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });

    let cancelled = false;
    ensureScript().then(() => {
      if (cancelled || !containerRef.current || !window.Calendly?.initInlineWidget) return;
      // Clear any prior init
      containerRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
      });
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div className="rounded-xl border border-border overflow-hidden bg-bg-soft">
      <div
        ref={containerRef}
        className="min-w-[320px] min-h-[640px]"
        aria-label="Calendly scheduling widget"
      />
      <noscript>
        <div className="p-6 text-[14px] text-ink-2">
          Scheduling requires JavaScript. You can also{' '}
          <a className="underline" href={url} target="_blank" rel="noreferrer">
            book a time directly on Calendly
          </a>
          .
        </div>
      </noscript>
    </div>
  );
}
