import React, { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryItem = { src: string; alt: string; caption?: string };

type Props = { items: GalleryItem[] };

export const GalleryGrid: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  return (
    <>
      <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group mb-3 block w-full overflow-hidden rounded-2xl ring-1 ring-gilt/30 hover:ring-gilt/70 transition-all text-left"
            aria-label={`Open image: ${it.alt}`}
          >
            <div className="relative">
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {it.caption && (
                <p className="absolute bottom-3 left-3 right-3 text-cream text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  {it.caption}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-5 right-5 rounded-full border border-cream/30 text-cream p-2.5 hover:bg-cream hover:text-ink transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 rounded-full border border-cream/30 text-cream p-2.5 hover:bg-cream hover:text-ink transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 rounded-full border border-cream/30 text-cream p-2.5 hover:bg-cream hover:text-ink transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[open].src}
              alt={items[open].alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            {items[open].caption && (
              <figcaption className="mt-3 text-center text-cream/80 text-sm">{items[open].caption}</figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
};
