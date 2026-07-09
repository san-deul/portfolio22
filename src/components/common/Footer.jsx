import styled, { keyframes } from "styled-components";
import { useEffect, useState, useRef } from "react";
import { Section, SectionIn } from "./Section";

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

  height: 8.75rem !important;
  min-height:auto;
  text-align: center;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 0;
  }

  padding:0;
  display: flex;
  align-items: center
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FooterWrap = styled.div`
  width: 100%;
  text-align: center;

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
  background: linear-gradient(90deg, #93c5fd, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  white-space: pre;
  height: 2.25rem;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2rem;
    white-space: pre-wrap;
    color:blue;
  }
`;