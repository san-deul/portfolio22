import { Card } from "./common/Card";
import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/Title";
import styled from "styled-components";

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

const nmOutTiny = `
  6px 6px 16px ${nm.shadowDark},
  -6px -6px 16px ${nm.shadowLight}
`;

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js"],
  backend: ["Node.js", "Express", "JAVA", "MySQL", "SpringBoot", "Oracle"],
  tools: ["Git/GitHub", "Supabase"],
};

const experience = [
  { period: "2021. 09 ~ 2022. 03", con: "[디지털디자인] 모바일 웹 & 앱디자인(웹퍼블리셔, jQuery, Vue.js)-A" },
  { period: "2022. 07 ~ 2023. 11", con: "웹퍼블리셔 근무" },
  { period: "2023. 12 ~ 2024. 06", con: "클라우드 활용 JAVA 개발자 양성과정" },
  { period: "2025. 04 ~ 12", con: "백엔드 개발자 근무" },
];

export default function Profile() {
  return (
    <AboutSection id="about">
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

        {/* ================= Skills Card ================= */}
        <ProfileCard>
          <SubTitle>Skills</SubTitle>

          <SkillGroup>
            <SkillList>
              {skills.frontend.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </SkillList>
          </SkillGroup>

          <SkillGroup>
            <SkillList>
              {skills.backend.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </SkillList>
          </SkillGroup>

          <SkillGroup>
            <SkillList>
              {skills.tools.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </SkillList>
          </SkillGroup>
        </ProfileCard>

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
    </AboutSection>
  );
}

/* ========================================================= */
/* ========================= Styled ========================= */
/* ========================================================= */

const AboutSection = styled(Section)`
  background: ${nm.bg};
`;

const SectionTitle = styled(Title)`
  color: ${nm.text};
`;

const ProfileSectionIn = styled(SectionIn)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  transition: 0.25s ease;
`;

const ProfileCard = styled(Card)`
  width: 100%;
  margin-bottom: 0;
  padding: 26px 22px;

  background: ${nm.bg};
  border-radius: 22px;
  border: 1px solid ${nm.stroke};
  box-shadow: ${nmOutSoft};
`;

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
  width: 75%;
  word-break: break-all;
  color: ${nm.muted};

  a {
    color: ${nm.accent};
    text-decoration: none;
    font-weight: 800;
  }

  a:hover {
    text-decoration: underline;
  }
`;

/* ✅ Skill pill: 패임/글래스 제거 → soft out */
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

const SkillGroup = styled.div`
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

/* (지금 UI에서는 안 쓰고 있어서 남겨둬도 되지만, 깔끔하게 주석/삭제 추천)
const SkillGroupTitle = styled.h4``;
*/

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