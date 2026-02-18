import React from "react";
import "./Posts.css";

// === 1. 이미지 Asset Import (파일 트리 기준) ===
import hmparkImg from "../../../assets/images/business/박혜미.svg";
import jhleeImg from "../../../assets/images/business/이정호.svg";
import tgkimImg from "../../../assets/images/business/김태균.svg";
import hrkimImg from "../../../assets/images/business/김현락.svg";
import ybchaImg from "../../../assets/images/business/차유비.svg";

import newsImg1 from "../../../assets/images/business/1번뉴스.svg";
import newsImg2 from "../../../assets/images/business/2번뉴스.svg";
import newsImg3 from "../../../assets/images/business/3번뉴스.svg";

export default function Posts() {
  // === 2. 데이터에 이미지 연결 ===
  const teamData = [
    {
      name: "박혜미",
      role: "대표이사(CEO)",
      email: "hmpark@oon-marketing.com",
      image: hmparkImg,
    },
    {
      name: "이정호",
      role: "대표이사(CEO)",
      email: "jhlee@oon-marketing.com",
      image: jhleeImg,
    },
    {
      name: "김태균",
      role: "운영총괄이사(COO)",
      email: "tgkim@oon-marketing.com",
      image: tgkimImg,
    },
    {
      name: "김현락",
      role: "전략정책,B2G총괄이사(CSO)",
      email: "hrkim@oon-marketing.com",
      image: hrkimImg,
    },
    {
      name: "차유비",
      role: "전략기획본부장",
      email: "ybcha@oon-marketing.com",
      image: ybchaImg,
    },
  ];

  const newsData = [
    {
      id: 1,
      title: "전국 최초로 AI라이브커머스 플랫폼 구축한다",
      desc: "진흥원은 전국 최초로 AI디지털 휴먼기술을 활용한 AI 쇼호스트를 제작해 라이브커머스로 상품을 판매할 예정이다.",
      meta: "정재훈 기자 │ 2024/11/13",
      image: newsImg1,
    },
    {
      id: 2,
      title: "경북지역 소상공인 'AI 라이브커머스' 구축",
      desc: "경상북도경제진흥원과 경북 지역 중소기업 및 소상공인을 위한 업무협약을 체결했다고 22일 밝혔다.",
      meta: "조규덕 기자 │ 2024/07/19",
      image: newsImg2,
    },
    {
      id: 3,
      title: "한 장이면 고민 끝! 2026 마케팅 이슈 캘린더",
      desc: "2026 마케팅 이슈 캘린더를 통해 매월 주목해야 할 마케팅 시점을 점검하시고, 연간 마케팅 플랜 수립은 물론...",
      meta: "나스미디어 │ 2025/12/23",
      image: newsImg3,
    },
  ];

  return (
    <section className="new-posts-section">
      <div className="posts-container-split">
        {/* === 왼쪽: Our Team === */}
        <div className="posts-left">
          <h2 className="section-title">Posts</h2>
          <div className="team-section">
            <h3 className="sub-header-line">Our Team</h3>
            <ul className="team-list">
              {teamData.map((member, index) => (
                <li key={index} className="team-item">
                  <div className="member-avatar">
                    {/* ★★★ 클래스 이름 확인: avatar-img ★★★ */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="avatar-img"
                    />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <span className="name">{member.name}</span>
                      <span className="role">{member.role}</span>
                    </div>
                    <span className="email">{member.email}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === 오른쪽: News List === */}
        <div className="posts-right">
          <ul className="news-list">
            {newsData.map((news) => (
              <li key={news.id} className="news-item">
                <div className="news-text-group">
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-desc">{news.desc}</p>
                  <span className="news-meta">{news.meta}</span>
                </div>
                <div className="news-thumbnail">
                  {/* ★★★ 클래스 이름 확인: thumb-img ★★★ */}
                  <img
                    src={news.image}
                    alt={news.title}
                    className="thumb-img"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
