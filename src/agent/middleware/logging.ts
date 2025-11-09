import { createMiddleware } from "langchain";

export const loggingToolCall = createMiddleware({
    name: "loggingMiddleware",
    afterModel: (state) => {
        const lastMessage = state.messages[state.messages.length - 1];
        console.log("model executed: ");
        // log all tool calls
        const toolCalls = lastMessage["tool_calls"] || [];
        for (const toolCall of toolCalls) {
            console.log(`工具名称：${toolCall["name"]}`);
            console.log(`工具参数：${JSON.stringify(toolCall["args"], null, 2)}`);
        }
        return;
    },
})
