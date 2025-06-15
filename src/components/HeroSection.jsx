import React from 'react';
import { GiGraduateCap } from 'react-icons/gi';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center text-white mb-6"
    >
      <div className="flex justify-center items-center mb-3">
        <div className="bg-yellow-400 rounded-full p-3 shadow-md text-black text-3xl">
          <GiGraduateCap />
        </div>
      </div>
      <h1 className="text-3xl font-bold">
        Welcome to <span className="text-yellow-400">MentorVerse 💡</span>
      </h1>
      <p className="mt-2 text-white/80">
        Rohit Bhaiya – Your Study & Life Mentor 😎
      </p>
    </motion.div>
  );
};

export default HeroSection;