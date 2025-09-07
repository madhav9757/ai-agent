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
        <div className="flex gap-4">
          <Avatar className="w-8 h-8 shrink-0">
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <Bot className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex items-center gap-2 text-muted-foreground">
            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
            <span className="text-sm">Thinking...</span>
          </div>
        </div>
      )}
    </>
  );
}
