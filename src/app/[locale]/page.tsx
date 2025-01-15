import { IntroSection } from "@/blocks/sections/introSection";
import TopSellingSection from "@/blocks/sections/topSellingSection";
import DefaultLayout from "@/layouts/DefaultLayout";
import { TestimonialSection } from "@/blocks/sections/testimonialSection";
import { BestProductsSection } from "@/blocks/sections/bestProductstSection";
import { Suspense } from 'react'
import { Loading } from "@/components/Loading";

export default function Home() {
  return (
    <Suspense fallback={
      <Loading />
    }>
      <DefaultLayout>
        <IntroSection />
        <TopSellingSection />
        <TestimonialSection />
        <BestProductsSection />
      </DefaultLayout>
    </Suspense>
  );
}

