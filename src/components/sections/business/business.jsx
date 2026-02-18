import React, { useState } from "react";
import "./business.css";

// 로고 이미지 Import
import samsungLogo from "../../../assets/images/Posts/SAMSUNG.svg";
import postLogo from "../../../assets/images/Posts/우체국.svg";
import gmpLogo from "../../../assets/images/Posts/식품제조.svg";
import ottogiLogo from "../../../assets/images/Posts/오뚜기.svg";
import coexLogo from "../../../assets/images/Posts/코엑스.svg";
import localLogo from "../../../assets/images/Posts/지자체.svg";

export default function Business() {
  // 모달 상태 관리
  const [showModal, setShowModal] = useState(false);
  // 모달 내부 슬라이드 인덱스 관리
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // 비즈니스 카드 데이터
  const businessData = [
    {
      id: 1,
      img: samsungLogo,
      num: "01",
      title: "삼성전자",
      desc: "삼성전자 전체\n대리점 계약",
    },
    {
      id: 2,
      img: postLogo,
      num: "02",
      title: "우체국 쇼핑",
      desc: "우체국 올데어\nLIVE+ 도입 예정",
    },
    {
      id: 3,
      img: gmpLogo,
      num: "03",
      title: "식품 제조업계",
      desc: "식품 업계 주요 5개사\n하루 라이브 성과",
    },
    {
      id: 4,
      img: ottogiLogo,
      num: "04",
      title: "오뚜기",
      desc: "오뚜기 네이처 쇼핑\n라이브 협업",
    },
    {
      id: 5,
      img: coexLogo,
      num: "05",
      title: "코엑스",
      desc: "2025 소상공인 마켓\n3년 계약 체결",
    },
    {
      id: 6,
      img: localLogo,
      num: "06",
      title: "지자체",
      desc: "경북 / 경주\nE-커머스 지원사업 성과 창출",
    },
  ];

  // 우수 사례(리뷰) 데이터 (제공해주신 HTML 내용 반영)
  const reviews = [
    {
      id: 1,
      text: "AI쇼호스트로 라이브를 할 수 있다는걸 들어보기만 했었는데 실제로 저의 얼굴과 목소리로 만들어서 방송을 해보니 사람들의 반응이 엄청났어요. 그리고 매출에 대한 부분을 의심하긴 했었는데 12시간 라이브를 하고 매출이 천만원이 넘는걸보고 이거다! 싶었어요.",
      name: "농***",
      job: "참기름 제조 대표님",
    },
    {
      id: 2,
      text: "라이브커머스라는걸 하는 업체들을 보면 잘되는것 같은데 업체에 맡기려니 1시간만 하는데 비용이 만만치않더라구요. 그래서 포기했었는데 AI로 라이브를 하는데 비용이 괜찮더라구요. 보자마자 같이 하자고 했고 지금도 진행하고 있는데 결과는 대만족입니다^^ 이걸로 판매와 브랜딩 모두 가능할 것 같아서 기대가 큽니다.",
      name: "콘***",
      job: "건강보조식품 대표님",
    },
    {
      id: 3,
      text: "처음에는 어떻게 진행이 되는건지 처음 접해보는거라 막연했는데 설명도 잘해주시고 제가 해야하는게 없어서 라이브커머스가 이렇게 편한거였나 싶더라구요. 근데 사람이 하는 라이브커머스는 신경써야할 게 많은데 이건 AI라이브라서 그런건거 같더라구요. 아무튼 신경 하나도 안쓰고 매출이 나고 있으니 좋네요🙂",
      name: "코**",
      job: "욕실용품 브랜드 대표님",
    },
    {
      id: 4,
      text: "저희 제품이 금액이 저렴하고 그래서 잘 맞을까 싶었는데 걱정과는 다르게 매출이 쭉쭉 성장하는걸 보고 마음이 놓였어요. 스마트스토어 운영하면서 노출이 굉장히 중요하고 신규고객 유입이랑 알림수느는걸 중요하게 생각하는데 이걸 다 잡을 수 있어서 정말 좋다고 생각해요. 👍다른분들께도 추천해드려서 주변 대표님들도 같이 하고 있는데 평이 좋네요^^",
      name: "아***",
      job: "답례품 판매 대표님",
    },
  ];

  // 다음 슬라이드
  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  // 이전 슬라이드
  const prevReview = () => {
    setCurrentReviewIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1,
    );
  };

  return (
    <section className="business-section">
      <div className="business-container">
        {/* 헤더 */}
        <div className="business-header">
          <div className="header-row">
            <h2 className="main-title">
              AI라이브를 선택한 200개가 넘는 기업들이 만족하셨습니다.
            </h2>
            {/* 버튼 클릭 시 모달 열기 */}
            <button
              className="case-study-btn"
              onClick={() => setShowModal(true)}
            >
              우수 사례 보기
            </button>
          </div>
        </div>

        {/* 카드 그리드 */}
        <div className="business-grid">
          {businessData.map((item) => (
            <div key={item.id} className="business-card">
              <div className="card-top">
                <img src={item.img} alt={item.title} className="card-logo" />
                <div className="gradient-overlay"></div>
              </div>
              <div className="card-badge">{item.num}</div>
              <div className="card-bottom">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">
                  {item.desc.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === 모달 창 === */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <div className="modal-slider-container">
              {/* 왼쪽 화살표 */}
              <button className="nav-btn prev" onClick={prevReview}>
                ‹
              </button>

              {/* 리뷰 내용 */}
              <div className="review-content">
                <div className="review-text">
                  "{reviews[currentReviewIndex].text}"
                </div>

                <div className="review-info">
                  <h4 className="review-name">
                    {reviews[currentReviewIndex].name}
                  </h4>
                  <span className="review-job">
                    {reviews[currentReviewIndex].job}
                  </span>
                </div>

                {/* 별점 (SVG 대신 텍스트로 대체하거나 이미지 사용 가능) */}
                <div className="review-rating">★★★★★</div>

                <div className="review-pagination">
                  {currentReviewIndex + 1} / {reviews.length}
                </div>
              </div>

              {/* 오른쪽 화살표 */}
              <button className="nav-btn next" onClick={nextReview}>
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
