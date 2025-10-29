import { Button } from "./components/ui/button";

const App: React.FC = () => {
    const onClick = async () => {
        const msg = await window.api.ping();
        console.log(msg);
    }

    return (
        <div>
            <h1 className="font-black">Hello From Pill</h1>
            <Button onClick={onClick}>click me</Button>
        </div>
    )
}

export default App;
