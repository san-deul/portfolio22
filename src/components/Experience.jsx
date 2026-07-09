import styled from "styled-components";
import { Section, SectionIn } from "./common/Section";
import { Title1 } from "./common/Title1";
import { Card2 } from "./common/Card2";
import { ArrowDown, Building2, ChevronDown, ChevronsDown, CircleUserRound } from "lucide-react";

import { Tag1 } from "./common/tag/tag1";
import { Tag3 } from "./common/tag/Tag3";
import { Tag2 } from "./common/tag/Tag2";
import { ButtonPill } from "./common/Button/ButtonPill";
import { CardCompanyTitle } from "./common/CardCompanyTitle";
import { Period } from "./common/Period";

const experience = [
  {
    period: "2026. 04 ~ 06",
    title: "척척밥상 ",
    position: "프론트엔드",
    skills: ["React", "TypeScript", "Next.js"],
    responsibility: [
      " Next.js 기반 자사 홈페이지 유지보수 ",
      " Figma 디자인 시안을 기반으로 퍼블리싱 및 UI 구현 ",
      " Naver Maps API 기반 매장 분포 지도 기능 개발 "
    ],
    target: "frontend",
  },
  {
    period: "2025. 04 ~ 12",
    title: "씨드림코어",
    position: "백엔드 개발자",
    skills: ["Node.js", "Express.js", "PHP", "MySQL"],
    responsibility: [
      " Express 기반 Node.js 및 PHP 쇼핑몰 백엔드 개발·유지보수 ",
      " PHP 기반 쇼핑몰 관리자 및 사용자 화면 기능 개선과 레거시 코드 유지보수 ",
      " 제휴사 API 연동을 통한 상품·주문 데이터 수집, 가공 및 정합성 검증 로직 구현 ",
      " 크롤링 기반 실시간 상품 정보 수집 및 자동 갱신 시스템 구축 ",
      " 월말 정산, 예치금 모니터링 등 운영 리스크 구간 자동화 및 안정성 개선 ",
      " 사이트 통합에 따른 회원 DB 스키마 개편 및 데이터 마이그레이션 수행 ",
    ],
    target: "backend",
  },

  {
    period: "2022. 07 ~ 2023. 11",
    title: "에이스파이브",
    position: "웹퍼블리셔",
    skills: ["HTML", "CSS", "jQuery", "PHP"],
    responsibility: [
      " HTML/ CSS / jQuery 를 이용한 웹사이트 퍼블리싱 및 UI/UX 구현 ",
      " 디자인 가이드에 따른 레이아웃 퍼블리싱 작업 ",
      " jQuery를 활용한 인터랙티브 컴포넌트 개발 및 사용자 경험 개선 ",
      " 모바일 및 다양한 디바이스에 맞춘 반응형 레이아웃 설계 ",
      " 고객 요구사항 수렴 및 신속한 피드백 처리 ",
    ],
    target: "publishing",
  },


];


export default function Experience() {

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <Section>
      <SectionIn>
        <Title1>Experience</Title1>

        {experience.map((exp, i) => (
          <CardSection key={i}>
            <Period period={exp.period} />
            <ExperiCon>
              <CardCompanyTitle icon={<Building2 />} title={exp.title} position={exp.position} />
              <Responsibility>
                {exp.responsibility?.map((res, idx) => (
                  <Respon key={idx}>
                    {res}
                  </Respon>
                ))}
              </Responsibility>
              <Skills>
                {exp.skills?.map((skill, idx) => (
                  <Tag3 as="li" key={idx}>
                    {skill}
                  </Tag3>
                ))}
              </Skills>

              <MoreBtn onClick={() => handleScroll(exp.target)} >
                작업물 보기 <ArrowDown />
              </MoreBtn>

            </ExperiCon>
          </CardSection>
        ))}
      </SectionIn>
    </Section>

  )

}

const CardSection = styled(Card2)`
  width:100%;
  margin-top:2.5rem;
  display: flex;
  padding:1.5rem;  
`

const ExperiCon = styled.div`
  width:84%;
`
const Responsibility = styled.ul`
  margin:1.5rem 0px 1.5rem 1rem;
`
const Respon = styled.li`

  position:relative;
  font-size:var(--font-size-base);
  color:var(--gray-main);
  margin-bottom:0.75rem;

  &::before{
    content:'';
    position:absolute;
    top:50%;
    left:-0.65rem;
    transform: translateY(-50%);
    width:0.3125rem;
    height:0.3125rem;
    border-radius: 1.5625rem;
    background: var(--blue-sub2);
  }
`

const Skills = styled.ul`
  display: flex;
  gap:0.5rem;
  position:relative;
  padding-bottom:1.25rem;

  &::before{
    content:'';
    width:100%;
    height:1px;
    background:var(--gray-line);
    position:absolute;
    bottom:0;
    left:0;
  
 }
`

const MoreBtn = styled(ButtonPill)`
  margin-top:0.875rem;
  padding:0.25rem 0.5rem;
  width:7.5rem;
  font-size:var(--font-size-sm);
  color:var(--gray-main);
  svg{
      width:1.125rem;
      height:1.125rem;
      color:var(--gray-main);
      margin-left:0.25rem;
    }
`