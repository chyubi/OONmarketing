import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/common/Header/Header";
import Hero from "../components/sections/Hero/Hero";
import Services from "../components/sections/Services/Services";
import Partners from "../components/sections/Partners/Partners";
import Business from "../components/sections/business/business";
import Post from "../components/sections/Posts/Posts";
import Contact from "../components/sections/Contact/Contact";
import Reviews from "../components/sections/Reviews/Reviews";
import Footer from "../components/common/Footer/Footer";
import Footer2 from "../components/common/Footer/Footer2";
import LoadingScreen from "../components/common/LoadingScreen/LoadingScreen";
import "./Home.css"; // CSS 파일 import 확인

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" }); // block: "start"가 스티키 스크롤에 더 적합
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="home-container">
      {/* Header를 fixed-header 클래스로 감싸서 항상 최상단에 고정 */}
      <div className="fixed-header">
        <Header />
      </div>

      <main>
        {/* 1. Hero: sticky-section 클래스 추가 */}
        <section id="hero" className="sticky-section">
          <Hero />
        </section>

        {/* 2. Services: 위로 올라와서 Hero를 덮음 */}
        <section id="services" className="sticky-section">
          {" "}
          <Services />
        </section>

        {/* 3. AI 라이브커머스 */}
        <section id="ai-live" className="sticky-section">
          <Partners />
        </section>

        {/* 4. 포트폴리오 */}
        <section id="portfolio" className="sticky-section">
          <Business />
        </section>

        {/* 5. 고객경험 */}
        <section id="customer-exp" className="sticky-section">
          <Reviews />
        </section>

        {/* 6. 팀원소개 */}
        <section id="team" className="sticky-section">
          <Post />
        </section>

        {/* 7. 마지막 그룹: Contact와 Footer를 묶어서 한 번에 올라오게 처리 */}
        <div className="last-section-group">
          <section id="contact-section">
            <Contact />
          </section>
          <Footer />
          <Footer2 />
        </div>
      </main>
    </div>
  );
}
