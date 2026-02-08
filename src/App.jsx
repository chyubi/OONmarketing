import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import Recruitment from "./pages/Recruitment/Recruitment";
import JobDetail from "./pages/Recruitment/JobDetail";
import JobApply from "./pages/Recruitment/JobApply"; // ✨ 이 파일 Import 필수

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* 채용 리스트 */}
        <Route path="/recruitment" element={<Recruitment />} />

        {/* 채용 상세 */}
        <Route path="/recruitment/:id" element={<JobDetail />} />

        {/* ✨ [추가됨] 지원서 작성 페이지 */}
        <Route path="/recruitment/apply/:id" element={<JobApply />} />
      </Routes>
    </BrowserRouter>
  );
}
