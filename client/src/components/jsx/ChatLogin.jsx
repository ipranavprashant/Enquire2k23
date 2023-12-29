import "../styles/ChatLogin.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat.jsx";

const socket = io.connect("https://enquire-chat-room-backend.onrender.com");
// const socket = io.connect("http://localhost:5001");

function ChatLogin() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>
      <div className="modern-container-chat-login">
        {!showChat ? (
          <>
            <div className="beautify-heading">
              <h1>Enquire Rooms</h1>
            </div>
            <div className="modern-join-chat-container">
              <h3>Join a Chat Room</h3>
              <input
                type="text"
                placeholder="Your Name"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Room ID"
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
              <button className="modern-join-button" onClick={joinRoom}>
                Join Room
              </button>
            </div>
          </>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    </>
  );
}

export default ChatLogin;
