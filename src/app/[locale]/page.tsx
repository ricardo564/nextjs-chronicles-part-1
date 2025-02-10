import type { FC } from 'react';
import { Suspense } from 'react';
import IntroSection from "@/blocks/sections/introSection";
import TopSellingSection from "@/blocks/sections/topSellingSection";
import DefaultLayout from "@/layouts/DefaultLayout";
import TestimonialSection from "@/blocks/sections/testimonialSection";
import BestProductsSection from "@/blocks/sections/bestProductstSection";
import Loading from "@/components/Loading";

const Home: FC = () => {
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

export default Home;
