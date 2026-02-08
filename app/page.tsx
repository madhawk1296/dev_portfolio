import Link from "next/link";
import { projects } from "./data/projects";
import { featuredSkills } from "./data/skills";
import SkillBadge from "./components/SkillBadge";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center h-full py-16">
      <div className="flex flex-col items-center pb-16">
        <p className="text-gray-700 text-lg mb-4 font-medium">
          Hi, I'm Cristian, a full-stack engineer
        </p>
        <h1 className="font-[family-name:var(--font-orbitron)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance max-w-2xl text-center">
          I build <span className="underline">end-to-end</span> web applications
        </h1>
        <a
          href="/contact"
          className="mt-8 px-6 py-3 bg-foreground text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
        >
          Get in touch
        </a>
        <a
          href="https://x.com/madhawkcristian"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-foreground hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>

      <div className="w-full max-w-5xl px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold tracking-wide">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            View all
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <ProjectsSection projects={featuredProjects} variant="featured" />
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-5xl px-4 mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold tracking-wide">
            Skills
          </h2>
          <Link
            href="/skills"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            View all
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {featuredSkills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
