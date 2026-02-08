import React, { useState } from "react";
import "./Services.css";

// 아이콘 이미지 Import
import iconContent from "../../../assets/images/service/business-graphic-with-semicircles 1.svg";
import iconAds from "../../../assets/images/service/noun-ehime-2470002.svg";
import iconReport from "../../../assets/images/service/noun-orb-circle-1862187.svg";
import iconLive from "../../../assets/images/service/noun-segmented-circle-1530395.svg";

export default function Services() {
  // 섹션 전체 마우스 좌표 (헤더용)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // 1. 섹션 전체 트래킹 (헤더 영역용)
  const handleSectionMouseMove = (e) => {
    if (e.target.closest(".service-item")) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // 2. 그리드 아이템 개별 트래킹 (이미지용)
  const handleItemMouseMove = (e) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    item.style.setProperty("--x", `${x}%`);
    item.style.setProperty("--y", `${y}%`);
  };

  return (
    <section
      className="services-section"
      onMouseMove={handleSectionMouseMove}
      style={{ "--x": `${mousePos.x}%`, "--y": `${mousePos.y}%` }}
    >
      <div className="services-container">
        {/* === 상단 헤더 (움직이는 색상 유지) === */}
        <div className="services-header">
          <span className="tag-text interactive-text-service">service</span>
          <h2 className="main-title interactive-text">
            Make Your First Team. With OON Marketing
          </h2>
          <p className="sub-description interactive-text">
            OON은 콘텐츠·광고·리포트·AI 라이브까지 하나의 팀으로 운영합니다.
            <br />
            목표 설정부터 실행·분석·개선까지, 매출이 '지속'되는 루틴을 만듭니다.
          </p>
        </div>

        <div className="divider-line"></div>

        {/* === 그리드 영역 (텍스트 고정, 이미지 움직임) === */}
        <div className="services-grid">
          {/* Item 1 */}
          <div className="service-item" onMouseMove={handleItemMouseMove}>
            <div className="icon-wrapper">
              <img
                src={iconContent}
                alt="Content"
                className="interactive-img"
              />
            </div>
            {/* interactive-text 제거 -> grid-title/desc 추가 */}
            <h3 className="item-title grid-title">Content</h3>
            <p className="item-desc grid-desc">
              상세페이지·배너·썸네일 제작
              <br />
              숏폼/상품 영상 기획·편집
              <br />
              카피라이팅·전환 포인트 설계
            </p>
          </div>

          {/* Item 2 */}
          <div className="service-item" onMouseMove={handleItemMouseMove}>
            <div className="icon-wrapper">
              <img src={iconAds} alt="Ads" className="interactive-img" />
            </div>
            <h3 className="item-title grid-title">Ads</h3>
            <p className="item-desc grid-desc">
              네이버/메타/구글 광고 세팅
              <br />
              타겟·소재 A/B 테스트 운영
              <br />
              ROAS/CPA 기반 예산 최적화
            </p>
          </div>

          {/* Item 3 */}
          <div className="service-item" onMouseMove={handleItemMouseMove}>
            <div className="icon-wrapper">
              <img src={iconReport} alt="Report" className="interactive-img" />
            </div>
            <h3 className="item-title grid-title">Report</h3>
            <p className="item-desc grid-desc">
              주간/월간 성과 리포트 제공
              <br />
              KPI·퍼널·소재 인사이트 정리
              <br />
              다음 실행 항목(액션플랜) 제시
            </p>
          </div>

          {/* Item 4 */}
          <div className="service-item" onMouseMove={handleItemMouseMove}>
            <div className="icon-wrapper">
              <img src={iconLive} alt="AI Live" className="interactive-img" />
            </div>
            <h3 className="item-title grid-title">AI Live</h3>
            <p className="item-desc grid-desc">
              AI 쇼호스트 라이브 제작/세팅
              <br />
              1회 준비 후 반복 편성·송출
              <br />
              모니터링 1인 운영·해외 확장
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
