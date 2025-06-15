import React from 'react';
import HeroSection from './components/HeroSection';
import ChatWindow from './components/ChatWindow';
import ModeSelector from './components/ModeSelector';
import { useMode } from './context/modeContext';

const App = () => {
  const { mode, setMode } = useMode();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans">
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        
        {/* 🧠 Hero Section */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-md shadow-xl p-6 border border-white/10">
          <HeroSection />
        </div>

        {/* 🎛️ Mode Selector */}
        <div className="flex justify-center">
          <ModeSelector mode={mode} setMode={setMode} />
        </div>

        {/* 💬 Chat Window */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-md shadow-xl p-6 border border-white/10">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default App;
