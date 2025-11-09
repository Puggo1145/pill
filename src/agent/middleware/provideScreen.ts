import { createMiddleware, ToolMessage } from "langchain";
import { getScreen } from "@agent/lib/screen";

export const provideScreen = createMiddleware({
    name: "provideScreenMiddleware",
    beforeModel: async (state) => {
        const lastMessage = state.messages[state.messages.length - 1];
        // provide a screenshot after each tool call
        if (lastMessage instanceof ToolMessage) {
            // wait for 200 milliseconds to ensure the screen is updated
            await new Promise((resolve) => setTimeout(resolve, 200));

            const toolMessage = lastMessage as ToolMessage;
            const screenShotBase64 = await getScreen();
            const screenShotContent = {
                type: "image_url",
                image_url: {
                    url: screenShotBase64
                }
            }
            // push screenshot to content
            // 1. check if the content is an array
            if (Array.isArray(toolMessage.content)) {
                toolMessage.content.push(screenShotContent);
            } else {
                toolMessage.content = [
                    { type: "text", text: toolMessage.content },
                    screenShotContent
                ]
            }
        }
    },
})
