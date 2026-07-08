import { Card } from "./common/Card";
import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/MainTitle";
import styled from "styled-components";
import { Card2 } from "./common/Card2";
import { Title1 } from "./common/Title1";
import { ButtonCircle } from "./common/Button/ButtonCircle";
import { Tag1 } from "./common/tag/tag1";
import { TbFlag2 } from "react-icons/tb";
import { Tag2 } from "./common/tag/Tag2";
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";
import { Tag3 } from "./common/tag/Tag3";
import { Tag4 } from "./common/tag/Tag4";
import { Tag5 } from "./common/tag/Tag5";

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
  4px 4px 6px ${nm.shadowDark},
  -4px -4px 6px ${nm.shadowLight}
`;

const nmOutTiny = `
  6px 6px 16px ${nm.shadowDark},
  -6px -6px 16px ${nm.shadowLight}
`;

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js"],
  Backend: ["Node.js", "Express", "JAVA", "SpringBoot",],
  Database: ["Oracle", "MySQL", "Supabase",],
  Tools: ["Git", "GitHub", "VS Code", "Photoshop", "Figma", "Vercel", "Netlify"],
};

const experience = [
  { period: "2021. 09 ~ 2022. 03", con: "[디지털디자인] 모바일 웹 & 앱디자인(웹퍼블리셔, jQuery, Vue.js)-A" },
  { period: "2022. 07 ~ 2023. 11", con: "웹퍼블리셔 근무" },
  { period: "2023. 12 ~ 2024. 06", con: "클라우드 활용 JAVA 개발자 양성과정" },
  { period: "2025. 04 ~ 12", con: "씨드림 코어 백엔드 개발자 근무" },
  { period: "2026. 04 ~ 06", con: "척척밥상 프론트엔드 " },
];

const iconMap = {
  mail:<FaEnvelope />,
  phone:<FaPhone/>,
  github: <FaGithub />,
  
}

const profileData = [
  { icon: "mail", con: "bliss0208@naver.com" , link:"null"},
  { icon: "phone", con: "010 4180 3488" , link:"null"},
  { icon: "github", con: "https://github.com/san-deul" , link:"https://github.com/san-deul"}
]

export default function Profile() {
  return (
    <>
      <Section id="about">
        <Title1>About Me</Title1>
        <ProfileSectionIn>

          <AboutCard1>
            <ProfileCard>
              <ProfileTop>
                <ProfImg $noHover></ProfImg>
                <p>강산들</p>
                <p>Frontend Developer</p>
                <p>gggg</p>
              </ProfileTop>
              <ProfBottom>
                {profileData.map((item,i) =>(
                  <div key={i}>
                    <p>{iconMap[item.icon]}</p>
                    <p>{item.con}</p>
                  </div>
                ))}
                
              </ProfBottom>
            </ProfileCard>
          </AboutCard1>

          <AboutCard>
            <ProfileCon>
              <ProfTitle>
                <span></span>
                <span>🛠️ How I Work</span>
              </ProfTitle>
              <p>
                '잘 동작하는 코드'보다
                '오래 유지할 수 있는 구조'를 만드는 것에 더 큰 가치를 둡니다.<br /><br />

                프로젝트를 완성하는 것보다,
                완성된 프로젝트를 다시 돌아보며 더 나은 구조를 고민하고
                리팩토링하는 과정에서 가장 큰 재미를 느낍니다.<br /><br />

                컴포넌트를 재사용 가능한 형태로 설계하고,
                유지보수성과 사용자 경험을 함께 고려하며
                시간이 지나도 읽기 쉽고 확장 가능한 코드를 만드는 것을 지향합니다.<br /><br />

              </p>
            </ProfileCon>
            <ProfileCon>
              <ProfTitle>
                <span>⚡</span>
                <span>Skills</span>
              </ProfTitle>
              
              {Object.entries(skills).map(([category, list]) => (
                <SkillGroup key={category}>
                  <p>{category}</p>
                  <SkillList>
                    {list.map((s, i) => (
                      <Skill key={i}>{s}</Skill>
                    ))}
                  </SkillList>
                </SkillGroup>
              ))}
            </ProfileCon>

          </AboutCard>

        </ProfileSectionIn>
      </Section>

    </>
  );
}


/* ========================= Styled ========================= */




const ProfileSectionIn = styled(Card2)`
  display: flex;
  align-items: stretch; 
  gap: 18px;
  width: 100%;
  transition: 0.25s ease;
  max-width: 1280px;
  margin:0 auto;
