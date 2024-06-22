import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    initialMinutes: number;
    initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes, initialSeconds }) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);

    return (
        <div>
            <span>{minutes} Minutes, {seconds} Seconds</span>
        </div>
    );
};

export default CountdownTimer;
