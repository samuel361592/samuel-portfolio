import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  repos?: ProjectRepo[];
  demoUrl?: string;
};

type ProjectRepo = {
  label: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "Personal portfolio website built with Next.js and deployed on Vercel.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/samuel361592/PersonalWebsite.git",
    demoUrl: "https://samuel-chen.com",
  },
    {
  title: "Social Platform (Auth & RBAC)",
  description:
    "A full-stack social platform built to practice authentication, authorization, and CRUD operations. Supports user registration, JWT-based login, role-based access control, and post ownership validation.",
  tech: [
    "Next.js",
    "NestJS",
    "TypeORM",
    "JWT",
    "RBAC",
    "MySQL"
  ],
  repos: [
    {
      label: "Frontend",
      url: "https://github.com/samuel361592/NextJS_frontend.git",
    },
    {
      label: "Backend",
      url: "https://github.com/samuel361592/NestJS_backend.git",
    },
  ],
  },
  {
    title: "Todo CLI",
    description:
      "A command-line todo application built in Go, featuring persistent storage with SQLite and a maintainable project structure for long-term use.",
    tech: ["Go", "SQLite"],
    githubUrl: "https://github.com/samuel361592/golang-todo-cli.git",
  },
  {
    title: "Google Image Crawler",
    description:
      "A Python-based tool that automates keyword-based image collection using Google Custom Search API, designed for LLM and vision dataset preparation.",
    tech: ["Python", "Google Custom Search API", "REST API"],
    githubUrl: "https://github.com/samuel361592/google-image-crawler.git",
  },
  {
    title: "Taiwan Weather Web",
    description:
      "A web-based weather query tool built with Python and Flask that consumes CWA Open Data to provide 36-hour forecasts for all 22 cities and counties in Taiwan.",
    tech: ["Python", "Flask", "CWA Open Data API", "REST API"],
    githubUrl: "https://github.com/samuel361592/taiwan-weather-web.git",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-sm text-gray-500 mt-2">
          Selected work — built for real usage, maintainability, and iteration.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="
              group relative overflow-hidden
              rounded-xl border bg-white p-6
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              hover:border-gray-200
              flex flex-col
            "
          >

            {/* shimmer effect */}
            <div
              className="
                pointer-events-none
                absolute -top-1/2 right-[-30%]
                h-[220%] w-24
                bg-gradient-to-r from-transparent via-white/80 to-transparent
                blur-[1px]
                opacity-0
                z-20
                group-hover:[animation:cardShimmer_900ms_ease-out_1]
                "
            />
            {/* soft glow */}
            <div
              className="
                pointer-events-none absolute -inset-20 opacity-0
                bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.20),transparent_45%)]
                transition-opacity duration-300
                group-hover:opacity-100
              "
            />

            {/* subtle top highlight line */}
            <div
              className="
                pointer-events-none absolute left-0 top-0 h-[2px] w-full
                bg-gradient-to-r from-transparent via-gray-200 to-transparent
                opacity-60
              "
            />

            {/* content */}
            <h2 className="text-xl font-semibold tracking-tight mb-2 relative">
              {p.title}
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed relative">
              {p.description}
            </p>

            {/* footer pinned */}
            <div className="mt-auto relative">
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      text-xs px-2 py-1 rounded-md
                      bg-gray-100 text-gray-700
                      transition
                      group-hover:bg-gray-50
                      hover:bg-gray-200
                    "
                    title={t}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs">
                {/* multi-repo projects */}
                {p.repos?.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1
                      text-gray-500 hover:text-gray-900
                      transition
                    "
                  >
                    <GitHubIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[1px]" />
                    <span className="relative">
                      {repo.label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                ))}

                {/* fallback single repo */}
                {!p.repos && p.githubUrl ? (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1
                      text-gray-500 hover:text-gray-900
                      transition
                    "
                  >
                    <GitHubIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[1px]" />
                    <span className="relative">
                      GitHub
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                ) : null}

                {/* demo */}
                {p.demoUrl ? (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1
                      text-gray-500 hover:text-gray-900
                      transition
                    "
                  >
                    <ExternalLinkIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[1px]" />
                    <span className="relative">
                      Live
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                ) : null}
              </div>

              {/* corner shimmer */}
              <div
                className="
                  pointer-events-none absolute -right-14 -bottom-14
                  h-40 w-40 rounded-full
                  bg-gradient-to-tr from-gray-200/40 via-white/40 to-transparent
                  blur-2xl
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ICONS */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.02c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.479 5.92.432.372.816 1.102.816 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
      <path d="M5 5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6H5V5z" />
    </svg>
  );
}
