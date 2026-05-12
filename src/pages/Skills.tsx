import { Code2, Monitor, Server, Database, Bot, Wrench } from "lucide-react";
import type { ReactNode } from "react";

interface SkillGroup {
  icon: ReactNode;
  title: string;
  items: {
    name: string;
    badge: string;
  }[];
}

const skillGroups: SkillGroup[] = [
  {
    icon: <Code2 size={20} />,
    title: "Languages",
    items: [
      { name: "JavaScript", badge: "JS" },
      { name: "TypeScript", badge: "TS" },
      { name: "Python", badge: "PY" },
      { name: "C#", badge: "C#" },
    ],
  },
  {
    icon: <Monitor size={20} />,
    title: "Frontend",
    items: [
      { name: "React", badge: "R" },
      { name: "Next.js", badge: "NX" },
      { name: "Angular", badge: "NG" },
    ],
  },
  {
    icon: <Server size={20} />,
    title: "Backend",
    items: [
      { name: "Node.js", badge: "ND" },
      { name: "REST APIs", badge: "API" },
      { name: "FastAPI", badge: "FA" },
    ],
  },
  {
    icon: <Database size={20} />,
    title: "Databases",
    items: [
      { name: "SQL Server", badge: "SQL" },
      { name: "PostgreSQL", badge: "PG" },
      { name: "Supabase", badge: "SB" },
    ],
  },
  {
    icon: <Bot size={20} />,
    title: "AI & Data",
    items: [
      { name: "LLM Integration", badge: "AI" },
      { name: "RAG Systems", badge: "RAG" },
      { name: "LangChain", badge: "LC" },
      { name: "Vector Databases", badge: "VDB" },
    ],
  },
  {
    icon: <Wrench size={20} />,
    title: "Tools",
    items: [
      { name: "Git", badge: "GIT" },
      { name: "Docker", badge: "DK" },
      { name: "Postman", badge: "PM" },
      { name: "Figma", badge: "FG" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex justify-center px-8 py-32"
      style={{ backgroundColor: "var(--bg-secondary)" }}
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

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ icon, title, items }) => (
            <article
              key={title}
              className="group relative flex h-full min-h-56 flex-col gap-4 overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: "var(--accent)" }}
              />

              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 14%, var(--bg-secondary))",
                    color: "var(--accent)",
                  }}
                >
                  {icon}
                </span>

                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <h3
                    className="text-base font-bold tracking-tight"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {title}
                  </h3>

                  <span
                    className="h-px flex-1"
                    style={{ backgroundColor: "var(--border)" }}
                  />
                </div>
              </div>

              <div className="grid flex-1 content-start gap-2">
                {items.map(({ name, badge }) => (
                  <div
                    key={name}
                    className="flex min-h-11 items-center justify-start gap-3 rounded-xl px-3 text-left"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--text-primary) 4%, var(--bg-secondary))",
                      border:
                        "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <span
                      className="flex h-7 w-10 shrink-0 items-center justify-center rounded-lg text-[0.65rem] font-extrabold tracking-tight"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--accent) 14%, var(--bg-card))",
                        color: "var(--accent)",
                      }}
                    >
                      {badge}
                    </span>

                    <span className="text-xs font-semibold leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
