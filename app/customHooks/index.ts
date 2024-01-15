import {useEffect, useState} from "react";

export function useCountdownInterval(setValueFunction: (value: string) => void, targetDate: number) {
    return setInterval(() => {
        const currentDate = new Date().getTime();

        const dateDistance = targetDate - currentDate;

        const daysLeft = Math.floor(dateDistance / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((dateDistance % (1000 * 60 * 60)) / (1000 * 60));

        setValueFunction(`${daysLeft < 10 ? `0${daysLeft}` : daysLeft}:${hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft}:${minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}`);
    }, 500);
}

export function useIsMobileDevice() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        console.log('Render');
        setIsMobile(window.matchMedia("(max-width: 480px)").matches);
    }, []);

    return isMobile;
}

