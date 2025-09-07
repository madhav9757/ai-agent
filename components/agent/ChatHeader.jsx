"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles, MessageCircle } from "lucide-react";

export default function ChatHeader({ messageCount }) {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between">
          {/* Left side: logo + title */}
          <div className="flex items-center gap-2.5">
            <div className="relative group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 text-white drop-shadow-sm" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border border-white dark:border-slate-950 shadow-sm animate-pulse" />
            </div>
            <div className="flex flex-col -space-y-0.5">
              <h1 className="text-sm font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent tracking-tight">
                AI Assistant
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Online
              </p>
            </div>
          </div>

          {/* Right side: message count + status */}
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium bg-slate-50/80 dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-100/80 transition-colors duration-200"
            >
              <MessageCircle className="w-3 h-3 text-slate-600 dark:text-slate-300" />
              <span className="text-slate-700 dark:text-slate-200">{messageCount}</span>
            </Badge>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-sm" />
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden md:block">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}