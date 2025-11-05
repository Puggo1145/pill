export {}

declare global {
    interface Window {
        api: {
            mouse: {
                testMove: () => void;
            }
        }
    }
}
