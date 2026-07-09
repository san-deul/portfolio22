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

export default function FrontPrj() {
  const [bgImage, setBgImage] = useState(null);
  const frontRef = useRef(null);

  return (
    <FrontSection id="frontend" ref={frontRef}>
      <SectionIn>
        <Title1>Frontend</Title1>

        <FrontCard />
    
      </SectionIn>
    </FrontSection>
  );
}



const FrontSection = styled(Section)`

`;


