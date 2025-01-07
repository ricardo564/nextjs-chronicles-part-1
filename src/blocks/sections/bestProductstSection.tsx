import { QuotedTitle } from "@/components/QuotedTitle";
import { mockupPlants } from "@/static/mockupPlants";
import { EmblaCarousel } from "@/components/EmblaCarousel/EmblaCarousel";
import { PlantCardContent } from "@/components/plantCardContent";

export const BestProductsSection = () => {
  return (
    <div className="relative min-h-screen max-w-7xl mx-auto pt-32 px-2 h-full pb-6">
      <div className="flex flex-col items-center max-w-[40rem] mx-auto">
        <QuotedTitle className="text-center text-white">
          Our Best o2
        </QuotedTitle>
      </div>

      <div className="lg:absolute lg:top-[1rem] lg:right-0 mx-auto w-[30rem] overflow-x-hidden overflow-y-visible min-h-[50rem]">
          <EmblaCarousel
            carouselId="embla-carousel-best-products"
            className="relative w-full max-w-[20rem] md:max-w-[25rem] bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-md rounded-[32px] p-8 border border-white/20 mt-[7rem] right-0 md:ml-12"
            options={{ loop: true }}
            snapDisplayClassName="absolute bottom-[4rem] left-0 w-full"
          >
            {mockupPlants.map((plant, index) => (
              <div
                className="flex-[0_0_100%] min-w-[19rem] md:min-w-[20rem] relative mx-auto"
                key={index}
              >
                <PlantCardContent plant={plant} containerClassName="ml-5" contentClassName="gap-8" />
              </div>
            ))}
          </EmblaCarousel>
        </div>
    </div>
  );
}
