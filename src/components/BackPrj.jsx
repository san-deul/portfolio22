import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/Title";
import { Card } from "./common/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BackPrj() {
  const [active, setActive] = useState("1");

  // 🔥 theme 사용
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
        "월말 전환 시 카드 잔액 싱크 문제 발생",
        "외부 카드업체 데몬 동작 중에도 잔액 불일치 지속",
        "사용자 카드 잔액이 초기화되거나 잘못 반영되는 위험",
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
        "20개 이상의 테이블 연동으로 데이터 유실 위험 존재",
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
        "외부 API 데이터 오류 및 스키마 불일치",
        "상품 정보, 재고, 상태 오표시 문제",
      ],
      role: [
        "API 응답 → DB 매핑 로직 정비",
        "필수 필드 정합성 체크 추가",
        "오류/누락 데이터 로깅 강화",
      ],
      outcome: ["상품 등록 안정성 향상", "관리자의 수동 수정 업무 감소"],
    },
    "4": {
      title: "실시간 상품 정보 크롤링 시스템 구축",
      back: ["실시간 공지 게시판 기반으로만 정보 제공되어 최대 12시간 정보 차이 발생"],
      role: [
        "실시간 공지 크롤링 엔진 개발",
        "1분 주기 스케줄링",
        "DB 자동 업데이트",
      ],
      outcome: ["정보 갱신 12시간 → 1분", "품절 오표기 감소"],
    },
    "5": {
      title: "예치금 모니터링 및 알림 시스템 개발",
      back: ["관리자가 수동으로 예치금 확인 필요"],
      role: [
        "예치금 페이지 크롤링 자동화",
        "일 1회 자동 실행 스케줄링",
        "임계값 도달 시 자동 이메일 발송",
      ],
      outcome: ["관리 효율 상승", "상품 공급 중단 위험 예방"],
    },
    "6": {
      title: "상품 가격 경쟁력 분석 대시보드 개발",
      back: ["경쟁사 대비 가격 경쟁력 분석 어려움"],
      role: [
        "신규 상품 자동 수집 시스템",
        "네이버 쇼핑 API 최저가 비교",
        "가격 경쟁력 분석 로직 개발",
      ],
      outcome: ["가격 정책 의사결정에 도움", "TOP50 경쟁력 상품 자동 생성"],
    },
    "7": {
      title: "통합 인증 시스템 연동",
      back: ["기존 솔루션 회원 시스템을 통합 로그인 방식으로 변경 필요"],
      role: [
        "통합 인증 API 연동 (로그인/회원가입/수정)",
        "로그인 시 기존 회원 여부 확인 후 자동 가입 처리",
      ],
      outcome: ["원활한 시스템 전환", "회원 UX 강화"],
    },
    "8": {
      title: "PHP 기반 쇼핑몰 유지보수",
      back: [],
      role: [
        "관리자 대량 상품 등록 기능 개발",
        "해외 직구 기능 추가",
        "UI/UX 개선 및 버그 수정",
      ],
      outcome: ["운영 안정성 확보", "관리 편의 향상"],
    },
  };

  return (
    <Section>
      <SectionTitle>BackEnd</SectionTitle>

      <BackSectionIn>
        {/* LEFT 영역 */}
        <LeftPanel isMobile={isMobile}>
          {isMobile ? (
            <Swiper slidesPerView={2.3} spaceBetween={10}>
              {projects.map((p) => (
                <SwiperSlide key={p.id}>
                  <div
                    className={`mobile-item ${
                      active === p.id ? "active" : ""
                    }`}
                    onClick={() => setActive(p.id)}
                  >
                    {p.title}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <ul>
              {projects.map((p) => (
                <li
                  key={p.id}
                  className={active === p.id ? "active" : ""}
                  onClick={() => setActive(p.id)}
                >
                  {p.title}
                </li>
              ))}
            </ul>
          )}
        </LeftPanel>

        {/* RIGHT 영역 */}
        <RightPanel>
          <div className="right_in">
            <p className="title">{detail[active].title}</p>
            <p>배경:</p>
            <ul className="desc">
              {detail[active].back.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <p>역할:</p>
            <ul className="desc">
              {detail[active].role.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <p>성과:</p>
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

/* =========================================================
   styled-components + theme.device 반응형 적용
   ========================================================= */

const SectionTitle = styled(Title)``;

const BackSectionIn = styled(SectionIn)`
  display: flex;
  height: 95%;
  gap: 5%;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const LeftPanel = styled(Card)`
  width: 35%;
  max-height: 60vh;

  ul {
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }

  li {
    width: 85%;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid #fff;

    &.active {
      background: linear-gradient(90deg, #6a11cb, #2575fc);
      font-weight: 700;
      box-shadow: 0 0 12px var(--clr-glow);
    }

    &:hover {
      transform: translateX(5px);
    }
  }

  /* ========== 모바일 전용 ========== */
  ${({ isMobile }) =>
    isMobile &&
    `
      width: 100%;
      max-height: auto;

      ul { display: none; }

      .mobile-item {
        padding: 0.8rem 1rem;
        background: rgba(255,255,255,0.1);
        color: #fff;
        border-radius: 12px;
        text-align: center;
        font-size: 0.9rem;
        cursor: pointer;
        height:48px;
        text-align:left;
      }

      .mobile-item.active {
        background: linear-gradient(90deg, #6a11cb, #2575fc);
        font-weight: 700;
        box-shadow: 0 0 10px var(--clr-glow);
      }
    `}

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const RightPanel = styled(Card)`
  width: 60%;
  max-height: 60vh;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    max-height: none;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p.title{
    font-size:1.2rem;
    text-align:center;
    position: relative;
    padding-bottom:16px;
    &::before {
      content: "";
      width:100%;height:1px;
      background:#fff;
      position: absolute;
      top:100%;left:0;
    }
  }
  p {
    margin-bottom: 0.6rem;
    color: #fff;
  }

  ul.desc {
    margin-top: 1rem;
    list-style: disc;
    padding-left: 1.5rem;
    color: #fff;
    
  }
  li{
    margin-bottom:6px;
    position:relative;
    padding-left:14px;
      &::before {
        content: "";
        display:inline-block ;
        position: absolute;
        left: 0;
        top: 4px;
        font-size: 1rem;
        width:6px;
        height:6px;
        border-radius: 50%;
        background:#fff;
    }
  }
  
`;
