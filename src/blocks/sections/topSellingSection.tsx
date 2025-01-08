import { QuotedTitle } from "@/components/QuotedTitle";
import { mockupPlants } from "@/static/mockupPlants";
import { PlantCard } from "@/components/PlantCard";
import { getUniqueId } from "@/utils/getUniqueId";

export default async function TopSellingSection() {
  return (
    <div className="relative min-h-screen max-w-7xl mx-auto pt-32 px-2 h-full pb-6">
      <div className="flex flex-col items-center max-w-[40rem] mx-auto">
        <QuotedTitle className="text-center text-white">
          Our Top Selling
        </QuotedTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center h-auto min-h-[90rem] w-full gap-[10rem] md:gap-y-[8rem] lg:gap-4 mt-[11rem] gap-y-[15rem]">
        {mockupPlants.slice(1, mockupPlants.length).map((plant, index) => (
          <PlantCard
            containerClassName="w-full max-w-full min-w-full"
            quantityClassName="!h-[3.7rem] w-[3.7rem]"
            key={`${plant.id}-${index}-top-selling-${getUniqueId()}`}
            plant={plant}
            showPrice={true}
            showRemoveButton={false}
          />
        ))}
      </div>
    </div>
  );
}
