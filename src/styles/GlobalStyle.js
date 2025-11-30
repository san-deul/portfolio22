import { createGlobalStyle } from "styled-components";

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

  /* === Font === */
  @import url('https://webfontworld.github.io/pretendard/Pretendard.css');

  * {
    margin: 0;
    padding: 0;
    font-family: var(--mainfont);
        box-sizing: border-box;
  }

  :root {
    --mainfont: 'Pretendard';

    /* ==== DARK MODE ==== */
    
    /*
    --clr-bg-dark: radial-gradient(circle at center, #5F4BD8 0%, #0B0730 100%);
    --clr-card-dark: rgba(255, 255, 255, 0.08);
    --clr-border-dark: rgba(255, 255, 255, 0.15);
    --clr-text-dark: #ffffff;
    --clr-muted-dark: #cccccc;
    --clr-glow-dark: rgba(120, 200, 255, 0.4);
*/
    /* ==== LIGHT MODE ==== */
    
    /*
    --clr-bg-light: radial-gradient(circle at center, #edc0bf 0, #c4caef 100%);;
    --clr-bg-light: radial-gradient(circle at center,rgba(236, 233, 252, 1) 0%, #8b86b6ff 100%);
    --clr-card-light: rgba(255, 255, 255, 0.85);
    --clr-border-light: rgba(0, 0, 0, 0.1);
    --clr-text-light: #111111;
    --clr-muted-light: #333333;
    --clr-glow-light: rgba(150, 180, 255, 0.5);
    */
  }

  /* === Default: dark === */
  /*
  [data-theme="dark"] {
    --clr-bg: var(--clr-bg-dark);
    --clr-card: var(--clr-card-dark);
    --clr-border: var(--clr-border-dark);
    --clr-text: var(--clr-text-dark);
    --clr-muted: var(--clr-muted-dark);
    --clr-glow: var(--clr-glow-dark);
  }
*/
  /* === Light === */
  /*
  [data-theme="light"] {
    --clr-bg: var(--clr-bg-light);
    --clr-card: var(--clr-card-light);
    --clr-border: var(--clr-border-light);
    --clr-text: var(--clr-text-light);
    --clr-muted: var(--clr-muted-light);
    --clr-glow: var(--clr-glow-light);
  }*/

  /* === Global Body === */
  body {
    
    //background: var(--clr-bg);
    //color: var(--clr-text);
    //transition: background 0.6s ease, color 0.4s ease;
    
    
    //background-image: url(https://i.postimg.cc/RFqSM2rc/bg.jpg);
   // background-size: contain;
   //background: linear-gradient(45deg, #FC466B, #3F5EFB);
    background: radial-gradient(circle at center,#5F4BD8 0%,#0B0730 100%);




  }

  #root {
    width: 100%;
    background: var(--clr-bg);
    min-height: 100vh;
    
  }

  .section {
    width: 100%;
    height: 100vh;
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
    background: linear-gradient(90deg, #6a11cb, #2575fc);
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
