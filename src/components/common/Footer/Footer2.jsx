import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Footer2.css";

export default function Footer2() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollMove = (targetId) => {
    if (location.pathname === "/" || location.pathname === "") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const handlePageMove = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer2-wrapper">
      <div className="footer-container">
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <nav className="footer-nav">
            <span
              onClick={() => handleScrollMove("services")}
              className="f-link"
              style={{ cursor: "pointer" }}
            >
              서비스 소개
            </span>
            <span
              onClick={() => handleScrollMove("ai-live")}
              className="f-link"
              style={{ cursor: "pointer" }}
            >
              AI 라이브커머스
            </span>
            <span
              onClick={() => handleScrollMove("portfolio")}
              className="f-link"
              style={{ cursor: "pointer" }}
            >
              포트폴리오
            </span>
            <span
              onClick={() => handleScrollMove("customer-exp")}
              className="f-link"
              style={{ cursor: "pointer" }}
            >
              고객경험
            </span>
            <span
              onClick={() => handleScrollMove("team")}
              className="f-link"
              style={{ cursor: "pointer" }}
            >
              팀원소개
            </span>
            <span
              onClick={() => handlePageMove("/contact")}
              className="f-link"
              style={{ cursor: "pointer" }}
            >
              문의하기
            </span>
          </nav>

          {/* ... 하단 정보 영역 (기존 코드 유지) ... */}
          <div className="footer-info-grid">
            <div className="info-left">
              <div className="info-text-group">
                <p className="address">경상북도 구미시 송정동 527 2층</p>
                <p className="copyright">
                  © OON Marketing. All rights reserved
                </p>
              </div>
            </div>
            <div className="info-right">
              <div className="info-col">
                <span className="info-label">Contact</span>
                <span className="info-value">oonmarketing@naver.com</span>
              </div>
              <div className="info-col">
                <span className="info-label">Tel</span>
                <span className="info-value">054</span>
                <span className="info-value">010-2376-3124</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
