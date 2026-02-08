import React from "react";
import "./business.css";

// 로고 이미지 Import (경로는 기존 Posts 폴더 유지)
import samsungLogo from "../../../assets/images/Posts/SAMSUNG.svg";
import postLogo from "../../../assets/images/Posts/우체국.svg";
import gmpLogo from "../../../assets/images/Posts/식품제조.svg";
import ottogiLogo from "../../../assets/images/Posts/오뚜기.svg";
import coexLogo from "../../../assets/images/Posts/코엑스.svg";
import localLogo from "../../../assets/images/Posts/지자체.svg";

export default function Business() {
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
      desc: "2025 소상 인 마켓\n3년 계약 체결",
    },
    {
      id: 6,
      img: localLogo,
      num: "06",
      title: "지자체",
      desc: "경북 / 경주\nE-커머스 지원사업 성과 창출",
    },
  ];

  return (
    <section className="business-section">
      <div className="business-container">
        {/* 헤더 */}
        <div className="business-header">
          <p className="sub-title">
            소상공인도 대기업급 라이브 운영 구조를 갖출 수 있도록 하겠습니다.
          </p>
          <div className="header-row">
            <h2 className="main-title">
              이미 120개 이상의 기업이 함께 하고 계십니다.
            </h2>
            <button className="case-study-btn">우수 사례 보기</button>
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
    </section>
  );
}
