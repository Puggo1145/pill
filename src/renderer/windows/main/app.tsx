import { ThemeProvider } from "@/components/shared/theme-provider";
import { MainBar } from "@/windows/main/components/main-bar";
import { AudioPicker } from "./components/audio-picker";

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark">
            <div className="relative flex flex-col items-end gap-3">
                <MainBar />
                <AudioPicker />
            </div>
        </ThemeProvider>
    )
}

export default App;
