import { useEffect, useState } from "react";
import styled from "styled-components";

const menus = [
  { label: "Visual", id: "visual" },
  { label: "Frontend", id: "frontend" },
  { label: "BackEnd", id: "backend" },
  { label: "Publishing", id: "publishing" },
  { label: "About Me", id: "about" },
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
      <Nav>
        {menus.map((menu) => (
          <NavItem key={menu.id} $active={active === menu.id}>
            <button type="button" onClick={() => handleScrollTo(menu.id)}>
              {menu.label}
            </button>
          </NavItem>
        ))}
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
  height: 70px;
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
`;

const NavItem = styled.li`
  button {
    appearance: none;
    border: 0;
    cursor: pointer;

    padding: 10px 14px;
    border-radius: 999px;

    color: ${({ $active }) => ($active ? nm.accent :"rgba(92, 99, 114, 0.75)")};
    background: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.35)" : "transparent")};
    font-weight:600;
    outline: none;
    transition: 0.2s;
    
  }

  button:hover {
    color: ${nm.accent};
    background: rgba(255, 255, 255, 0.35);
  }

  button:focus-visible {
    outline: 2px solid ${nm.accent};
    outline-offset: 3px;
  }
`;