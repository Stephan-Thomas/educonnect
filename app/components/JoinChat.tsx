import React, { useState } from "react";

const JoinChat = () => {
  const [username, setUserNAme] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
    }
  };

  return (
    <div>
      <h3>Join a chat</h3>
      <input
        type="text"
        placeholder="John"
        onChange={(event) => setUserNAme(event.target.value)}
      />

      <input
        type="text"
        placeholder="Room ID..."
        onChange={(event) => setRoom(event.target.value)}
      />
    </div>
  );
};

export default JoinChat;
