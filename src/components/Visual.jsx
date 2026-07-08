import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { Section } from "./common/Section";
import { Card2 } from "./common/Card2";
import { CardGlassmorphism } from "./common/CardGlassmorphism";
import { ButtonGlassmorphism } from "./common/Button/ButtonGlassmorphism";
import { BookOpenText, CodeXml, Handshake, MonitorSmartphone, Puzzle, UserRound } from "lucide-react";

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
const iconStyle = {
  size: 36,
  strokeWidth: 2,
};
  const iconMap = {
    icon1:<UserRound {...iconStyle} className="text-sky-500" />,    
    icon2:<CodeXml {...iconStyle} className="text-emerald-500" />,  
    icon3:<MonitorSmartphone />,
    icon4:<Handshake />,
    icon5:<Puzzle />,
    icon6:<BookOpenText />,
  }

  const value = [
    { icon: "icon1", title: "User Experience", con: "사용자의 입장에서 고민하며 직관적이고 편리한 인터페이스를 구현합니다." },
    { icon: "icon2", title: "Publishing Quality", con: "시맨틱 마크업과 반응형 레이아웃으로 유지보수가 쉬운 UI를 구현합니다." },
    { icon: "icon3", title: "Responsive Design", con: "다양한 디바이스에서도 일관된 사용자 경험을 제공합니다." },
    { icon: "icon4", title: "Collaboration", con: "원활한 소통과 적극적인 의견 공유로 함께 성장하는 개발을 지향합니다." },
    { icon: "icon5", title: "Problem Solving", con: "원인을 분석하고 다양한 방법을 시도하며 더 나은 해결책을 찾아갑니다." },
    { icon: "icon6", title: "Continuous Learning", con: "새로운 기술을 꾸준히 익히고 프로젝트에 적용하며 성장합니다." },
  ]

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
          }, 700);
        }
      }, 70);
      return () => clearInterval(timer);
    }
  }, [line]);

  return (
    <>
      <VisualSection id="visual">
        <SectionIn>
          <EditorFrame $mode={theme}>
            <TopBar>
              <Dot color="#ff5f56" />
              <Dot color="#ffbd2e" />
              <Dot color="#27c93f" />
            </TopBar>
            <ConArea>
              <LeftArea $mode={theme}>
                {introText.slice(0, line).map((t, i) => (
                  <Line key={i}>{t}</Line>
                ))}
                {line < introText.length && <Line>{displayText}|</Line>}
              </LeftArea>
              <RightArea>
                <div> 💎 What I Value</div>
                <ValueArea>
                  {value.map((item, i) => (
                    <ValueDiv key={i}>
                      <Icon>{iconMap[item.icon]}</Icon>
                      <p>{item.title}</p>
                      <p>{item.con}</p>
                    </ValueDiv>
                  ))}
                </ValueArea>
              </RightArea>
            </ConArea>
          </EditorFrame>
        </SectionIn>
      </VisualSection>

      {/*
      <VisualSection id="visual">
        <SectionIn>
          <EditorFrame $mode={theme}>
            <TopBar>
              <Dot color="#ff5f56" />
              <Dot color="#ffbd2e" />
              <Dot color="#27c93f" />
            </TopBar>
            <Content>
              <LeftArea $mode={theme}>
                {introText.slice(0, line).map((t, i) => (
                  <Line key={i}>{t}</Line>
                ))}
                {line < introText.length && <Line>{displayText}|</Line>}
              </LeftArea>
              <RightArea></RightArea>
            </Content>
          </EditorFrame>
        </SectionIn>

      </VisualSection>
      */}
    </>
  );
}

/* ========================= styled ========================= */


const VisualSection = styled(Section)`
  margin-top:100px;
`

const SectionIn = styled(Card2)`
  width:100%;
  max-width: 1280px;
  padding:0;
  margin:0 auto;

`


const EditorFrame = styled.div`
  width: 100%;
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

const Content = styled.div`
  display: flex;
`
const ConArea = styled.div`
  display: flex;
  padding:30px;
`

const LeftArea = styled.pre`
  width:50%;
  margin: 18px;
  height:12rem;
  padding: 2rem;

  color: rgba(92, 99, 114, 0.75);
  font-size: 1.25rem;
  line-height: 1.8;
  
  white-space: pre-wrap;

  min-height: 9rem;
`;

const Line = styled.div`
  color: inherit;
`;


const RightArea = styled.div`
  width:50%;
  >div{
    color:var(--blue-main);
    font-size: var(--font-size-lg);
    font-weight:${({ theme }) => theme.fontWeight.bold};;
    margin-bottom:16px;
  }

`
const ValueArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:12px;
`

const ValueDiv = styled.div`
  background:#ffffff8d;
  width:31%;
  padding:10px 0;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  
  p:first-of-type{
    font-size:1.0625rem;
    color:#000;
    font-weight:${({ theme }) => theme.fontWeight.bold};
    font-size:var(--font-size-base);
    margin:12px 8px;
  }
  p:last-of-type{
    font-size: var(--font-size-sm);
    color:var(--gray-main);
    word-break: keep-all;
  }
`


  



const Icon = styled.div`
`
