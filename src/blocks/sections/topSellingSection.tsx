import { QuotedTitle } from "@/components/QuotedTitle";
import { mockupPlants } from "@/static/mockupPlants";
import { PlantCard } from "@/components/PlantCard";

export default async function TopSellingSection() {
  return (
    <div className="relative min-h-screen max-w-7xl mx-auto pt-32 px-2 h-full pb-6">
      <div className="flex flex-col items-center max-w-[40rem] mx-auto">
        <QuotedTitle className="text-center text-white">
          Our Top Selling
        </QuotedTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center h-auto min-h-[90rem] w-full gap-[10rem] md:gap-4 mt-[11rem] gap-y-[15rem]">
        {mockupPlants.slice(1, mockupPlants.length).map((plant) => (
          <PlantCard
            containerClassName="w-full md:max-w-none"
            key={plant.id}
            plant={plant}
            showPrice
          />
        ))}
      </div>
    </div>
  );
}
