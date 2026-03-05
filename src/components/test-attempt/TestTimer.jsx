import React, { useEffect, useState } from "react";

function TestTimer({ duration, onTimeUp, theme }) {

  const [time, setTime] = useState(duration * 60);

  useEffect(() => {

    const interval = setInterval(() => {

      setTime((prev) => {

        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className={`text-lg font-semibold ${theme.text}`}>
      ⏱ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default TestTimer;