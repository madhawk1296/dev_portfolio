"use client";

import Image from "next/image";
import { Project } from "../data/projects";

interface ClickableProjectCardProps {
  project: Project;
  variant: "featured" | "full";
  onClick: () => void;
}

export default function ClickableProjectCard({
  project,
  variant,
  onClick,
}: ClickableProjectCardProps) {
  if (variant === "featured") {
    return (
      <button
        onClick={onClick}
        className="group block w-full text-left overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300"
      >
        {project.imageUrls && project.imageUrls[0] && (
          <div className="relative w-full aspect-video">
            <Image
              src={project.imageUrls[0]}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-semibold tracking-wide group-hover:text-gray-900 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            {project.shortDescription}
          </p>
        </div>
      </button>
    );
  }

  // Full variant
  return (
    <button
      onClick={onClick}
      className="group block w-full text-left relative bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 overflow-hidden"
    >
      {project.imageUrls && project.imageUrls.length > 0 && (
        <div className="relative w-full aspect-video">
          <Image
            src={project.imageUrls[0]}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="relative p-6">
        {/* Title */}
        <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-foreground mb-2 tracking-wide group-hover:text-gray-900 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
