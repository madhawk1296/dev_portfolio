"use client";

import { useState } from "react";
import { Project } from "../data/projects";
import ClickableProjectCard from "./ClickableProjectCard";
import ProjectModal from "./ProjectModal";

interface ProjectsSectionProps {
  projects: Project[];
  variant: "featured" | "full";
}

export default function ProjectsSection({
  projects,
  variant,
}: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (variant === "featured") {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ClickableProjectCard
              key={project.title}
              project={project}
              variant="featured"
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </>
    );
  }

  // Full variant with staggered animation
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ClickableProjectCard
              project={project}
              variant="full"
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
