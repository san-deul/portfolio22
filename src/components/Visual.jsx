import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { Section, SectionIn } from "./common/Section";

const nm = {
  bg: "#EEF2FA",                 // 예시 이미지처럼 살짝 보라/블루 톤
  text: "#2b3445",
  muted: "#7b8797",
  shadowDark: "rgba(120, 135, 160, 0.18)",  // ✅ 매우 연하게
  shadowLight: "rgba(255, 255, 255, 0.95)", // ✅ 위쪽 빛
  stroke: "rgba(255,255,255,0.55)",         // ✅ 얇은 하이라이트
};

const nmOutSoft = `
  10px 10px 26px ${nm.shadowDark},
  -10px -10px 26px ${nm.shadowLight}
`;

const nmOutTiny = `
  6px 6px 16px ${nm.shadowDark},
  -6px -6px 16px ${nm.shadowLight}
`;
export default function Visual({ theme }) {


  const introText = [
    "1픽셀의 디테일부터 보이지 않는 데이터의 흐름까지.",
    "기술적 이해와 사용자 경험, 두 관점을 연결하며",
    "완성도 높은 인터페이스를 만드는 개발자가 되겠습니다.",

  ];

  const [displayText, setDisplayText] = useState("");
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (line < introText.length) {
      setDisplayText("");
      let i = 0;
      const timer = setInterval(() => {
        setDisplayText(introText[line].slice(0, i + 1));
        i++;
        if (i === introText[line].length) {
          clearInterval(timer);
          setTimeout(() => { 
             setDisplayText("");
          setLine((prev) => prev + 1);
        },700);
      }
      }, 70);
  return () => clearInterval(timer);
}
  }, [line]);

return (

  <VisualSection id="visual">
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

  </VisualSection>

);
}

/* ========================= styled ========================= */


const VisualWrap1 = styled.section`
  height: 100vh;

  /*
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(180deg, #f9f9fb 0%, #f1edff 100%)"
      : "radial-gradient(circle at center, rgba(80, 40, 120, 0.3), rgba(10, 10, 30, 1))"};
*/  transition: background 0.4s ease;
`;

const VisualSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${nm.bg};
 
`


const EditorFrame = styled.div`
  width: 100%;
  border-radius: 26px;
  overflow: hidden;
  background: ${nm.bg};
  box-shadow: ${nmOutSoft};
  border: 1px solid ${nm.stroke};
`;


const TopBar = styled.div`
   height: 44px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;

  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.55),
    rgba(255,255,255,0.15)
  );
  border-bottom: 1px solid rgba(120,135,160,0.12);
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;



const CodeArea = styled.pre`
     margin: 18px;
     height:12rem;
  padding: 2rem;
  //background:blue;
  //background: rgba(255,255,255,0.35); /* ✅ 예시처럼 살짝 밝게 */
  //border: 1px solid rgba(255,255,255,0.55);
  //border-radius: 18px;

  /* ✅ 패인 느낌 X, 대신 아주 은은한 out */
  //box-shadow: ${nmOutTiny};

  color: rgba(92, 99, 114, 0.75);
  font-size: 1.25rem;
  line-height: 1.8;
  
  white-space: pre-wrap;

  min-height: 9rem;
`;

const Line = styled.div`
  color: inherit;
`;
