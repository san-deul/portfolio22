import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Section, SectionIn } from "./common/Section";
import { Title } from "./common/Title";
import { List } from "../data/pubLists";


export default function PublPrj() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop",
      title: "trust & co.",
      desc: "Fill out the form and the algorithm will offer the right team of experts",
      tags: [
        { text: "branding", color: "#d3b19a" },
        { text: "packaging", color: "#70b3b1" },
      ],
      iconColor: "#d3b19a",
    },
    {
      img: "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop",
      title: "tonic",
      desc: "Fill out the form and the algorithm will offer the right team of experts",
      tags: [
        { text: "branding", color: "#d3b19a" },
        { text: "marketing", color: "#d05fa2" },
      ],
      iconColor: "#70b3b1",
    },
    {
      img: "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop",
      title: "shower gel",
      desc: "Fill out the form and the algorithm will offer the right team of experts",
      tags: [
        { text: "branding", color: "#d3b19a" },
        { text: "packaging", color: "#70b3b1" },
        { text: "marketing", color: "#d05fa2" },
      ],
      iconColor: "#d05fa2",
    },
        {
      img: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop",
      title: "trust & co.",
      desc: "Fill out the form and the algorithm will offer the right team of experts",
      tags: [
        { text: "branding", color: "#d3b19a" },
        { text: "packaging", color: "#70b3b1" },
      ],
      iconColor: "#d3b19a",
    },
    {
      img: "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop",
      title: "tonic",
      desc: "Fill out the form and the algorithm will offer the right team of experts",
      tags: [
        { text: "branding", color: "#d3b19a" },
        { text: "marketing", color: "#d05fa2" },
      ],
      iconColor: "#70b3b1",
    },
    {
      img: "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop",
      title: "shower gel",
      desc: "Fill out the form and the algorithm will offer the right team of experts",
      tags: [
        { text: "branding", color: "#d3b19a" },
        { text: "packaging", color: "#70b3b1" },
        { text: "marketing", color: "#d05fa2" },
      ],
      iconColor: "#d05fa2",
    },
  ];

  return (
    <Section>
      <SectionTitle>Publishing</SectionTitle>
      <SectionIn>
        <StyledSwiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <Card>
                <ImgBox>
                  <img src={card.img} alt={card.title} />
                  <IconBox style={{ background: card.iconColor }}>
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </IconBox>
                </ImgBox>
                <Content>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <ul>
                    {card.tags.map((t, i) => (
                      <li key={i} style={{ background: t.color }}>
                        {t.text}
                      </li>
                    ))}
                  </ul>
                </Content>
              </Card>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </SectionIn>
    </Section>
  );
}

const SectionTitle = styled(Title)`
  background: linear-gradient(to right, #22d3ee, #3b82f6);
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledSwiper = styled(Swiper)`
  padding-bottom: 3rem;
`;

const Card = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 20px rgba(100, 150, 255, 0.2);
  transition: 0.3s ease;
  padding:10px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(120, 200, 255, 0.4);
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease;
  }

  ${Card}:hover & img {
    filter: brightness(1.1) blur(2px);
  }
`;

const IconBox = styled.a`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #70b3b1, #d05fa2);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  transition: 0.3s;

  &:hover {
    transform: scale(1.2) rotate(10deg);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
  }

  span {
    font-family: "Material Symbols Outlined";
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  padding: 1.2rem;

  h3 {
    font-size: 1.3rem;
    background: linear-gradient(90deg, #8a2be2, #00bfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #ccc;
    margin: 0.8rem 0 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    padding: 0;
    margin: 0;

    li {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.8rem;
      padding: 0.4rem 0.6rem;
      border-radius: 0.25rem;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.15);
      color: #282828;
    }
  }
`;
