import { useState, useEffect } from "react";
// ★★★ [추가] 페이지 이동을 위한 훅 Import ★★★
import { useNavigate } from "react-router-dom";
import "./Hero.css";

// 이미지 자산 Import
import bgCircle from "../../../assets/icons/Heoro-img/backgoround-circle.svg";
import oneLogoTop from "../../../assets/icons/Heoro-img/ONE-LOGO.svg";
import teamLogo from "../../../assets/icons/Heoro-img/TEAM,-LOGO.svg";
import oneLogoBottom from "../../../assets/icons/Heoro-img/ONE-LOGO-2.svg";
import goalLogo from "../../../assets/icons/Heoro-img/GOAL-LOGO.svg";
import bgImg1 from "../../../assets/icons/Heoro-img/background-img-1.svg";
import bgImg2 from "../../../assets/icons/Heoro-img/background-img-2.svg";
import bgImg3 from "../../../assets/icons/Heoro-img/background-img-3.svg";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // ★★★ [추가] 모달 표시 여부 상태 (기본값: true) ★★★
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    // 1920x1080 비율 내에서의 상대 좌표 계산
    const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    setMousePos({ x, y });
  };

  return (
    <section
      className="hero-section"
      onMouseMove={handleMouseMove}
      style={{
        "--mouse-x": mousePos.x,
        "--mouse-y": mousePos.y,
      }}
    >
      {/* ★★★ [추가] 공사중 알림 모달창 ★★★ */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">🚧 사이트 점검 안내</h2>
            <div className="modal-body">
              <p>
                현재 더 나은 서비스를 위해
                <br />
                <strong>사이트 리뉴얼 및 기능 개선 작업 중</strong>입니다.
              </p>
              <div className="modal-divider"></div>
              <p className="recruit-notice">
                입사 지원(채용 안내)은
                <br />
                아래 경로를 통해 진행하실 수 있습니다.
              </p>
              <div className="path-box">
                문의하기 &gt; <strong>채용공고 확인하기</strong>
              </div>
            </div>
            <div className="modal-actions">
              <button
                className="btn-primary"
                onClick={() => navigate("/contact")}
              >
                채용공고 바로가기
              </button>
              <button
                className="btn-secondary"
                onClick={() => setShowModal(false)}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 16:9 비율을 유지하는 메인 컨테이너 */}
      <div className="aspect-ratio-box">
        {/* 레이어 1: 배경 원 */}
        <div className="layer-circle">
          <img
            src={bgCircle}
            alt="Background Circle"
            className="bg-circle-img"
          />
        </div>

        {/* 중앙 컨텐츠 래퍼 */}
        <div className="hero-content-wrapper">
          {/* === 레이어 2: 텍스트 로고 === */}
          <div className={`layer-text ${isLoaded ? "animate-in" : ""}`}>
            {/* Group 1 (상단) */}
            <div className="text-group group-1">
              <img
                src={oneLogoTop}
                alt="ONE"
                className="text-svg one-top move-left"
              />
              <img
                src={teamLogo}
                alt="TEAM,"
                className="text-svg team move-right"
              />
            </div>

            {/* Group 2 (중단) */}
            <div className="text-group group-2">
              <img
                src={oneLogoBottom}
                alt="ONE"
                className="text-svg one-bottom move-left-from-mask"
              />
            </div>

            {/* Group 3 (하단) */}
            <div className="text-group group-3">
              <img
                src={goalLogo}
                alt="GOAL"
                className="text-svg goal move-right-from-mask"
              />
            </div>
          </div>

          {/* === 레이어 3: 사다리꼴 이미지 마스크 === */}
          <div className="layer-images-masks">
            <div className="stripe-mask mask-1">
              <img src={bgImg1} alt="Stripe 1" className="parallax-bg" />
            </div>
            <div className="stripe-mask mask-2">
              <img src={bgImg2} alt="Stripe 2" className="parallax-bg" />
            </div>
            <div className="stripe-mask mask-3">
              <img src={bgImg3} alt="Stripe 3" className="parallax-bg" />
            </div>
          </div>

          {/* 레이어 4: 우측 설명 텍스트 */}
          <div className="layer-description">
            <p className="desc-title">
              OON은 <strong>한 팀, 한 목표</strong>로 마케팅을
              <br />
              성공시킵니다.
            </p>
            <p className="desc-sub">
              기획 + 수행 + 분석을 한 흐름으로 설<br />
              계해 전환 구조를 만듭니다.
            </p>
          </div>
        </div>
      </div>

      {/* 하단 무한 롤링 티커 (화면 전체 기준 하단 고정) */}
      <div className="bottom-ticker">
        <div className="ticker-track">
          <div className="ticker-content">
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
          </div>
          <div className="ticker-content">
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
          </div>
          <div className="ticker-content">
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
          </div>
          <div className="ticker-content">
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
