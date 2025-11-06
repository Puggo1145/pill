export {}

declare global {
    interface Window {
        api: {
            mouse: {
                runAgent: () => void;
                testMove: () => void;
            }
        }
    }
}
