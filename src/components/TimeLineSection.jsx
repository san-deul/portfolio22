import styled from "styled-components";
import { Section, SectionIn } from "./common/Section";
import { Title1 } from "./common/Title1";
import { Card2 } from "./common/Card2";
import { Building2, CircleUserRound } from "lucide-react";

const experience = [
  { 
    period: "2026. 04 ~ 06", 
    con: "척척밥상 ", 
    position:"프론트엔드", 
    skills:["React", "TypeScript", "Next.js"],
    responsibility:[
      " Next.js 기반 자사 홈페이지 유지보수 ",
      " Figma 디자인 시안을 기반으로 퍼블리싱 및 UI 구현 ",
      " Naver Maps API 기반 매장 분포 지도 기능 개발 "
    ],
  },
  { 
    period: "2025. 04 ~ 12", 
    con: "씨드림코어", 
    position: "백엔드 개발자", 
    skills:[""],    
    responsibility:[
      " Express 기반 Node.js 및 PHP 쇼핑몰 백엔드 개발·유지보수 ",
      " PHP 기반 쇼핑몰 관리자 및 사용자 화면 기능 개선과 레거시 코드 유지보수 ",
      " 제휴사 API 연동을 통한 상품·주문 데이터 수집, 가공 및 정합성 검증 로직 구현 ",
      " 크롤링 기반 실시간 상품 정보 수집 및 자동 갱신 시스템 구축 ",
      " 월말 정산, 예치금 모니터링 등 운영 리스크 구간 자동화 및 안정성 개선 ",
      " 사이트 통합에 따른 회원 DB 스키마 개편 및 데이터 마이그레이션 수행 ",
    ]
  },

  { 
    period: "2022. 07 ~ 2023. 11", 
    con: "웹퍼블리셔 근무", 
    position:"웹퍼블리셔", 
    skills:["HTML", "CSS", "jQuery", "PHP"],   
    responsibility:[
      " HTML/ CSS / jQuery 를 이용한 웹사이트 퍼블리싱 및 UI/UX 구현 ",
      " 디자인 가이드에 따른 레이아웃 퍼블리싱 작업 ",
      " jQuery를 활용한 인터랙티브 컴포넌트 개발 및 사용자 경험 개선 ",
      " 모바일 및 다양한 디바이스에 맞춘 반응형 레이아웃 설계 ",
      " 고객 요구사항 수렴 및 신속한 피드백 처리 ",
    ]
  },
  
  
];


export default function TimeLineSection({ title, items }) {
  return (
    <Section>
      <SectionIn>
        <Title1>{title}</Title1>
        {items.map((item, i)=>(
          <TimelineCard key={i} item={item} />
        ))}
      </SectionIn>
    </Section>

  )

}

function TimelineCard({ item }){
  const { period, con, position, responsibility, skills } = item;
  
  return (
    <CardSection>
      
      <ExperiPeriod>{period}</ExperiPeriod>
      <ExperiCon>
        <Company>
          <Building2 />
          {con}

        </Company>
      </ExperiCon>
    </CardSection>
  )

}

const CardSection = styled(Card2)`
  width:100%;
  margin-top:30px;
  display: flex;
  
`
const ExperiPeriod = styled.div`
  color:#7b8797;
  font-weight:${({ theme }) => theme.fontWeight.bold};
  font-size:0.85rem;
  width:16%;
`

const ExperiCon = styled.div`
`
const Company = styled.div`
  font-weight:${({ theme }) => theme.fontWeight.semiBold};
  color:#000;
  display: flex;
  align-items: flex-end;
  
`

const Position = styled.div`
  color:#979a9e;
`

const Responsibility = styled.ul`
  color:#979a9e;
`
const Respon = styled.li`
  
`

const Skills = styled.ul`
 display: flex;
`

const Skill = styled.li`
  border:1px solid #cfdcf5;
  border-radius: 25px;
  padding:3px 6px;
  background:#ecf0f8;
  font-size:13px;
`
/*
const ExperiCon = styled.div`

`
const ExperiCon = styled.div`

`*/