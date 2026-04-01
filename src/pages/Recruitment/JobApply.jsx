import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Header from "../../components/common/Header/Header";
import Footer2 from "../../components/common/Footer/Footer2";
import { jobList } from "../../assets/data/jobData";
import "./JobApply.css";

export default function JobApply() {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(); // ✨ 폼 요소에 접근하기 위한 Ref

  const job = jobList.find((item) => item.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    portfolio: "",
    content: "",
    agreed: false,
  });

  const [file, setFile] = useState(null); // 파일 상태 관리

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) return <div>공고를 찾을 수 없습니다.</div>;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 📂 파일 선택 핸들러 (용량 제한 추가)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // 2MB 제한 (EmailJS 무료 버전 한계 고려)
      if (selectedFile.size > 2 * 1024 * 1024) {
        alert(
          "파일 용량은 2MB 이하여야 합니다.\n용량이 큰 경우 링크(URL)로 제출해주세요.",
        );
        e.target.value = ""; // 입력 초기화
        setFile(null);
      } else {
        setFile(selectedFile);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    // ✨ sendForm으로 변경 (파일 전송 가능)
    // formRef.current에는 <form> 태그 자체가 들어갑니다.
    emailjs
      .sendForm(
        "service_8cg717l", // Service ID
        "template_blzm7va", // Template ID
        formRef.current, // 🔴 폼 요소 자체를 전달
        "lFrkIW0PcBfkTAkgb", // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(`${formData.name}님, 지원서(파일 포함)가 접수되었습니다!`);
          navigate("/recruitment");
        },
        (err) => {
          console.log("FAILED...", err);
          alert(
            "전송에 실패했습니다. 파일 용량이 너무 크거나 네트워크 문제일 수 있습니다.",
          );
        },
      );
  };

  return (
    <div className="recruitment-page">
      <main className="apply-container">
        <div className="apply-wrapper">
          <h2 className="apply-title">입사 지원하기</h2>
          <p className="apply-subtitle">
            지원 분야: <span className="job-highlight">{job.title}</span>
          </p>

          {/* ✨ ref={formRef} 추가 */}
          <form className="apply-form" ref={formRef} onSubmit={handleSubmit}>
            {/* EmailJS 템플릿에서 쓸 변수(job_title)를 숨겨서 보냄 */}
            <input type="hidden" name="job_title" value={job.title} />

            {/* 1. 이름 */}
            <div className="form-group">
              <label>
                이름 <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="홍길동"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* 2. 연락처 */}
            <div className="form-group">
              <label>
                연락처 <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="010-1234-5678"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* 3. 이메일 */}
            <div className="form-group">
              <label>
                이메일 <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* 4. 이력서 파일 첨부 (추가됨) */}
            <div className="form-group">
              <label>이력서/포트폴리오 파일 (PDF)</label>
              <p className="helper-text">PDF 파일만 가능 (최대 2MB)</p>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  name="resume_file" /* EmailJS 템플릿에는 이 이름으로 첨부됨 */
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* 5. 포트폴리오 URL (보조 수단) */}
            <div className="form-group">
              <label>포트폴리오 링크 (선택)</label>
              <p className="helper-text">용량이 큰 경우 링크로 입력해주세요.</p>
              <input
                type="url"
                name="portfolio"
                placeholder="https://..."
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>

            {/* 6. 자기소개 */}
            <div className="form-group">
              <label>간단한 자기소개 및 지원동기</label>
              <textarea
                name="content"
                rows="5"
                placeholder="자유롭게 작성해주세요."
                value={formData.content}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* 7. 동의 체크 */}
            <div className="agreement-box">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                />
                <span className="agree-text">
                  [필수] 개인정보 수집 및 이용에 동의합니다. 주식회사 오온(이하
                  '회사'라고 합니다)는 개인정보보호법 등 관련 법령상의
                  개인정보보호 규정을 준수하며 귀하의 개인정보보호에 최선을
                  다하고 있습니다. 회사는 개인정보보호법에 근거하여 다음과 같은
                  내용으로 개인정보를 수집 및 처리하고자 합니다. 다음의 내용을
                  자세히 읽어보시고 모든 내용을 이해하신 후에 동의 여부를
                  결정해주시기 바랍니다. 제1조(개인정보 수집 및 이용 목적)
                  이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 목적
                  이외의 용도로는 사용되지 않습니다. - 채용절차의 진행 및 관리
                  제2조(개인정보 수집 및 이용 항목) 회사는 개인정보 수집 목적을
                  위하여 다음과 같은 정보를 수집합니다. 법적 근거 : 「개인정보
                  보호법」 제15조제1항제4호(‘계약 체결·이행’) - [필수항목]
                  : 성명, 전화번호 및 이메일 제3조(개인정보 보유 및 이용 기간)
                  수집한 개인정보는 수집·이용 동의일로부터  개인정보 수집·이용
                  목적을 달성할 때까지  보관 및 이용합니다. 개인정보 보유기간의
                  경과, 처리목적의 달성 등 개인정보가 불필요하게 되었을 때에는
                  지체없이 해당 개인정보를 파기합니다.
                </span>
              </label>
            </div>

            {/* 버튼 */}
            <div className="form-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={() => navigate(-1)}
              >
                취소
              </button>
              <button type="submit" className="btn-submit">
                지원하기
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer2 />
    </div>
  );
}
