
import { Card } from "./common/Card";
import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/Title";
import styled, { keyframes } from 'styled-components';

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React"],
  backend: ["Node.js", "Express", "JAVA", "MySQL", "SpringBoot", "Oracle"],
  tools: ["Git/GitHub", "Supabase"]
};

const experience = [
  { period: "2021. 09 ~ 2022. 03", con: "[디지털디자인] 모바일 웹 & 앱디자인(웹퍼블리셔, jQuery, Vue.js)-A" },
  { period: "2022. 07 ~ 2023. 11", con: "웹퍼블리셔 근무" },
  { period: "2023. 12 ~ 2024. 06", con: "클라우드 활용 JAVA 개발자 양성과정" },
  { period: "2025. 04 ~ 현재", con: "백엔드 개발자 근무 중" },
];

export default function Profile() {


  return (
    <Section>
      <SectionTitle>About Me</SectionTitle>

      <ProfileSectionIn>
        {/* ================= Profile Card ================= */}

        <ProfileCard>
          <ProfileInfo>
            <SubTitle>Profile</SubTitle>
            <ProfileArea>
              <Row>
                <ProfileTitle>Name</ProfileTitle>
                <ProfileCon>강산들</ProfileCon>
              </Row>
              <Row>
                <ProfileTitle>Birth</ProfileTitle>
                <ProfileCon>1994. 02. 08</ProfileCon>
              </Row>
              <Row>
                <ProfileTitle>Phone</ProfileTitle>
                <ProfileCon>010. 4180. 3488</ProfileCon>
              </Row>
              <Row>
                <ProfileTitle>E-mail</ProfileTitle>
                <ProfileCon>bliss0208@naver.com</ProfileCon>
              </Row>
              <Row>
                <ProfileTitle>GitHub</ProfileTitle>
                <ProfileCon>
                  <a href="https://github.com/san-deul" target="_blank" rel="noreferrer">
                    github.com/san-deul
                  </a>
                </ProfileCon>
              </Row>
            </ProfileArea>
          </ProfileInfo>

        </ProfileCard>

        <ProfileCard>
          <SubTitle>Skills</SubTitle>

          <SkillGroup>
            
            <SkillList>
              {skills.frontend.map((s, i) => <li key={i}>{s}</li>)}
            </SkillList>
          </SkillGroup>

          <SkillGroup>
            
            <SkillList>
              {skills.backend.map((s, i) => <li key={i}>{s}</li>)}
            </SkillList>
          </SkillGroup>

          <SkillGroup>
            
            <SkillList>
              {skills.tools.map((s, i) => <li key={i}>{s}</li>)}
            </SkillList>
          </SkillGroup>
        </ProfileCard>


        {/*
        <Card flex>
          

        </Card>*/}

        {/* ================= Skills Card ================= */}




        {/* ================= Experience Card ================= */}
        <ProfileCard>
          <SubTitle>Experience</SubTitle>

          <CareerList>
            {experience.map((m, i) => (
              <li key={i}>
                <p className="period">{m.period}</p>
                <strong>{m.con}</strong>
              </li>
            ))}
          </CareerList>
        </ProfileCard>

      </ProfileSectionIn>
    </Section>
  );
}

/* ========================================================= */
/* ========================= Styled ========================= */
/* ========================================================= */

const SectionTitle = styled(Title)`

`;

const ProfileSectionIn = styled(SectionIn)`
  display: flex;
  flex-direction: column;
  gap: 5%;
  width: 100%;
  color: #fff;
  transition: 0.4s ease;
`;
const ProfileCard = styled(Card)`
  width:100%;
  margin-bottom:20px;
`
/*
const Card = styled.div`
  width: 100%;
  background: var(--clr-card);
  border-radius: 20px;
  border: 1px solid var(--clr-border);
  padding: 2rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 25px var(--clr-glow);
  transition: 0.3s ease;
  margin-bottom:20px;


  ${(props) =>
    props.flex &&
    `
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  `}
`;
*/
const SubTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.4rem;
  background: linear-gradient(to right, #818cf8, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProfileInfo = styled.div`
  width: 100%;
`;

const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

const ProfileTitle = styled.div`
  width: 25%;
  font-weight: 600;
`;

const ProfileCon = styled.div`
  width: 75%;
  word-break: break-all;

  a {
    color:  #fff !important;
    text-decoration: underline;
  }
`;



/* 테두리 회전 애니메이션 */
const rotateBorder = keyframes`
  to {
    --gradient-angle: 360deg;
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;

  li {
    position: relative;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(10px);
    font-size: 0.85rem;
    border: 1px solid rgba(255,255,255,0.12);
    transition: transform 0.25s ease, background 0.25s ease;
    z-index: 0;

    /* CSS 변수 초기화 */
    --gradient-angle: 0deg;

    &:hover {
      transform: scale(1.05);
      background: rgba(255,255,255,0.18);
      border-color: transparent;
    }

    /* 회전하는 gradient border */
    &::before {
      content: "";
      position: absolute;
      inset: -3px;
      border-radius: 12px;
      padding: 3px;
      z-index: -1;



      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask-composite: exclude;
      -webkit-mask-composite: xor;

      opacity: 0;
      transition: opacity 0.25s ease;
    }

    &:hover::before {
      opacity: 1;
      animation: ${rotateBorder} 4s linear infinite;
    }
  }
`;






const SkillGroup = styled.div`
  margin-bottom: 1.4rem;
`;

const SkillGroupTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.6rem;
  color: #fff;
  font-weight: 600;
`;

const CareerList = styled.ul`
  li {
    margin-bottom: 1.2rem;

    .period {
      font-size: 0.85rem;
      color:  #fff;
    }

    strong {
      display: block;
      margin-top: 2px;
      font-size: 1.05rem;
    }
  }
`;
