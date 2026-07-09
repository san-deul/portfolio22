import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/MainTitle";
import { Lists } from "../data/pubLists";
import { size } from "../styles/theme";
import { Title1 } from "./common/Title1";
import { Card2 } from "./common/Card2";
import { ButtonCircle } from "./common/Button/ButtonCircle";
import { ChevronLeft, ChevronRight, MoveUpRight } from "lucide-react";
import { ButtonGlassmorphism } from "./common/Button/ButtonGlassmorphism";
import { Tag1 } from "./common/tag/Tag1";


export default function PublPrj() {
  const mobile = 0;
  const tablet = parseInt(size.tablet, 10);
  const laptop = parseInt(size.laptop, 10);

  return (

    <Section id="publishing" >
      <SectionIn>
        <Title1>Publishing</Title1>
        <SliderWrap>
          {/* ✅ Swiper 밖에 버튼 배치 */}
          <NavButton id="custom-prev" type="button" aria-label="Prev">
            <ChevronLeft />
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
                        <Icon>
                          <MoveUpRight />
                        </Icon>

                      </IconLink>
                    )}
                  </ImgBox>

                  <Content>
                    <p className="name">{list.title}</p>
                    <div className="desc">

                      {list.desc.map((item, i) => (
                        <p key={i}>{item}</p>
                      ))}

                    </div>

                    <TagUl>
                      {list.tags?.map((t, i) => (
                        <TagLi key={i}  $txtColor={t.txtColor} $bgColor={t.bgColor}>
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
            <ChevronRight />
          </NavButton>
        </SliderWrap>
      </SectionIn>
    </Section>
  );
}

/* ====================== Styled Components ====================== */

const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;



const NavButton = styled(ButtonCircle)`
  width:3.25rem;
  height:3.25rem;
`



const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 2.875rem 0.75rem;

  .swiper-pagination-bullet {
    position: relative;
    background: var(--blue-sub);
    opacity: 1;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 0.75rem;
    overflow: hidden;
    transition: width 0.35s ease;
  }

  /* 그라데이션 레이어를 미리 깔아두고 opacity로만 전환 */
  .swiper-pagination-bullet::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradients.blue.css};
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .swiper-pagination-bullet-active {
    width: 1.5rem;
  }

  .swiper-pagination-bullet-active::after {
    opacity: 1;
  }
`;


const NeumCard = styled(Card2)`
  
`

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 13.75rem;
  overflow: hidden;
  border-radius: 1rem;
 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Icon = styled(ButtonGlassmorphism)`
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  width: 4.5rem;
  height: 4.5rem;
`

const IconLink = styled.a`
  display: inline-block;

  &:hover ${Icon} span {
  
  }
`;

const Content = styled.div`
  padding: 0.875rem 0.375rem 0.375rem;

  p {
    margin-bottom: 0.625rem;
  }

  p.name {
    font-weight: 800;
    font-size: var(--font-size-lg);
    color:#000;
    margin-top: 0.25rem;
  }

  div.desc {

    font-size:var(--font-size-base);
    color:var(--gray-main);
    margin: 1rem 0.8rem 1rem;
    p{
      line-height: 80%;
    }
  }
`;

const TagUl = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0.5rem 0 0;
  padding: 0;
  list-style: none;
`;

const TagLi = styled(Tag1)`

`;

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
    gap: 0.375rem;
  }

  span {
    font-size: 2rem;
    color: #ffffffcc;

  }

  p {
    font-size: 0.9rem;
    font-weight: 700;
    color: #ffffffdd;
  }
`;