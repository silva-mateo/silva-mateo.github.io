import { Code2, Monitor, Server, Database, Bot, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: <Code2 size={20} />,
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C#", "C++"],
  },
  {
    icon: <Monitor size={20} />,
    title: "Frontend",
    items: ["React", "Next.js", "Angular"],
  },
  {
    icon: <Server size={20} />,
    title: "Backend",
    items: ["Node.js", "REST APIs", "FastAPI"],
  },
  {
    icon: <Database size={20} />,
    title: "Databases",
    items: ["SQL Server", "PostgreSQL", "Supabase"],
  },
  {
    icon: <Bot size={20} />,
    title: "AI & Data",
    items: ["LLM Integration", "RAG Systems", "LangChain", "Vector Databases"],
  },
  {
    icon: <Wrench size={20} />,
    title: "Tools",
    items: ["Git", "Docker", "Postman", "Figma"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex justify-center px-8 py-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl w-full flex flex-col gap-16">
        <div>
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Skills
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillGroups.map(({ icon, title, items }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-3">
                <span style={{ color: "var(--accent)" }}>{icon}</span>
                <span
                  className="text-base font-semibold"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {title}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-light flex items-center gap-2"
                    style={{ color: "var(--text-primary)", opacity: 0.85 }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
