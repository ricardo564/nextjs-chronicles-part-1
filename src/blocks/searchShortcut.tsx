import Link from "next/link";
import Image from "next/image";
import searchIcon from "@/assets/svg/search-icon.svg";

interface SearchShortcutProps {
  className?: string;
  label?: string;
}

export const SearchShortcut = ({ className, label }: SearchShortcutProps) => {
  return (
    <Link
      className={`px-6 py-2  text-[1.75rem] hover:bg-white/10 transition-all duration-300 text-center flex items-center gap-2 ${className}`}
      title={`Search for plants`}
      href={`/plants`}
    >
      <Image
        alt="Search icon"
        className="md:w-11 md:h-11 max-w-[44px] max-h-[44px]"
        width={26}
        height={26}
        src={searchIcon}
      />
      {label}
    </Link>
  );
};
