import { loggingToolCall } from "./logging";
import { provideScreen } from "./provideScreen";

export const middlewares = [
    loggingToolCall,
    provideScreen,
];

export {
    loggingToolCall,
    provideScreen,
}
