import { ipcMain } from "electron";

export const registerIpcHandlers = () => {
    ipcMain.handle('ping', async () => 'pong');
}
