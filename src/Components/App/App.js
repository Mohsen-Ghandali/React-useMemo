import Button from "../Button/Button.js";
import { useMemo, useState } from "react";
import "./App.css"
const App = () => {
    let [counterA, setCounterA] = useState(0);
    let [counterB, setCounterB] = useState(0);
    const clickHandlerA = () => {
        setCounterA(counterA + 1);
    };
    const clickHandlerB = () => {
        setCounterB(counterB + 1);
    };

    const isEven = useMemo(() => {
        let i = 0
        while (i < 800000000) {
            i++;
        }
        return counterA % 2 === 0;
    }, [counterA])

    return (

        <div className="cont">
            <Button handleClick={clickHandlerA}>increment:{counterA}</Button>
            <span>{isEven ? "Even" : "odd"}</span>
            <hr />
            <Button handleClick={clickHandlerB}>increment:{counterB}</Button>
        </div>

    )
}

export default App;