import { gradients } from "../styles/theme";
const modules = import.meta.glob('../assets/img/pub/*.{jpg,jpeg,png,svg}', { eager: true });


// 파일명 → 숫자 추출 → 정렬
const images = Object.keys(modules)
  .sort((a, b) => {
    const fileA = a.split('/').pop();    // list10.png
    const fileB = b.split('/').pop();

    const numA = parseInt(fileA.replace(/\D+/g, "")); // 숫자만 추출
    const numB = parseInt(fileB.replace(/\D+/g, ""));

    return numA - numB;
  })
  .map(key => modules[key].default);



export const Lists = [
  {
    img: images[0],
    title: "피엔씨트레이드",
    link:"http://www.pnctrade.co.kr/",
    desc: ["메인페이지 100% ", "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)" },
      { text: "publishing 100%", bgColor: "var(--blue-sub)" ,txtColor:"var(--blue-main)"  },
    ],
    iconColor: "#22d3ee",

  },
  {
    img: images[1],
    title: "유트론",
    link:"http://www.utron.co.kr/",
    desc: ["메인페이지 100%" , "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)" },
    ],
    iconColor: "#70b3b1",
  },
  {
    img:images[2],
    title:"대진기계공업",
    link:"http://www.daejinco.co.kr/main.php",
    desc: ["메인페이지 100%", "서브페이지 100%",],
    tags: [
      { text: "반응형",bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)" },
    ]
  },
    {
    img:images[3],
    title:"세기 fsd",
    link:"https://segifsd.co.kr/",
    desc: ["메인페이지 100%" , "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)"  },
    ]
  },
    {
    img:images[4],
    title:"ACT 테크놀로지",
    link:"http://www.acttech.co.kr/",
    desc:[ "메인페이지 100%" , "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)" },
    ]
  },
    {
    img:images[5],
    title:"CLIO D&S",
    link:"https://clio-ds.com/",
    desc: ["메인페이지 100%" , "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)" },
    ]
  },
    {
    img:images[6],
    title:"우주국제특허법률사무소",
    link:"https://www.wjpat.com/",
    desc:[ "메인페이지 100%" , "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)" },
    ]
  },
    {
    img:images[7],
    title:"법무법인 대한중앙",
    link:"http://daehanjoongang.co.kr/",
    desc: ["메인페이지 100%" , "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)" },
    ]
  },
    {
    img:images[8],
    title:"루아트갤러리",
    link:"http://www.luartgallery.kr/",
    desc: ["메인페이지 100% ", "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)" },
    ]
  },
    {
    img:images[9],
    title:"하버하우스",
    link:"https://harborhouse.kr/",
    desc:[ "메인페이지 100%" , "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)"},
    ],
  },
  {
    img:images[10],
    title:"자브종마켓",
    link:"/",
    desc:[ "메인페이지 100%" , "서브페이지 100%",],
    tags: [
      { text: "반응형", bgColor: "var(--blue-sub)", txtColor:"var(--blue-main)" },
    ],
    closed:true,
  },

];
