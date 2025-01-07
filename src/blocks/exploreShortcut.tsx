import { Plant } from "@/types/plant.types";
import Link from "next/link";

interface ExploreShortcutProps {
  plant: Plant;
  className?: string;
}

export const ExploreShortcut = ({ plant, className }: ExploreShortcutProps) => {
  return (
    <Link
      className={`w-full md:w-auto flex items-center justify-center px-6 py-2 border border-white/20 text-white rounded-lg min-w-[13rem] text-[1.75rem] hover:bg-white/10 transition-all duration-300 text-center ${className}`}
      title={`Explore ${plant.common_name || plant.scientific_name} plants`}
      href='/plants'
    >
      Explore
    </Link>
  );
};
