import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { Section, SectionIn } from "./common/Section";

export default function Visual({ theme }) {
  const introText = [
   " 1픽셀의 디테일부터 보이지 않는 데이터의 흐름까지.",
    "기술적 이해와 사용자 경험, 두 관점을 연결하며",
    "완성도 높은 인터페이스를 만들어갑니다.",
  
  ];

  const [displayText, setDisplayText] = useState("");
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (line < introText.length) {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayText(introText[line].slice(0, i + 1));
        i++;
        if (i === introText[line].length) {
          clearInterval(timer);
          setTimeout(() => setLine((prev) => prev + 1), 700);
        }
      }, 70);
      return () => clearInterval(timer);
    }
  }, [line]);

  return (

    <VisualWrap>
      <SectionIn>
        <EditorFrame $mode={theme}>
          <TopBar>
            <Dot color="#ff5f56" />
            <Dot color="#ffbd2e" />
            <Dot color="#27c93f" />

          </TopBar>
          <CodeArea $mode={theme}>
            {introText.slice(0, line).map((t, i) => (
              <Line key={i}>{t}</Line>
            ))}
            {line < introText.length && <Line>{displayText}|</Line>}
          </CodeArea>
        </EditorFrame>
      </SectionIn>

    </VisualWrap>

  );
}

/* ========================= styled ========================= */

const glow = keyframes`
  from { text-shadow: 0 0 6px #a78bfa, 0 0 10px #c084fc; }
  to { text-shadow: 0 0 16px #c084fc, 0 0 25px #e879f9; }
`;

const VisualWrap1 = styled.section`
  height: 100vh;

  /*
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(180deg, #f9f9fb 0%, #f1edff 100%)"
      : "radial-gradient(circle at center, rgba(80, 40, 120, 0.3), rgba(10, 10, 30, 1))"};
*/  transition: background 0.4s ease;
`;

const VisualWrap = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`


const EditorFrame = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(15px);
  background: ${({ $mode }) =>
    $mode === "light"
      ? "rgba(180, 160, 255, 0.35)"
      : "rgba(255, 255, 255, 0.05)"};
  box-shadow: ${({ $mode }) =>
    $mode === "light"
      ? "0 0 40px rgba(160, 120, 255, 0.25)"
      : "0 0 25px rgba(150, 100, 255, 0.2)"};
  transition: all 0.4s ease;
  border: px solid rgba(255, 255, 255, 0.2);
  text-align: center;


    @media  ${(props) => props.theme.device.tablet},
            ${(props) => props.theme.device.mobile}{
    text-align: left;
  }
`;


const TopBar = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  background: rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;



const CodeArea = styled.pre`
  color: ${({ $mode }) =>
    $mode === "light" ? "#7c3aed" : "#d8b4fe"};
  padding: 2rem;
  font-size: 1.3rem;
  line-height: 1.8;
  font-family: "Fira Code", monospace;
  white-space: pre-wrap;
  animation: ${glow} 2s ease-in-out infinite alternate;
  transition: color 0.3s ease;
`;

const Line = styled.div`
  color: inherit;
`;
