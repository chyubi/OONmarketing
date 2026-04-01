import { useState, useEffect } from "react";
import "./Hero.css";

// 이미지 자산 Import (경로 확인 필요)
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
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
          {/* 레이어 2: 텍스트 로고 */}
          <div className={`layer-text ${isLoaded ? "animate-in" : ""}`}>
            <div className="text-group group-1">
              <img src={oneLogoTop} alt="ONE" className="text-svg one-top" />
              <img src={teamLogo} alt="TEAM," className="text-svg team" />
            </div>

            <div className="text-group group-2">
              <img
                src={oneLogoBottom}
                alt="ONE"
                className="text-svg one-bottom"
              />
            </div>

            <div className="text-group group-3">
              <img src={goalLogo} alt="GOAL" className="text-svg goal" />
            </div>
          </div>

          {/* 레이어 3: 사다리꼴 이미지 마스크 */}
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
              기획 + 수행 + 분석을 한 흐름으로 설계해 전환 구조를 만듭니다.
            </p>
          </div>
        </div>
      </div>

      {/* 하단 무한 롤링 티커 */}
      <div className="bottom-ticker">
        <div className="ticker-track">
          <div className="ticker-content">
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
            <span>ONE TEAM, ONE GOAL · OON marketing</span>
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
