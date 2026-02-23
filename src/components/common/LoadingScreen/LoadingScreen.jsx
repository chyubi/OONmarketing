import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [isActive, setIsActive] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1. 컴포넌트 마운트 시 애니메이션 즉시 시작
    const startTimer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    // 2. 애니메이션이 다 끝난 후(4초 뒤) 페이드아웃 시작
    // (Contact.css의 애니메이션이 3.2초짜리이므로 조금 더 여유를 줍니다)
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 4000);

    // 3. 완전히 투명해지면 (4.5초 뒤) 로딩창 제거
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // 스크롤 방지 로직
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className={`loading-screen-wrapper ${isActive ? "animate-active" : ""} ${
        isFadingOut ? "fade-out" : ""
      }`}
    >
      <div className="orbit-bg">
        <div className="orbit-ring ring-1"></div>
        <div className="orbit-ring ring-2"></div>
        <div className="orbit-ring ring-3"></div>
      </div>

      <div className="contact-content">
        <div className="reveal-mask">
          <h2 className="contact-headline">
            <span className="text-black">WE'RE</span>
            <span className="text-blue-box">OON</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
