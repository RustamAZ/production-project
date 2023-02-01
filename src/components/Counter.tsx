import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button className={classes.btn} onClick={() => setCount(prev => prev + 1)}>increment</button>
            <span>{count}</span>
            <button className={classes.green} onClick={() => setCount(prev => prev - 1)}>decrement</button>
        </div>
    )
}