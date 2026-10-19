import React from 'react';

const SCHOOL_NAME = 'TRƯỜNG THPT LÊ HỒNG PHONG';

export const Watermark: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none print:hidden flex items-center justify-center"
    >
      <span
        className="wm-text"
        style={
          {
            top: '50%',
            left: '50%',
            fontSize: 'clamp(2rem, 7vw, 6rem)',
            '--wm-rot': '-18deg',
            animationDuration: '24s',
            animationDelay: '0s',
          } as React.CSSProperties
        }
      >
        {SCHOOL_NAME}
      </span>
    </div>
  );
};
