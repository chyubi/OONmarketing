import React from "react";
import "./Reviews.css";

// 말풍선 이미지 Import
import chatBubbleImg from "../../../assets/images/Reviews/말풍선.svg";

export default function Reviews() {
  // 리뷰 데이터 배열
  const reviewsData = [
    {
      id: 1,
      role: "3년차/온라인 셀러",
      content: `플랫폼은 복잡해지고 광고비는 올라가는데, OON은 전환 구조부터 다시 잡아줘서 방향이 보였어요.
무엇보다 매주 리포트에 다음 주에는 어떻게 진행해야 할 지가 정리되어
운영이 훨씬 쉬워졌습니다.`,
      date: "2026/02/04",
      likes: 23,
    },
    {
      id: 2,
      role: "소규모 브랜드/운영 담당",
      content: `소재가 약하면 광고비를 늘려도 전환이 안 난다는 걸
수치로 보여주고 바로 수정해줘서 납득이 됐습니다.
"어디가 문제인지"를 명확히 알려주는 게 가장 컸어요.`,
      date: "2026/01/24",
      likes: 2,
    },
    {
      id: 3,
      role: "초기 브랜드/대표",
      content: `사람 쇼호스트 섭외가 부담이라 시작도 못 했는데,
AI 라이브로 일단 돌려보고 테스트 해보는게 가능해졌습니다.
방송 데이터를 보고 상세페이지/소재까지 같이 개선하니
매출이 '한 번'이 아니라 '루틴'으로 쌓이기 시작했어요.`,
      date: "2022/06/24",
      likes: 4,
    },
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        {/* === 왼쪽: 말풍선 이미지 영역 === */}
        <div className="reviews-left">
          <div className="img-wrapper">
            <img
              src={chatBubbleImg}
              alt="Reviews Chat Bubble"
              className="chat-bubble-img"
            />
          </div>
        </div>

        {/* === 오른쪽: 후기 리스트 영역 === */}
        <div className="reviews-right">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-item">
              {/* 직함/제목 */}
              <h3 className="review-role">{review.role}</h3>

              {/* 내용 (줄바꿈 처리) */}
              <p className="review-content">
                {review.content.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>

              {/* 하단 정보 (날짜 & 좋아요) */}
              <div className="review-footer">
                <span className="review-date">{review.date}</span>
                <div className="review-likes">
                  <span className="heart-icon">♥</span>
                  <span className="like-count">{review.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
