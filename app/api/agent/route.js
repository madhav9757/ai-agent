import OpenAI from "openai";

const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req) {
    try {
        const { message } = await req.json();

        if (!process.env.OPENROUTER_API_KEY) {
            throw new Error("Missing OpenRouter API key.");
        }
        if (!message) {
            throw new Error("Message is required.");
        }

        const response = await client.chat.completions.create({
            model: "meta-llama/llama-3.1-405b-instruct:free", // you can try "gpt-4o-mini" if available
            messages: [
                { role: "system", content: "You are a helpful AI agent." },
                { role: "user", content: message },
            ],
        });

        const reply = response.choices?.[0]?.message?.content || "⚠️ No response from model.";
        return Response.json({ reply });
        
    } catch (err) {
        console.error("API route error:", err.message);
        return Response.json(
            { reply: `⚠️ Server error: ${err.message}` },
            { status: 500 }
        );
    }
}

// Optional: GET handler for quick testing in browser
export async function GET() {
    return Response.json({ status: "✅ API route working" });
}
