// src/layouts/PublicLayout.jsx
import Navbar from "../components/landing/Navbar";
import AnnouncementBar from "../components/landing/AnnouncementBar";
import { Outlet } from "react-router-dom";
import ScrollProgress from "../components/landing/ScrollProgress";

export default function PublicLayout() {
  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <Outlet />
    </>
  );
}