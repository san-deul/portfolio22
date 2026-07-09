import styled from "styled-components"

export function Period({ period }){

  return(
    <PeriodCard>
      {period}
    </PeriodCard>
  )

}


const PeriodCard = styled.div`
  color:var(--gray-sub);
  font-weight:${({ theme }) => theme.fontWeight.bold};
  font-size:0.85rem;
  width:16%;
  @media ${({ theme }) => theme.device.tablet} {
    width:100%;
    font-size:1rem;
    margin-bottom:0.3rem;
  }
  
`
