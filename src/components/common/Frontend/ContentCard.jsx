import styled from "styled-components";
import { Card2 } from "../Card2";
import { ButtonPill } from "../Button/ButtonPill";


export function ContentCard({ img, exp, stack, link, icon }) {

  return (
    <>
      <ImgArea>
        <img src={img} />
      </ImgArea>
      <ExpArea>
        {exp.map((exp, i) => (
          <p key={i}>{exp}</p>
        ))}
      </ExpArea>
      <Content>
        <Stack>
          {stack.map((item, i) => (
            <div key={i}>
              <p>{item.category}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </Stack>
        <LinkArea>
          {link.map((item, i) => (
            <Link key={i}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">

                <span>{icon[item.icon]}</span>
                <span>{item.label}</span>
              </a>
            </Link>
          ))}
        </LinkArea>
      </Content>

    </>

  )
}

const ImgArea = styled.div`
  width:80%;
  margin:0 auto;
  overflow: hidden;
  img{
    display: inline-block;
    width:100%;
    max-width:1100px;
    margin:0 auto;
    border-radius: 0.75rem;
  }
`

const ProfTitle = styled.div`
  

`

const ExpArea = styled.div`
  color:blue;
`

const Content = styled(Card2)`
  width:80%;
  margin:1rem auto;
`

const Stack = styled.div`
  height: auto;
  div{
    display:flex;
    font-size:var(--font-size-base);
    color:#000;
    margin-bottom:0.625rem;
    p:first-of-type{
      width:26%;
      font-weight:${({ theme }) => theme.fontWeight.semiBold};
      color:#000;
    }
    p:last-of-type{
      color:var(--gray-main);
    }
  }

`
const LinkArea = styled.div`
  display: flex;
  gap:1.125rem;
  margin-top:1.75rem;
  
`
const Link = styled(ButtonPill)`
  width:12.5rem;
  height:2.5rem;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    height: 100%;
    font-size:var(--font-size-base);
    
    span:last-of-type{
      color:var(--gray-main);
    }
  }
`