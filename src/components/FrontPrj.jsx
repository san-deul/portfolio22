import { useState, useRef } from "react";
import styled from "styled-components";

import { Title } from "./common/MainTitle";
import img1 from "../assets/img/prj1.png";
import img2 from "../assets/img/prj2.png";

import { Section, SectionIn } from "./common/Section";
import { Card } from "./common/Card";
import HotelPrj from "./HotelPrj";
import CosmeticPrj from "./CosmeticPrj";
import { Title1 } from "./common/Title1";
import { FrontCard } from "./FrontCard";


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
        <Title1>Frontend</Title1>
        {/*
        <HotelPrj />
        <CosmeticPrj />
        */}
        <FrontCard />
    
      </SectionIn>
    </FrontSection>
  );
}

/* =====================================================
   styled-components (Soft Neumorphism)
===================================================== */

const FrontSection = styled(Section)`

`;


