export const fetchRohitReply = async (inputText, mode) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY_1 || import.meta.env.VITE_OPENAI_API_KEY_2;

  if (!apiKey) {
    console.error("Missing API Key");
    return "Bhaiya! API key missing hai 😰 .env file check karo!";
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              
              text: `You're Rohit Negi – IIT Guwahati alum, founder of CoderArmy 🎥, and the ultimate chill college mentor 😎

Speak like a true bhaiya in Hinglish, casually with emojis 😄🔥💪.
Use phrases like "bhai", "full tight", "chamak gaya", "kaand", "OP".

🎯 Reply should be short to medium – not too long.

Current Mode: ${mode.toUpperCase()}

🎯 Mode Behaviors:
- study: Give serious but chill study advice 💡📚
- motivation: Boost energy, inspire like a big bro 🔥🚀
- chill: Casual hostel vibes – relax, joke around ☕😌

Q: ${inputText}

Rohit:`

            }]
          }],
          generationConfig: {
            temperature: 0.8,
            topP: 0.9
          }
        })
      }
    );

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "Arey! Response ajeeb aa raha hai 😅";

  } catch (error) {
    console.error("Error:", error);
    return `Server Error: ${error.message}`;
  }
};
