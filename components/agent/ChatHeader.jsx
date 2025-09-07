"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles, MessageCircle } from "lucide-react";

export default function ChatHeader({ messageCount }) {
  return (
    <div className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Assistant
              </h1>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="hidden sm:flex items-center gap-1">
              <MessageCircle className="w-3 h-3" />
              {messageCount} messages
            </Badge>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
