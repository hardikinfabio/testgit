import React from 'react';

const SectionLabel = ({ children, color }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-[2px]" style={{ backgroundColor: color }}></div>
    <span className="text-[11px] font-black tracking-[0.4em] uppercase" style={{ color: color }}>
      {children}
    </span>
  </div>
);

export default SectionLabel;
