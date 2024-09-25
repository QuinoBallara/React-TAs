import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    });

    return (
        <div>
            <h1>Timer</h1>
            <p>{time} segundos</p>
        </div>
    );
}

export default Timer;