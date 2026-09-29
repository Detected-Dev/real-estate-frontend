import { useState, useRef, useEffect } from "react";
import api from "../../api/axios";
import "./ChatBoot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi! How can I help you find a property today?",
    },
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        text: input,
      },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // give me everything Start from the index 1 
      const history = updatedMessages.slice(1);

      const { data } = await api.post("/api/chat", {
        messages: history,
      });

      setMessages([
        ...updatedMessages,
        {
          role: "model",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error(
        "Chat error:",
        error.response?.status,
        error.response?.data || error.message
      );

      setMessages([
        ...updatedMessages,
        {
          role: "model",
          text: "Connection error. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chatbot">

      {open && (
        <div className="chatbot-window">

          <div className="chatbot-messages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "message user-message"
                    : "message bot-message"
                }
              >
                <span>{message.text}</span>
              </div>
            ))}

            {loading && (
              <div className="typing">
                Typing...
              </div>
            )}

            <div ref={endRef} />

          </div>

          <div className="chatbot-input">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  send();
                }
              }}
              placeholder="Type your message..."
            />

            <button onClick={send} disabled={loading}>
              Send
            </button>

          </div>

        </div>
      )}

      <button
        className="chatbot-button"
        onClick={() => setOpen(!open)}
      >
        
      </button>

    </div>
  );
}