import React, { useEffect, useRef, useState } from "react";
import "./Partners.css";

import shoppingLiveLogo from "../../../assets/images/Partners/쇼핑LIVE.svg";

// [참고] PDF를 로컬에서 import 하려면 아래 주석을 해제하고 경로를 맞춰주세요.
// import oonIntroPdf from "../../../assets/pdf/ONN 기업소개서.pdf";

import liveVideo from "../../../assets/parthers/마라도푸드_물회AI라이브.mp4";

export default function Partners() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showConsultModal, setShowConsultModal] = useState(false);

  // 우측 슬라이더 현재 인덱스
  const [currentSlide, setCurrentSlide] = useState(0);
  // FAQ 아코디언 상태
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const PHONE_NUMBER = "010-9222-9265";
  const KAKAO_LINK = "https://open.kakao.com/o/sFer3Wfi";
  
  // 구글 드라이브 링크
  const GOOGLE_DRIVE_LINK =
    "https://drive.google.com/file/d/1oZ0U_fsFurTe3xP3w7VPwJUxGddsj6oo/view?usp=sharing";

  // ★★★ [수정] FAQ 데이터 (이미지 관련 속성 제거) ★★★
  const faqData = [
    {
      q: "제가 뭘 해야 할까요?",
      a: "제품 링크만 주시고 저희가 드리는 제품에 대한 기본적인 질문에 답변만 해주신다면 그 이후는 저희가 알아서 모두 진행해드립니다.",
    },
    {
      q: "시청자들 반응은 어떤가요?",
      a: "라이브를 시청하는 소비자들은 소통을 원하는 소비자들도 있지만 제품구매를 위해 찾아온 소비자들이 많습니다. 또한 소통을 원하는 소비자들도 처음에는 어렵게 생각하다가 계속 보니 친근하다고 하는 팬층도 점점 늘어가고 있습니다.",
    },
    {
      q: "만약 돌발상황이 생기면 어쩌나요?",
      a: "방송을 하는 12~24시간 동안 저희가 실시간 모니터링을 지속하여 진행하고 있습니다. 돌발상황이 생겨도 실시간 대처가 가능합니다.",
    },
    {
      q: "음식도 AI라이브로 가능한가요?",
      a: "현재 AI라이브로 제일 판매가 잘되는게 푸드 카테고리입니다. AI쇼호스트가 설명하고 뒷부분에 디테일 영상을 송출해서 판매중입니다. 먹는걸 꼭 봐야 사는 경우는 거의 없습니다. 라이브로 유입되어 리뷰와 상세페이지를 보고 구매하는 소비자들이 대다수입니다.",
    },
    {
      q: "저의 얼굴과 목소리로도 할 수 있나요?",
      a: "AI쇼호스트는 모든부분을 커스터마이징하여 대표자 본인 또는 원하는 사람으로 제작하여 방송이 가능합니다. 제작기간은 2주정도 소요되며 추가비용이 발생합니다.",
    },
    {
      q: "비용이 얼마인가요?",
      a: "오른쪽 상단 문의하기를 눌러 문의주시면 자세하게 상담해드리겠습니다. 감사합니다.",
    },
    {
      q: "AI방송 레퍼런스가 있나요?",
      isLink: true,
      links: [
        {
          text: "참기름 AI라이브 방송",
          url: "https://view.shoppinglive.naver.com/lives/1469918",
        },
        {
          text: "닭발 AI라이브방송",
          url: "https://view.shoppinglive.naver.com/replays/1421164?fm=shoppinglive&sn=home",
        },
        { text: "DIY케이크 AI라이브 방송", url: "https://naver.me/FQVXckcO" },
        { text: "답례품 AI라이브 방송", url: "https://naver.me/5YFdM0ds" },
        { text: "콜라겐 AI라이브 방송", url: "https://naver.me/FW6GpgO1" },
      ],
    },
  ];

  // 슬라이더 텍스트 데이터 (이미지는 하나로 고정하므로 미디어 속성 제거)
  const features = [
    {
      id: 1,
      title: "대기업급 진행",
      desc: "AI 쇼호스트 + 자동 음성으로\n일관된 톤과 완성도의 방송을 구현합니다.\n사람 컨디션에 흔들리지 않습니다.",
    },
    {
      id: 2,
      title: "반복 편성",
      desc: "한 번 세팅하면\n주간/월간 편성으로 꾸준히 송출합니다.\n'한 번 하고 끝'이 아니라, 운영됩니다.",
    },
    {
      id: 3,
      title: "운영 효율",
      desc: "촬영·섭외·스튜디오 부담을 줄이고\n준비 시간을 최소화합니다.\n소상공인도 지속 가능한 구조를 만듭니다.",
    },
    {
      id: 4,
      title: "매출 최적화",
      desc: "방송 전환 데이터와 함께\n소재/구성/상품 설명을 개선합니다.\n콘텐츠-광고-리포트 루프에 연결됩니다.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // 내부 슬라이드쇼 관련 useEffect는 삭제했습니다.

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };
  
  // PDF 열기 함수
  const handleOpenPdf = (e) => {
    e.preventDefault();
    window.open(GOOGLE_DRIVE_LINK, "_blank");
  };

  const handleCall = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    } else {
      alert(
        `전화 상담 안내\n\n[ ${PHONE_NUMBER} ]\n\nPC에서는 바로 연결이 어렵습니다.`,
      );
    }
  };
  const handleKakao = () => {
    window.open(KAKAO_LINK, "_blank");
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const currentFeature = features[currentSlide];

  return (
    <section className="partners-section" ref={sectionRef}>
      {/* 상담 모달 */}
      {showConsultModal && (
        <div
          className="consult-modal-overlay"
          onClick={() => setShowConsultModal(false)}
        >
          <div
            className="consult-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="modal-headline">상담 방법을 선택해주세요</h3>
            <div className="modal-btn-group">
              <button className="action-btn call-btn" onClick={handleCall}>
                <span className="icon"></span> 전화 상담하기
              </button>
              <button className="action-btn kakao-btn" onClick={handleKakao}>
                <span className="icon"></span> 카카오톡 상담하기
              </button>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => setShowConsultModal(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}

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

          {/* 기업 소개서 섹션 */}
          <div className="intro-section">
            <p className="intro-caption">
              OON의 기술과 노하우를 한 눈에 확인하세요.
            </p>
            <a 
              href="#intro" 
              className="intro-link-btn" 
              onClick={handleOpenPdf}
            >
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
          <button
            className="consulting-btn"
            onClick={() => setShowConsultModal(true)}
          >
            AI 라이브 상담하기
          </button>

          {/* 왼쪽 영역 하단에 FAQ 아코디언 배치 */}
          <div className="faq-section">
            <h4 className="faq-title">자주 묻는 질문 (FAQ)</h4>
            <div className="faq-container">
              {faqData.map((item, idx) => (
                <div key={idx} className="faq-item">
                  <div
                    className={`faq-question ${openFaqIndex === idx ? "active" : ""}`}
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon">
                      {openFaqIndex === idx ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className={`faq-answer ${openFaqIndex === idx ? "open" : ""}`}
                  >
                    {item.isLink ? (
                      <div className="faq-links">
                        {item.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="faq-link-item"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p>{item.a}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === 오른쪽 슬라이더 영역 === */}
        <div className={`partners-right ${isVisible ? "animate-left" : ""}`}>
          <div className="slider-wrapper">
            <div className="slider-content">
              {/* 텍스트 영역 - 슬라이드에 따라 변경됨 */}
              <div className="slide-text-area">
                <h3 className="feature-title">{currentFeature.title}</h3>
                <p className="feature-desc">
                  {currentFeature.desc.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {/* 미디어(이미지/영상) 영역 - 하나로 고정됨 */}
              <div className="slide-media-area">
                <div className="media-placeholder">
                  {/* 고정된 비디오 영상 사용 */}
                  <video
                    src={liveVideo}
                    className="slide-img"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>

            {/* 컨트롤러 */}
            <div className="slider-controls">
              <button className="control-btn prev-btn" onClick={prevSlide}>
                ←
              </button>
              <div className="slide-indicator">
                {currentSlide + 1} / {features.length}
              </div>
              <button className="control-btn next-btn" onClick={nextSlide}>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}