import React, { useEffect, useState } from "react";

function CountdownTimer({ targetDate, theme }) {

  const calculateTime = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  if (!timeLeft) {
    return <span className="text-red-500 font-medium">Started</span>;
  }

  return (
    <div className="flex gap-4 text-center">

      <div>
        <p className={`text-lg font-bold ${theme.text}`}>{timeLeft.days}</p>
        <span className={`text-xs ${theme.subText}`}>Days</span>
      </div>

      <div>
        <p className={`text-lg font-bold ${theme.text}`}>{timeLeft.hours}</p>
        <span className={`text-xs ${theme.subText}`}>Hours</span>
      </div>

      <div>
        <p className={`text-lg font-bold ${theme.text}`}>{timeLeft.minutes}</p>
        <span className={`text-xs ${theme.subText}`}>Min</span>
      </div>

      <div>
        <p className={`text-lg font-bold ${theme.text}`}>{timeLeft.seconds}</p>
        <span className={`text-xs ${theme.subText}`}>Sec</span>
      </div>

    </div>
  );
}

export default CountdownTimer;