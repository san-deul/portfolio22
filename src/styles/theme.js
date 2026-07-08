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

const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
}

export const gradients = {
  blue: {
    start: '#2563EB',
    end: '#97dbf8',
    css: 'linear-gradient(135deg, #2563EB 0%, #97dbf8 100%)',
  },
}

const shadowColor = {
  dark: "rgba(120, 135, 160, 0.18)",
  light: "rgba(255, 255, 255, 0.95)",
};

const neumorphism = {
  raised: (size = 4, blur = 6) => `
      ${size}px ${size}px ${blur}px ${shadowColor.dark},
      -${size}px -${size}px ${blur}px ${shadowColor.light}
    `,
  pressed: (size = 4, blur = 6) => `
      inset ${size}px ${size}px ${blur}px ${shadowColor.dark},
      inset -${size}px -${size}px ${blur}px ${shadowColor.light}
    `,


}

const glassmorphism = {
  base: {
    background: "rgba(255, 255, 255, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
    blur: "12px",
  },
  hover: {
    background: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(255, 255, 255, 0.6)",
    boxShadow: `
      0 0 16px rgba(255, 255, 255, 0.3),
      0 6px 20px rgba(0, 0, 0, 0.15)
    `,
  },
};


export const theme = {
  device,
  fontWeight,
  gradients,
  neumorphism,
  glassmorphism
}

export { size }; 