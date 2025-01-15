import { Testimonial } from "@/types/testimonial";
import Logo from "@/app/favicon.ico";
import { useTranslations } from "next-intl";

export const useTestimonials = (): Testimonial[] => {
  const t = useTranslations("testimonials");


  type TestimonialKey = 'id' | 'name' | 'rating' | 'testimonial';

  const getTestimonialField = <T extends string | number>(
    index: number,
    field: TestimonialKey,
    defaultValue: T
  ): T => {
    const translationKey = `testimonial${index}.${field}`;
    try {
      const translated = t(translationKey);
      return typeof defaultValue === 'number'
        ? Number(translated) as T
        : String(translated) as T;
    } catch {
      console.warn(`Translation missing for ${translationKey}`);
      return defaultValue;
    }
  };

  const createTestimonial = (index: number): Testimonial => {
    const testimonialNumber = index + 1;

    return {
      id: getTestimonialField(testimonialNumber, 'id', testimonialNumber),
      name: getTestimonialField(testimonialNumber, 'name', `User ${testimonialNumber}`),
      rating: getTestimonialField(testimonialNumber, 'rating', 5),
      testimonial: getTestimonialField(testimonialNumber, 'testimonial', ''),
      avatarUrl: Logo.src,
    };
  };

  const TESTIMONIAL_COUNT = 8;

  return Array.from({ length: TESTIMONIAL_COUNT }, (_, index) =>
    createTestimonial(index)
  );
};
