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

  // 헤더 표시 여부 상태 (기본값: true - 보임)
  const [isVisible, setIsVisible] = useState(true);

  // 이전 스크롤 위치 저장용
  const [lastScrollY, setLastScrollY] = useState(0);

  // 배경색 변경 여부 (맨 위가 아니면 배경색 입히기 위함)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. 헤더 보이기/숨기기 로직
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 스크롤을 내리고 있고, 100px 이상 내려왔다면 -> 숨김
        setIsVisible(false);
      } else {
        // 스크롤을 올리고 있거나, 맨 위에 있다면 -> 보임
        setIsVisible(true);
      }

      // 2. 배경색 변경 로직 (50px 이상 내려오면 배경색 추가)
      setIsScrolled(currentScrollY > 50);

      // 현재 위치 저장
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <header
      // isVisible이 false면 'hidden' 클래스 추가
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

        <nav className="header-nav">
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
