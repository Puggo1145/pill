import { z } from "zod";
import { tool } from 'langchain';
import {
    mouse,
    Point,
    Button,
} from '@nut-tree-fork/nut-js';

export const setMousePosition = tool(
    async (position: Point) => {
        try {
            await mouse.setPosition(position);
            return "success"
        } catch (err) {
            return "set mouse position failed"
        }
    },
    {
        name: "set_mouse_position",
        description: "directly move mouse to a given position",
        schema: z.object({
            x: z.number().describe("the x position of the mouse destination"),
            y: z.number().describe("the y position of the mouse destination"),
        }),
    }
)

export const getMousePosition = tool(
    async () => {
        try {
            const position = await mouse.getPosition();
            return `x: ${position.x}, y: ${position.y}`
        } catch (err) {
            return "cannot get mouse position";
        }
    },
    {
        name: "get_mouse_position",
        description: "get the current mouse position",
    }
)

export const leftClick = tool(
    async () => {
        try {
            await mouse.leftClick();
            return "success"
        } catch (err) {
            return `failed`
        }
    },
    {
        name: "left_click",
        description: "click the left mouse button",
    }
)

export const rightClick = tool(
    async () => {
        try {
            await mouse.rightClick();
            return "success"
        } catch (err) {
            return `failed`
        }
    },
    {
        name: "right_click",
        description: "click the right mouse button",
    }
)

export const scrollUp = tool(
    async (amount: number) => {
        try {
            await mouse.scrollUp(amount);
            return "success"
        } catch (err) {
            return `failed`
        }
    },
    {
        name: "scroll_up",
        description: "scroll up the mouse wheel by a given amount",
        schema: z.number().describe("the amount to scroll up"),
    }
)

export const scrollDown = tool(
    async (amount: number) => {
        try {
            await mouse.scrollDown(amount);
            return "success"
        } catch (err) {
            return `failed`
        }
    },
    {
        name: "scroll_down",
        description: "scroll down the mouse wheel by a given amount",
        schema: z.number().describe("the amount to scroll down"),
    }
)

export const scrollLeft = tool(
    async (amount: number) => {
        try {
            await mouse.scrollLeft(amount);
            return "success"
        } catch (err) {
            return `failed`
        }
    },
    {
        name: "scroll_left",
        description: "scroll left the mouse wheel by a given amount",
        schema: z.number().describe("the amount to scroll left"),
    }
)

export const scrollRight = tool(
    async (amount: number) => {
        try {
            await mouse.scrollRight(amount);
            return "success"
        } catch (err) {
            return `failed`
        }
    },
    {
        name: "scroll_right",
        description: "scroll right the mouse wheel by a given amount",
        schema: z.number().describe("the amount to scroll right"),
    }
)

export const dragTo = tool(
    async (positions: Point[]) => {
        try {
            await mouse.drag(positions);
            return "success"
        } catch (err) {
            return `failed`
        }
    },
    {
        name: "drag_to",
        description: "drag the mouse to a given position",
        schema: z.object({
            x: z.number().describe("the x position of the mouse destination"),
            y: z.number().describe("the y position of the mouse destination"),
        }),
    }
)

export const pressButton = tool(
    async (button: Button) => {
        try {
            await mouse.pressButton(button);
            return "success"
        } catch (err) {
            return `failed`
        }
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
        try {
            await mouse.releaseButton(button);
            return "success"
        } catch (err) {
            return `failed`
        }
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
        try {
            await mouse.click(button);
            return "success"
        } catch (err) {
            return `failed`
        }
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
        try {
            await mouse.doubleClick(button);
            return "success"
        } catch (err) {
            return `failed`
        }
    },
    {
        name: "double_click_button",
        description: "double click a mouse button",
        schema: z.nativeEnum(Button)
            .describe("the button to double click. 0: left, 1: middle, 2: right"),
    }
)
