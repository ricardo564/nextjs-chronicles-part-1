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
        src={searchIcon}
        alt="Search icon"
        width={26}
        height={26}
      />
      {label}
    </Link>
  );
};
