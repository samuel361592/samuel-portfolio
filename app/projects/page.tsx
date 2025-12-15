type Project = {
  title: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Samuel Portfolio",
    description:
      "Personal portfolio website built with Next.js and deployed on Vercel.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-600 mb-4">{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-gray-100 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
