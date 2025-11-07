import { createAgent } from "langchain";
import { ChatOpenAI } from "@langchain/openai";
import {
    setMousePosition,
    getMousePosition,
    leftClick,
} from "./tools/mouse/tools";
import { MemorySaver } from "@langchain/langgraph"
import { config } from 'dotenv';

// load env variables
config();

const QWEN_API_KEY = process.env.QWEN_API_KEY;
const model = new ChatOpenAI({
    model: "qwen3-max",
    configuration: {
        apiKey: QWEN_API_KEY,
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
});

const SYSTEM_PROMPT = "You are a desktop agent. You need to use tools to finish user's tasks."
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
                    content: "move the mouse to (100, 100) and then do a left click"
                },
            ]
        },
        config
    );
    console.log(response.messages[response.messages.length - 1].content);
}
