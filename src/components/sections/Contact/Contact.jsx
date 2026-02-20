import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동 훅
import "./Contact.css"; // 링 애니메이션 CSS 필요

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // ✨ 스크롤 감지: 화면에 보이면 링 애니메이션 시작
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`contact-section ${isVisible ? "animate-active" : ""}`}
    >
      {/* 1. 배경 궤도 라인 (링 애니메이션) */}
      <div className="orbit-bg">
        <div className="orbit-ring ring-1"></div>
        <div className="orbit-ring ring-2"></div>
        <div className="orbit-ring ring-3"></div>
      </div>

      {/* 2. 중앙 메인 텍스트 및 링크 */}
      <div className="contact-content">
        <div className="reveal-mask">
          <h2 className="contact-headline">
            <span className="text-black">WE'RE</span>
            <span className="text-blue-box">OON</span>
          </h2>

          {/* 텍스트 링크 그룹 */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          ></div>
        </div>
      </div>

      {/* 3. 우측 하단 둥근 버튼들 */}
      <div className="contact-buttons fade-in-delayed">
        {/* 파란 버튼: 맨 위로 */}
        <button
          className="circle-btn btn-blue"
          onClick={scrollToTop}
          title="맨 위로"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5L19 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