`;

const AboutCard = styled.div`
  gap:16px;
  width:50%;
`
const AboutCard1 = styled(AboutCard)`
  flex: 0 0 38%;
  min-width: 0;

`
const AboutCard2 = styled(AboutCard)``

const ProfileCard = styled.div`
  height:100%;
  background:#fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-radius:16px;
  padding:0 20px;
  >div{padding:16px;}
`;

const ProfileTop = styled.div`
  width: 80%;
  border-bottom:1px solid var(--gray-line);
  text-align: center;
  font-size:var(--font-size-lg);
  font-weight:${({ theme }) => theme.fontWeight.semiBold};;
  p:nth-child(1){

  }
  p:nth-child(2){
    margin-top:8px;
    color:#000;
    font-weight:${({ theme }) => theme.fontWeight.bold};;
  }
  p:nth-child(3){
    font-size:var(--font-size-base);
    color:var(--blue-main);
    margin:4px 0px 6px;
  }
  p:nth-child(4){
    font-size:var(--font-size-sm);
    color:var(--gray-main);
    font-weight:${({ theme }) => theme.fontWeight.medium};;
  }
`

const ProfImg = styled(ButtonCircle)`
  width:6.25rem;
  height:6.25rem;
  margin:0 auto;

`

const ProfBottom = styled.div`
  div{
    display: flex;
    gap:1rem;
    font-size:var(--font-size-base);
    color:var(--gray-main);
    padding:6px 0px;
  }

`
const Icon = styled.div`

`

const ProfTitle = styled.div`
  padding:14px 0;
  span{
    color:var(--blue-main);
    font-size: var(--font-size-lg);
    font-weight:${({ theme }) => theme.fontWeight.bold};;
  }
`

const SubTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.1rem;
  font-weight: 900;
  color: ${nm.text};
  letter-spacing: -0.01em;
`;

const ProfileInfo = styled.div`
  width: 100%;
`;

const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

const ProfileTitle = styled.div`
  width: 25%;
  font-weight: 800;
  color: ${nm.text};

`;


const ProfileCon = styled.div`

  p{
        word-break: keep-all;
  }
`;


const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.55rem 0.9rem;
    border-radius: 999px;
    background: ${nm.bg};
    border: 1px solid ${nm.stroke};
    box-shadow: ${nmOutTiny};

    font-size: 0.85rem;
    font-weight: 800;
    color: ${nm.text};
    transition: transform 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;

    &:hover {
      transform: translateY(-1px);
      color: ${nm.accent};
      box-shadow: 10px 10px 22px ${nm.shadowDark}, -10px -10px 22px ${nm.shadowLight};
    }
  }
`;

const Skill = styled(Tag4)`
  
`

const SkillGroup = styled.div`

  p{
    color:#000;
    font-size: var(--font-size-base);
    font-weight:${({ theme }) => theme.fontWeight.medium};;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;



const CareerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 14px 14px;
    border-radius: 16px;
    border: 1px solid ${nm.stroke};
    background: rgba(255, 255, 255, 0.35);
    box-shadow: ${nmOutTiny};
    margin-bottom: 12px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  .period {
    font-size: 0.85rem;
    color: ${nm.muted};
    margin: 0 0 4px;
    font-weight: 700;
  }

  strong {
    display: block;
    margin-top: 2px;
    font-size: 1.02rem;
    color: ${nm.text};
    line-height: 1.5;
  }
`;