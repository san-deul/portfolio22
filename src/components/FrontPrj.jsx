import { useState, useRef } from "react";
import styled from "styled-components";

import { Title } from "./common/Title";
import img1 from "../assets/img/prj1.png";
import img2 from "../assets/img/prj2.png";


import { Section, SectionIn } from "./common/Section";
import { Card } from "./common/Card";

export default function FrontPrj() {
  const [bgImage, setBgImage] = useState(null);  const frontRef = useRef(null);



  return (
    <Section id="frontend">



      <SectionIn>
        <SectionTitle>Frontend</SectionTitle>

        <Cards>
          <CustomCard>
            <CardInner>
              <CardImage>
                <img src={img1} alt="프로젝트1" />
              </CardImage>
              <CardText>
                <div className="cardTitle">
                  개인 쇼핑몰 서비스를 가정하여 제작한 React 기반 프론트엔드 프로젝트입니다.
                </div>
                <p>React / React Router</p>
                <p>Supabase</p>
                <p>Vercel</p>
              </CardText>
              <Buttons>
                <Button
                  href="https://my-shopping-app-one.vercel.app/"
                  target="_blank"
                >
                  보러가기
                </Button>

                <Button
                  href="https://github.com/san-deul/my-shopping-app"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Buttons>


            </CardInner>
          </CustomCard>

          
            <CustomCard >

              <CardInner>
                <CardImage>
                  <img src={img2} alt="프로젝트1" />
                </CardImage>
                <CardText>
                  <div className="cardTitle"> 호텔 예약 사이트를 가정하여 제작한 React 기반 프론트엔드 프로젝트입니다.</div>
                  <p>React / React Router</p>
                  <p>React Query</p>
                  <p>Zustand</p>
                  <p>Tailwind</p>
                  <p>Supabase</p>
                  <p>Vercel</p>
                </CardText>
                <Buttons>
                  <Button
                    href="https://my-hotel-app-beige.vercel.app/"
                    target="_blank"
                  >
                    보러가기
                  </Button>

                  <Button
                    href="https://github.com/san-deul/my-hotel-app"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Buttons>
              </CardInner>


            </CustomCard>
          
        </Cards>
      </SectionIn>

      {/* ---------------------------------  */}
      
      <SectionIn>

      </SectionIn>
    </Section>
  );
}

/* =====================================================
   styled-components 
   ===================================================== */

const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;

  &.visible {
    opacity: 1;
  }

  /* 📌 태블릿 & 모바일에서는 배경 효과 제거 */
  @media (max-width: 1024px) {
    display: none;
  }
`;

const SectionTitle = styled(Title)`
  position: relative;
  z-index: 2;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  z-index: 2;
  position: relative;

  /* 📌 태블릿: 1열 */

  @media  ${(props) => props.theme.device.tablet},
          ${(props) => props.theme.device.mobile}{
    flex-direction: column;
    align-items: center;
  }


`;




const CardInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardImage = styled.div`
  width: 100%;
  height:220px;
  img {
    width: 100%;
    height:100%;
    object-fit:cover;
    border-radius: 12px;
  }
`;

const CardText = styled.div`
  margin-top: 20px;
  text-align: center;
  .cardTitle{
    color:#fff;
    margin-bottom:20px;
    text-align:left;
    font-weight:bold;
  }
  p{color:#fff !important;margin-bottom:4px;transition: all 0.6s;}
`;


const CustomCard = styled(Card)`
  cursor: pointer;

  &:hover ${CardText} p {
    color: #000;
  }
`



/* ================================
   🔥 버튼 스타일
================================ */

const Buttons = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Button = styled.a`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 6px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.4);
  color: #fff !important;; 
  transition: 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #000 !important;;
  }
`;