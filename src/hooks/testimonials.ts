import { Testimonial } from '@/types/testimonial';
import Logo from '@/app/favicon.ico';
import { useTranslations } from 'next-intl';

export const useTestimonials = (): Testimonial[] => {
  const t = useTranslations('testimonials');

  const testimonialFormatted = [
    {
      id: Number(t('testimonial1.id')),
      name: t('testimonial1.name'),
      rating: Number(t('testimonial1.rating')),
      testimonial: t('testimonial1.testimonial'),
      avatarUrl: Logo.src,
    },
    {
      id: Number(t('testimonial2.id')),
      name: t('testimonial2.name'),
      rating: Number(t('testimonial2.rating')),
      testimonial: t('testimonial2.testimonial'),
      avatarUrl: Logo.src,
    },
    {
      id: Number(t('testimonial3.id')),
      name: t('testimonial3.name'),
      rating: Number(t('testimonial3.rating')),
      testimonial: t('testimonial3.testimonial'),
      avatarUrl: Logo.src,
    },
    {
      id: Number(t('testimonial4.id')),
      name: t('testimonial4.name'),
      rating: Number(t('testimonial4.rating')),
      testimonial: t('testimonial4.testimonial'),
      avatarUrl: Logo.src,
    },
    {
      id: Number(t('testimonial5.id')),
      name: t('testimonial5.name'),
      rating: Number(t('testimonial5.rating')),
      testimonial: t('testimonial5.testimonial'),
      avatarUrl: Logo.src,
    },
    {
      id: Number(t('testimonial6.id')),
      name: t('testimonial6.name'),
      rating: Number(t('testimonial6.rating')),
      testimonial: t('testimonial6.testimonial'),
      avatarUrl: Logo.src,
    },
    {
      id: Number(t('testimonial7.id')),
      name: t('testimonial7.name'),
      rating: Number(t('testimonial7.rating')),
      testimonial: t('testimonial7.testimonial'),
      avatarUrl: Logo.src,
    },
    {
      id: Number(t('testimonial8.id')),
      name: t('testimonial8.name'),
      rating: Number(t('testimonial8.rating')),
      testimonial: t('testimonial8.testimonial'),
      avatarUrl: Logo.src,
    },
  ];

  return testimonialFormatted;
};

