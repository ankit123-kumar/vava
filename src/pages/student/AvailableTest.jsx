import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import TestCard from "../../components/tests/TestCard";
import TestFilters from "../../components/tests/TestFilters";
import TestPagination from "../../components/tests/TestPagination";
import TestSkeleton from "../../components/tests/TestSkeleton";
import useTheme from "../../hooks/useTheme";
import { dashboardTheme } from "../../themes/theme";

function AvailableTests() {
  const {theme} = useTheme();
  const t = dashboardTheme[theme];

  const [loading, setLoading] = useState(true);
  const [tests, setTests] = useState([]);

  const [filters, setFilters] = useState({
    subject: "",
    difficulty: ""
  });

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {

    setTimeout(() => {

      setTests([
        { id: 1, title: "Java Basics Test", subject: "Java", difficulty: "Easy", duration: 30, questions: 20 },
        { id: 2, title: "React Hooks Test", subject: "React", difficulty: "Medium", duration: 40, questions: 25 },
        { id: 3, title: "DSA Arrays", subject: "DSA", difficulty: "Medium", duration: 45, questions: 30 },
        { id: 4, title: "Spring Boot", subject: "Java", difficulty: "Hard", duration: 50, questions: 30 },
        { id: 5, title: "React Routing", subject: "React", difficulty: "Easy", duration: 20, questions: 15 },
        { id: 6, title: "Binary Search", subject: "DSA", difficulty: "Medium", duration: 35, questions: 20 },
        { id: 7, title: "Java Streams", subject: "Java", difficulty: "Hard", duration: 40, questions: 25 },
      ]);

      setLoading(false);

    }, 1200);

  }, []);

  const filteredTests = tests.filter((tst) => {

    return (
      (!filters.subject || tst.subject === filters.subject) &&
      (!filters.difficulty || tst.difficulty === filters.difficulty) &&
      tst.title.toLowerCase().includes(search.toLowerCase())
    );

  });

  const totalPages = Math.ceil(filteredTests.length / perPage);

  const paginatedTests = filteredTests.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <DashboardLayout activeMenu="tests">

      <div className={`${t.bg} min-h-screen p-6`}>

        <h1 className={`text-2xl font-bold mb-6 ${t.text}`}>
          Available Tests
        </h1>

        {/* Search */}

        <input
          type="text"
          placeholder="Search tests..."
          className={`${t.card} ${t.border} border px-4 py-2 rounded mb-4 w-full md:w-72`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filters */}

        <TestFilters
          filters={filters}
          setFilters={setFilters}
          theme={t}
        />

        {/* Test Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <TestSkeleton key={i} theme={t} />
                ))

            : paginatedTests.map((test) => (
                <TestCard
                  key={test.id}
                  test={test}
                  theme={t}
                />
              ))}
        </div>

        {/* Pagination */}

        {!loading && (
          <TestPagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            theme={t}
          />
        )}

      </div>

    </DashboardLayout>
  );
}

export default AvailableTests;