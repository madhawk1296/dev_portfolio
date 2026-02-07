interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="group flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-gray-200 transition-all duration-300 hover:border-accent/50 hover:bg-gray-50">
      {icon && (
        <span className="text-accent/70 group-hover:text-accent transition-colors">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  );
}
