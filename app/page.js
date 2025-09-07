"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Send, Sparkles, MessageCircle } from "lucide-react";

import ChatMessages from "@/components/agent/ChatMessages";
import ChatInput from "@/components/agent/ChatInput";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "👋 Welcome! I'm your AI assistant powered by advanced language models. Ask me anything!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setMessageCount((prev) => prev + 1);

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const agentMessage = { role: "agent", content: data.reply };
      setMessages((prev) => [...prev, agentMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content:
            "⚠️ I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Assistant
              </h1>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:flex items-center gap-1 text-sm text-slate-600">
              <MessageCircle className="w-3 h-3" /> {messageCount} messages
            </span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="shadow-2xl border-0 bg-white/70 backdrop-blur-sm">
          <CardContent className="p-0">
            <ScrollArea ref={scrollRef} className="h-[calc(100vh-280px)] min-h-[400px]">
              <div className="p-6 space-y-6">
                <ChatMessages messages={messages} loading={loading} />
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Input */}
        <div className="mt-6">
          <ChatInput
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            loading={loading}
            messages={messages}
          />
        </div>
      </div>
    </div>
  );
}
