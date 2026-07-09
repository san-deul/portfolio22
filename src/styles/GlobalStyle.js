import { createGlobalStyle } from "styled-components";

import PretendardThin from "../assets/fonts/pretendard/Pretendard-Thin.subset.woff2";
import PretendardExtraLight from "../assets/fonts/pretendard/Pretendard-ExtraLight.subset.woff2";
import PretendardLight from "../assets/fonts/pretendard/Pretendard-Light.subset.woff2";
import PretendardRegular from "../assets/fonts/pretendard/Pretendard-Regular.subset.woff2";
import PretendardMedium from "../assets/fonts/pretendard/Pretendard-Medium.subset.woff2";
import PretendardSemiBold from "../assets/fonts/pretendard/Pretendard-SemiBold.subset.woff2";
import PretendardBold from "../assets/fonts/pretendard/Pretendard-Bold.subset.woff2";
import PretendardExtraBold from "../assets/fonts/pretendard/Pretendard-ExtraBold.subset.woff2";
import PretendardBlack from "../assets/fonts/pretendard/Pretendard-Black.subset.woff2";

import { device } from "./theme"



const GlobalStyle = createGlobalStyle`
  /* === Tailwind Directives === */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* === Reset (Meyer Reset v2.0) === */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;

  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a:hover, a:active, a:focus {
    outline: none;
    text-decoration: none;
  }

  a {
    outline: none;
    text-decoration: none;
  }

  a:link, a:visited {
    color: #000;
    text-decoration: none;
  }

  a:hover, a:focus, a:active {
    color: #000;
    text-decoration: none;
  }

    /* === Font Face === */
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardThin}) format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraLight}) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraBold}) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBlack}) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }



  :root {
    --mainfont: 'Pretendard';
    
    --gray-main:#54575c;
    --gray-sub:#7b8797;
    
    --gray-line:rgba(120, 135, 160, 0.18);

    /* --blue-main:#185fa5; */
    --blue-main2:#4f7cff;
    --blue-main:#185fa5;;
    --blue-sub:#d4e5f5;
    --blue-sub2:#619dc0d5;;


    /* 폰트 사이즈 */ 
    --font-size-xs: 0.75rem;   /* 12px */
    --font-size-sm: 0.875rem;  /* 14px */
    --font-size-base: 1rem;    /* 16px */
    --font-size-lg: 1.125rem;  /* 18px */
    --font-size-xl: 1.5rem;    /* 24px */
    --font-size-2xl: 2rem;     /* 32px */
    
  }

  * {
    margin: 0;
    padding: 0;
    font-family: var(--mainfont);
    box-sizing: border-box;
  }

  html{
    font-size:16px;
  }
  
  @media ${device.laptop} {
    html {
      font-size: 15px;
    }
  }

  @media ${device.tablet} {
    html {
      font-size: 14px;
    }
  }

  @media ${device.mobile} {
    html {
      font-size: 13px;
    }
  }

  /* === Global Body === */
  body {
  
  }

  #root {
    width: 100%;
    //background: var(--clr-bg);
    min-height: 100vh;
   background:#EEF2FA;
    /* background:#000; */
   }

  .section {
    width: 100%;
    /*height: 100vh;*/
    height:auto;
    background:skyblue
  }

  .section_in {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  .title {
    font-size: 3.75rem; /* text-6xl */
    font-weight: 900; /* font-black */
    text-align: center;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 40px;
  }

  .theme-btn {
    position: fixed;
    top: 2rem;
    right: 0;
    z-index: 9999;
    //background: linear-gradient(90deg, #6a11cb, #2575fc);
    border: none;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(120, 150, 255, 0.5);
    transition: 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .theme-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(120, 150, 255, 0.8);
  }
`;

export default GlobalStyle;
