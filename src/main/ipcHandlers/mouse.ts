import { mouse, straightTo } from "@nut-tree-fork/nut-js"
import type { Point } from "@nut-tree-fork/nut-js"
import { ipcMain } from "electron"


const registerDesktopMouseEvent = () => {
    ipcMain.on("mouse::test-move", async () => {
        await mouse.move(straightTo({x: 100, y: 100}));
        await mouse.leftClick();
    })
}

export const registerMouseEvents = () => {
    registerDesktopMouseEvent();
}
