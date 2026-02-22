import styled, { keyframes } from "styled-components";
import { useEffect, useState, useRef } from "react";
import { Section, SectionIn } from "./Section";

/* =========================
   ✅ Soft Neumorphism Tokens (Light only)
========================= */
const nm = {
  bg: "#EEF2FA",
  text: "#2b3445",
  muted: "#7b8797",
  accent: "#4f7cff",
  shadowDark: "rgba(120, 135, 160, 0.18)",
  shadowLight: "rgba(255, 255, 255, 0.95)",
  stroke: "rgba(255,255,255,0.65)",
};

const nmOutSoft = `
  10px 10px 26px ${nm.shadowDark},
  -10px -10px 26px ${nm.shadowLight}
`;

export default function Footer() {
  const fullText = "Thank you for watching my portfolio ✨";
  const [text, setText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const footerRef = useRef(null);

  /* 👀 Footer가 화면에 보이면 startTyping true */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartTyping(true);
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  /* ✨ 타이핑 효과 */
  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 80);

    return () => clearInterval(timer);
  }, [startTyping]);

  return (
    <FooterSection ref={footerRef}>
      <FooterWrap>
        <FooterText>{text}</FooterText>
      </FooterWrap>
    </FooterSection>
  );
}

/* =====================
   styled-components (Soft Neumorphism Footer)
====================== */

const FooterSection = styled(Section)`
  background: ${nm.bg};
  height: 140px !important;
  min-height:auto;
  margin-top: 120px;
  text-align: center;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 0;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FooterWrap = styled.div`
  width: 100%;
  text-align: center;
  padding: 4rem;
  height: 200px;

  background: ${nm.bg};
  border-radius: 26px;


  animation: ${fadeIn} 0.8s ease forwards;

  @media ${({ theme }) => theme.device.tablet} {
    height: auto;
    padding: 1.6rem;
  }
`;

const FooterText = styled.p`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: ${nm.text};

  /* ✅ 은은한 포인트 gradient */
  background: linear-gradient(90deg, #93c5fd, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  white-space: pre;
  height: 36px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
    white-space: pre-wrap;
  }
`;