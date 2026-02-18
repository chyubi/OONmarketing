import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Footer2 from "../../components/common/Footer/Footer2";
// 데이터 파일 경로가 맞는지 꼭 확인해주세요!
import { jobList } from "../../assets/data/jobData";
import "./Recruitment.css";

export default function Recruitment() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="recruitment-page">
      <Header />
      <main className="recruitment-container">
        {/* 1. 상단 네비게이션 & 타이틀 */}
        <div className="recruitment-header">
          <div className="breadcrumb">
            홈 &gt; <span className="current">인재채용</span>
          </div>
          <div className="title-row">
            <button className="back-btn" onClick={() => navigate(-1)}>
              {/* 뒤로가기 화살표 아이콘 */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M19 12H5M12 19L5 12L12 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h1 className="page-title">채용안내</h1>
          </div>
        </div>

        {/* 2. 채용 절차 (Process) & 정보 테이블 */}
        <section className="process-section">
          <div className="process-steps">
            {/* Step 1: 서류전형 */}
            <div className="step-item">
              <div className="step-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <rect x="16" y="8" width="32" height="48" rx="2" />
                  <line x1="22" y1="20" x2="42" y2="20" />
                  <line x1="22" y1="30" x2="42" y2="30" />
                  <line x1="22" y1="40" x2="36" y2="40" />
                  <circle cx="32" cy="14" r="4" fill="white" stroke="black" />
                </svg>
              </div>
              <p className="step-text">서류전형</p>
            </div>

            <div className="step-arrow">→</div>

            {/* Step 2: 서류평가 */}
            <div className="step-item">
              <div className="step-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path d="M14 8H50V56H14V8Z" />
                  <circle cx="44" cy="44" r="10" fill="white" />
                  <path d="M38 44 C38 44 41 40 44 40 C47 40 50 44 50 44" />
                  <circle cx="44" cy="44" r="3" fill="black" />
                  <line x1="20" y1="20" x2="44" y2="20" />
                  <line x1="20" y1="30" x2="34" y2="30" />
                </svg>
              </div>
              <p className="step-text">서류평가</p>
            </div>

            <div className="step-arrow">→</div>

            {/* Step 3: 면접평가 */}
            <div className="step-item">
              <div className="step-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <rect x="12" y="24" width="40" height="20" />
                  <circle cx="20" cy="16" r="6" />
                  <circle cx="32" cy="16" r="6" />
                  <circle cx="44" cy="16" r="6" />
                  <path
                    d="M14 24V44M26 24V44M38 24V44M50 24V44"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <p className="step-text">면접평가</p>
            </div>

            <div className="step-arrow">→</div>

            {/* Step 4: 최종발표 */}
            <div className="step-item">
              <div className="step-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path d="M16 32 L32 32 L40 20 L48 24 L36 40 L24 40 Z" />
                  <path d="M48 32 L32 32 L24 44 L16 40 L28 24 L40 24 Z" />
                  <path d="M20 48 L20 56 M44 48 L44 56" />
                </svg>
              </div>
              <p className="step-text">최종발표</p>
            </div>
          </div>

          {/* 하단 정보 테이블 */}
          <div className="info-table">
            <div className="info-row">
              <div className="info-label">접수방법</div>
              <div className="info-content">
                E-mail (
                <a href="mailto:oon@oon-marketing.com">oon@oon-marketing.com</a>
                ) 을 통한 온라인 입사지원
              </div>
            </div>
            <div className="info-row">
              <div className="info-label">문의사항</div>
              <div className="info-content"> 010-9222-9265</div>
            </div>
            <div className="info-row">
              <div className="info-label">유의사항</div>
              <div className="info-content">
                접수 서류는 반환 하지 않으며 지원서 내용이 사실과 다를 경우
                합격이 취소될 수 있습니다.
              </div>
            </div>
          </div>
        </section>

        {/* 3. 채용 공고 리스트 */}
        <section className="job-list-section">
          <h2 className="section-title">OON과 함께할 인재를 찾습니다.</h2>

          <ul className="job-list">
            {jobList.map((job) => (
              <li key={job.id} className="job-item">
                <div className="job-info">
                  <span className="job-type">{job.type}</span>
                  <span className="job-title">{job.title}</span>
                </div>
                {/* 상세 페이지로 이동 링크 */}
                <Link to={`/recruitment/${job.id}`} className="job-link">
                  모집요강 보기 <span className="arrow-icon">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer2 />
    </div>
  );
}
