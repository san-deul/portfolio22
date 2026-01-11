import { useEffect, useState } from "react";
import styled from "styled-components";

const menus = [
  { label: "Visual", id: "visual" },
  { label: "Frontend", id: "frontend" },
  { label: "BackEnd", id: "backend" },
  { label: "Publishing", id: "publishing" },
  { label: "About Me", id: "about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const visualSection = document.getElementById("visual");

    const handleScroll = () => {
      if (!visualSection) return;

      const visualHeight = visualSection.offsetHeight;
      setScrolled(window.scrollY > visualHeight - 70);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <HeaderWrap $scrolled={scrolled}>
      <Nav>
        {menus.map((menu) => (
          <NavItem key={menu.id} onClick={() => handleScrollTo(menu.id)}>
            {menu.label}
          </NavItem>
        ))}
      </Nav>
    </HeaderWrap>
  );
}
const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: 70px;
  z-index: 999;
  transition: all 0.4s ease;

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(0,0,0,0.7)" : "transparent"};
`;

const Nav = styled.ul`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 36px;

`;

const NavItem = styled.li`
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #fff;
    transition: 0.3s;
    transform: translateX(-50%);
  }

  &:hover:after {
    width: 100%;
  }
`;
