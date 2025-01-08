import { PlantBannerCard } from "@/components/PlantBannerCard";
import { LiveDemoShortcut } from "../liveDemoShortcut";
import background from "@/assets/images/topiary-green-pot.webp";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/static/testimonials";
import { ExploreShortcut } from "@/blocks/exploreShortcut";
import { mockupPlants } from "@/static/mockupPlants";
import { PlantCardContent } from "@/components/plantCardContent";
import { QuotedTitle } from "@/components/QuotedTitle";
import { EmblaCarousel } from "@/components/EmblaCarousel/EmblaCarousel";
import { getUniqueId } from "@/utils/getUniqueId";

export async function IntroSection() {
  const randomTestimonial = () => {
    const shuffled = [...testimonials].sort(() => Math.random() - 0.5);

    return shuffled[0];
  };

  const randomFlexDIrection = (index: number) => {
    const isEven = index % 2 === 0;

    return isEven ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse";
  };

  return (
    <section
      className="relative overflow-hidden w-screen pb-24 px-4"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col justify-between items-start mb-16  pt-4 md:pt-32">
          <h1 className="text-7xl xl:text-8xl text-white font-semibold">
            Breath Natureal
          </h1>

          <div className="mb-8 max-w-prose">
            <p className="text-white mb-4 text-lg xl:text-lg">
              Transform your space into a natural sanctuary with our curated
              collection of indoor plants. Experience the beauty and serenity of
              nature while improving your home air quality and creating a more
              vibrant, living environment.
            </p>
          </div>

          <div className="flex md:flex-row flex-col gap-4 relative justify-between w-full max-w-md">
            <ExploreShortcut
              plant={mockupPlants[1]}
              className="w-full md:w-auto"
            />

            <LiveDemoShortcut
              videoUrl={process.env.LIVE_DEMO_VIDEO_URL ?? ""}
              className="w-full md:w-auto"
            />
          </div>

          <div className="relative mt-24">
            <TestimonialCard
              testimonial={randomTestimonial()}
              className="line-clamp-2"
            />
          </div>
        </div>


        <div className="lg:absolute lg:top-[1rem] lg:right-0 mx-auto w-[30rem] overflow-x-hidden overflow-y-visible min-h-[50rem]">
          <EmblaCarousel
            className="relative w-full max-w-[20rem] md:max-w-[25rem] bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-md rounded-[32px] p-8 border border-white/20 mt-[7rem] right-0 md:ml-12"
            options={{ loop: true }}
            snapDisplayClassName="absolute bottom-[4rem] left-0 w-full"
          >
            {mockupPlants.map((plant, index) => (
              <div
                className="flex-[0_0_100%] min-w-[19rem] md:min-w-[20rem] relative mx-auto"
                key={`${plant.id}-${index}-intro-carousel-${getUniqueId()}`}
              >
                <PlantCardContent plant={plant} containerClassName="ml-5" contentClassName="gap-8" />
              </div>
            ))}
          </EmblaCarousel>
        </div>

        <div className="space-y-6 flex flex-col items-center gap-32 lg:gap-24">
          <QuotedTitle className="text-center text-white">
            Our Trendy Plants
          </QuotedTitle>

          <div className="flex flex-wrap justify-center w-full gap-y-[9rem] lg:gap-[6rem]">
            {mockupPlants.slice(1, 4).map((plant, index) => (
              <PlantBannerCard
                key={`${plant.id}-${index}-intro-banner-${getUniqueId()}`}
                plant={plant}
                className={randomFlexDIrection(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
