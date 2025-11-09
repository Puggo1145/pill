import { z } from "zod";
import { tool } from 'langchain';
import {
    mouse,
    Point,
    Button,
} from '@nut-tree-fork/nut-js';
import { scaleToScreenPoint } from "@agent/lib/screen";

export const setMousePosition = tool(
    async (point: Point, config: Record<string, any>) => {
        const modelNormalizedScale = config.context.modelNormalizedScale as number;
        const scaledPoint = await scaleToScreenPoint(point, modelNormalizedScale);
        return await mouse.setPosition(scaledPoint);
    },
    {
        name: "set_mouse_position",
        description: "move mouse to a given Point",
        schema: z.object({
            x: z.number().describe("the x position of the mouse destination"),
            y: z.number().describe("the y position of the mouse destination"),
        }),
    }
)

export const getMousePosition = tool(
    async () => {
        const position = await mouse.getPosition();
        return `x: ${position.x}, y: ${position.y}`
    },
    {
        name: "get_mouse_position",
        description: "get the current mouse Point",
        schema: z.object({}),
    }
)

export const leftClick = tool(
    async () => {
        await mouse.leftClick();
        return "success"
    },
    {
        name: "left_click",
        description: "click the left mouse button",
        schema: z.object({}),
    }
)

export const rightClick = tool(
    async () => {
        await mouse.rightClick();
        return "success"
    },
    {
        name: "right_click",
        description: "click the right mouse button",
        schema: z.object({}),
    }
)

export const scrollUp = tool(
    async (param: { amount: number }) => {
        await mouse.scrollUp(param.amount);
        return "success"
    },
    {
        name: "scroll_up",
        description: "scroll up the mouse wheel by a given amount",
        schema: z.object({
            amount: z.number().describe("the amount to scroll up"),
        }),
    }
)

export const scrollDown = tool(
    async (param: { amount: number }) => {
        await mouse.scrollDown(param.amount);
        return "success"
    },
    {
        name: "scroll_down",
        description: "scroll down the mouse wheel by a given amount",
        schema: z.object({
            amount: z.number().describe("the amount to scroll down"),
        }),
    }
)

export const scrollLeft = tool(
    async (param: { amount: number }) => {
        await mouse.scrollLeft(param.amount);
        return "success"
    },
    {
        name: "scroll_left",
        description: "scroll left the mouse wheel by a given amount",
        schema: z.object({
            amount: z.number().describe("the amount to scroll left"),
        }),
    }
)

export const scrollRight = tool(
    async (param: { amount: number }) => {
        await mouse.scrollRight(param.amount);
        return "success"
    },
    {
        name: "scroll_right",
        description: "scroll right the mouse wheel by a given amount",
        schema: z.object({
            amount: z.number().describe("the amount to scroll right"),
        }),
    }
)

export const dragTo = tool(
    async (param: { points: Point[] }, config: Record<string, any>) => {
        const modelNormalizedScale = config.context.modelNormalizedScale as number;
        const scaledPositions = await Promise.all(param.points.map(async (pos) => {
            return await scaleToScreenPoint(pos, modelNormalizedScale);
        }));
        await mouse.drag(scaledPositions);
        return "success"
    },
    {
        name: "drag_to",
        description: "drag the mouse to a given position",
        schema: z.object({
            points: z.array(z.object({
                x: z.number().describe("the x position of the mouse destination"),
                y: z.number().describe("the y position of the mouse destination"),
            })),
        }),
    }
)

export const pressButton = tool(
    async (button: Button) => {
        await mouse.pressButton(button);
        return "success"
    },
    {
        name: "press_button",
        description: "press a mouse button",
        schema: z.nativeEnum(Button)
            .describe("the button to press. 0: left, 1: middle, 2: right"),
    }
)

export const releaseButton = tool(
    async (button: Button) => {
        await mouse.releaseButton(button);
        return "success"
    },
    {
        name: "release_button",
        description: "release a mouse button",
        schema: z.nativeEnum(Button)
            .describe("the button to release. 0: left, 1: middle, 2: right"),
    }
)

export const clickButton = tool(
    async (button: Button) => {
        await mouse.click(button);
        return "success"
    },
    {
        name: "click_button",
        description: "click a mouse button",
        schema: z.nativeEnum(Button)
            .describe("the button to click. 0: left, 1: middle, 2: right"),
    }
)

export const doubleClickButton = tool(
    async (button: Button) => {
        await mouse.doubleClick(button);
        return "success"
    },
    {
        name: "double_click_button",
        description: "double click a mouse button",
        schema: z.nativeEnum(Button)
            .describe("the button to double click. 0: left, 1: middle, 2: right"),
    }
)
