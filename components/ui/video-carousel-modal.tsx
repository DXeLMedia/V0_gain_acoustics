"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export interface VideoItem {
  id: string
  iframeSrc: string
  title: string
}

interface VideoCarouselModalProps {
  isOpen: boolean
  onClose: () => void
  videos: VideoItem[]
}

export function VideoCarouselModal({ isOpen, onClose, videos }: VideoCarouselModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-background border-none p-6">
        <DialogTitle className="sr-only">Install Shorts Gallery</DialogTitle>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {videos.map((video) => (
                <div key={video.id} className="min-w-0 flex-[0_0_100%] pl-4 first:pl-0 flex flex-col items-center justify-center">
                  <div className="w-full max-w-[400px] aspect-[9/16] relative rounded-xl overflow-hidden bg-black shadow-lg">
                    <iframe
                      src={video.iframeSrc}
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-foreground heading-secondary text-center">
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md rounded-full w-10 h-10 flex items-center justify-center z-10"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md rounded-full w-10 h-10 flex items-center justify-center z-10"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
