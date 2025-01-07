import { QuotedTitle } from "@/components/QuotedTitle";
import { mockupPlants } from "@/static/mockupPlants";
import { EmblaCarousel } from "@/components/EmblaCarousel/EmblaCarousel";
import { PlantCardContent } from "@/components/plantCardContent";

export const BestProductsSection = () => {
  return (
    <div className="relative min-h-screen max-w-[95vw] md:max-w-7xl mx-auto pt-32 px-2 h-full pb-6">
      <div className="flex flex-col items-center max-w-[40rem] mx-auto">
        <QuotedTitle className="text-center text-white">
          Our Best o2
        </QuotedTitle>
      </div>

      <div className="w-full md:max-w-[64rem] mx-auto mt-32">
        <EmblaCarousel
          carouselId="embla-carousel-best-products"
          className="w-full bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-md rounded-[32px] p-8 border border-white/10"
          options={{ loop: true }}
          snapDisplayClassName="absolute -bottom-16 md:bottom-6 ml-auto md:right-[-25rem] flex gap-2"
        >
          {mockupPlants.map((plant, index) => (
            <div
              className="flex-[0_0_100%] min-w-[19rem] md:min-w-[95vw] relative"
              key={index}
            >
              <PlantCardContent
                plant={plant}
                containerClassName="grid md:grid-cols-2 items-center gap-8 px-4"
                contentClassName="space-y-6"
                imageClassName="w-[10rem] h-[10rem] mx-auto -right-16 top-8 md:scale-150"
                showPrice={true}
                showBuyShortcut={false}
              />
            </div>
          ))}
        </EmblaCarousel>
      </div>
    </div>
  );
};
