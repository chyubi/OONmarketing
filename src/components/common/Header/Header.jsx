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

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollMove = (targetId) => {
    setIsMobileMenuOpen(false);
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

  const handlePageMove = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`header-wrapper ${isScrolled ? "scrolled" : ""} ${!isVisible ? "hidden" : ""}`}
    >
      <div className="header-container">
        {/* 로고 */}
        <div
          className="header-logo"
          onClick={() => handleScrollMove("top")}
          style={{ cursor: "pointer" }}
        >
          <img src={logoIcon} alt="OON Marketing" />
        </div>

        {/* 모바일 메뉴 버튼 (버튼 크기 키움) */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기"
        >
          <svg viewBox="0 0 24 24">
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
        </button>

        {/* 드롭다운 메뉴 (요청하신 내용 포함) */}
        <nav className={`header-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <button
            className="nav-item"
            onClick={() => handleScrollMove("services")}
          >
            <img src={serviceIcon} alt="서비스 소개" />
          </button>

          <button
            className="nav-item"
            onClick={() => handleScrollMove("ai-live")}
          >
            <img src={aiIcon} alt="AI 라이브커머스" />
          </button>

          <button
            className="nav-item"
            onClick={() => handleScrollMove("portfolio")}
          >
            <img src={portfolioIcon} alt="포트폴리오" />
          </button>

          <button
            className="nav-item"
            onClick={() => handleScrollMove("customer-exp")}
          >
            <img src={customerIcon} alt="고객경험" />
          </button>
          <button className="nav-item" onClick={() => handleScrollMove("team")}>
            <img src={teamIcon} alt="팀원소개" />
          </button>

          {/* 문의하기 버튼 (페이지 이동 함수 사용) */}
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