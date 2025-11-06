import { createAgent } from "langchain";
import { ChatOpenAI } from "@langchain/openai";
import {
    setMousePosition,
    getMousePosition,
    leftClick,
} from "./tools/mouse";
import { MemorySaver } from "@langchain/langgraph"
import dotenv from 'dotenv';

// load env variables
dotenv.config();

// const QWEN_API_KEY = process.env.QWEN_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log(OPENAI_API_KEY);

const model = new ChatOpenAI({
    model: "gpt-5-mini",
    apiKey: OPENAI_API_KEY,
});

const SYSTEM_PROMPT = "You are a desktop agent. you need to use tools to finish user's tasks."
const checkpointer = new MemorySaver();

const agent = createAgent({
    model: model,
    systemPrompt: SYSTEM_PROMPT,
    checkpointer,
    tools: [
        setMousePosition,
        getMousePosition,
        leftClick,
    ]
})

export const runAgent = async () => {
    const config = {
        configurable: { thread_id: "1" },
        context: { user_id: "1" },
    };
    const response = await agent.invoke(
        {
            messages: [
                {
                    role: "user",
                    content: "move the mouse to (100, 100) and then (300, 300). at the end, do a left click"
                },
            ]
        },
        config
    );
    console.log(response.messages);
}
