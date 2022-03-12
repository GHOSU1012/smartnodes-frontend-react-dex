import React, { useEffect, useState } from 'react';

const MilliTime = () => {
    const [countDown, setCountDown] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDown + 0.00128);
        }, 30);

        return () => clearInterval(interval);
    });

    return (
        <div>${parseFloat(countDown.toString()).toFixed(4)}</div>
    );
};

export default MilliTime;
