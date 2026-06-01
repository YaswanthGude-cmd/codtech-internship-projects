const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Vite default
    methods: ["GET", "POST"]
  }
});

let messages = [];

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  // send history on join
  socket.emit("message_history", messages);
  // receive message
  socket.on("send_message", (data) => {
    messages.push(data);
    // broadcast to everyone
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Socket server running");
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
}); 