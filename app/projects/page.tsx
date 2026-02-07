import { projects } from "../data/projects";
import ProjectsSection from "../components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          <span className="text-foreground">Projects</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          A selection of projects I&apos;ve worked on. Each one represents a unique
          challenge and learning experience.
        </p>
      </div>

      {/* Projects Grid */}
      <ProjectsSection projects={projects} variant="full" />
    </div>
  );
}
