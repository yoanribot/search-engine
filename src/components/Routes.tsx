import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/images"} element={<Results />} />
      <Route path={"/search"} element={<Results />} />
      <Route path={"/news"} element={<Results />} />
      <Route path={"/videos"} element={<Results />} />
      <Route path="*" element={<Navigate to="/search" />} />
    </Routes>
  );
};

export default AppRoutes;
