import styled from "styled-components"

export function Period({ period }){

  return(
    <PeriodCard>
      {period}
    </PeriodCard>
  )

}


const PeriodCard = styled.div`
  color:var(--gray-main);
  font-weight:${({ theme }) => theme.fontWeight.bold};
  font-size:0.85rem;
  width:16%;
  
`
