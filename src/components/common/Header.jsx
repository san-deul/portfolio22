import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Swiper, SwiperSlide, } from "swiper/react";

const menus = [
  { label: "Top", id: "visual" },
  { label: "Frontend", id: "frontend" },
  { label: "BackEnd", id: "backend" },
  { label: "Publishing", id: "publishing" },
  { label: "Profile", id: "about" },
];

const nm = {
  bg: "#EEF2FA",
  text: "#2b3445",
  accent: "#4f7cff",
  shadowDark: "rgba(120, 135, 160, 0.18)",
  shadowLight: "rgba(255, 255, 255, 0.95)",
  stroke: "rgba(255,255,255,0.65)",
};

const nmOutTiny = `
  6px 6px 16px ${nm.shadowDark},
  -6px -6px 16px ${nm.shadowLight}
`;

export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  const theme = useTheme();
  const tabletWidth = parseInt(theme?.size?.tablet || 768);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= tabletWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [tabletWidth]);


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 70);

      if (window.scrollY === 0) {
        setActive(null);
        return;
      }

      if (!hasScrolledOnce && window.scrollY > 0) {
        setHasScrolledOnce(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [hasScrolledOnce]);


  useEffect(() => {
    if (!hasScrolledOnce) return;

    const sections = menus
      .map((m) => document.getElementById(m.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY === 0) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      { threshold: [0.4, 0.55, 0.7] }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [hasScrolledOnce]);


  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;


    if (!hasScrolledOnce) setHasScrolledOnce(true);

    const headerH = 70;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (

    <HeaderWrap $scrolled={scrolled}>
      <Nav $isMobile={isMobile}>
        {isMobile ? (
          <Swiper slidesPerView={4.5} >
            {menus.map((menu) => (
              <SwiperSlide key={menu.id}
                style={{
                  width: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <NavItem $active={active === menu.id}>
                  <button type="button" onClick={() => handleScrollTo(menu.id)}>
                    {menu.label}
                  </button>
                </NavItem>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            {menus.map((menu) => (
              <NavItem key={menu.id} $active={active === menu.id}>
                <button type="button" onClick={() => handleScrollTo(menu.id)}>
                  {menu.label}
                </button>
              </NavItem>
            ))}
          </>
        )}
      </Nav>
    </HeaderWrap>

  );
}

/* =========================
   Styled Components
========================= */

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  z-index: 999;

  background: ${({ $scrolled }) => ($scrolled ? "rgba(238,242,250,0.78)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(10px)" : "none")};
  border-bottom: ${({ $scrolled }) => ($scrolled ? `1px solid ${nm.stroke}` : "1px solid transparent")};
  box-shadow: ${({ $scrolled }) => ($scrolled ? nmOutTiny : "none")};

  transition: background 0.25s ease, box-shadow 0.25s ease, backdrop-filter 0.25s ease,
    border-color 0.25s ease;
`;

const Nav = styled.ul`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 18px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 22px;

  list-style: none;
  @media ${({ theme }) => theme.device.mobile} {

    padding:0 6px;
  }

`;

const NavItem = styled.li`
  button {
    appearance: none;
    border: 0;
    cursor: pointer;

    padding: 10px 14px;
    border-radius: 999px;

    color: ${({ $active }) => ($active ? nm.accent : " var(--gray-sub)")};

    font-weight:600;
    font-size:var(--font-size-base);
    outline: none;
    transition: 0.2s;
    background:none;
    
  }

  button:hover {
    color: var(--blue-main);
  
  }


`;