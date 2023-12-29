import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../styles/Chat.css";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      // setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <>
      <div className="beautify-heading">
        <h1>Room no {room}</h1>
        <p>Ask your friends to join with the same room number..</p>
      </div>
      <div class="container-chat">
        <div class="messages">
          {/* <div class="received">Hey</div>
          <div class="sent">Hey , I'm fine</div>
          <div class="received">Hey how are you?</div>
          <div class="received">Hey how are you?</div>
          <div class="sent">Hey , I'm fine</div>
          <div class="sent">Hey , I'm fine</div>
          <div class="sent">Hey , I'm fine</div>
          <div class="received">Hey how are you?</div>
          <div class="sent">Hey , I'm fine</div>
          <div class="sent">Hey , I'm fine</div>
          <div class="received">Hey how are you?</div> */}
          {messageList.map((messageContent) => {
            return (
              <div
                className={
                  username === messageContent.author ? "sent" : "received"
                }
              >
                <div className="message-meta">
                  <p id="time">Sent at : {messageContent.time}</p>
                  <p id="author">Sent by : {messageContent.author}</p>
                </div>
                <div className="message-content">
                  <p>Message : {messageContent.message}</p>
                </div>
              </div>
            );
          })}
        </div>
        <form id="send-message">
          <input
            type="text"
            id="message"
            placeholder="Enter your message..."
            autocomplete="off"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          />
          <button type="submit" onClick={(e) => sendMessage(e)}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
