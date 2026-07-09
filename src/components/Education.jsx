import styled from "styled-components";
import { Section, SectionIn } from "./common/Section";
import { Title1 } from "./common/Title1";
import { Card2 } from "./common/Card2";
import { Building2, CircleUserRound, GraduationCap } from "lucide-react";
import { Period } from "./common/Period";
import { CardCompanyTitle } from "./common/CardCompanyTitle";

const experience = [
  { 
    period: "2023. 12 ~ 2024. 06", 
    title: "클라우드 활용 JAVA 개발자 양성과정",
    con:
    [
      "백엔드 시스템을 구축하는데 필요한 기술들을 학습하고 팀프로젝트를 통해 하나의 프로젝트가 완성되는 과정을 경험하며 실무에 필요한 능력을 함양했습니다.",
    ] 
  },

  { 
    period: "2021. 09 ~ 2022. 03", 
    title: "[디지털디자인] 모바일 웹 & 앱디자인(웹퍼블리셔, jQuery, Vue.js)-A",
    con:
    [
      "웹, 앱의 환경에서 제공되는 서비스,콘텐츠를 디자인 구성요소로 제작하여 디지털 디자인 전반적인 프로젝트를 수행하며 PC환경과 스마트 기기에 UI,UX를 최적화 하여 디자인 할 수 있는 능력을 함양하였습니다."
    ]
  },
  
  
];


export default function Education() {

  return (
    <Section>
      <SectionIn>
        <Title1>Education</Title1>
          {experience.map((exp, i) => (
            <CardSection>
              <Period period={exp.period} />
              <ExperiCon>
                <CardCompanyTitle icon ={<GraduationCap/>}  title = {exp.title}  />
                <Responsibility>
                  {exp.con}
                </Responsibility>
              </ExperiCon>
            </CardSection>
          ))}

      </SectionIn>
    </Section>

  )

}

const CardSection = styled(Card2)`
  width:100%;
  margin-top:2.5rem;
  display: flex;
  padding:1.5rem;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
  
`


const ExperiCon = styled.div`
  width:84%;
  @media ${({ theme }) => theme.device.tablet} {
    width:100%;
  }
`


const Responsibility = styled.div`
  width:70%;
  margin:0.625rem 0px 1.5rem 1rem;
  color:var(--gray-main);
  word-break: keep-all;
  line-height:140%;
  @media ${({ theme }) => theme.device.tablet} {
    width:100%;
    margin:1rem 0px 1.5rem 0.5rem;
  }
`
