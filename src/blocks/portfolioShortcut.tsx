interface PortfolioShortcutProps {
  portfolioUrl: string;
  customClassName?: string;
  showText?: boolean;
}

export function PortfolioShortcut({ portfolioUrl, customClassName, showText = true }: PortfolioShortcutProps) {
  return (
    <a
      href={portfolioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors ${customClassName}`}
    >
      <svg
        className="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      {showText && (
        <span className="text-gray-700 font-medium">
          Check out my portfolio
        </span>
      )}
    </a>
  );
}
