import { Plant } from "@/types/plant.types";
import Link from "next/link";

interface BuyShortcutProps {
  plant: Plant;
}

export const BuyShortcut = ({ plant }: BuyShortcutProps) => {
  return (
    <Link
      className="px-6 py-2 border border-white/20 text-white rounded-lg min-w-[13rem] text-[1.75rem] hover:bg-white/10 transition-all duration-300 text-center"
      title={`Buy ${plant.common_name || plant.scientific_name} plants`}
      href={`/plants/${plant.id}`}
    >
      Buy
    </Link>
  );
};
