import {
    keyboard,
    type Key,
} from "@nut-tree-fork/nut-js";
import { tool } from "langchain";
import { keyEnumDescription } from "../../constant/keys";
import { z } from "zod";

export const typeText = tool(
    async (text: string) => {
        try {
            await keyboard.type(text);
            return "success"
        } catch (err) {
            return "failed"
        }
    },
    {
        name: "type_text",
        description: "type a given text",
        schema: z.object({
            text: z.string().describe("type texts"),
        }),
    }
)

export const getKeyboard = tool(
    () => keyEnumDescription,
    {
        name: "get_keyboard",
        description: "get all the keys you can use on the keyboard. call this tool when you need to use keyboard tools",
    }
)

export const typeKey = tool(
    async (key: Key[]) => {
        try {
            await keyboard.type(...key);
            return "success"
        } catch (err) {
            return "failed"
        }
    },
    {
        name: "type_key",
        description: "type a given key",
        schema: z.object({
            key: z.array(z.string()).describe(`type a given series of keys`)
        }),
    }
)

export const pressKey = tool(
    async (key: Key[]) => {
        try {
            await keyboard.pressKey(...key);
            return "success"
        } catch (err) {
            return "failed"
        }
    },
    {
        name: "press_key",
        description: "press a given key",
        schema: z.object({
            key: z.array(z.string()).describe(`press and hold a given series of keys`)
        }),
    }
)

export const releaseKey = tool(
    async (key: Key[]) => {
        try {
            await keyboard.releaseKey(...key);
            return "success"
        } catch (err) {
            return "failed"
        }
    },
    {
        name: "release_key",
        description: "release a given key",
        schema: z.object({
            key: z.array(z.string())
                .describe(`release a given series of keys`)
        }),
    }
)
