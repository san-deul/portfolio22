import styled from "styled-components";
import { Card2 } from "./common/Card2";
import { ContentCard } from "./common/Frontend/ContentCard";
import { TopTitle } from "./common/Frontend/TopTitle";

//import prj1img from "../assets/img/prj2.png";
import prj1img from "../assets/img/prj2.png";
import prj2img from "../assets/img/prj1.png";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SquareArrowOutUpRight } from "lucide-react";

const iconMap = {
  github: <FaGithub />,
  link: <FaExternalLinkAlt />
}

const project = [
  {
    num: "1",
    title: "호텔 예약 사이트",
    img: prj1img,
    exp: [
      "",
      ""
    ],
    stack: [
      { category: "프레임워크", value: " React, React Router, Vite" },
      { category: "상태관리", value: "Zustand" },
      { category: "데이터페칭", value: "React Query (TanStack Query)" },
      { category: "스타일링", value: "Tailwind CSS" },
      { category: "백엔드", value: "Supabase" },
      { category: "주요 라이브러리", value: "FullCalendar, Chart.js, React Hook Form" },
      { category: "버전관리", value: "Git" }
    ],
    link: [
      { label: "Git", url: "https://github.com/san-deul/my-hotel-app", icon: "github" },
      { label: "바로보기", url: "https://my-hotel-app-beige.vercel.app/", icon: "link" }
    ],

  },
    {
    num: "2",
    title: "화장품 구매 사이트",
    img: prj2img,
    exp: [
      "",
      ""
    ],
    stack: [
      { category: "프레임워크", value: " React, React Router, Vite" },
      { category: "데이터페칭", value: "Axios" },
      { category: "백엔드", value: "Supabase, JSON Server" },
      { category: "주요 라이브러리", value: "Swiper, React Daum Postcode" },
      { category: "버전관리", value: "Git" }
    ],
    link: [
      { label: "Git", url: "https://github.com/san-deul/my-shopping-app", icon: "github" },
      { label: "바로보기", url: "https://my-shopping-app-one.vercel.app/", icon: "link" }
    ],

  }

]

export function FrontCard({ }) {
  const firstProject = project[0]
  const secondProject = project[1]

  return (
    <>
      <Card2 >
        <TopTitle num={firstProject.num} title={firstProject.title}></TopTitle>
        <ContentCard
          img={firstProject.img}
          exp={firstProject.exp}
          stack={firstProject.stack}
          link={firstProject.link}
          icon={iconMap}
        />
      </Card2>

      <Card2 >
        <TopTitle num={secondProject.num} title={secondProject.title}></TopTitle>
        <ContentCard
          img={secondProject.img}
          exp={secondProject.exp}
          stack={secondProject.stack}
          link={secondProject.link}
          icon={iconMap}
        />
      </Card2>
    </>

  )
}

