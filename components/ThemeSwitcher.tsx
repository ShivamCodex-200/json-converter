'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <div className="flex bg-neutral-200/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full p-1 transition-colors">
      <button
        onClick={() => setTheme('light')}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all cursor-pointer ${
          resolvedTheme === 'light' ? 'bg-white shadow-sm text-yellow-500 scale-110' : 'text-neutral-500 hover:text-neutral-700'
        }`}
        title="Light Mode"
      >
        ☀️
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all cursor-pointer ${
          resolvedTheme === 'dark' ? 'bg-neutral-800 shadow-sm text-blue-400 scale-110' : 'text-neutral-500 hover:text-neutral-400'
        }`}
        title="Dark Mode"
      >
        🌙
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all cursor-pointer ${
          theme === 'system' ? 'bg-neutral-300 dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-white scale-110' : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400'
        }`}
        title="System Preference"
      >
        💻
      </button>
    </div>
  );
}
