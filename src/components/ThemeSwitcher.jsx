import React from 'react';
import { Palette } from 'lucide-react';

export const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { id: 'default', name: 'Royal Navy', color: '#E8C37B', bg: '#060B18' },
    { id: 'emerald', name: 'Emerald Velvet', color: '#E5B869', bg: '#06110D' },
    { id: 'onyx', name: 'Midnight Onyx', color: '#D4AF37', bg: '#0D0D0D' },
  ];

  return (
    <div className="flex items-center gap-1.5 p-1 bg-black/60 backdrop-blur-md rounded-full border border-white/15">
      <div className="pl-2.5 text-gray-400 hidden sm:flex items-center gap-1 text-[11px] font-medium tracking-wider uppercase">
        <Palette className="w-3.5 h-3.5 text-[#E8C37B]" />
        <span>Theme:</span>
      </div>
      <div className="flex items-center gap-1">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => onThemeChange(t.id)}
            title={`Switch to ${t.name} Palette`}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
              currentTheme === t.id
                ? 'bg-white/20 text-white shadow-md border border-white/30'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full border border-white/30"
              style={{ backgroundColor: t.color }}
            />
            <span className="hidden sm:inline">{t.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
