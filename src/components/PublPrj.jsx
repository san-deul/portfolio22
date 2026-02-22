import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/Title";
import { Lists } from "../data/pubLists";
import { size } from "../styles/theme";

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

export default function PublPrj() {
  const mobile = 0;
  const tablet = parseInt(size.tablet, 10);
  const laptop = parseInt(size.laptop, 10);

  return (
    <PublSection id="publishing">
      <SectionTitle>Publishing</SectionTitle>

      <SectionIn>
        <SliderWrap>
          {/* ✅ Swiper 밖에 버튼 배치 */}
          <NavButton id="custom-prev" type="button" aria-label="Prev">
            <span className="material-symbols-outlined">chevron_left</span>
          </NavButton>

          <StyledSwiper
            modules={[FreeMode, Pagination, Navigation]}
            navigation={{
              prevEl: "#custom-prev",
              nextEl: "#custom-next",
            }}
            pagination={{ clickable: true }}
            freeMode={true}
            breakpoints={{
              [mobile]: { slidesPerView: 1, spaceBetween: 20 },
              [tablet]: { slidesPerView: 2, spaceBetween: 25 },
              [laptop]: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {Lists.map((list, idx) => (
              <SwiperSlide key={idx}>
                <NeumCard>
                  <ImgBox>
                    <img src={list.img} alt={list.title} />

                    {list.closed && (
                      <ClosedOverlay>
                        <div className="inner">
                          <span className="material-symbols-outlined">block</span>
                          <p>현재는 폐쇄된 사이트입니다</p>
                        </div>
                      </ClosedOverlay>
                    )}

                    {!list.closed && (
                      <IconLink href={list.link} target="_blank" rel="noopener noreferrer">
                        <IconBox>
                          <Icon>
                            <span className="material-symbols-outlined">arrow_outward</span>
                          </Icon>
                        </IconBox>
                      </IconLink>
                    )}
                  </ImgBox>

                  <Content>
                    <p className="name">{list.title}</p>
                    <p className="desc">{list.desc}</p>

                    <TagUl>
                      {list.tags?.map((t, i) => (
                        <TagLi key={i} $color={t.color}>
                          {t.text}
                        </TagLi>
                      ))}
                    </TagUl>
                  </Content>
                </NeumCard>
              </SwiperSlide>
            ))}
          </StyledSwiper>

          <NavButton id="custom-next" type="button" aria-label="Next">
            <span className="material-symbols-outlined">chevron_right</span>
          </NavButton>
        </SliderWrap>
      </SectionIn>
    </PublSection>
  );
}

/* ====================== Styled Components ====================== */

const PublSection = styled(Section)`
  background: ${nm.bg};
`;

const SectionTitle = styled(Title)`
  color: ${nm.text};
`;

const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* ✅ 뉴모피즘 네비 버튼(패임X, 은은 out) */
const NavButton = styled.button`
  width: 52px;
  height: 52px;
  border: 1px solid ${nm.stroke};
  background: ${nm.bg};
  border-radius: 999px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: ${nmOutTiny};
  transition: transform 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;

  z-index: 50;

  span {
    font-size: 28px;
    color: ${nm.text};
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 10px 10px 22px ${nm.shadowDark}, -10px -10px 22px ${nm.shadowLight};
    span {
      color: ${nm.accent};
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 3px 3px 10px ${nm.shadowDark}, -3px -3px 10px ${nm.shadowLight};
  }

  @media (max-width: ${size.laptop}) {
    display: none;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 46px 0;

  /* ✅ 페이지네이션도 라이트 톤 */
  .swiper-pagination-bullet {
    background: rgba(120, 135, 160, 0.25);
    opacity: 1;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background: ${nm.accent};
    width: 24px;
    border-radius: 12px;
  }
`;

/* ✅ 카드: glass 제거 → soft neumorphism */
const NeumCard = styled.div`
  background: ${nm.bg};
  border-radius: 22px;
  border: 1px solid ${nm.stroke};
  box-shadow: ${nmOutSoft};
  overflow: hidden;
  padding: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 14px 14px 30px ${nm.shadowDark}, -14px -14px 30px ${nm.shadowLight};
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid ${nm.stroke};
  box-shadow: ${nmOutTiny};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const IconBox = styled.div`
  position: absolute;
  bottom: -0.375rem;
  right: -0.375rem;
  width: 6rem;
  height: 6rem;
  border-top-left-radius: 50%;
  transition: transform 0.2s ease;
`;

const Icon = styled.div`
  position: absolute;
  inset: 0.625rem;

  background: ${nm.bg};
  border-radius: 50%;
  border: 1px solid ${nm.stroke};
 // box-shadow: ${nmOutTiny};

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.5rem;
    color: ${nm.text};
  }
`;

const IconLink = styled.a`
  display: inline-block;

  &:hover ${IconBox} {
    transform: scale(1.06);
  }

  &:hover ${Icon} span {
    color: ${nm.accent};
  }
`;

const Content = styled.div`
  padding: 14px 6px 6px;
  color: ${nm.text};

  p {
    margin-bottom: 10px;
  }

  p.name {
    font-weight: 800;
    font-size: 1.05rem;
    margin-top: 4px;
  }

  p.desc {
    color: ${nm.muted};
    line-height: 1.55;
  }
`;

const TagUl = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
`;

const TagLi = styled.li`
  background: ${(p) => p.$color};
  padding: 0.4rem 0.6rem;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  color: #333;
`;

/* ✅ 폐쇄 오버레이는 그대로(이미지 위라 뉴모피즘이랑 충돌 없음) */
const ClosedOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: inherit;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  span {
    font-size: 32px;
    color: #ffffffcc;
  }

  p {
    font-size: 0.9rem;
    font-weight: 700;
    color: #ffffffdd;
  }
`;