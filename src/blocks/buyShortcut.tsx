import { Plant } from "@/types/plant.types";
import Link from "next/link";
import Image from "next/image";
import shopIcon from "@/assets/svg/shop-icon.svg";

interface BuyShortcutProps {
  plant: Plant;
  className?: string;
  showIcon?: boolean;
}

export const BuyShortcut = ({
  plant,
  className,
  showIcon = true,
}: BuyShortcutProps) => {
  return (
    <Link
      className={`px-6 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-center ${className}`}
      title={`Buy ${plant.common_name || plant.scientific_name} plants`}
      href={`/plants`}
    >
      {showIcon && (
        <Image src={shopIcon} className="w-11 h-11" alt="Shop icon" />
      )}
      {!showIcon && <span className="text-sm">Buy now</span>}
    </Link>
  );
};
