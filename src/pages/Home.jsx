import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/common/Header/Header";
import Hero from "../components/sections/Hero/Hero";
import Services from "../components/sections/Services/Services";
import Partners from "../components/sections/Partners/Partners"; // AI 라이브커머스
import Business from "../components/sections/business/business"; // 포트폴리오
import Post from "../components/sections/Posts/Posts"; // 팀원소개
import Contact from "../components/sections/Contact/Contact";
import Reviews from "../components/sections/Reviews/Reviews";
import Footer from "../components/common/Footer/Footer";
import Footer2 from "../components/common/Footer/Footer2";

import "./Home.css";

export default function Home() {
  const { hash } = useLocation();

  // URL에 #id가 있으면 해당 위치로 스크롤 이동
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="home-container" style={{ position: "relative" }}>
      <div
        style={{ position: "absolute", width: "100%", zIndex: 99999, top: 0 }}
      >
        <Header />
      </div>
      <main>
        {/* 1. Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* 2. 서비스 소개 */}
        <section id="services">
          <Services />
        </section>

        {/* 3. AI 라이브커머스 (Header의 'ai-live'와 매칭) */}
        <section id="ai-live">
          <Partners />
        </section>

        {/* 4. 포트폴리오 (Header의 'portfolio'와 매칭) */}
        <section id="portfolio">
          <Business />
        </section>

        {/* 5. 고객경험 */}
        <section id="customer-exp">
          <Reviews />
        </section>

        {/* 6. 팀원소개 */}
        <section id="team">
          <Post />
        </section>

        {/* 7. 메인 하단 컨택 섹션 */}
        <section id="contact-section">
          <Contact />
        </section>
      </main>
      das
      <Footer />
      <Footer2 />
    </div>
  );
}
