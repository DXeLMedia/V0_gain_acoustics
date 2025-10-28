"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import CircularGallery from "@/components/ui/CircularGallery"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  items: { image: string; text: string }[]
}

export function GalleryModal({ isOpen, onClose, items }: GalleryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[80vh] bg-transparent border-none p-0">
        <CircularGallery
          items={items}
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
          font="bold 30px Poppins"
        />
      </DialogContent>
    </Dialog>
  )
}
