"use client";
import { useState, useEffect } from "react";
import { useSocket } from "@/app/hooks/useSocket";

type User = {
  id: number;
  name: string;
  initials: string;
};

const dummyUsers: User[] = [
  { id: 1, name: "John Doe", initials: "JD" },
  { id: 2, name: "Jane Smith", initials: "JS" },
  { id: 3, name: "Bob Marley", initials: "BM" },
];

export default function ChatPage() {
  const { messages: socketMessages, sendMessage } = useSocket();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<typeof socketMessages>([]);

  // Sync with socket messages
  useEffect(() => {
    setMessages(socketMessages);
  }, [socketMessages]);

  const handleSend = () => {
    if (!input.trim() || !selectedUser) return;

    sendMessage(input, "You");
    setMessages((prev) => [...prev, { sender: "You", message: input }]);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/3 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <ul className="space-y-2">
          {dummyUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => {
                setSelectedUser(user);
                setMessages([]); // Simulate loading new chat
              }}
              className={`cursor-pointer p-2 rounded-lg hover:bg-gray-100 ${
                selectedUser?.id === user.id ? "bg-gray-200" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                  {user.initials}
                </div>
                <span>{user.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Window */}
      <main className="flex-1 flex flex-col justify-between">
        <div className="p-4 border-b bg-white">
          <h2 className="text-xl font-semibold">
            {selectedUser ? selectedUser.name : "Select a chat"}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 max-w-sm rounded-lg text-white ${
                  msg.sender === "You" ? "bg-blue-600" : "bg-gray-400"
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))}
        </div>

        {selectedUser && (
          <div className="p-4 border-t bg-white flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border rounded-lg px-4 py-2"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 rounded-lg"
            >
              Send
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
