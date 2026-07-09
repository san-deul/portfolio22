import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/MainTitle";
import { Card } from "./common/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Title1 } from "./common/Title1";
import { Card2 } from "./common/Card2";
import { ButtonGlassmorphism } from "./common/Button/ButtonGlassmorphism";
import { CardGlassmorphism } from "./common/CardGlassmorphism";
import { Building2 } from "lucide-react";


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

export default function BackPrj() {
  const [active, setActive] = useState("1");

  const theme = useTheme();

  // 모바일 구분
  const tabletWidth = parseInt(theme?.size?.tablet || 768);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= tabletWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [tabletWidth]);

  const projects = [
    { id: "1", title: "카드 월말 정산 자동화 구축" },
    { id: "2", title: "사이트 통합에 따른 회원 DB 개편" },
    { id: "3", title: "외부 쇼핑몰 상품 데이터 연동 안정화" },
    { id: "4", title: "실시간 상품 정보 크롤링 시스템 구축" },
    { id: "5", title: "예치금 모니터링 및 알림 시스템 개발" },
    { id: "6", title: "상품 가격 경쟁력 분석 대시보드 개발" },
    { id: "7", title: "통합 인증 시스템 연동" },
    { id: "8", title: "PHP 기반 쇼핑몰 유지보수" },
  ];

  const detail = {
    "1": {
      title: "카드 월말 정산 자동화 구축",
      back: [
        "월말 정산 시점에 카드 잔액 정합성 이슈 발생",
        "외부 카드사 연동 프로세스 동작 중에도 잔액 불일치 지속",
        "잔액 오류로 인한 사용자 신뢰도 저하 가능성 존재",
      ],
      role: [
        "월말 백업 → 잠금 → 검증 → 동기화 → 복원 자동화 로직 구축",
        "23:20~익일 04:00 자동 스케줄러 구성",
      ],
      outcome: [
        "월말 잔액 오류 완전 자동 대응 성공",
        "6시간 수동 대응 → 1시간으로 단축",
        "CS 문의 감소",
      ],
    },
    "2": {
      title: "사이트 통합에 따른 회원 DB 스키마 개편",
      back: [
        "여러 사이트가 단일 회원 DB를 공유하는 구조",
        "B사이트를 A사이트 하위 브랜드로 통합 필요",
        "20개 이상의 테이블이 연관된 구조로 마이그레이션 시 데이터 정합성 확보 필요",
      ],
      role: [
        "DB 구조 영향도 분석 및 정합성 검증",
        "통합 마이그레이션 쿼리 작성 및 실행",
        "site_code 기반 분기 로직 전면 리팩토링",
      ],
      outcome: ["데이터 유실 없이 안정적 통합 완료", "서비스 중단 없는 자연스러운 전환"],
    },
    "3": {
      title: "외부 쇼핑몰 상품 데이터 연동 안정화",
      back: [
        "외부 API 응답 데이터의 스키마 불일치 및 값 누락 발생",
        "상품 정보, 재고, 판매 상태의 오표시 이슈 발생",
      ],
      role: ["API 응답 → DB 매핑 로직 정비", "필수 필드 정합성 체크 추가", "오류/누락 데이터 로깅 강화"],
      outcome: ["상품 등록 안정성 향상", "관리자의 수동 수정 업무 감소"],
    },
    "4": {
      title: "실시간 상품 정보 크롤링 시스템 구축",
      back: ["공지 게시판 수동 확인 방식으로 인해 최대 정보 지연 발생"],
      role: ["실시간 공지 크롤링 엔진 개발", "1분 주기 스케줄링", "DB 자동 업데이트"],
      outcome: ["정보 갱신 12시간 → 1분", "품절 오표기 감소"],
    },
    "5": {
      title: "예치금 모니터링 및 알림 시스템 개발",
      back: ["예치금 현황을 관리자가 수동으로 확인해야 하는 운영 구조"],
      role: ["예치금 페이지 크롤링 자동화", "일 1회 자동 실행 스케줄링", "임계값 도달 시 자동 이메일 발송"],
      outcome: ["관리 효율 상승", "상품 공급 중단 위험 예방"],
    },
    "6": {
      title: "상품 가격 경쟁력 분석 대시보드 개발",
      back: ["경쟁사 대비 가격 경쟁력을 정량적으로 파악하기 어려운 구조"],
      role: ["신규 상품 자동 수집 시스템", "네이버 쇼핑 API 최저가 비교", "가격 경쟁력 분석 로직 개발"],
      outcome: ["가격 정책 의사결정에 도움", "TOP50 경쟁력 상품 자동 생성"],
    },
    "7": {
      title: "통합 인증 시스템 연동",
      back: ["기존 솔루션 기반 회원 시스템을 통합 인증 구조로 전환 필요"],
      role: ["통합 인증 API 연동 (로그인/회원가입/수정)", "로그인 시 기존 회원 여부 확인 후 자동 가입 처리"],
      outcome: ["원활한 시스템 전환", "회원 UX 강화"],
    },
    "8": {
      title: "PHP 기반 쇼핑몰 유지보수",
      back: ["기존 PHP 기반 쇼핑몰의 기능 확장 및 운영 안정화 필요"],
      role: ["관리자 대량 상품 등록 기능 개발", "해외 직구 기능 추가", "UI/UX 개선 및 버그 수정"],
      outcome: ["운영 안정성 확보", "관리 편의 향상"],
    },
  };



  return (
    <Section id="backend">

      <Title1>BackEnd</Title1>
      {/*
      <BackSummaryIn>
        <ul>
          <li>
            <p>
              PHP 5.5 기반 레거시 쇼핑몰과 Node.js 서버를 함께 운영하며,<br/>
              정산·크롤링·외부 API 연동 등 다양한 프로젝트를 통해 <br/>
              운영 리스크를 낮추고 반복 업무를 줄였습니다.
            </p>
          </li>
        </ul>
      </BackSummaryIn>
        굳이..
        */}

      <BackSectionIn>
        {/* LEFT 영역 */}
        <LeftPanel $isMobile={isMobile}>
          {isMobile ? (
            <Swiper slidesPerView={2.3} spaceBetween={10}>
              {projects.map((p) => (
                <SwiperSlide key={p.id}>
                  <button
                    type="button"
                    className={`mobile-item ${active === p.id ? "active" : ""}`}
                    onClick={() => setActive(p.id)}
                  >
                    {p.title}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <ul>
              {projects.map((p) => (
                <ListItem
                  key={p.id}
                  $active={active === p.id}
                  onClick={() => setActive(p.id)}>
                  {p.title}
                </ListItem>
              ))}
            </ul>
          )}
        </LeftPanel>

        {/* RIGHT 영역 */}
        <RightPanel>
          <div className="right_in">
            <p className="title">{detail[active].title}</p>

            <p className="label">배경</p>
            <ul className="desc">
              {detail[active].back.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <p className="label">역할</p>
            <ul className="desc">
              {detail[active].role.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <p className="label">성과</p>
            <ul className="desc">
              {detail[active].outcome.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </RightPanel>
      </BackSectionIn>
    </Section>
  );
}




const BackSummaryIn = styled(Card2)`

  width:100%;
  max-width:800px;
  margin:0 auto;
  text-align: center;
  height: auto;
  line-height: 1.6;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin-bottom: 14px;
  }
  li:first-child{
    display: flex;
    justify-content: center;
    align-items: center;
    color:#000;
    
    svg{
      width: 1.5rem;
      height: 1.5rem;
    }
    p:first-of-type{
      font-size:var(--font-size-lg);
      font-weight:700;
      
      
    }
    p:last-child{
      font-size:var(--font-size-sm);
      color:var(--gray-sub)
    }
  }

  li:nth-child(2){
    position:relative;
    padding:20px 0;
    color:var(--gray-main);
    font-size:var(--font-size-base);

    &:before{
      content:'';
      width:80%;
      height:1px;
      position:absolute;
      top:0;
      left:50%;
      transform: translateX(-50%);
      background:var(--gray-line);
    }
    &:after{
      content:'';
      width:80%;
      height:1px;
      position:absolute;
      bottom:0;
      left:50%;
      transform: translateX(-50%);
      background:var(--gray-line);
    }
  }

  
`;


const BackSectionIn = styled(SectionIn)`
  display: flex;
  height: 95%;
  gap: 5%;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    gap: 1.2rem;
  }
`;


const LeftPanel = styled(Card2)`
  width: 35%;
  max-height: 60vh;

  ul {
    overflow-y: auto;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0.625rem;
    list-style: none;
  }

  li {
    width: 100%;
    padding: 0.75rem 0.875rem;
  
    cursor: pointer;
    border-radius: 0.875rem;
    transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;
    
    &:hover {
      transform: translateX(4px);
      background: rgba(255, 255, 255, 0.35);

    }

    &.active {
      background: rgba(255, 255, 255, 0.5);
      color: var(--blue-main);
      font-weight: 800;
     
    }
  }




  /* ========== 모바일 전용 ========== */
  ${({ $isMobile }) =>
    $isMobile &&
    `
      width: 100%;
      max-height: none;

      ul { display: none; }

      .swiper { padding: 10px; }

      .mobile-item {
        width: 100%;
        height: 48px;
        padding: 10px 12px;
        border-radius: 16px;
        border: 1px solid ${nm.stroke};
        background: rgba(255,255,255,0.35);
        box-shadow: ${nmOutTiny};
        color: ${nm.text};
        cursor: pointer;
        text-align: left;
        font-size: 0.9rem;
        line-height: 1.2;
        outline: none;
      }

      .mobile-item.active {
        background: rgba(255,255,255,0.55);
        color: ${nm.accent};
        font-weight: 800;
      }
    `}

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const ListItem = styled(Card2)`
  position: relative;
  margin-bottom: 0.75rem;
  border-radius: 0.25rem;
  z-index: 0;
  color: var(--gray-main);
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: ${({ theme }) => theme.neumorphism.pressed()};
    opacity: 0;
    transition: opacity 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease;
    z-index: -1;
  }

  cursor: pointer;

  ${({ $active }) =>
    !$active &&
    `
    &:hover {
      box-shadow: none;
      &::after {
        opacity: 1;
      }
    }
  `}

  ${({ $active, theme }) =>
    $active &&
    `

    background:  ${theme.gradients.blue.css};
    color: #fff;
    font-weight: 800;
    transform: translateY(-1px);
    pointer-events: auto;

    &::after {
      opacity: 0;
    }

    &:hover {

      transform: translateY(-1px);
      &::after {
        opacity: 0;
      }
    }
  `}
`;
const RightPanel = styled(Card2)`
  width: 60%;
  height:auto;
  max-height:60vh;
      overflow-y: auto;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    max-height: none;
  }

  .right_in {
    padding: 1.125rem 1.25rem 1.25rem;
  }

  p.title {
    font-size: var(--font-size-lg);
    text-align:left;
    font-weight: 800;
    color:var(--blue-main);
    position: relative;
    padding-bottom: 0.875rem;
    margin: 0.375rem 0 0.875rem;

    &::after {
      content: "";
      width: 100%;
      height: 0.0625rem;
      background: var(--gray-line);
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  p.label {
    margin: 1.25rem 0 0.75rem;
    color: var(--gray-main);
    font-weight: 800;
    font-size:var(--font-size-base);
  }

  ul.desc {
    margin: 0 0 0px;
    padding-left: 0;
    list-style: none;
    font-size:var(--font-size-sm);
    color:var(--gray-main);
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1rem;
    color: var(--gray-main);


    &::before {
      content: "";
      position: absolute;
      left: 0.375rem;
      top: 50%;
      transform:translateY(-50%);
      width: 0.3125rem;
      height: 0.3125rem;
      border-radius: 50%;
      background: var(--blue-sub2);
    }
  }
`;