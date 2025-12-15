import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-40">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-white to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6366f120,transparent_60%)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-40">
          {/* Left */}
          <div>
            <h1 className="text-6xl font-bold tracking-tight mb-8">
              Samuel<span className="text-indigo-600">.</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
              Software Engineer focused on{" "}
              <span className="text-indigo-600 font-medium">Backend</span> &{" "}
              <span className="text-indigo-600 font-medium">Fullstack</span>{" "}
              systems.
              <br />
              Designing scalable, maintainable, production-ready software.
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects"
                className="px-7 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="px-7 py-3 rounded-md border border-gray-300 hover:bg-gray-50 transition"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Right Panel */}
          <div className="hidden md:block">
            <div className="rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-gray-200 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="text-xs tracking-widest text-gray-400 mb-6">
                SYSTEM PROFILE
              </div>

              <dl className="space-y-4 text-sm">
                <InfoRow label="Role" value="Software Engineer" />
                <InfoRow label="Focus" value="Backend / Fullstack" />
                <InfoRow label="Stack" value="Next.js / Node.js" />
                <InfoRow label="Deployment" value="Vercel" />
                <InfoRow
                  label="Status"
                  value={
                    <span className="flex items-center gap-2 text-emerald-600 font-medium">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Available
                    </span>
                  }
                />
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {[
          ["3+", "Years Learning"],
          ["10+", "Projects Built"],
          ["100%", "Deployed"],
          ["∞", "Growth Mindset"],
        ].map(([v, l]) => (
          <div
            key={l}
            className="rounded-xl bg-white ring-1 ring-gray-200 py-10 text-center"
          >
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {v}
            </div>
            <div className="text-sm text-gray-500">{l}</div>
          </div>
        ))}
      </section>

      {/* ================= SKILLS ================= */}
      <section>
        <h2 className="text-3xl font-bold mb-14">Core Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <SkillCard
            title="Backend"
            items={[
              "RESTful API Design",
              "Auth & Authorization",
              "Database Modeling",
              "Error Handling",
            ]}
          />
          <SkillCard
            title="Frontend"
            items={[
              "Next.js / React",
              "Tailwind CSS",
              "Component Architecture",
            ]}
          />
          <SkillCard
            title="Engineering"
            items={[
              "Git Workflow",
              "CI/CD",
              "Clean Code",
              "Production Deployment",
            ]}
          />
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold">Selected Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-indigo-600 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            title="Samuel Portfolio"
            description="Personal portfolio built with Next.js and Tailwind, deployed with Vercel CI/CD."
            tech={["Next.js", "Tailwind", "Vercel"]}
          />
          <ProjectCard
            title="Backend Practice System"
            description="RESTful API system with authentication, RBAC, and clean architecture."
            tech={["Node.js", "JWT", "REST"]}
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="rounded-2xl bg-indigo-50 px-12 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Meaningful
        </h2>
        <p className="text-gray-600 mb-10">
          Interested in my work? Explore my projects or download my resume.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="px-8 py-3 rounded-md border border-gray-300 hover:bg-white transition"
          >
            Resume
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ================= Components ================= */

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex justify-between">
      <dt className="text-gray-400">{label}</dt>
      <dd className="text-gray-800">{value}</dd>
    </div>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string[];
}) {
  return (
    <div className="rounded-xl ring-1 ring-gray-200 p-8 hover:shadow-lg transition">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs rounded-md bg-indigo-50 text-indigo-600 px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
