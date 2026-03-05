import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import LeaderboardFilter from "../../components/leaderboard/LeaderBoardFilter";
import TopTenCard from "../../components/leaderboard/TopTenCard";
import LeaderboardTable from "../../components/leaderboard/LeaderBoardTable";
import LeaderboardSkeleton from "../../components/leaderboard/LeaderBoardSkeleton";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/useTheme";

function Leaderboard() {
  const {theme} = useTheme();
  const t = dashboardTheme[theme];

  const [loading, setLoading] = useState(true);
  const [selectedTest, setSelectedTest] = useState("global");
  const [data, setData] = useState([]);

  const currentUserId = 5;

  useEffect(() => {

    setTimeout(() => {

      setData([
        { id: 1, name: "Rahul", score: 96, percentile: 99, rank: 1 },
        { id: 2, name: "Amit", score: 94, percentile: 98, rank: 2 },
        { id: 3, name: "Sneha", score: 92, percentile: 97, rank: 3 },
        { id: 4, name: "Priya", score: 90, percentile: 95, rank: 4 },
        { id: 5, name: "Bhupendra", score: 88, percentile: 93, rank: 5 },
        { id: 6, name: "Rohit", score: 86, percentile: 91, rank: 6 },
        { id: 7, name: "Kunal", score: 85, percentile: 90, rank: 7 },
        { id: 8, name: "Anjali", score: 83, percentile: 88, rank: 8 },
        { id: 9, name: "Meena", score: 82, percentile: 87, rank: 9 },
        { id: 10, name: "Arjun", score: 80, percentile: 85, rank: 10 },
      ]);

      setLoading(false);

    }, 1000);

  }, [selectedTest]);

  return (
    <DashboardLayout activeMenu="leaderboard">

      <div className={`${t.bg} min-h-screen p-6`}>

        <h1 className={`text-2xl font-bold mb-6 ${t.text}`}>
          Leaderboard
        </h1>

        <LeaderboardFilter
          selectedTest={selectedTest}
          setSelectedTest={setSelectedTest}
          theme={t}
        />

        {loading ? (
          <LeaderboardSkeleton theme={t} />
        ) : (
          <>
            {/* Top 10 */}

            <div className="grid md:grid-cols-5 gap-4 mb-8">

              {data.slice(0, 5).map((user, i) => (
                <TopTenCard
                  key={user.id}
                  user={user}
                  rank={i + 1}
                  theme={t}
                />
              ))}

            </div>

            {/* Table */}

            <LeaderboardTable
              data={data}
              currentUserId={currentUserId}
              theme={t}
            />
          </>
        )}

      </div>

    </DashboardLayout>
  );
}

export default Leaderboard;