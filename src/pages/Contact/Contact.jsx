import React from "react";
// ★★★ [추가] 페이지 이동을 위한 훅 Import ★★★
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import "./Contact.css";

// 이미지
import BgWatermark from "../../assets/images/Contact/b0.svg";
import PartnerImg from "../../assets/images/Contact/b1.svg";
import CareerImg from "../../assets/images/Contact/b2.svg";

export default function Contact() {
  // ★★★ [추가] navigate 함수 생성 ★★★
  const navigate = useNavigate();

  return (
    // 1. 전체 화면 레이아웃
    <div className="contact-full-screen">
      {/* === [위쪽] 파란색 영역 === */}
      <div className="contact-blue-zone">
        <div className="contact-layout-limit">
          <Header />

          <main className="contact-main">
            <div className="bg-watermark-container">
              <img src={BgWatermark} alt="" className="bg-watermark-img" />
            </div>{" "}
            <div className="contact-content">
              <h1 className="contact-title">With OON Marketing</h1>

              <div className="card-container">
                {/* === 왼쪽 카드: 광고 문의하기 === */}
                <div
                  className="contact-card"
                  style={{
                    backgroundImage: `url(${PartnerImg})`,
                    cursor: "pointer",
                  }}
                  // ★★★ [수정] 메일 링크(mailto) 대신 페이지 이동으로 변경 ★★★
                  onClick={() => navigate("/partner-inquiry")}
                >
                  <div className="card-overlay"></div>
                  <div className="card-text-wrapper">
                    <span className="card-label">Contact</span>
                    <h2 className="card-desc">
                      OON과 성장 할<br />
                      파트너를 찾습니다!
                    </h2>
                    <div className="card-btn-area">
                      <span className="card-btn-text">광고 문의하기</span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </div>

                {/* === [수정] 오른쪽 카드: 채용공고 확인하기 === */}
                <div
                  className="contact-card"
                  style={{
                    backgroundImage: `url(${CareerImg})`,
                    cursor: "pointer",
                  }}
                  // ★★★ 클릭 시 /recruitment 페이지로 이동 ★★★
                  onClick={() => navigate("/recruitment")}
                >
                  <div className="card-overlay"></div>
                  <div className="card-text-wrapper">
                    <span className="card-label">Careers</span>
                    <h2 className="card-desc">
                      OON과 함께 할<br />
                      동료를 찾습니다!
                    </h2>
                    <div className="card-btn-area">
                      <span className="card-btn-text">채용공고 확인하기</span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* === [아래쪽] 흰색 푸터 영역 === */}
      <footer className="footer-contact-wrapper">
        <div className="footer-contact-container">
          {/* 하단 정보 영역 */}
          <div className="footer-bottom">
            {/* 네비게이션 메뉴 */}
            <nav className="footer-nav">
              <a href="#service" className="f-link">
                서비스 소개
              </a>
              <a href="#ai" className="f-link">
                AI 라이브커머스
              </a>
              <a href="#portfolio" className="f-link">
                포트폴리오
              </a>
              <a href="#customer" className="f-link">
                고객경험
              </a>
              <a href="#team" className="f-link">
                팀원소개
              </a>
              <a href="#contact" className="f-link">
                문의하기
              </a>
            </nav>

            {/* 하단 정보 그리드 */}
            <div className="footer-info-grid">
              {/* 왼쪽: 주소 */}
              <div className="info-left">
                <div className="info-text-group">
                  <p className="address">경상북도 구미시 송정동 527 2층</p>
                  <p className="copyright">
                    © OON Marketing. All rights reserved
                  </p>
                </div>
              </div>

              {/* 오른쪽: 연락처 */}
              <div className="info-right">
                <div className="info-col">
                  <span className="info-label">Contact</span>
                  <span className="info-value">contact@oon-marketing.com</span>
                </div>
                <div className="info-col">
                  <span className="info-label">Tel</span>
                  <span className="info-value">054-454-5777</span>
                  <span className="info-value"> 010-9222-9265</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
