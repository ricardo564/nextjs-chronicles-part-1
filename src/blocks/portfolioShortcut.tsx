import Image from "next/image";
import portfolioImage from "@/assets/images/ricardo-camilo-frontend-developer-frontend-engineer-software-engineer-web-developer-vuejs-vue-reactjs-react-javascript-typescript-component-architecture.webp";

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
      <Image
        src={portfolioImage}
        alt="Portfolio"
        width={24}
        height={24}
        className="rounded-full scale-150"
      />

      {showText && (
        <span className="text-gray-700 font-medium">
          Check out my portfolio
        </span>
      )}
    </a>
  );
}
