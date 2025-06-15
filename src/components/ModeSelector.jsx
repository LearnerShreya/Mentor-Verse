import React from 'react';

const modes = [
  { label: '📚 Study', value: 'study' },
  { label: '🔥 Motivation', value: 'motivation' },
  { label: '😌 Chill', value: 'chill' },
];

const ModeSelector = ({ mode, setMode }) => {
  return (
    <div className="flex justify-center gap-3 mb-4">
      {modes.map((m) => (
        <button
          key={m.value}
          onClick={() => setMode(m.value)}
          className={`px-4 py-2 rounded-full font-medium shadow-md transition-all duration-200
            ${mode === m.value ? 'bg-yellow-400 text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
};

export default ModeSelector;