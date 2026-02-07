import SkillBadge from "../components/SkillBadge";
import { skillCategories } from "../data/skills";

// Simple icon component for skills
function SkillIcon() {
  return (
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
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          <span className="text-accent">Skills</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.name}
            className="animate-fade-in"
            style={{ animationDelay: `${categoryIndex * 0.15}s` }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-foreground tracking-wide">
                {category.name}
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-surface-light to-transparent" />
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="animate-fade-in"
                  style={{
                    animationDelay: `${categoryIndex * 0.15 + skillIndex * 0.05}s`,
                  }}
                >
                  <SkillBadge name={skill.name} icon={<SkillIcon />} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
