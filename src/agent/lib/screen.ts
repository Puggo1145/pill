import { promises } from "node:fs";
import { exec } from "node:child_process";
import { MAC_OS_SCREENSHOT_PATH } from "@agent/constants/temp-paths";

export const getScreen = async (): Promise<string> => {
    await new Promise<void>((resolve, reject) => {
        exec(`screencapture ${MAC_OS_SCREENSHOT_PATH}`, (error) => {
            if (error) reject(error);
            else resolve();
        });
    });
    const buffer = await promises.readFile(MAC_OS_SCREENSHOT_PATH);
    const base64 = buffer.toString("base64");
    return `data:image/jpeg;base64,${base64}`;
}


import { screen, type Point } from "@nut-tree-fork/nut-js"

/**
 * Scale back model relative Point values to original screenshot scale.
 * @param point The Point object with x and y coordinates. If modelNormalizedScale is 0, return the original point.
 * @param originalResolution The original resolution of the screenshot.
 * @returns The scaled Point object.
 */
export async function scaleToScreenPoint(point: Point, modelNormalizedScale: number): Promise<Point> {
    if (modelNormalizedScale === 0) {
        return point;
    }
    
    const ScreenshotWidth = await screen.width();
    const ScreenshotHeight = await screen.height();

    const scaledX = (point.x / modelNormalizedScale) * ScreenshotWidth;
    const scaledY = (point.y / modelNormalizedScale) * ScreenshotHeight;
    
    console.log(`Scaled Point to x: ${scaledX}, y: ${scaledY}`);
    
    return {
        x: scaledX,
        y: scaledY
    };
}
