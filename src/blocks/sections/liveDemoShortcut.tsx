import Link from 'next/link';

export function LiveDemoShortcut() {
  return (
    <Link
      href="/demo"
      className="group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="View Live Demo"
    >
      {/* Play Button Circle */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
      </div>

      {/* Text */}
      <span className="text-white font-medium text-lg">
        Live Demo...
      </span>
    </Link>
  );
}
