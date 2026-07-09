import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { Section, SectionIn } from "./common/Section";
import { Card2 } from "./common/Card2";
import { CardGlassmorphism } from "./common/CardGlassmorphism";
import { ButtonGlassmorphism } from "./common/Button/ButtonGlassmorphism";
import { BookOpenText, CodeXml, Handshake, MonitorSmartphone, Puzzle, UserRound } from "lucide-react";

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
    icon1: <UserRound {...iconStyle} className="text-sky-500" />,
    icon2: <CodeXml {...iconStyle} className="text-emerald-500" />,
    icon3: <MonitorSmartphone {...iconStyle} className="text-violet-500" />,
    icon4: <Handshake {...iconStyle} className="text-rose-500" />,
    icon5: <Puzzle {...iconStyle} className="text-amber-500" />,
    icon6: <BookOpenText {...iconStyle} className="text-blue-500" />,
  }

  const value = [
    { icon: "icon1", title: "User Experience", con: "사용자의 입장에서 고민하며 직관적이고 편리한 인터페이스를 구현합니다." },
    { icon: "icon2", title: "Publishing Quality", con: "시맨틱 마크업과 반응형 레이아웃으로 유지보수가 쉬운 UI를 구현합니다." },
    { icon: "icon3", title: "Responsive Design", con: "다양한 디바이스에서도 일관된 사용자 경험을 제공합니다." },
    { icon: "icon4", title: "Collaboration", con: "원활한 소통과 적극적인 의견 공유로 함께 성장하는 개발을 지향합니다." },
    { icon: "icon5", title: "Problem Solving", con: "원인을 분석하고 다양한 방법을 시도하며 더 나은 해결책을 찾아갑니다." },
    { icon: "icon6", title: "Continuous Learning", con: "새로운 기술을 꾸준히 익히고 프로젝트에 적용하며 성장합니다." },
  ]

  const [lines, setLines] = useState(["", "", ""]);
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (line >= introText.length) return;


    let i = 0;
    const timer = setInterval(() => {
      setLines(prev => {
        const next = [...prev];
        next[line] = introText[line].slice(0, i + 1);
        return next;
      });

      i++;

      if (i === introText[line].length) {
        clearInterval(timer);

        setTimeout(() => {
          setLine(prev => prev + 1);
        }, 700);
      }

    }, 70);

    return () => clearInterval(timer);
  }, [line]);

  return (
    <VisualSection id="visual">
      <SectionIn>
        <VisualCard>
          <EditorFrame $mode={theme}>
            <TopBar>
              <Dot color="#ff5f56" />
              <Dot color="#ffbd2e" />
              <Dot color="#27c93f" />
            </TopBar>
            <ConArea>
              <LeftArea>
                <Txt1>
                  안녕하세요. <br />
                  사용자 경험을 중요하게 생각하는 <br />
                  <p>프론트엔드 개발자,<br />
                    ooo입니다.</p>
                </Txt1>
                <Txt2>
                  {lines.map((text, idx) => (
                    <Line key={idx}>
                      {text}
                      {idx === line && line < introText.length ? "|" : ""}
                    </Line>
                  ))}
                </Txt2>
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
          <ScrollDown>
            <MouseIcon>
              <Wheel />
            </MouseIcon>
            <ScrollText>Scroll Down</ScrollText>
          </ScrollDown>
        </VisualCard>
      </SectionIn>

    </VisualSection>

  );
}

/* ========================= styled ========================= */


const VisualSection = styled(Section)`
  margin-top:4.375rem;
  height:100vh;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top:2.5rem;
    height:70vh;
  }
  @media ${({ theme }) => theme.device.mobile} {
    height:100vh;
  }

`


const VisualCard = styled(Card2)`
  padding:0;
  position:relative;

`


const EditorFrame = styled.div`
  width: 100%;
`;


const TopBar = styled.div`
  height: 2.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;


  border-bottom: 1px solid var(--gray-line);
`;

const Dot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

const Content = styled.div`
  display: flex;
`
const ConArea = styled.div`
  display: flex;
  padding: 2.5rem 2.25rem;
  gap:3rem;
  align-items: center;


  @media ${({ theme }) => theme.device.tablet} {
    flex-direction  :column ;
    align-items: flex-start;
    gap:0rem;
    
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction  :column ;
    align-items: flex-start;
    gap:0rem;
    
  }

  
`

const LeftArea = styled.pre`
width:46%;
display: flex;
flex-direction: column;
align-items: flex-start;
font-size:var(--font-size-base);
color:var(--gray-main);
padding-left: 1.5rem;

@media ${({ theme }) => theme.device.tablet} {
  width:100%;
}
@media ${({ theme }) => theme.device.mobile} {
  width:100%;
}

`;

const Txt1 = styled.div`
  font-size: 2rem;
  line-height: 1.2;
  color:#000;
  p{
    color:var(--blue-main);
    font-weight:${({ theme }) => theme.fontWeight.bold};;
  }
`

const Txt2 = styled.div`
  height:auto;
  line-height: 1.6;
  white-space: pre-wrap;

  margin-top:1rem;

  
`

const Line = styled.div`
   min-height: 1.6em;
`;


const RightArea = styled.div`
  width:auto;
  >div{
    color:var(--blue-main);
    font-size: var(--font-size-lg);
    font-weight:${({ theme }) => theme.fontWeight.bold};;
    margin-bottom:1rem;
  }

`
const ValueArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap:0.75rem;
`

const ValueDiv = styled.div`
  background:#ffffff8d;
  width:31%;
  padding:0.625rem 0.375rem;
  border-radius:1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  
  p:first-of-type{
    font-size:1.0625rem;
    color:#000;
    font-weight:${({ theme }) => theme.fontWeight.bold};
    font-size:var(--font-size-base);
    margin:0.5rem 0 0.25rem;
    min-height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  p:last-of-type{
    font-size: var(--font-size-sm);
    color:var(--gray-main);
    word-break: keep-all;
    min-height:3.2rem;
    font-weight:${({ theme }) => theme.fontWeight.medium};
  }
  @media ${({ theme }) => theme.device.tablet} {
    width:48%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    
  }
  
`






const Icon = styled.div`
`


const ScrollDown = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 65%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
`;

const MouseIcon = styled.div`
  width: 1.625rem;
  height: 2.625rem;
  border: 0.125rem solid var(--gray-sub);
  border-radius: 0.875rem;

  display: flex;
  justify-content: center;
  padding-top: 0.375rem;
`;

const scrollAnim = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(0.875rem);
    opacity: 0;
  }
`;

const Wheel = styled.div`
  width: 0.25rem;
  height: 0.5rem;
  border-radius: 0.125rem;
  background:var(--gray-sub);
  animation: ${scrollAnim} 1.6s ease-in-out infinite;
`;

const ScrollText = styled.div`
  font-size: 0.75rem;
  color: var(--gray-sub);
  letter-spacing: 0.05em;
`;