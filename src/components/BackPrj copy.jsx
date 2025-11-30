import { useState } from "react";
import styled from "styled-components";
import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/Title";
import { Card } from "./common/Card";

export default function BackPrj() {
  const [active, setActive] = useState("1");

  const projects = [
    { id: "1", title: "카드 월말 정산 자동화 구축" },
    { id: "2", title: "사이트 통합에 따른 회원 DB 개편" },
    { id: "3", title: "외부 쇼핑몰 상품 데이터 연동 안정화" },
    { id: "4", title: "실시간 상품 정보 크롤링 시스템 구축" },
    { id: "5", title: "예치금 모니터링 및 알림 시스템 개발" },
    { id: "6", title: "상품 가격 경쟁력 분석 대시보드 기획 및 개발" },
    { id: "7", title: "통합 인증 시스템 연동" },
    { id: "8", title: "PHP 기반 쇼핑몰 커스터마이징 및 유지보수" },
  ];

  const detail = {
    "1": {
      title: "카드 월말 정산 자동화 구축",
      back: [
        "포인트 충전식 선불카드 서비스 운영 중 매월 말일→익월 1일 전환 시 잔액 동기화 이슈 발생",
        "외부 카드업체 데몬 실행 시에도 잔액 불일치 문제가 지속적으로 발생",
        "사용자 카드 잔액이 초기화되거나 부정확한 값으로 업데이트되는 이슈 발생"
      ],
      role: [
        "카드 제휴 회원의 카드 잔액을 월말에 백업·잠금·복원하는 자동화 프로세스 개발",
        "자정(23:20~01:00) 사이클 자동실행 스케줄러 구축 및 운영 안정화",
      ],
      outcome: [
        "월말 정산 시 발생하던 잔액 오류 완전 자동화 대응",
        "수동 대응 시간 약 6시간 → 1시간으로 단축",
        "카드 잔액 관련 CS문의 해소 "
      ]
    },
    "2": {
      title: "사이트 통합에 따른 회원 DB 스키마 개편",
      back: [
        "A, B, C 등 여러 사이트가 단일 회원 DB를 공유하며 site_code로 구분하여 독립 운영",
        "B사이트를 A사이트 하위 브랜드로 통합하는 서비스 구조 개편 필요",
        "20개 가량의 연관 테이블로 인한 데이터 유실 및 서비스 중단 리스크 존재"
      ],
      role: [
        "연관 테이블 영향도 분석 및 데이터 정합성 검증",
        "B사이트 → A사이트 통합을 위한 마이그레이션 쿼리 설계 및 실행",
        "site_code 기반 분기 로직 리팩토링 및 스테이징 검증"
      ],
      outcome: [
        "데이터 유실 없이 안전하게 사이트 통합 완료",
        "사용자 경험 단절 없이 서비스 연속성 유지",
      ]
    },

    "3": {
      title: "외부 쇼핑몰 상품 데이터 연동 안정화",
      back: [
        "외부 쇼핑몰 API를 통해 일 1회(자정)에 자사몰로 상품 데이터 수급",
        "데이터 스키마 불일치 및 값 오류로 상품 정보 오류 발생",
        "상품 상태, 재고, 가격 등 핵심 정보의 정합성 문제",
        "자사 쇼핑몰 상품 등록 프로세스의 안정성 저하",

      ],
      role: [
        "외부 API 응답 데이터와 자사 DB 스키마 간 매핑 로직 검증 및 개선",
        "상품 상태(판매중/품절), 재고, 배송 특이사항, 유통기한 등 필수 필드의 데이터 정합성 검증 로직 구현",
        "누락/오류 데이터에 대한 예외 처리 및 로깅 강화"
      ],
      outcome: [
        "데이터 오류율 감소 및 상품 등록 안정성 향상",
        "관리자의 수동 수정 업무 감소",
      ]
    },
    "4": {
      title: "실시간 상품 정보 크롤링 시스템 구축",
      back: [
        "외부 쇼핑몰의 상품 정보 변경사항(품절/단종/가격 변동)이 실시간 게시판에만 공지되고 별도 API가 제공되지 않아, 자사 쇼핑몰과 최대 12시간의 정보 격차 발생",
      ],
      role: [
        "외부 쇼핑몰 실시간 공지 게시판 크롤링 시스템 개발",
        "1분 주기 스케줄러 구현으로 품절/단종/가격 변동 정보 자동 수집",
        "수집된 정보를 자사 DB에 실시간 반영하는 업데이트 로직 구현",
      ],
      outcome: [
        "상품 정보 동기화 주기를 12시간 → 1분으로 단축",
        "품절 상품 판매로 인한 고객 불만 및 CS 감소"
      ]
    },
    "5": {
      title: "예치금 모니터링 및 알림 시스템 개발",
      back: [
        "외부 쇼핑몰 예치금 잔액 확인을 위해 매번 수동으로 페이지 접속이 필요하여 관리 효율성 저하",
      ],
      role: [
        "외부 쇼핑몰 예치금 페이지 크롤링 기능 개발",
        "일 1회(오전) 자동 실행 스케줄러 구현",
        "예치금 임계값 미만 시 관리자 이메일 자동 발송 기능 구현",
      ],
      outcome: [
        "예치금 관리 자동화로 관리자 업무 효율 증대",
        "예치금 부족으로 인한 상품 수급 중단 리스크 사전 방지"
      ]
    },
    "6": {
      title: "상품 가격 경쟁력 분석 대시보드 기획 및 개발",
      back: [
        "외부 쇼핑몰 대비 자사 상품의 가격 경쟁력 파악이 어려워 가격 정책 수립에 어려움"
      ],
      role: [
        "주간 단위 신규 등록 상품 자동 조회 시스템 구현",
        "네이버 쇼핑 API 연동을 통한 동일 상품의 타 쇼핑몰 최저가 수집",
        "가격 경쟁력 분석 로직 개발",
        "TOP 50 가격 경쟁력 상품 리스트 자동 생성",
      ],
      outcome: [
        "가격 경쟁력 분석 자동화로 관리자의 의사결정 지원 및 마케팅 전략 수립 효율성 향상",
      ],
    },
    "7": {
      title: "통합 인증 시스템 연동",
      back: [
        "기존 쇼핑몰 솔루션 자체 회원 시스템을 사용 중이었으나, 통합 로그인 시스템 도입으로 인한 회원 인증 체계 전환 필요"
      ],
      role: [
        "통합 로그인 API 연동 (회원가입, 로그인, 정보 수정)",
        "로그인 시 자사 쇼핑몰 회원 여부 확인 후 자동 회원가입 처리 로직 구현",
        "",
      ],
      outcome: [
        "통합 인증 시스템으로 원활한 전환",
        "사용자 경험 개선 및 회원 관리 효율성 향상"
      ]
    },
    "8": {
      title: "PHP 기반 쇼핑몰 커스터마이징 및 유지보수",
      back: [],
      role: [
        "관리자 페이지 대량 상품 등록 기능 개발 (엑셀 업로드 형식)",
        "해외 직구 기능 추가 (통관 고유번호 입력 필드 등)",
        "화면 UI/UX 개선 및 페이지 수정",
        "기타 운영 중 발생하는 버그 수정 및 기능 개선"
      ],
      outcome: [
        "쇼핑몰 운영 안정성 확보 및 관리 편의성 향상"
      ]
    }
  };

  return (
    <Section>
      <SectionTitle>BackEnd</SectionTitle>

      <BackSectionIn>


        <LeftPanel>
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
        </LeftPanel>

        <RightPanel>
          <div className="right_in">
            <h2>{detail[active].title}</h2>
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
            <p>성과: </p>
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

/* ================================================
   ✅ styled-components 정의
   ================================================ */

const SectionTitle = styled(Title)`

`;

const BackSectionIn = styled(SectionIn)`
  display: flex;
  height: 95%;
  //background: var(--clr-bg);
  color: var(--clr-text);
  transition: 0.4s ease;
  gap: 5%;
`;

const LeftPanel = styled(Card)`
  width: 35%;
  max-height:60vh;

  ul {
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }

  li {
    width: 85%;
    padding: 1rem;
    //color: var(--clr-muted);
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid #fff;;
    transition: 0.3s ease;
    

    &.active {
      //color: var(--clr-text);
      color: #fff;
      font-weight: 700;
      background: linear-gradient(90deg, #6a11cb, #2575fc);
     
      box-shadow: 0 0 12px var(--clr-glow);
    }

    &:hover {
      transform: translateX(5px);
      color: #fff;
    }
  }
`;

const RightPanel = styled(Card)`
  width: 60%;
    max-height:60vh;
  /*
  background: var(--clr-card);
  border: 1px solid var(--clr-border);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px var(--clr-glow);
  padding: 2rem;
  transition: 0.4s ease;
  height: 480px;
*/
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color:#fff;
  }

  p {
    margin-bottom: 0.6rem;
    color:#fff;
    strong {
      color: #fff;;
      margin-right: 8px;
    }
  }

  ul.desc {
    margin-top: 1rem;
    list-style: disc;
    padding-left: 1.5rem;
    color: #fff;;
  }
`;
