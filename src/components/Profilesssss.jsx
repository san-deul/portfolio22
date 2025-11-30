// Updated Profile component styled similar to reference image
import styled from "styled-components";
import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/Title";

export default function Profilesssss() {
  const skills = [
    { name: "HTML", level: "Good" },
    { name: "CSS(SCSS)", level: "Strong" },
    { name: "JavaScript", level: "Basic" },
    { name: "React", level: "Strong" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "MySQL", level: "Basic" },
    { name: "Git/GitHub", level: "Intermediate" },
    { name: "Supabase", level: "Basic" },
    { name: "Figma", level: "Basic" }
  ];

  const careers = [
    { period: "2018~2021", role: "웹 퍼블리셔", desc: "디자인 시안을 반응형 웹으로 구현 및 유지보수" },
    { period: "2021~2024", role: "백엔드 개발자", desc: "PHP 및 Node.js 기반 쇼핑몰 백엔드 유지보수 및 자동화 시스템 개발" },
    { period: "2024~현재", role: "프론트엔드 개발자 준비", desc: "React 기반 개인 프로젝트 및 포트폴리오 개발" }
  ];

  return (
    <Section>
      <ProfileSectionIn>
        <LeftCard>
          <ProfileImg>
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328e3e4f?q=80&w=400"
              alt="profile"
            />
          </ProfileImg>
          <Name>강산들</Name>
          <Job>Frontend Developer</Job>
          <Desc>
            퍼블리셔로 시작해 웹 서비스의 구조 전반을 이해하고자 백엔드 개발을 경험했습니다. 현재는 사용자 경험을 중심으로 한 프론트엔드 개발자로 성장하기 위해 꾸준히 공부하고 있습니다.
          </Desc>
        </LeftCard>

        <RightCard>
          <SectionBlock>
            <BlockTitle>Career</BlockTitle>
            <CareerList>
              {careers.map((c, i) => (
                <li key={i}>
                  <span className="period">{c.period}</span>
                  <strong>{c.role}</strong>
                  <p>{c.desc}</p>
                </li>
              ))}
            </CareerList>
          </SectionBlock>

          <SectionBlock>
            <BlockTitle>Skills</BlockTitle>
            <SkillGrid>
              {skills.map((s, i) => (
                <SkillItem key={i}>
                  <span>{s.name}</span>
                  <small>{s.level}</small>
                </SkillItem>
              ))}
            </SkillGrid>
          </SectionBlock>
        </RightCard>
      </ProfileSectionIn>
    </Section>
  );
}

/* ================= Styled ================= */

const ProfileSectionIn = styled(SectionIn)`
  display: flex;
  gap: 2rem;
  padding: 3rem 1rem;
  max-width: 1100px;
`;

const CardBase = styled.div`
  background: var(--clr-card);
  border-radius: 20px;
  border: 1px solid var(--clr-border);
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(20px);
`;

const LeftCard = styled(CardBase)`
  flex: 0 0 32%;
  text-align: center;
`;

const RightCard = styled(CardBase)`
  flex: 1;
`;

const ProfileImg = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
  border: 2px solid var(--clr-border);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.h2`
  font-size: 1.8rem;
  margin-top: 1rem;
  font-weight: 700;
`;

const Job = styled.h4`
  font-size: 1rem;
  color: var(--clr-muted);
  margin-bottom: 1rem;
`;

const Desc = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SectionBlock = styled.div`
  margin-bottom: 2.5rem;
`;

const BlockTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CareerList = styled.ul`
  li {
    margin-bottom: 1rem;

    .period {
      display: block;
      font-size: 0.85rem;
      color: var(--clr-muted);
    }

    strong {
      font-size: 1rem;
      margin-top: 0.25rem;
      display: block;
    }

    p {
      margin-top: 0.3rem;
      font-size: 0.9rem;
      color: var(--clr-text);
    }
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 0.7rem;
`;

const SkillItem = styled.div`
  background: var(--clr-card-light);
  border: 1px solid var(--clr-border);
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px var(--clr-glow);
  backdrop-filter: blur(8px);

  span {
    font-size: 0.9rem;
    font-weight: 600;
  }

  small {
    font-size: 0.75rem;
    opacity: 0.8;
  }
`;
