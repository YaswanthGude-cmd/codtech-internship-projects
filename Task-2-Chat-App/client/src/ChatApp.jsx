import { useEffect, useState ,useRef } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:3001");

function ChatApp() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("message_history", (data) => {
      setChat(data);
    });

    socket.on("receive_message", (data) => {
      setChat((prev) => {
        const updated = [...prev, data];
        localStorage.setItem("chatHistory", JSON.stringify(updated));
        return updated;
      });
    });

    return () => {
      socket.off("message_history");
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (!username.trim() || !message.trim()) return;

    const messageData = {
      username,
      message,
      time: new Date().toLocaleTimeString()
    };

    socket.emit("send_message", messageData);
    setMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="chat-container">
      <div className="chat-box">
        <h2>Real-Time Chat</h2>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="form-control mb-2"
        />

        <div className="messages">
          {chat.map((msg, i) => (
            <div key={i} className={`message-card ${msg.username === username ? "me" : "other"}`}>
              <div className="message-header">
                <strong>{msg.username}</strong>
                <small>{msg.time}</small>
              </div>
              <div>{msg.message}</div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        <div className="d-flex gap-2 mt-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            placeholder="Type message"
          />

          <button onClick={sendMessage} className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;