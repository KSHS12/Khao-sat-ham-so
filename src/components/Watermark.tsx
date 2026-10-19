import React, { useMemo } from 'react';

const SCHOOL_NAME = 'TRƯỜNG THPT LÊ HỒNG PHONG';

interface WmItem {
  text: string;
  top: string;
  left: string;
  size: string;
  rot: number;
  duration: number;
  delay: number;
}

export const Watermark: React.FC = () => {
  const items = useMemo<WmItem[]>(() => {
    const base: Omit<WmItem, 'delay'>[] = [
      { text: SCHOOL_NAME, top: '6%', left: '4%', size: 'clamp(1.4rem, 3vw, 2.8rem)', rot: -18, duration: 26 },
      { text: SCHOOL_NAME, top: '22%', left: '52%', size: 'clamp(1.6rem, 3.4vw, 3.2rem)', rot: 14, duration: 32 },
      { text: SCHOOL_NAME, top: '42%', left: '12%', size: 'clamp(1.3rem, 2.6vw, 2.4rem)', rot: -8, duration: 30 },
      { text: SCHOOL_NAME, top: '58%', left: '60%', size: 'clamp(1.5rem, 3.1vw, 2.9rem)', rot: 22, duration: 34 },
      { text: SCHOOL_NAME, top: '74%', left: '8%', size: 'clamp(1.4rem, 2.9vw, 2.6rem)', rot: -24, duration: 28 },
      { text: SCHOOL_NAME, top: '86%', left: '46%', size: 'clamp(1.2rem, 2.4vw, 2.2rem)', rot: 10, duration: 36 },
      { text: SCHOOL_NAME, top: '12%', left: '72%', size: 'clamp(1.1rem, 2.2vw, 2rem)', rot: -30, duration: 38 },
      { text: SCHOOL_NAME, top: '48%', left: '34%', size: 'clamp(1.3rem, 2.7vw, 2.5rem)', rot: 6, duration: 29 },
    ];
    return base.map((b, i) => ({ ...b, delay: -(i * 3.7) }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none print:hidden"
    >
      {items.map((it, idx) => (
        <span
          key={idx}
          className="wm-text"
          style={
            {
              top: it.top,
              left: it.left,
              fontSize: it.size,
              '--wm-rot': `${it.rot}deg`,
              animationDuration: `${it.duration}s`,
              animationDelay: `${it.delay}s`,
            } as React.CSSProperties
          }
        >
          {it.text}
        </span>
      ))}
    </div>
  );
};
