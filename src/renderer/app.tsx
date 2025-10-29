const App: React.FC = () => {
    const onClick = async () => {
        const msg = await window.api.ping();
        console.log(msg);
    }

    return (
        <div>
            <h1 className="font-black">Hello From Pill</h1>
            <button onClick={onClick}>click me</button>
        </div>
    )
}

export default App;
