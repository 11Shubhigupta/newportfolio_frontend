import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 bg-blue-600 p-4 rounded-full cursor-pointer shadow-xl"
      >
        💬
      </div>

      {open && <ChatWindow />}
    </>
  );
}

function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Shubhi's AI assistant. Ask me anything about her skills, projects, achievements, or journey!",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMsg = { role: "user", content: input };
    const updated = [...messages, newMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
     const res = await fetch("https://newportfolio-backend.vercel.app/chat", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: `
You are Shubhi's personal AI portfolio assistant.

STRICT RULES:
1. Do NOT invent skills, projects, technologies, or achievements.
2. Only use the skills and projects listed below.
3. If the user asks for something not listed, reply:
   "Shubhi has not added that skill/project to her portfolio yet."

Shubhi's Genuine Skills:
- Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- UI/UX: Figma, responsive design
- Tools: Git, GitHub, REST APIs


Shubhi's Real Projects:
- 3D Solar System Simulation (Three.js)
- Happy Pulse Hospital App (MERN)
- MERN Intern Dashboard
- Blog Editor Web App (MERN)
- Vidyadaan Messiah App (AI + PDF Ragging + Chatbot)

Behavior:
- Confident, friendly, smart tone.
- Keep replies accurate only to this list.
- Maintain chat history.
              `,
            },
            ...updated,
          ],
        }),
      });

      const data = await res.json();

      setMessages([
        ...updated,
        { role: "assistant", content: data.choices[0].message.content },
      ]);
    } catch (err) {
      setMessages([
        ...updated,
        { role: "assistant", content: "Network error. Try again." },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="fixed bottom-20 left-6 w-80 bg-white text-black rounded-xl shadow-xl p-4">
      <div className="h-64 overflow-y-auto bg-gray-100 p-2 rounded">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`my-1 ${m.role === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`px-3 py-2 inline-block rounded-lg ${
                m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
            >
              {m.content}
            </span>
          </div>
        ))}

        {loading && <div className="italic text-gray-600 px-2">Typing...</div>}
      </div>

      <div className="mt-2 flex gap-2">
        <input
          className="border p-2 rounded flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 px-4 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
