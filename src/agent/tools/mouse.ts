import { z } from "zod/v3";
import { tool } from 'langchain';
import {
    mouse,
    straightTo,
    type Point
} from '@nut-tree-fork/nut-js';

export const setMousePosition = tool(
    async (position: Point) => {
        try {
            await mouse.move(straightTo(position));
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
        schema: z.object({}),
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
        schema: z.object({}),
    }
)
