import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

const links = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 50) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    const sections = ["home", ...links.map(({ to }) => to)];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur"
      style={{
        backgroundColor:
          scrolled || menuOpen ? "var(--bg-secondary)" : "transparent",
        borderBottom:
          scrolled || menuOpen
            ? "1px solid var(--border)"
            : "1px solid transparent",
      }}
    >
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-extrabold text-lg tracking-tight transition-colors duration-200"
          style={{
            color:
              activeSection === "home"
                ? "var(--accent)"
                : "var(--text-primary)",
            fontFamily: "var(--font-display)",
          }}
        >
          MS
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <a
                href={`#${to}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(to);
                }}
                aria-current={activeSection === to ? "true" : undefined}
                className="transition-colors duration-200 font-semibold hover:text-[var(--accent)]"
                style={{
                  color:
                    activeSection === to
                      ? "var(--accent)"
                      : "var(--text-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-75"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            style={{ color: "var(--text-primary)" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <ul
          className="md:hidden flex flex-col px-6 py-5 gap-5"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <a
                href={`#${to}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(to);
                }}
                aria-current={activeSection === to ? "true" : undefined}
                className="transition-colors duration-200 font-semibold hover:text-[var(--accent)]"
                style={{
                  color:
                    activeSection === to
                      ? "var(--accent)"
                      : "var(--text-primary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "1.1rem",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
