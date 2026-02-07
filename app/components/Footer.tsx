export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-light bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted font-[family-name:var(--font-orbitron)] tracking-wider">
            Built with <span className="text-accent">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
