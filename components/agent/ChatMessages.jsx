import ChatMessage from "./ChatMessage";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, Bot } from "lucide-react";

export default function ChatMessages({ messages, loading }) {
  return (
    <>
      {messages.map((msg, idx) => (
        <ChatMessage key={idx} msg={msg} />
      ))}

      {loading && (
        <div className="flex items-end gap-2 pr-10 animate-in fade-in-0 duration-500">
          <Avatar className="w-8 h-8 shrink-0">
            <AvatarFallback className="bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-lg">
              <Bot className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <div className="relative bg-white/10 text-slate-100 p-3 rounded-2xl rounded-bl-md shadow-md animate-glow">
            <Loader2 className="h-5 w-5 animate-spin text-indigo-400" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/50 to-purple-600/50 rounded-2xl rounded-bl-md opacity-0 animate-pulse-glow"></div>
          </div>
        </div>
      )}
    </>
  );
}