import React, { useEffect, useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Contador: ${count}`;
    });

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter