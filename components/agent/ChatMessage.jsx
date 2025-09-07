import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

export default function ChatMessage({ msg }) {
  if (!msg) return null;

  if (msg.role === "system") {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
          <Bot className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-slate-700">{msg.content}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
      <Avatar className="w-8 h-8 shrink-0">
        <AvatarFallback
          className={`text-white text-sm font-semibold ${
            msg.role === "user"
              ? "bg-gradient-to-r from-green-500 to-emerald-600"
              : "bg-gradient-to-r from-blue-500 to-purple-600"
          }`}
        >
          {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </AvatarFallback>
      </Avatar>

      <div className={`max-w-[85%] sm:max-w-[75%] ${msg.role === "user" ? "text-right" : ""}`}>
        <div className="mb-1">
          <span className="text-xs font-medium text-muted-foreground">
            {msg.role === "user" ? "You" : "AI Assistant"}
          </span>
        </div>
        <div
          className={`prose prose-sm max-w-none p-4 rounded-2xl shadow-sm transition-all hover:shadow-md ${
            msg.role === "user"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md"
              : "bg-white border border-slate-200 text-slate-800 rounded-bl-md"
          }`}
        >
          <p className="m-0 whitespace-pre-wrap leading-relaxed">{msg.content}</p>
        </div>
      </div>
    </div>
  );
}
