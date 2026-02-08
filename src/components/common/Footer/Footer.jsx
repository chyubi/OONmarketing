import React from "react";
import { useNavigate } from "react-router-dom"; // navigate 추가
import "./Footer.css";

import Footerlogo from "../../../assets/images/Footer/Footer-logo.svg";

export default function Footer() {
  const navigate = useNavigate();

  // 기존 scrollToTop 대신 문의하기 페이지로 이동
  const handleContactClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0); // 이동 후 스크롤 최상단 맞춤
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* CONTACT US 이미지 클릭 시 문의하기 페이지로 이동 */}
        <div className="footer-cta-image-wrapper" onClick={handleContactClick}>
          <img src={Footerlogo} alt="CONTACT US" className="footer-cta-img" />
        </div>
      </div>
    </footer>
  );
}
