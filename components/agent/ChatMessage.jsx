import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

export default function ChatMessage({ msg }) {
  if (!msg) return null;

  if (msg.role === "system") {
    return (
      <div className="flex justify-center py-6 animate-in fade-in-0 duration-500">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-100/70 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm text-slate-700 font-medium text-sm">
          <Bot className="w-4 h-4 text-indigo-500" />
          <span>{msg.content}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex gap-3 items-start animate-in fade-in-0 duration-500 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
      <Avatar className="w-8 h-8 shrink-0">
        <AvatarFallback
          className={`text-white text-sm font-semibold shadow-md ${
            msg.role === "user"
              ? "bg-gradient-to-tr from-cyan-500 to-blue-600"
              : "bg-gradient-to-tr from-indigo-500 to-purple-600"
          }`}
        >
          {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </AvatarFallback>
      </Avatar>

      <div className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
        <span className="text-xs font-semibold text-muted-foreground px-2">
          {msg.role === "user" ? "You" : "AI Assistant"}
        </span>
        <div
          className={`prose prose-sm max-w-none p-3 shadow-md transition-all duration-200 ease-in-out ${
            msg.role === "user"
              ? "bg-gradient-to-tr from-blue-600 to-purple-600 text-white rounded-2xl rounded-tr-md"
              : "bg-slate-100 text-slate-800 rounded-2xl rounded-tl-md"
          }`}
        >
          <p className="m-0 whitespace-pre-wrap leading-relaxed">{msg.content}</p>
        </div>
      </div>
    </div>
  );
}