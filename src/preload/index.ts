// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    mouse: {
        runAgent: () => ipcRenderer.send("run-agent"),
        testMove: () => ipcRenderer.send('mouse::test-move'),
    },
});
