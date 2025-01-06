"use client"

import type { FC, ReactNode } from 'react'
import { Children, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/EmblaCarousel/EmblaCarouselArrowButtons'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from '@/components/EmblaCarousel/EmblaCarouselSelectedSnapDisplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  className?: string
  children: ReactNode
  options?: EmblaOptionsType
  snapDisplayClassName?: string
}

export const EmblaCarousel: FC<PropType> = (props) => {
  const { children, options, className, snapDisplayClassName } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  const updateSlidesVisibility = () => {
    if (!emblaApi) return

    const viewport = document.getElementById('embla-carousel')
    if (!viewport) return

    const viewportRect = viewport.getBoundingClientRect()
    const slideNodes = emblaApi.slideNodes()

    slideNodes.forEach((slide) => {
      const slideRect = slide.getBoundingClientRect()
      const isVisible = (
        slideRect.left >= viewportRect.left - 10 &&
        slideRect.right <= viewportRect.right + 10
      )

      if (isVisible) {
        slide.classList.remove('opacity-0')
        slide.classList.add('opacity-100')
      } else {
        slide.classList.remove('opacity-100')
        slide.classList.add('opacity-0')
      }
    })
  }

  const onDotButtonClick = (index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
  }

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('scroll', updateSlidesVisibility)
    emblaApi.on('reInit', updateSlidesVisibility)

    updateSlidesVisibility()

    return () => {
      emblaApi.off('scroll', updateSlidesVisibility)
      emblaApi.off('reInit', updateSlidesVisibility)
    }
  }, [emblaApi])

  useEffect(() => {
    updateSlidesVisibility()
  }, [])

  return (
    <section
      id="embla-carousel"
      className={`rounded-[24px] p-8 ${className}`}
    >
      <div className="relative" ref={emblaRef}>
        <div className="flex touch-pan-y items-center transition-opacity duration-300">
          {Children.map(children, (child) => (
            <div className="transition-opacity duration-300">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center relative">
        <div className="flex gap-4">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="w-10 h-10 flex items-center justify-center text-white/50 bg-transparent hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed absolute -top-[5rem] -left-9"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="w-10 h-10 flex items-center justify-center text-white/50 bg-transparent hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed absolute -top-[5rem] -right-9"
          />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
          className={`text-white/70 text-sm w-full justify-center ${snapDisplayClassName}`}
          onDotButtonClick={onDotButtonClick}
        />
      </div>
    </section>
  )
}

export default EmblaCarousel
