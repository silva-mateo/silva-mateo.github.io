import { MapPin, GraduationCap, Laptop2, Languages } from "lucide-react";

const cards = [
  {
    icon: <MapPin size={18} />,
    title: "Uruguay",
    description: "Maldonado",
  },
  {
    icon: <GraduationCap size={18} />,
    title: "Computer Technology",
    description: "UTEC",
  },
  {
    icon: <Languages size={18} />,
    title: "Cambridge B2 First",
    description: "English Certificate",
  },
  {
    icon: <Laptop2 size={18} />,
    title: "Full Stack Developer",
    description: "Integrating AI into real-world applications",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center px-8 py-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl w-full flex flex-col gap-16">
        <div>
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            About
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Who I am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <p
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: "var(--text-primary)", opacity: 0.85 }}
            >
              I started programming over three years ago, driven by curiosity
              and the desire to build things that actually work in the real
              world. What began as experimenting with small projects quickly
              turned into a genuine passion for software development.
            </p>
            <p
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: "var(--text-primary)", opacity: 0.85 }}
            >
              Experience across the full stack, finding practical ways to
              integrate AI into products.
            </p>
            <p
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: "var(--text-primary)", opacity: 0.85 }}
            >
              Prioritizing clear and maintainable code while building modern,
              practical solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 self-center">
            {cards.map(({ icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-2 p-4 rounded-2xl"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  minHeight: "90px",
                }}
              >
                <span style={{ color: "var(--accent)" }}>{icon}</span>
                <span
                  className="text-sm font-semibold leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </span>
                <span
                  className="text-xs font-light leading-snug"
                  style={{ color: "var(--text-primary)", opacity: 0.7 }}
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
