import { MapPin, GraduationCap, Laptop2, Languages } from "lucide-react";
import { useLanguage } from "../context/languageContext";

const cardIcons = [
  <MapPin size={18} />,
  <GraduationCap size={18} />,
  <Languages size={18} />,
  <Laptop2 size={18} />,
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex items-center justify-center px-8 py-32"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl w-full flex flex-col gap-16">
        <div>
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            {t.about.eyebrow}
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            {t.about.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            {t.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base md:text-lg font-normal leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 self-center">
            {t.about.cards.map(({ title, description }, index) => (
              <div
                key={title}
                className="flex flex-col gap-2 p-4 rounded-2xl"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  minHeight: "90px",
                }}
              >
                <span style={{ color: "var(--accent)" }}>
                  {cardIcons[index]}
                </span>
                <span
                  className="text-sm md:text-base font-semibold leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </span>
                <span
                  className="text-xs md:text-sm font-normal leading-snug"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
