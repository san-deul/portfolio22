// src/styles/theme.js

// 해상도 기준 값 (원하는 대로 조절 가능)
const size = {
  mobile: '480px',   // ~480px
  tablet: '768px',   // ~768px
  laptop: '1024px',  // ~1024px
  desktop: '1200px', // 1200px 이상
};

// max-width 기준 (PC 디자인 먼저 잡고, 화면이 줄어들수록 덮어쓰기)
export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export { size }; 