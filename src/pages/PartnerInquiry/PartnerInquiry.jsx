import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Footer2 from "../../components/common/Footer/Footer2";
import emailjs from "@emailjs/browser"; // ★ 이메일 전송 라이브러리
import "./PartnerInquiry.css";

export default function PartnerInquiry() {
  const navigate = useNavigate();
  const form = useRef(); // ★ 폼 데이터를 가져오기 위한 참조

  const handleSubmit = (e) => {
    e.preventDefault();

    // ★★★ EmailJS 전송 로직 ★★★
    // 아래의 'SERVICE_ID', 'TEMPLATE_ID', 'PUBLIC_KEY'를 EmailJS 홈페이지에서 받아와서 넣어야 합니다.
    emailjs
      .sendForm(
        "service_uq7tpwr", // 1. 서비스 ID
        "template_64ufa9h", // 2. 템플릿 ID
        form.current,
        "lFrkIW0PcBfkTAkgb", // 3. 퍼블릭 키 (Public Key)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "성공적으로 문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.",
          );
          navigate("/"); // 전송 성공 시 메인으로 이동
        },
        (error) => {
          console.log(error.text);
          alert(
            "전송에 실패했습니다. 다시 시도해주시거나 전화로 문의 부탁드립니다.",
          );
        },
      );
  };

  return (
    <div className="inquiry-page-wrapper">
      <Header />

      <main className="inquiry-main">
        <div className="inquiry-container">
          <div className="inquiry-header">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0048fb"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="inquiry-title">파트너 문의하기</h1>
          </div>

          {/* ★★★ [수정] ref={form} 추가 ★★★ */}
          <form ref={form} className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                이름 <span className="required">*</span>
              </label>
              {/* name 속성이 이메일 템플릿의 변수명이 됩니다 */}
              <input
                type="text"
                name="user_name"
                placeholder="신청자 성함을 입력해주세요."
                required
              />
            </div>

            <div className="form-group">
              <label>
                전화번호 <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="user_phone"
                placeholder="연락 가능한 전화번호를 입력해주세요."
                required
              />
            </div>

            <div className="form-group">
              <label>
                회사명 <span className="required">*</span>
              </label>
              <input
                type="text"
                name="company_name"
                placeholder="문의하는 회사명을 입력해주세요."
                required
              />
            </div>

            <div className="form-group">
              <label>웹사이트</label>
              <input
                type="url"
                name="website_url"
                placeholder="웹사이트 주소를 입력해주세요. (없을 시 생략해주세요.)"
              />
            </div>

            <div className="form-group">
              <label>
                문의내용 <span className="required">*</span>
              </label>
              <textarea
                name="message"
                placeholder="문의하실 내용을 입력해주세요."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>
                개인정보수집 및 이용동의 <span className="required">*</span>
              </label>
              <div className="privacy-box">
                주식회사 오온(이하 '회사'라고 합니다)는 개인정보보호법 등 관련
                법령상의 개인정보보호 규정을 준수하며 귀하의 개인정보보호에
                최선을 다하고 있습니다. 회사는 개인정보보호법에 근거하여 다음과
                같은 내용으로 개인정보를 수집 및 처리하고자 합니다. 다음의
                내용을 자세히 읽어보시고 모든 내용을 이해하신 후에 동의 여부를
                결정해주시기 바랍니다. 제1조(개인정보 수집 및 이용 목적)
                이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 목적
                이외의 용도로는 사용되지 않습니다. - 고객 문의 처리
                제2조(개인정보 수집 및 이용 항목) 회사는 개인정보 수집 목적을
                위하여 다음과 같은 정보를 수집합니다. - [필수항목] : 성명,
                전화번호 제3조(개인정보 보유 및 이용 기간) 수집한 개인정보는
                수집·이용 동의일로부터  개인정보 수집·이용 목적을 달성할 때까지 
                보관 및 이용합니다. 개인정보 보유기간의 경과, 처리목적의 달성 등
                개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
                파기합니다.
              </div>
            </div>

            <button type="submit" className="submit-btn">
              동의하고 문의하기
            </button>
          </form>
        </div>
      </main>

      <Footer2 />
    </div>
  );
}
