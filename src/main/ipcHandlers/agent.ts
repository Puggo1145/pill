import { runAgent } from "../../agent/index";
import { ipcMain } from "electron";

export const registerAgent = () => {
    ipcMain.on("run-agent", runAgent)
}
