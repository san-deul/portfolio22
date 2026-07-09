import styled from "styled-components"

export function TopTitle({ num, title }){
  
  return(
    <TitleArea>
      <p>PROJECT {num}</p>
      <p>{title}</p>
    </TitleArea>
  )

}


const TitleArea = styled.div`
    width:100%;
    text-align: center;
    padding:1.25rem 0;

    p:first-of-type{
      color:var(--gray-sub);
      font-weight:${({ theme }) => theme.fontWeight.bold};
    }
    p:last-of-type{
      font-size:var(--font-size-lg) ;
      font-weight:${({ theme }) => theme.fontWeight.bold};
      color:#000;
      margin-top:0.5rem;
    }
    
`