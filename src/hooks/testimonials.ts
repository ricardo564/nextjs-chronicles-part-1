import { Testimonial } from "@/types/testimonial";
import Logo from "@/app/favicon.ico";
import { useTranslations } from "next-intl";

export const useTestimonials = (): Testimonial[] => {
  const t = useTranslations("testimonials");

  const getTranslatedValue = (
    key: string,
    defaultValue: string | number = ""
  ) => {
    try {
      return t(key);
    } catch {
      console.warn(`Translation missing for key: ${key}`);
      return defaultValue;
    }
  };

  const testimonialFormatted: Testimonial[] = Array.from(
    { length: 8 },
    (_, index) => {
      const num = index + 1;
      return {
        id: Number(getTranslatedValue(`testimonial${num}.id`, num)),
        name: String(
          getTranslatedValue(`testimonial${num}.name`, `User ${num}`)
        ),
        rating: Number(getTranslatedValue(`testimonial${num}.rating`, 5)),
        testimonial: String(
          getTranslatedValue(`testimonial${num}.testimonial`, "")
        ),
        avatarUrl: Logo.src,
      };
    }
  );

  return testimonialFormatted;
};
