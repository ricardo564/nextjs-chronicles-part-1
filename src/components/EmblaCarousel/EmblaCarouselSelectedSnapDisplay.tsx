"use client"

import { FC, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UseSelectedSnapDisplayType = {
  selectedSnap: number
  snapCount: number
}

export const useSelectedSnapDisplay = (
  emblaApi: EmblaCarouselType | undefined,
): UseSelectedSnapDisplayType => {
  const [selectedSnap, setSelectedSnap] = useState(0)
  const [snapCount, setSnapCount] = useState(0)

  const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
    setSnapCount(emblaApi.scrollSnapList().length)
    setSelectedSnap(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateScrollSnapState(emblaApi)
    emblaApi.on('select', updateScrollSnapState)
    emblaApi.on('reInit', updateScrollSnapState)
  }, [emblaApi, updateScrollSnapState])

  return {
    selectedSnap,
    snapCount
  }
}

type PropType = {
  selectedSnap: number
  snapCount: number
  className?: string
}

export const SelectedSnapDisplay: FC<PropType> = ({ selectedSnap, snapCount, className }) => {
  return (
    <div className={`flex gap-2 items-center justify-center ${className}`}>
      {Array.from({ length: snapCount }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 bg-white/50 hover:bg-white/70 cursor-pointer
            ${selectedSnap === index ? 'w-6' : 'w-2'}`}
          aria-label={`Slide ${index + 1} of ${snapCount}`}
          role="button"
        />
      ))}
    </div>
  )
}

export default SelectedSnapDisplay
