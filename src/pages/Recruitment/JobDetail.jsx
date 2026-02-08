import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Footer2 from "../../components/common/Footer/Footer2";
import { jobList } from "../../assets/data/jobData"; // 데이터 가져오기 (경로 확인)
import "./Recruitment.css";

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // id에 해당하는 공고 데이터 찾기
  const job = jobList.find((item) => item.id === parseInt(id));

  // 페이지 진입 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div style={{ padding: "150px 20px", textAlign: "center" }}>
        <Header />
        <h2>공고를 찾을 수 없습니다.</h2>
        <button
          onClick={() => navigate("/recruitment")}
          style={{ marginTop: "20px", padding: "10px 20px" }}
        >
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="recruitment-page">
      <Header />
      <main className="recruitment-container" style={{ paddingTop: "150px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* 상단: 타이틀 및 기본 정보 */}
          <div style={{ marginBottom: "10px" }}>
            <span
              style={{
                backgroundColor: "#f5f5f5",
                padding: "6px 12px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {job.type}
            </span>
            <span
              style={{
                marginLeft: "10px",
                color: "#ff4d4f",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {job.deadline}
            </span>
          </div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#111",
              margin: "15px 0",
            }}
          >
            {job.title}
          </h1>
          <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.6" }}>
            {job.description}
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #ddd",
              margin: "40px 0",
            }}
          />

          {/* 상세 내용: 업무, 자격요건, 우대사항 */}
          <div className="detail-content">
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "15px",
                color: "#111",
              }}
            >
              주요 업무
            </h3>
            <ul
              style={{
                paddingLeft: "20px",
                marginBottom: "40px",
                lineHeight: "1.8",
                color: "#444",
              }}
            >
              {job.responsibilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "15px",
                color: "#111",
              }}
            >
              자격 요건
            </h3>
            <ul
              style={{
                paddingLeft: "20px",
                marginBottom: "40px",
                lineHeight: "1.8",
                color: "#444",
              }}
            >
              {job.qualifications?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "15px",
                color: "#111",
              }}
            >
              우대 사항
            </h3>
            <ul
              style={{
                paddingLeft: "20px",
                marginBottom: "40px",
                lineHeight: "1.8",
                color: "#444",
              }}
            >
              {job.preferred?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 하단 버튼 영역 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "60px",
              marginBottom: "100px",
            }}
          >
            <button
              onClick={() => navigate("/recruitment")}
              style={{
                padding: "15px 40px",
                border: "1px solid #ddd",
                backgroundColor: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              목록으로
            </button>

            {/* 지원하기 버튼: JobApply 페이지로 이동 */}
            <button
              onClick={() => navigate(`/recruitment/apply/${job.id}`)}
              style={{
                padding: "15px 40px",
                border: "none",
                backgroundColor: "#111",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              지원하기
            </button>
          </div>
        </div>
      </main>
      <Footer2 />
    </div>
  );
}
