import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "LLM-Powered Conversational Chatbot",
    description:
      "Hybrid RAG chatbot combining semantic search with BM25 retrieval. Integrates real-time OracleDB data with internal documentation via LangChain and Gemini API.",
    tags: ["Python", "LangChain", "ChromaDB", "Gemini API", "Flask"],
    github: "https://github.com/IVANDOS33/Chatbot_Proyecto",
  },
  {
    title: "Sport Event Manager",
    description:
      "Platform for managing sports events, runners and registrations. Features live time tracking via SignalR and RFID chip integration for real-time results.",
    tags: ["Blazor Server", "C#", "SignalR", "Entity Framework", "SQL Server"],
    github: "https://github.com/mat1asAlfaro/SportEventManager",
  },
  {
    title: "Payment Gateway",
    description:
      "Enterprise payment processing platform handling merchant management and fund transfers, with rate limiting and full observability through Grafana and InfluxDB.",
    tags: ["Java", "Jakarta EE 10", "WildFly", "Docker", "Grafana"],
    github: "https://github.com/mat1asAlfaro/tallerJavaEE",
  },
  {
    title: "Mochileros · Hostel Management App",
    description:
      "Mobile app for hostel management. Admins handle rooms and bookings while guests self-manage their reservations, built on Supabase with Flutter.",
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    github: "https://github.com/mat1asAlfaro/HotelApp",
  },
];

const ProjectCard = ({ title, description, tags, github, demo }: Project) => (
  <div
    className="flex flex-col sm:flex-row rounded-2xl overflow-hidden"
    style={{
      backgroundColor: "var(--bg-card)",
      border: "1px solid var(--border)",
    }}
  >
    {/* Placeholder image — left side */}
    <div
      className="w-full sm:w-48 flex-shrink-0 h-40 sm:h-auto"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, var(--accent) 20%, var(--bg-primary)) 0%, var(--bg-secondary) 100%)`,
      }}
    />

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
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
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
            Projects
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            What I've built
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
