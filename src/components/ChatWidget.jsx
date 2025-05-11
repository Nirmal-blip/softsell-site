import React, { useState } from "react";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.message || `Error: ${data.error}`);
    } catch (error) {
      setResponse("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-110 transition"
      >
        {open ? "Close Chat" : "Chat with Ai"}
      </button>

      {/* Chat Widget Box */}
      {open && (
        <div className="mt-4 bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6 w-80 shadow-xl text-white">
          <h3 className="text-lg font-semibold mb-4">Chat with Support</h3>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-black/30 border border-white/30 p-3 rounded-lg mb-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Ask your question..."
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:brightness-110 transition mb-3"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {response && (
            <div className="bg-white/10 p-3 rounded-lg text-sm text-gray-200 max-h-32 overflow-y-auto">
              <strong>Response:</strong>
              <p>{response}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
