import { useState, useRef } from "react";
import styled from "styled-components";

import { Title } from "./common/Title";
import img1 from "../assets/img/prj1.png";
import img2 from "../assets/img/prj2.png";

import { Section, SectionIn } from "./common/Section";
import { Card } from "./common/Card";
import HotelPrj from "./HotelPrj";
import CosmeticPrj from "./CosmeticPrj";

/* =========================
   ✅ Soft Neumorphism Tokens (Light only)
========================= */
const nm = {
  bg: "#EEF2FA",
  cardBg: "rgba(255,255,255,0.35)",
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

export default function FrontPrj() {
  const [bgImage, setBgImage] = useState(null);
  const frontRef = useRef(null);

  return (
    <FrontSection id="frontend" ref={frontRef}>
      <SectionIn>
        <SectionTitle>Frontend</SectionTitle>

        <HotelPrj />
        <CosmeticPrj />
    
      </SectionIn>

      <SectionIn>{/* 필요하면 추가 섹션 */}</SectionIn>
    </FrontSection>
  );
}

/* =====================================================
   styled-components (Soft Neumorphism)
===================================================== */

const FrontSection = styled(Section)`
  background: ${nm.bg};
`;

const SectionTitle = styled(Title)`
  position: relative;
  z-index: 2;
  color:${nm.text};
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  z-index: 2;
  position: relative;

  @media ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const CustomCard = styled(Card)`
  cursor: pointer;
  border-radius: 22px;
  background: ${nm.bg};
  box-shadow: ${nmOutSoft};
  border: 1px solid ${nm.stroke};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 14px 14px 30px ${nm.shadowDark}, -14px -14px 30px ${nm.shadowLight};
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
  height: 220px;
  padding: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    border: 1px solid ${nm.stroke};
    box-shadow: ${nmOutTiny};
    display: block;
  }
`;

const CardText = styled.div`
  margin-top: 6px;
  padding: 0 18px 6px;
  text-align: left;

  .cardTitle {
    color: ${nm.text};
    margin-bottom: 10px;
    font-weight: 700;
    line-height: 1.45;
  }

  p {
    color: ${nm.muted};
    margin-bottom: 4px;
    transition: color 0.2s ease;
  }
`;

const Buttons = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 0 18px 4px;
  flex-wrap: wrap;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;
  font-size: 14px;
  border-radius: 999px;

  background: ${nm.bg};
  border: 1px solid ${nm.stroke};
  box-shadow: ${nmOutTiny};

  color: ${nm.text};
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    color: ${nm.accent};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 3px 3px 10px ${nm.shadowDark}, -3px -3px 10px ${nm.shadowLight};
  }
`;

/* ✅ href 없는 버튼용 */
const ButtonAsBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;
  font-size: 14px;
  border-radius: 999px;

  background: ${nm.bg};
  border: 1px solid ${nm.stroke};
  box-shadow: ${nmOutTiny};

  color: ${nm.text};
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    color: ${nm.accent};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 3px 3px 10px ${nm.shadowDark}, -3px -3px 10px ${nm.shadowLight};
  }
`;

const Divv = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  padding: 0 18px 18px;

  p {
    color: ${nm.muted};
    text-align: center;
    margin: 14px 0;
  }
`;