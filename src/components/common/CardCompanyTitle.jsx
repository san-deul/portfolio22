import { Building2 } from "lucide-react"
import styled from "styled-components"
import { Tag1 } from "./tag/Tag1"

export function CardCompanyTitle({ icon, title, position }){

  return(
   <Section>
    <Title>
      {icon}
      <p>{title}</p>
      {position && <Tag1>{position}</Tag1>}
    </Title>
   </Section>
  )

}

const Section = styled.div`
  display: flex;
  align-items: center;
  gap:0.625rem;
`

const Title = styled.div`
  font-weight:${({ theme }) => theme.fontWeight.bold};
  font-size:var(--font-size-lg) ;
  color:#000;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  line-height:1.2;

  svg{
    color:var(--gray-main);
    width:1.5rem;
    height:1.5rem;
  }

  p:first-of-type{
    font-size:var(--font-size-lg) ;
  }

  @media ${({ theme }) => theme.device.tablet} {
    align-items: flex-start;
  }
`

