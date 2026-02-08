// /assets/js/core/ComponentLoader.js
import { safeExecute } from "./ErrorHandler.js";

/**
 * HTML 컴포넌트를 동적으로 로드하여 타겟 요소에 주입합니다.
 * @param {string} targetId - 컴포넌트를 넣을 요소의 ID
 * @param {string} filePath - HTML 파일 경로
 */
export async function loadComponent(targetId, filePath) {
  await safeExecute(async () => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      // 해당 페이지에 타겟 요소가 없으면 조용히 종료 (에러 아님)
      return;
    }

    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(
        `Failed to load component: ${filePath} (${response.status})`,
      );
    }

    const htmlContent = await response.text();
    targetElement.innerHTML = htmlContent;

    // 컴포넌트 로드 후 스크립트 실행이 필요한 경우 이벤트 발생
    const event = new CustomEvent("component:loaded", {
      detail: { id: targetId },
    });
    document.dispatchEvent(event);

    console.log(`Component loaded: ${filePath}`);
  }, "ComponentLoader");
}

// 초기화 로직
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("global-header", "/components/header.html");
  loadComponent("global-footer", "/components/footer.html");
});
