import { StarRating } from '@/components/StarRating';
import Image from 'next/image';
import { Testimonial } from '@/types/testimonial';

interface HighlightedTestimonialProps {
  testimonial: Testimonial;
}

export const HighlightedTestimonial = ({ testimonial }: HighlightedTestimonialProps) => {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-md p-8 border border-white/20 md:max-w-[25rem]">
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full object-cover"
          loading="lazy"
          width={56}
          height={56}
        />
        <div>
          <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      <p className="mt-4 text-lg text-gray-300">{testimonial.testimonial}</p>
    </div>
  );
};
