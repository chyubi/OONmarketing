import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

// 이미지 Import
import logoIcon from "../../../assets/icons/Header-img/OON-L-LOGO.svg";
import serviceIcon from "../../../assets/icons/Header-img/서비스 소개.svg";
import aiIcon from "../../../assets/icons/Header-img/AI 라이브커머스.svg";
import portfolioIcon from "../../../assets/icons/Header-img/포트폴리오.svg";
import customerIcon from "../../../assets/icons/Header-img/고객경험.svg";
import teamIcon from "../../../assets/icons/Header-img/팀원소개.svg";
import inquiry from "../../../assets/icons/Header-img/문의하기.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // [기능 1] 섹션 이동 (메인 페이지 내 스크롤)
  const handleScrollMove = (targetId) => {
    if (location.pathname === "/" || location.pathname === "") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  // [기능 2] 페이지 이동
  const handlePageMove = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`header-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* 로고 */}
        <div
          className="header-logo"
          onClick={() => handleScrollMove("top")}
          style={{ cursor: "pointer" }}
        >
          <img src={logoIcon} alt="OON Marketing" />
        </div>

        <nav className="header-nav">
          {/* 1. 서비스 소개 */}
          <button
            className="nav-item"
            onClick={() => handleScrollMove("services")}
          >
            <img src={serviceIcon} alt="서비스 소개" />
          </button>

          {/* 2. AI 라이브커머스 */}
          <button
            className="nav-item"
            onClick={() => handleScrollMove("ai-live")}
          >
            <img src={aiIcon} alt="AI 라이브커머스" />
          </button>

          {/* 3. 포트폴리오 */}
          <button
            className="nav-item"
            onClick={() => handleScrollMove("portfolio")}
          >
            <img src={portfolioIcon} alt="포트폴리오" />
          </button>

          {/* 4. 고객경험 */}
          <button
            className="nav-item"
            onClick={() => handleScrollMove("customer-exp")}
          >
            <img src={customerIcon} alt="고객경험" />
          </button>

          {/* 5. 팀원소개 (메인 #team 섹션으로 스크롤) */}
          <button className="nav-item" onClick={() => handleScrollMove("team")}>
            <img src={teamIcon} alt="팀원소개" />
          </button>

          {/* 6. 문의하기 (문의 페이지로 이동) */}
          <button
            className="nav-item"
            onClick={() => handlePageMove("/contact")}
          >
            <img src={inquiry} alt="문의하기" />
          </button>
        </nav>
      </div>
    </header>
  );
}
