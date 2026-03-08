import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import UpcomingTestCard from "../../components/upcoming-tests/UpcomingTestCard";
import UpcomingTestSkeleton from "../../components/upcoming-tests/UpcomingTestSkeleton";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/UseTheme";

function Upcoming() {
  const {theme} = useTheme();
  const t = dashboardTheme[theme];
  const [loading, setLoading] = useState(true);
  const [tests, setTests] = useState([]);

  useEffect(() => {

    setTimeout(() => {

      setTests([
        {
          id: 1,
          title: "Java Backend Mock Test",
          datetime: "2026-03-10T19:00:00",
          duration: 60,
          syllabus: ["Spring Boot", "REST APIs", "JPA"]
        },
        {
          id: 2,
          title: "React Advanced Test",
          datetime: "2026-03-12T18:30:00",
          duration: 45,
          syllabus: ["Hooks", "Context API", "Performance"]
        }
      ]);

      setLoading(false);

    }, 1200);

  }, []);

  return (
    <DashboardLayout activeMenu="upcoming-tests">

      <div className={`${t.bg} min-h-screen p-6`}>

        <h1 className={`text-2xl font-bold mb-6 ${t.text}`}>
          Upcoming Tests
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => (
                  <UpcomingTestSkeleton key={i} theme={t} />
                ))

            : tests.map((test) => (
                <UpcomingTestCard
                  key={test.id}
                  test={test}
                  theme={t}
                />
              ))}

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Upcoming;