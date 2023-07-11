import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {
const {counter, increment, decrement, reset} = useCounter(0);

    return (
        <>
            <div>Counter With CustomHook: {counter}</div>
            <hr />

            <button onClick={() => decrement(2)} className="btn-primary">-1</button>
            <button onClick={reset} className="btn-danger">Reset</button>
            <button onClick={() => increment(2)} className="btn-primary">+1</button>
            
        </>

    )
}
