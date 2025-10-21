"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CircularGallery } from "@/components/ui/CircularGallery"

const vulcanImages = [
  "/VULCAN/Airforce 51.png",
  "/VULCAN/Antarctic 3013.png",
  "/VULCAN/Atlanis 3011.png",
  "/VULCAN/Bahama 26.png",
  "/VULCAN/Blonde 21.png",
  "/VULCAN/Brick 12.png",
  "/VULCAN/Captivate 3004.jpg",
  "/VULCAN/Cobalt 50.png",
  "/VULCAN/DK Claret 31.jpg",
  "/VULCAN/Dive 3012.png",
  "/VULCAN/Dusk 40png.png",
  "/VULCAN/Eucalyptus 3009.png",
  "/VULCAN/Fennel 60.png",
  "/VULCAN/Fire 42.png",
  "/VULCAN/Garnet 03.png",
  "/VULCAN/Grape 56.jpg",
  "/VULCAN/Hyacinth 02.png",
  "/VULCAN/Lime 06.png",
  "/VULCAN/Mamba 47.png",
  "/VULCAN/Midnight 06.png",
  "/VULCAN/New England 3008.png",
  "/VULCAN/Peacock 59.png",
  "/VULCAN/Pesto 46.png",
  "/VULCAN/Purity 3002.jpg",
  "/VULCAN/Rose 37.png",
  "/VULCAN/Roux 20.png",
  "/VULCAN/Rust 05.png",
  "/VULCAN/Sable 22.png",
  "/VULCAN/Sage 29.png",
  "/VULCAN/Salt 55.png",
  "/VULCAN/Sand 53.jpg",
  "/VULCAN/Sapphire 58.png",
  "/VULCAN/Skye 57.png",
  "/VULCAN/Soviet 45.png",
  "/VULCAN/Tendril 3006.png",
  "/VULCAN/Tutu 3003.jpg",
  "/VULCAN/Wasabi 49.png",
  "/VULCAN/Woodland 04.png",
  "/VULCAN/navy-blue-fabric-texture.png",
]

const fabricAndFeltImages = [
  "/FABRIC & FELT/Black Felt.png",
  "/FABRIC & FELT/Crimson Fabric.png",
  "/FABRIC & FELT/Dark Blue Fabric.png",
  "/FABRIC & FELT/Grey Felt.png",
  "/FABRIC & FELT/Maroon Fabric.png",
  "/FABRIC & FELT/Salmon Fabric.png",
  "/FABRIC & FELT/Swatch 12.png",
  "/FABRIC & FELT/Swatch 13.png",
  "/FABRIC & FELT/Swatch 14.png",
  "/FABRIC & FELT/Swatch 15.png",
  "/FABRIC & FELT/Swatch 16.png",
  "/FABRIC & FELT/Swatch 17.png",
  "/FABRIC & FELT/Swatch 18.png",
  "/FABRIC & FELT/Swatch 19.png",
  "/FABRIC & FELT/Swatch 32.png",
  "/FABRIC & FELT/Swatch 33.png",
  "/FABRIC & FELT/Swatch 34.png",
  "/FABRIC & FELT/Swatch 35.png",
  "/FABRIC & FELT/Swatch 36.png",
  "/FABRIC & FELT/Swatch 38.png",
  "/FABRIC & FELT/Swatch 41.png",
  "/FABRIC & FELT/Swatch 60.png",
  "/FABRIC & FELT/Swatch 62.png",
  "/FABRIC & FELT/White Felt.png",
]

export function WallSystemsShowcase() {
  const [isVulcanGalleryOpen, setIsVulcanGalleryOpen] = useState(false)
  const [isFabricGalleryOpen, setIsFabricGalleryOpen] = useState(false)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mt-24 pt-16 border-t border-border">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-light text-foreground heading-secondary">
              Panel Material Samples
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-refined">
              View our current range of acoustic panel colors and textures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vulcan Range Tile */}
            <Dialog
              open={isVulcanGalleryOpen}
              onOpenChange={setIsVulcanGalleryOpen}
            >
              <DialogTrigger asChild>
                <div className="space-y-4 cursor-pointer">
                  <div
                    className="w-full h-64 rounded-lg shadow-lg hover-lift"
                    style={{
                      backgroundImage: `url('/VULCAN/Fire 42.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Vulcan Range
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Vulcan Range</DialogTitle>
                </DialogHeader>
                <CircularGallery
                  images={vulcanImages}
                  bend={0}
                  textStyle={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                />
              </DialogContent>
            </Dialog>

            {/* Fabric & Felt Range Tile */}
            <Dialog
              open={isFabricGalleryOpen}
              onOpenChange={setIsFabricGalleryOpen}
            >
              <DialogTrigger asChild>
                <div className="space-y-4 cursor-pointer">
                  <div
                    className="w-full h-64 rounded-lg shadow-lg hover-lift"
                    style={{
                      backgroundImage: `url('/FABRIC & FELT/Swatch 62.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Fabric & Felt Range
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Fabric & Felt Range</DialogTitle>
                </DialogHeader>
                <CircularGallery
                  images={fabricAndFeltImages}
                  bend={0}
                  textStyle={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}
