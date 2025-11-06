import { registerAgent } from "./agent";
import { registerMouseEvents } from "./mouse";

export const registerHandlers = () => {
    registerAgent();
    registerMouseEvents();
}
