import { MainBar } from "@/windows/main-bar/main-bar";
import { ThemeProvider } from "./components/shared/theme-provider";

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark">
            <MainBar />
        </ThemeProvider>
    )
}

export default App;
