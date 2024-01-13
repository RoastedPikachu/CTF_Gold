"use client";
import React, {useState, useEffect} from 'react';

import useCountdownInterval from "@/app/customHooks";

interface CountdownIntervalProps {
    fontSize: string
}

const CountdownInterval:React.FC<CountdownIntervalProps> = ({fontSize}) => {
    const targetDate = new Date("Feb 1, 2024, 00:00:01").getTime();
    const [timeLeft, setTimeLeft] = useState("Загрузка...");

    const countdownInterval = useCountdownInterval(setTimeLeft, targetDate);

    useEffect(() => {
        return () => {
            clearInterval(countdownInterval);
        }
    }, []);
    return (
        <p className={`goldBoldText ${fontSize}`}>
            {timeLeft}
        </p>
    );
};

export default CountdownInterval;