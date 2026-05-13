import { Github } from "lucide-react";
import { useLanguage } from "../context/languageContext";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imagePosition: string;
  github: string;
  demo?: string;
  liveDemoLabel: string;
}

type ProjectData = Omit<Project, "title" | "description" | "liveDemoLabel">;

const projects: ProjectData[] = [
  {
    tags: ["Python", "LangChain", "ChromaDB", "Gemini API", "Flask"],
    image: "/projects/project-chatbot.webp",
    imagePosition: "50% 50%",
    github: "https://github.com/IVANDOS33/Chatbot_Proyecto",
  },
  {
    tags: ["Blazor Server", "C#", "SignalR", "Entity Framework", "SQL Server"],
    image: "/projects/project-sports.webp",
    imagePosition: "54% 50%",
    github: "https://github.com/mat1asAlfaro/SportEventManager",
  },
  {
    tags: ["Java", "Jakarta EE 10", "WildFly", "Docker", "Grafana"],
    image: "/projects/project-payments.webp",
    imagePosition: "50% 50%",
    github: "https://github.com/mat1asAlfaro/tallerJavaEE",
  },
  {
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    image: "/projects/project-hostel.webp",
    imagePosition: "48% 50%",
    github: "https://github.com/mat1asAlfaro/HotelApp",
  },
];

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  imagePosition,
  github,
  demo,
  liveDemoLabel,
}: Project) => (
  <div
    className="flex flex-col sm:flex-row rounded-2xl overflow-hidden"
    style={{
      backgroundColor: "var(--bg-card)",
      border: "1px solid var(--border)",
    }}
  >
    {/* Project thumbnail — left side */}
    <div
      className="h-40 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-48"
      style={{
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        style={{ objectPosition: imagePosition }}
      />
    </div>

    {/* Content — right side */}
    <div className="flex flex-col justify-between gap-3 p-5 flex-1">
      <div className="flex flex-col gap-2">
        <h3
          className="text-base md:text-lg font-bold leading-tight"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-display)",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm md:text-base font-normal leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--accent) 10%, var(--bg-primary))",
                border:
                  "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                color: "var(--text-primary)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
            }}
          >
            <Github size={13} /> GitHub
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--bg-primary)",
              }}
          >
              {liveDemoLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="flex justify-center px-8 py-32"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl w-full flex flex-col gap-16">
        <div>
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            {t.projects.eyebrow}
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            {t.projects.title}
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={t.projects.items[index].title}
              {...project}
              {...t.projects.items[index]}
              liveDemoLabel={t.projects.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
