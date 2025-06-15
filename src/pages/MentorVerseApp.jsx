import React from 'react';
import ChatWindow from '../components/ChatWindow';

const MentorVerseApp = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-2">Welcome to MentorVerse 💡</h1>
      <p className="text-center text-gray-600 mb-6">Rohit Bhaiya – Your Study & Life Mentor 😎</p>
      <ChatWindow />
    </div>
  );
};

export default MentorVerseApp;