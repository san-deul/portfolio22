import { useEffect } from "react";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  useEffect(() => {
    // 첫 진입 시 localStorage 값 불러오기
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      🌓
    </button>
  );
}
