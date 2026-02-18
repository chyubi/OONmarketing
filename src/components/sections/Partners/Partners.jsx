import React, { useEffect, useRef, useState } from "react";
import "./Partners.css";

// 쇼핑라이브 로고 이미지 Import
import shoppingLiveLogo from "../../../assets/images/Partners/쇼핑LIVE.svg";

export default function Partners() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="partners-section" ref={sectionRef}>
      <div className="partners-container">
        {/* === 왼쪽 영역 === */}
        <div className={`partners-left ${isVisible ? "animate-up" : ""}`}>
          <div className="logo-wrapper">
            <img
              src={shoppingLiveLogo}
              alt="Shopping Live"
              className="shopping-logo"
            />
          </div>

          <h2 className="partners-headline">
            ONE TEAM
            <br />
            ONE GOAL
            <br />
            WITH <span className="highlight">AI LIVE</span> COMMERCE
          </h2>

          {/* [수정] 기업 소개서 섹션 - 문구 강화 및 디자인 변경 */}
          <div className="intro-section">
            <p className="intro-caption">
              OON의 기술과 노하우를 한 눈에 확인하세요.
            </p>
            <a href="#intro" className="intro-link-btn">
              <span className="btn-text">기업 소개서 확인하기</span>
              <span className="btn-icon">→</span>
            </a>
          </div>

          <p className="partners-sub-desc">
            사람 쇼호스트가 아니어도
            <br />
            대기업급 진행을
            <br />
            안정적으로 반복할 수 있습니다.
          </p>

          <button className="consulting-btn">AI 라이브 상담하기</button>
        </div>

        {/* === 오른쪽 영역 === */}
        <div className={`partners-right ${isVisible ? "animate-left" : ""}`}>
          {/* ... (기존 코드 유지) ... */}
          <div className="feature-item">
            <h3 className="feature-title">대기업급 진행</h3>
            <p className="feature-desc">
              AI 쇼호스트 + 자동 음성으로
              <br />
              일관된 톤과 완성도의 방송을 구현합니다.
              <br />
              사람 컨디션에 흔들리지 않습니다.
            </p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">반복 편성</h3>
            <p className="feature-desc">
              한 번 세팅하면
              <br />
              주간/월간 편성으로 꾸준히 송출합니다.
              <br />
              '한 번 하고 끝'이 아니라, 운영됩니다.
            </p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">운영 효율</h3>
            <p className="feature-desc">
              촬영·섭외·스튜디오 부담을 줄이고
              <br />
              준비 시간을 최소화합니다.
              <br />
              소상공인도 지속 가능한 구조를 만듭니다.
            </p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">매출 최적화</h3>
            <p className="feature-desc">
              방송 전환 데이터와 함께
              <br />
              소재/구성/상품 설명을 개선합니다.
              <br />
              콘텐츠-광고-리포트 루프에 연결됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}