import React, { useState } from "react";
import { useMode } from "../context/modeContext"; 
import RohitAvatar from "./RohitAvatar";
import { fetchRohitReply } from "../utils/gptUtils"; 

const ChatWindow = () => {
  const { mode } = useMode(); 
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    try {
      const reply = await fetchRohitReply(inputText, mode); 
      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Server Error: " + error.message, sender: "bot" },
      ]);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 max-w-2xl mx-auto shadow-lg mt-10">
      <div className="text-white text-xl font-semibold mb-4">
        🧠 MentorVerse | Chat with Rohit Bhaiya 💬
      </div>

      <div className="flex flex-col gap-2 max-h-96 overflow-y-auto mb-4 p-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-100 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message to Rohit Bhaiya..."
          className="flex-grow px-4 py-2 rounded-md bg-white text-black"
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 px-4 py-2 text-white rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
