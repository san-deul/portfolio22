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
        if (entries[0].isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.5 } // 50% 보이면 발동
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  /* ✨ 글자 타이핑 효과 */
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
   styled-components
====================== */

const FooterSection = styled(Section)`
  height: auto;
  margin-top: 120px;
  text-align: center;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top:0px;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FooterWrap = styled(SectionIn)`
  width: 100%;
  text-align: center;
  padding: 4rem;
  height: 200px;
  border-top: 1px solid var(--clr-border);
  backdrop-filter: blur(15px);
  animation: ${fadeIn} 1s ease forwards;

  @media ${({ theme }) => theme.device.tablet} {
    height:auto;
    padding:1rem;
  }
`;

const FooterText = styled.p`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--clr-text);
  background: linear-gradient(90deg, #93c5fd, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: pre;
  transition: all 0.3s ease;
  height: 36px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
    white-space: pre-wrap;
  }
`;
