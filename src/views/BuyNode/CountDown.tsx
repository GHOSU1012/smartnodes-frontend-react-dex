// import { setMinutes } from "date-fns/esm";
import React, { useState, useEffect } from "react";

const CountDown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const endDate = new Date("March 19, 2022 00:00:00");

    const getTwoDigitValue = (value) => {
        if (value < 10) {
            return `0${value}`;
        }
        return `${value}`;
    }


    useEffect(() => {
        const interval = setInterval(() => {
            calculateCountdown();
        }, 1000);

        return () => clearInterval(interval);
    });

    const calculateCountdown = () => {
        const startDate = new Date();
        setTimeRemaining(endDate.getTime() - startDate.getTime());

        if (timeRemaining > 0) {
            const tempStartDate = new Date(startDate);
            const tempEndDate = new Date(endDate);
            const startMillis = tempStartDate.getTime(); // Get timestamp of start date
            const endMillis = tempEndDate.getTime(); // Get timestamp of end date

            // Convert to seconds, 1 second = 1000 milli seconds
            const oldSec = startMillis / 1000;
            const currentSec = endMillis / 1000;

            // Get remaining seconds
            let seconds2 = currentSec - oldSec;

            let days2 = Math.floor(seconds2 / (24 * 60 * 60)); // 1 day is equal to 24 hours, each hour has 60 mins and 60 seconds
            seconds2 -= days2 * 24 * 60 * 60; // Get remaining seconds

            let hours2 = Math.floor(seconds2 / (60 * 60)); // 1 hour has 60 mins and 60 seconds
            seconds2 -= hours2 * 60 * 60; // Get remaining seconds

            let minutes2 = Math.floor(seconds2 / 60); // 1 minute is equal to 60 seconds
            seconds2 -= minutes2 * 60; // Get remaining seconds

            days2 = Math.abs(days2);
            hours2 = Math.abs(hours2);
            minutes2 = Math.abs(minutes2);
            seconds2 = Math.floor(seconds2);

            setDays(days2);
            setHours(hours2);
            setMinutes(minutes2);
            setSeconds(seconds2);
        }
    };

    // render() {
    const convertedDays = getTwoDigitValue(days);
    const convertedHours = getTwoDigitValue(hours);
    const convertedMins = getTwoDigitValue(minutes);
    const convertedSeconds = getTwoDigitValue(seconds);

    return (
        <div style={{ borderBottom: '1px solid', borderColor: '#7b7b7b' }}>
            {timeRemaining >= 0 ?
                <div className="counter d-flex justify-content-center align-items-center"
                    style={{ padding: '10px', gap: '10px' }}>
                    <div className="time d-flex flex-column align-items-center">
                        <div className="time-value" style={{ fontSize: '24px', color: 'white' }}>{convertedDays}</div>
                        <div className="time-label">Days</div>
                    </div>
                    <div style={{ fontSize: '20px' }}>:</div>
                    <div className="time d-flex flex-column align-items-center">
                        <div className="time-value" style={{ fontSize: '24px', color: 'white' }}>{convertedHours}</div>
                        <div className="time-label">Hours</div>
                    </div>
                    <div style={{ fontSize: '20px' }}>:</div>
                    <div className="time d-flex flex-column align-items-center">
                        <div className="time-value" style={{ fontSize: '24px', color: 'white' }}>{convertedMins}</div>
                        <div className="time-label">Minutes</div>
                    </div>
                    <div style={{ fontSize: '20px' }}>:</div>
                    <div className="time d-flex flex-column align-items-center">
                        <div className="time-value" style={{ fontSize: '24px', color: 'white' }}>{convertedSeconds}</div>
                        <div className="time-label">Seconds</div>
                    </div>
                </div> :
                <div className='d-flex justify-content-center align-items-center' style={{ fontSize: '24px', color: 'white', margin: '17px' }}>
                    Presale Ended
                </div>
            }
        </div>
    );
    // }
}

export default CountDown;