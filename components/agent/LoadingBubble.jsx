"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, Loader2 } from "lucide-react";

export default function LoadingBubble() {
  return (
    <div className="flex gap-4 animate-in slide-in-from-bottom-4 duration-300">
      <Avatar className="w-8 h-8 shrink-0">
        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <Bot className="w-4 h-4" />
        </AvatarFallback>
      </Avatar>
      <div className="max-w-[85%] sm:max-w-[75%]">
        <div className="mb-1">
          <span className="text-xs font-medium text-muted-foreground">AI Assistant</span>
        </div>
        <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-md shadow-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
            <span className="text-sm">Thinking...</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
              <div
                className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
