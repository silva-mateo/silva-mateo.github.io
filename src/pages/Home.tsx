import { Github, Linkedin, Mail, ArrowUpRight, Download } from "lucide-react";
import { useLanguage } from "../context/languageContext";

const Home = () => {
  const { t } = useLanguage();

  const handleEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = [
      "mailto",
      ":",
      "mateosilva.dev",
      "@",
      "gmail.com",
    ].join("");
  };

  const linkStyle = { color: "var(--text-secondary)" };

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "var(--accent)";
  };

  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "var(--text-secondary)";
  };

  const handleScaleEnter = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLElement>,
  ) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleScaleLeave = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLElement>,
  ) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-8 py-32 text-center"
      style={{
        backgroundColor: "var(--bg-secondary)",
        background: `radial-gradient(ellipse 70% 50% at 50% 45%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 72%), linear-gradient(180deg, var(--bg-primary) 0%, color-mix(in srgb, var(--bg-primary) 70%, var(--bg-secondary)) 58%, var(--bg-secondary) 100%)`,
      }}
    >
      <div className="max-w-2xl w-full flex flex-col items-center gap-7">
        <div className="flex flex-col items-center gap-2">
          <h1
            className="text-6xl md:text-7xl font-extrabold leading-none tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Mateo Silva
          </h1>
          <p
            className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
            }}
          >
            {t.home.role}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {t.home.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-medium rounded-full tracking-wide"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 10%, var(--bg-primary))",
                  border:
                    "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                  color: "var(--text-primary)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <p
          className="text-base md:text-lg font-normal leading-relaxed max-w-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          {t.home.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--bg-primary)",
            }}
            onMouseEnter={handleScaleEnter}
            onMouseLeave={handleScaleLeave}
          >
            {t.home.projectsButton} <ArrowUpRight size={15} />
          </button>

          <a
            href="/Mateo_Silva_CV.pdf"
            download="Mateo_Silva_CV.pdf"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <Download size={14} /> {t.home.resumeButton}
          </a>
        </div>

        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/silva-mateo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.home.githubLabel}
            style={linkStyle}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/in/mateosilva"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.home.linkedinLabel}
            style={linkStyle}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <Linkedin size={22} />
          </a>

          <a
            href="#"
            onClick={handleEmail}
            aria-label={t.home.emailLabel}
            style={linkStyle}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
