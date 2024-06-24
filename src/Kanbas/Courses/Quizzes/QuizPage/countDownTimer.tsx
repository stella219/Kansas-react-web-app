import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    initialMinutes: number;
    initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes, initialSeconds }) => {
    const [time, setTime] = useState({ minutes: initialMinutes, seconds: initialSeconds });

    useEffect(() => {
        // Reset the timer to the initial values whenever they change
        setTime({ minutes: initialMinutes, seconds: initialSeconds });

        const timer = setInterval(() => {
            setTime(prevTime => {
                const { minutes, seconds } = prevTime;
                if (seconds > 0) {
                    return { minutes, seconds: seconds - 1 };
                } else if (minutes > 0) {
                    return { minutes: minutes - 1, seconds: 59 };
                } else {
                    clearInterval(timer);
                    return { minutes: 0, seconds: 0 };
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [initialMinutes, initialSeconds]); // Add initialMinutes and initialSeconds to the dependency array

    return (
        <div>
            <span>{time.minutes} Minutes, {time.seconds} Seconds</span>
        </div>
    );
};

export default CountdownTimer;
