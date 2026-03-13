import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import useTheme from '../../hooks/useTheme';
import StudentsTable from "../../components/admin-students/StudentsTable";
import { useState, useEffect } from "react";
import { dashboardTheme } from "../../themes/theme";

function AllStudents() {
  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  const [loading, setLoading] = useState(true);

  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      tests: 18,
      score: 82,
      status: "Active"
    },
    {
      id: 2,
      name: "Anita Verma",
      email: "anita@gmail.com",
      tests: 12,
      score: 75,
      status: "Active"
    },
    {
      id: 3,
      name: "Karan Singh",
      email: "karan@gmail.com",
      tests: 8,
      score: 60,
      status: "Suspended"
    }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <DashboardLayout activeMenu="students">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          All Students
        </h1>

        <StudentsTable
          students={students}
          loading={loading}
          theme={t}
        />

      </div>

    </DashboardLayout>
  );
}

export default AllStudents
