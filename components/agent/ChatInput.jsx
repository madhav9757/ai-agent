import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export default function ChatInput({ input, setInput, sendMessage, loading, messages }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="shadow-xl border-0 bg-white/80 backdrop-blur-sm rounded-xl">
      <div className="p-4 flex gap-3">
        <div className="flex-1 relative">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything... (Press Enter to send)"
            disabled={loading}
            className="pr-4 py-3 text-base bg-white/70 border-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 rounded-xl"
            onKeyDown={handleKeyPress}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hidden sm:block">
            ⏎ Enter
          </div>
        </div>
        <Button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          size="lg"
          className="px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        </Button>
      </div>

      {/* Quick suggestions */}
      {messages.length === 1 && (
        <div className="p-4 flex flex-wrap gap-2">
          {["Help me write an email", "Explain quantum physics", "Debug my code", "Creative story ideas"].map(
            (suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                className="text-xs rounded-full border-slate-200 hover:bg-blue-50 hover:border-blue-300"
                onClick={() => setInput(suggestion)}
              >
                {suggestion}
              </Button>
            )
          )}
        </div>
      )}
    </div>
  );
}
