import { useRef, useState, useCallback } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

export const BeforeAfter = ({ before, after, beforeAlt, afterAlt }: BeforeAfterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClient = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl border border-border select-none aspect-[4/3] bg-muted"
      onMouseMove={(e) => dragging.current && updateFromClient(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => updateFromClient(e.touches[0].clientX)}
    >
      <img src={after} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1024} height={768} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeAlt}
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerRef.current?.clientWidth ?? "100%" }}
          loading="lazy"
          width={1024}
          height={768}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 text-xs font-semibold tracking-wider uppercase bg-background/70 backdrop-blur px-2 py-1 rounded">Before</span>
      <span className="absolute top-3 right-3 text-xs font-semibold tracking-wider uppercase bg-primary text-primary-foreground px-2 py-1 rounded">After</span>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary cursor-ew-resize"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center sky-glow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(6 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
};
