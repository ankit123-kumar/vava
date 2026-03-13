import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function TestCalendar({ theme }) {

  const events = [
    {
      title: "Java Backend Mock",
      start: "2026-03-14T19:00:00",
      end: "2026-03-14T20:00:00",
      color: "#3b82f6" // upcoming
    },
    {
      title: "React Weekly Test",
      start: "2026-03-11T18:00:00",
      end: "2026-03-11T19:00:00",
      color: "#22c55e" // active
    },
    {
      title: "DSA Practice Test",
      start: "2026-03-05T18:00:00",
      end: "2026-03-05T19:00:00",
      color: "#6b7280" // completed
    }
  ];

  return (
    <div
      className={`${theme.card} ${theme.border} border p-6 rounded-xl shadow-sm`}
    >

      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin
        ]}
        initialView="dayGridMonth"
        height="auto"
        events={events}
      />

    </div>
  );
}

export default TestCalendar;