import { MainBar } from "@/windows/main/components/main-bar";
import { ThemeProvider } from "@/components/shared/theme-provider";

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark">
            <div className="flex flex-col items-end">
                <MainBar />
            </div>
        </ThemeProvider>
    )
}

export default App;
