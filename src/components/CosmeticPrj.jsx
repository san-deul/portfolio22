import { useState } from "react";
import styled from "styled-components";

import prjMain from "../assets/img/prj1.png";

import prj1 from "../assets/img/fontprj/prj1/prj1img1.png";
import prj2 from "../assets/img/fontprj/prj1/prj1img2.png";
import prj3 from "../assets/img/fontprj/prj1/prj1img3.png";
import prj4 from "../assets/img/fontprj/prj1/prj1img4.png";
import prj5 from "../assets/img/fontprj/prj1/prj1img5.png";
import prj6 from "../assets/img/fontprj/prj1/prj1img6.png";


/* =========================
Soft Neumorphism Tokens
========================= */

const nm = {
  bg: "#EEF2FA",
  text: "#2b3445",
  muted: "#7b8797",
  accent: "#4f7cff",
  shadowDark: "rgba(120,135,160,0.18)",
  shadowLight: "rgba(255,255,255,0.95)",
  stroke: "rgba(255,255,255,0.65)"
};

const nmOutSoft = `
10px 10px 26px ${nm.shadowDark},
-10px -10px 26px ${nm.shadowLight}
`;

const nmOutTiny = `
6px 6px 16px ${nm.shadowDark},
-6px -6px 16px ${nm.shadowLight}
`;

export default function CosmeticPrj() {

  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState(false)

  const tabs = [
    { label: "메인페이지", img: prj1 },
    { label: "유저", img: prj2 },
    { label: "제품페이지", img: prj3 },
    { label: "장바구니", img: prj4 },
    { label: "게시판1", img: prj5 },
    { label: "게시판2", img: prj6 },

  ]

  return (

    <ProjectSection>

      <ProjectTitle>
        <p>Project2</p>
        <h2>화장품 쇼핑몰</h2>
      </ProjectTitle>

      <ProjectContainer>

        <ProjectWrap>

          <Left>

            <InfoTable>
              <tbody>

                <tr>
                  <td className="tdTitle">프레임워크</td>
                  <td>React, React Router</td>
                </tr>

                <tr>
                  <td className="tdTitle">데이터페칭</td>
                  <td>React Query</td>
                </tr>

                <tr>
                  <td className="tdTitle">스타일링</td>
                  <td>Tailwind CSS</td>
                </tr>

                <tr>
                  <td className="tdTitle">백엔드</td>
                  <td>Supabase</td>
                </tr>

                <tr>
                  <td className="tdTitle">배포</td>
                  <td>Vercel</td>
                </tr>

                <tr>
                  <td className="tdTitle">버전관리</td>
                  <td>Git</td>
                </tr>

              </tbody>
            </InfoTable>

            <FrButton
              href="https://github.com/san-deul/my-shopping-app"
              target="_blank"
            >
              Git
            </FrButton>

            <FrButton
              href="https://my-shopping-app-one.vercel.app/"
              target="_blank"
            >
              바로보기
            </FrButton>

            <FrButton
              href="https://github.com/san-deul/my-shopping-next"
              target="_blank"
            >
              리팩토링 Git
            </FrButton>

          </Left>

          <Right>

            <ImageBox>
              <img src={prjMain} alt="hotel project" />
            </ImageBox>

            <Description>

              화장품을 판매하는 가상의 쇼핑몰 사이트로,
              <br />

              메인페이지, 제품페이지, 게시판페이지, 회원가입, 로그인 등을 반응형으로 구현했습니다.
              <br />
              현재 Next.js + TypeScript 로 리팩토링 진행중입니다.

            </Description>

          </Right>

        </ProjectWrap>


        <DetailBtn onClick={() => setOpen(!open)}>
          상세보기 {open ? "▲" : "▼"}
        </DetailBtn>


        {open && (

          <>

            <Tabs>

              {tabs.map((t, i) => (

                <Tab
                  key={i}
                  active={tab === i}
                  onClick={() => setTab(i)}
                >
                  {t.label}
                </Tab>

              ))}

            </Tabs>


            <DetailContent>

              <img src={tabs[tab].img} alt="" />

            </DetailContent>

          </>

        )}

      </ProjectContainer>

    </ProjectSection>

  )

}


/* =========================
styled
========================= */

const ProjectSection = styled.section`
padding:120px 0;
background:${nm.bg};
`

const ProjectTitle = styled.div`
text-align:center;
margin-bottom:60px;

p{
color:${nm.muted};
margin-bottom:7px;
}

h2{
font-size:34px;
color:${nm.text};
font-weight:800;
}
`

const ProjectContainer = styled.div`
max-width:1100px;
margin:auto;
padding:40px;
border-radius:26px;

background:${nm.bg};
box-shadow:${nmOutSoft};
border:1px solid ${nm.stroke};
`

const ProjectWrap = styled.div`
display:flex;
gap:60px;
align-items: center;
@media (max-width:900px){
flex-direction:column;
}
`

const Left = styled.div`
flex:1;
`

const Right = styled.div`
flex:1;
`

const InfoTable = styled.table`
width:100%;
color:${nm.text};

td{
padding:8px 0;
}

.tdTitle{
font-weight:700;
width:200px;
}
`

const FrButton = styled.a`

display:inline-flex;
margin-top:20px;
margin-right:12px;
padding:10px 18px;
border-radius:999px;

background:${nm.bg};
border:1px solid ${nm.stroke};
box-shadow:${nmOutTiny};

color:${nm.text};
text-decoration:none;
margin-right:12px;

&:hover{
color:${nm.accent};
border-color:${nm.accent};
}

`

const ImageBox = styled.div`

padding:14px;
border-radius:18px;

background:${nm.bg};
box-shadow:${nmOutTiny};
border:1px solid ${nm.stroke};

img{
width:100%;
border-radius:14px;
display:block;
}

`

const Description = styled.p`

margin-top:20px;
color:${nm.muted};
line-height:1.6;

`

const Tabs = styled.div`

margin-top:60px;

display:flex;
justify-content:center;
gap:12px;
flex-wrap:wrap;

`

const Tab = styled.button`

width:30%;
background:${nm.bg};
border:1px solid ${nm.stroke};
outline:none;
&:focus{
outline:none;
}

box-shadow:${props =>
    props.active
      ? `inset 4px 4px 10px ${nm.shadowDark},
inset -4px -4px 10px ${nm.shadowLight}`
      : nmOutTiny
  };

cursor:pointer;
color:${nm.text};

&:hover{
color:${nm.accent};
}

`

const DetailContent = styled.div`

margin-top:40px;
text-align:center;

img{
width:100%;
max-width:900px;
border-radius:16px;
box-shadow:${nmOutTiny};
}

`

const DetailBtn = styled.div`

margin-top:50px;
width:100%;

text-align:center;
padding:14px;

background:${nm.bg};
border:1px solid ${nm.stroke};
box-shadow:${nmOutTiny};

cursor:pointer;

`