import { Bot, Code2, Database, Server } from "lucide-react";
import {
  SiAngular,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGit,
  SiJavascript,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSharp,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import type { ReactNode } from "react";

interface SkillItem {
  name: string;
  icon: ReactNode;
  color: string;
}

interface SkillGroup {
  title: string;
  items: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript size={18} />,
        color: "#f7df1e",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={18} />,
        color: "#3178c6",
      },
      {
        name: "Python",
        icon: <SiPython size={18} />,
        color: "#3776ab",
      },
      {
        name: "C#",
        icon: <SiSharp size={18} />,
        color: "#68217a",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: <SiReact size={18} />,
        color: "#61dafb",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={18} />,
        color: "var(--text-primary)",
      },
      {
        name: "Angular",
        icon: <SiAngular size={18} />,
        color: "#dd0031",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <SiNodedotjs size={18} />,
        color: "#339933",
      },
      {
        name: "REST APIs",
        icon: <Server size={18} />,
        color: "#ff6c37",
      },
      {
        name: "FastAPI",
        icon: <SiFastapi size={18} />,
        color: "#009688",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "SQL Server",
        icon: <Database size={18} />,
        color: "#cc2927",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={18} />,
        color: "#336791",
      },
      {
        name: "Supabase",
        icon: <SiSupabase size={18} />,
        color: "#3ecf8e",
      },
    ],
  },
  {
    title: "AI & Data",
    items: [
      {
        name: "LLM Integration",
        icon: <Bot size={18} />,
        color: "#8b5cf6",
      },
      {
        name: "RAG Systems",
        icon: <Code2 size={18} />,
        color: "#06b6d4",
      },
      {
        name: "LangChain",
        icon: <SiLangchain size={18} />,
        color: "#1c3c3c",
      },
      {
        name: "Vector Databases",
        icon: <Database size={18} />,
        color: "#6366f1",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: <SiGit size={18} />,
        color: "#f05032",
      },
      {
        name: "Docker",
        icon: <SiDocker size={18} />,
        color: "#2496ed",
      },
      {
        name: "Postman",
        icon: <SiPostman size={18} />,
        color: "#ff6c37",
      },
      {
        name: "Figma",
        icon: <SiFigma size={18} />,
        color: "#a259ff",
      },
    ],
  },
];

const skillGroupOrder = [
  "Frontend",
  "Backend",
  "Databases",
  "Languages",
  "AI & Data",
  "Tools",
];

const Skills = () => {
  const orderedSkillGroups = [...skillGroups].sort(
    (a, b) =>
      skillGroupOrder.indexOf(a.title) - skillGroupOrder.indexOf(b.title),
  );

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
          {orderedSkillGroups.map(({ title, items }) => (
            <article
              key={title}
              className="group relative flex h-full min-h-56 flex-col gap-4 overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-px flex-1"
                  style={{ backgroundColor: "var(--border)" }}
                />

                <div className="flex min-w-0 justify-center">
                  <h3
                    className="text-center text-sm font-extrabold uppercase tracking-widest"
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {title}
                  </h3>
                </div>

                <span
                  className="h-px flex-1"
                  style={{ backgroundColor: "var(--border)" }}
                />
              </div>

              <div className="grid flex-1 content-start gap-2">
                {items.map(({ name, icon, color }) => (
                  <div
                    key={name}
                    className="flex min-h-11 items-center justify-start gap-3 rounded-xl px-3 text-left transition-colors duration-200"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--text-primary) 4%, var(--bg-secondary))",
                      color: "var(--text-primary)",
                    }}
                  >
                    <span
                      className="flex h-7 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--text-primary) 7%, var(--bg-card))",
                        color,
                      }}
                    >
                      {icon}
                    </span>

                    <span className="text-sm font-semibold leading-tight">
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
