import { Plant } from '@/types/plant.types';

interface BuyNowShortcutProps {
  plant: Plant;
}

export function BuyNowShortcut({ plant }: BuyNowShortcutProps) {
  return (
    <button
    className="px-6 py-3 bg-transparent backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
    aria-label={`Buy ${plant.common_name || plant.scientific_name}`}
  >
    Buy Now
  </button>
  );
}

