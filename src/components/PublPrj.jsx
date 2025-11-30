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

export default function PublPrj() {
  const mobile = 0;
  const tablet = parseInt(size.tablet, 10);
  const laptop = parseInt(size.laptop, 10);

  return (
    <Section>
      <SectionTitle>Publishing</SectionTitle>

      <SectionIn>
        <SliderWrap>
          {/* 🔥 Swiper 밖에 버튼 배치  */}
          <NavButton id="custom-prev">
            <span className="material-symbols-outlined">chevron_left</span>
          </NavButton>

          <StyledSwiper
            modules={[FreeMode, Pagination, Navigation]}
            navigation={{
              prevEl: "#custom-prev",  // ← Swiper가 이 요소를 버튼으로 사용함
              nextEl: "#custom-next",
            }}
            pagination={{
              clickable: true,
            }}
            freeMode={true}
            breakpoints={{
              [mobile]: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              [tablet]: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              [laptop]: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {Lists.map((list, idx) => (
              <SwiperSlide key={idx}>
                <Card>
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
                        <IconBox >
                          <Icon>
                            <span className="material-symbols-outlined">arrow_outward</span>
                          </Icon>
                        </IconBox>
                      </IconLink>
                    )}
                  </ImgBox>

                  <Content>
                    <p className="name">{list.title}</p>
                    <p>{list.desc}</p>

                    <TagUl>
                      {list.tags?.map((t, i) => (
                        <TagLi key={i} $color={t.color}>
                          {t.text}
                        </TagLi>
                      ))}
                    </TagUl>
                  </Content>
                </Card>
              </SwiperSlide>
            ))}
          </StyledSwiper>

          <NavButton id="custom-next">
            <span className="material-symbols-outlined">chevron_right</span>
          </NavButton>
        </SliderWrap>
      </SectionIn>
    </Section>
  );
}

/* ====================== Styled Components ====================== */

const SectionTitle = styled(Title)``;

const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 20px rgba(100, 150, 255, 0.3);

  z-index: 50; /* 🔥 Swiper 위로 */

  span {
    font-size: 28px;
    color: #fff;
  }

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.25);
  }
  @media (max-width: ${size.laptop}) {
    display: none;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%; /* 버튼 때문에 width 조절할 필요 없음 */
  padding: 50px 0%;
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.3);
    opacity: 1;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background: linear-gradient(90deg, #22d3ee, #3b82f6);
    width: 22px;
    border-radius: 12px;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
  padding: 10px;
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IconBox = styled.div`
  position: absolute;
  bottom: -0.375rem;
  right: -0.375rem;
  width: 6rem;
  height: 6rem;
  border-top-left-radius: 50%;
  transition: all 0.4s;

`;

const Icon = styled.div`
  position: absolute;
  inset: 0.625rem;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.5rem;
    color: #fff;
  }
`;

const IconLink = styled.a`
  display: inline-block;

  &:hover ${IconBox} {
    transform: scale(1.1);

  }

  &:hover ${Icon} {
    background: rgba(255,255,255,0.4);
  }
`;


const Content = styled.div`
  padding: 1.2rem;
  color: white;
  p{margin-bottom:12px;}
  p.name{
    font-weight: bold;
  }
`;

const TagUl = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TagLi = styled.li`
  background: ${(p) => p.$color};
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  color: #333;
`;

const CloseIcon = styled.div`
  width:90%;
  height:60px;
  p{

  }
`
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
    font-weight: 600;
    color: #ffffffdd;
  }
`;