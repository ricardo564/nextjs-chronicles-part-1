import { PlantBannerCard } from '@/components/PlantBannerCard';
import { LiveDemoShortcut } from './liveDemoShortcut';
import background from '@/assets/images/topiary-green-pot.webp';
import { HighlightedTestimonial } from '@/components/HighlightedTestimonial';
import { testimonials } from '@/static/testimonial';
import { ExploreShortcut } from '@/components/ExploreShortcut';
import { mockupPlants } from '@/static/mockupPlants';
import { PlantCard } from '@/components/PlantCard';
import { QuotedTitle } from '@/components/QuotedTitle';

export async function IntroSection() {
  const randomTestimonial = () => {
    const shuffled = [...testimonials].sort(() => Math.random() - 0.5);

    return shuffled[0];
  };

  const randomFlexDIrection = (index: number) => {
    const isEven = index % 2 === 0;

    return isEven ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse';
  }

  return (
    <section className="relative overflow-hidden w-screen pb-24 px-4"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col justify-between items-start mb-16 pt-32">
          <h1 className="text-8xl text-white font-semibold">
            Breath Natureal
          </h1>

          <div className="mb-8 max-w-prose">
            <p className="text-gray-400 mb-4">
              Transform your space into a natural sanctuary with our curated collection of indoor plants.
              Experience the beauty and serenity of nature while improving your home air quality and
              creating a more vibrant, living environment.
            </p>
          </div>

          <div className="flex gap-4 relative justify-between">
            <ExploreShortcut plant={mockupPlants[1]} />

            <LiveDemoShortcut />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[9rem] md:gap-12 md:mb-[15rem] mb-[5rem]">
          <div>

            <HighlightedTestimonial
              testimonial={randomTestimonial()}
            />
          </div>

          <div className="md:absolute md:top-[10rem] md:right-32 mx-auto">
            <PlantCard
              plant={mockupPlants[0]}
            />
          </div>
        </div>

        <div className="space-y-6 flex flex-col items-center gap-32 md:gap-24">
          <QuotedTitle className="text-center text-white">
            Our Trendy Plants
          </QuotedTitle>

          <div className="flex flex-wrap justify-center w-full gap-[9rem] md:gap-[6rem]">
            {mockupPlants.slice(1, 4).map((plant, index) => (
              <PlantBannerCard key={plant.id} plant={plant} className={randomFlexDIrection(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
