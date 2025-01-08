import { Plant } from "@/types/plant.types";
import Link from "next/link";

interface ExploreShortcutProps {
  plant: Plant;
  className?: string;
}

export const ExploreShortcut = ({ plant, className }: ExploreShortcutProps) => {
  return (
    <Link
      className={`flex-shrink-0 min-w-full w-full flex items-center justify-center md:max-w-[13rem] px-5 py-2 border border-white/20 text-white rounded-lg md:w-[12rem] text-[1.75rem] hover:bg-white/10 transition-all duration-300 text-center ${className}`}
      title={`Explore ${plant.common_name || plant.scientific_name} plants`}
      href='/plants'
    >
      Explore
    </Link>
  );
};
