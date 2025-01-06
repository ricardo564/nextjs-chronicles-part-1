import { IntroSection } from "@/blocks/sections/introSection";
import TopSellingSection from "@/blocks/sections/topSellingSection";
import DefaultLayout from "@/layouts/DefaultLayout";
import { TestimonialSection } from "@/blocks/sections/testimonialSection";
import { BestProductsSection } from "@/blocks/sections/bestProductstSection";

export default async function Home() {
  return (
    <DefaultLayout>
      <IntroSection />
      <TopSellingSection />
      <TestimonialSection />
      <BestProductsSection />
    </DefaultLayout>
  );
}

