import {
    useQwen3VLFlash,
    useQwen3VLPlus,
    useQwen3OmniFlash,
} from "./models/qwen";
import { 
    useGPT5Mini,
    useGPT5Nano,
} from "./models/gpt";
import { createAgent } from "langchain";
import { mouseTools } from "./tools/mouse";
import { keyboardTools } from "./tools/keyboard";
import { MemorySaver } from "@langchain/langgraph"
import { loggingToolCall, provideScreen } from "./middleware";
import { getScreen } from "./lib/screen";

const model = useQwen3VLPlus();

const SYSTEM_PROMPT = `
你是一个桌面助手，可以通过工具与用户的电脑进行交互。你需要使用提供的工具来完成用户的请求。请根据用户的指示，选择合适的工具并执行相应的操作。
你的每一次操作的结果都会附带一个屏幕截图，帮助你了解当前的状态。
`;
const checkpointer = new MemorySaver();

const agent = createAgent({
    model,
    systemPrompt: SYSTEM_PROMPT,
    checkpointer,
    tools: [
        ...mouseTools,
        ...keyboardTools,
    ],
    middleware: [
        loggingToolCall,
        provideScreen,
    ],
})

export const runAgent = async () => {
    const config = {
        configurable: { thread_id: "1" },
        context: {
            user_id: "1",
            modelNormalizedScale: 999,
        },
        recursionLimit: 50,
    };
    const initialScreenShot = await getScreen();
    const response = await agent.invoke(
        {
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "image_url",
                            image_url: {
                                url: initialScreenShot,
                            },
                        },
                        {
                            type: "text",
                            text: "打开 Github 网站",
                        },
                    ],
                },
            ]
        },
        config
    );
    console.log(response.messages);
    console.log(`\nMODEL RESPONSE: ${response.messages[response.messages.length - 1].content}`);

}
runAgent();
