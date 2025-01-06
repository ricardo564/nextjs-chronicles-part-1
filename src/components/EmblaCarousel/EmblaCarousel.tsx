"use client"

import React from 'react'
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
  children: React.ReactNode
  options?: EmblaOptionsType
}

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { children, options, className } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <section className={`rounded-[24px] p-8 ${className}`}>
      <div className="overflow-x-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {children}
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
          className="text-white/70 text-sm"
        />
      </div>
    </section>
  )
}

export default EmblaCarousel
