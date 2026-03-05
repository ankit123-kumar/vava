import React from "react";
import CountdownTimer from "./CountDownTimer";

function UpcomingTestCard({ test, theme }) {

  const addToCalendar = () => {

    const start = new Date(test.datetime).toISOString().replace(/[-:]|\.\d+/g, "");
    const end = new Date(new Date(test.datetime).getTime() + test.duration * 60000)
      .toISOString()
      .replace(/[-:]|\.\d+/g, "");

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      test.title
    )}&dates=${start}/${end}&details=${encodeURIComponent(test.syllabus)}`;

    window.open(url, "_blank");
  };

  return (
    <div className={`${theme.card} ${theme.border} border rounded-xl p-6 shadow-sm`}>

      <div className="flex justify-between items-start">

        <div>

          <h3 className={`text-lg font-semibold ${theme.text}`}>
            {test.title}
          </h3>

          <p className={`text-sm mt-1 ${theme.subText}`}>
            {new Date(test.datetime).toLocaleString()}
          </p>

        </div>

        <button
          onClick={addToCalendar}
          className="text-sm bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700"
        >
          Add to Calendar
        </button>

      </div>

      <div className="mt-5">

        <p className={`text-sm font-medium mb-2 ${theme.text}`}>
          Countdown
        </p>

        <CountdownTimer targetDate={test.datetime} theme={theme} />

      </div>

      <div className="mt-5">

        <p className={`text-sm font-medium mb-2 ${theme.text}`}>
          Syllabus
        </p>

        <ul className={`text-sm list-disc ml-5 ${theme.subText}`}>
          {test.syllabus.map((topic, i) => (
            <li key={i}>{topic}</li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default UpcomingTestCard;