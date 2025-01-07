import Link from 'next/link';

interface LiveDemoShortcutProps {
  className?: string;
}

export function LiveDemoShortcut({ className }: LiveDemoShortcutProps) {
  return (
    <Link
      href="/demo"
      className={`group flex items-center gap-3 px-6 py-3 rounded-full w-full ${className}`}
      aria-label="View Live Demo"
    >
      <div className="flex items-center justify-center gap-3 w-full">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
        </div>

        <span className="text-white font-medium text-lg">
          Live Demo...
        </span>
      </div>
    </Link>
  );
}
