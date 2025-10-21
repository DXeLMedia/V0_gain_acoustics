"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CircularGallery from "@/components/ui/CircularGallery"

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

const vulcanImagesData = vulcanImages.map((image) => {
    const text = image.split("/").pop()?.split(".")[0] || ""
    return { image, text }
})

const fabricAndFeltImagesData = [
    { image: "/FABRIC & FELT/Black Felt.png", text: "Black Felt" },
    { image: "/FABRIC & FELT/Crimson Fabric.png", text: "Crimson Fabric" },
    { image: "/FABRIC & FELT/Dark Blue Fabric.png", text: "Dark Blue Fabric" },
    { image: "/FABRIC & FELT/Grey Felt.png", text: "Grey Felt" },
    { image: "/FABRIC & FELT/Maroon Fabric.png", text: "Maroon Fabric" },
    { image: "/FABRIC & FELT/Salmon Fabric.png", text: "Salmon Fabric" },
    { image: "/FABRIC & FELT/Swatch 12.png", text: "Swatch 12" },
    { image: "/FABRIC & FELT/Swatch 13.png", text: "Swatch 13" },
    { image: "/FABRIC & FELT/Swatch 14.png", text: "Swatch 14" },
    { image: "/FABRIC & FELT/Swatch 15.png", text: "Swatch 15" },
    { image: "/FABRIC & FELT/Swatch 16.png", text: "Swatch 16" },
    { image: "/FABRIC & FELT/Swatch 17.png", text: "Swatch 17" },
    { image: "/FABRIC & FELT/Swatch 18.png", text: "Swatch 18" },
    { image: "/FABRIC & FELT/Swatch 19.png", text: "Swatch 19" },
    { image: "/FABRIC & FELT/Swatch 32.png", text: "Swatch 32" },
    { image: "/FABRIC & FELT/Swatch 33.png", text: "Swatch 33" },
    { image: "/FABRIC & FELT/Swatch 34.png", text: "Swatch 34" },
    { image: "/FABRIC & FELT/Swatch 35.png", text: "Swatch 35" },
    { image: "/FABRIC & FELT/Swatch 36.png", text: "Swatch 36" },
    { image: "/FABRIC & FELT/Swatch 38.png", text: "Swatch 38" },
    { image: "/FABRIC & FELT/Swatch 41.png", text: "Swatch 41" },
    { image: "/FABRIC & FELT/Swatch 60.png", text: "Swatch 60" },
    { image: "/FABRIC & FELT/Swatch 62.png", text: "Swatch 62" },
    { image: "/FABRIC & FELT/White Felt.png", text: "White Felt" },
]

const colorOptions = [
  {
    name: "Forest Green",
    color: "#2d4a3e",
    description: "Deep forest tones for sophisticated spaces",
    image: "/modern-office-space-with-acoustic-panels-installat.png",
  },
  {
    name: "Jaffa",
    color: "#e67e22",
    description: "Warm orange bringing energy and vibrancy",
    image: "/modern-restaurant-interior-with-acoustic-panels-an.png",
  },
  {
    name: "Crimson",
    color: "#c0392b",
    description: "Bold red for dramatic impact",
    image: "/professional-recording-studio-with-acoustic-treatm.png",
  },
  {
    name: "Teal",
    color: "#16a085",
    description: "Calming blue-green for modern environments",
    image: "/modern-corporate-office-with-acoustic-ceiling-clou.png",
  },
  {
    name: "Plum",
    color: "#8e44ad",
    description: "Rich purple adding luxury and depth",
    image: "/modern-office-space-with-acoustic-panels-installat.png",
  },
  {
    name: "Amber",
    color: "#f39c12",
    description: "Golden yellow for warmth and brightness",
    image: "/modern-restaurant-interior-with-acoustic-panels-an.png",
  },
  {
    name: "Charcoal",
    color: "#2c3e50",
    description: "Classic dark tone for timeless elegance",
    image: "/professional-recording-studio-with-acoustic-treatm.png",
  },
  {
    name: "Sage",
    color: "#95a5a6",
    description: "Soft gray-green for subtle sophistication",
    image: "/modern-corporate-office-with-acoustic-ceiling-clou.png",
  },
]

export function WallSystemsShowcase() {
  const [selectedColor, setSelectedColor] = useState(0)
  const [isGalleryOpen, setGalleryOpen] = useState(false)

  const nextColor = () => {
    setSelectedColor((prev) => (prev + 1) % colorOptions.length)
  }

  const prevColor = () => {
    setSelectedColor((prev) => (prev - 1 + colorOptions.length) % colorOptions.length)
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {/* Main product image */}
            <div className="relative group">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <div
                  className="w-full h-full relative transition-all duration-700 ease-out"
                  style={{
                    backgroundImage: `url(${colorOptions[selectedColor].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Color overlay to show selected color */}
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-40 transition-all duration-700"
                    style={{ backgroundColor: colorOptions[selectedColor].color }}
                  />

                  {/* Navigation arrows */}
                  <button
                    onClick={prevColor}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background border border-border"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>

                  <button
                    onClick={nextColor}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background border border-border"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {colorOptions.map((color, index) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === selectedColor ? "border-primary shadow-lg" : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <div
                    className="w-full h-full relative"
                    style={{
                      backgroundImage: `url(${color.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className="absolute inset-0 mix-blend-multiply opacity-50"
                      style={{ backgroundColor: color.color }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8 lg:pl-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-light text-foreground heading-primary">
                Acoustic Wall Systems™
              </h1>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
                <span>Natural timber-look acoustic products</span>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed text-refined">
                Available in panels, baffles, or ceiling tiles, Acoustic Wall Systems™ is a high-performance acoustic
                solution that mimics timber. To ensure a natural, light and finish, we have hand-picked a selection of
                timber-look veneers—digitally printed onto the panel surface with a silk, water-based, UV cured ink.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground heading-secondary">
                Current Selection: {colorOptions[selectedColor].name}
              </h3>
              <p className="text-muted-foreground">{colorOptions[selectedColor].description}</p>

              {/* Color swatch */}
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-lg border border-border shadow-sm"
                  style={{ backgroundColor: colorOptions[selectedColor].color }}
                />
                <div className="text-sm text-muted-foreground">Color: {colorOptions[selectedColor].name}</div>
              </div>
            </div>

            <div className="space-y-4">
              <a href="#fabric-felt-tile">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-base font-medium btn-primary">
                  Acoustic Wall Systems Samples
                </Button>
              </a>

            </div>

            <div className="space-y-4 border-t border-border pt-8">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 text-foreground font-medium heading-secondary">
                  <span>Specifications</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <div className="pb-4 text-muted-foreground text-sm space-y-2 text-refined">
                  <p>• Thickness: 12mm, 24mm options available</p>
                  <p>• Dimensions: Custom sizes up to 1200mm x 2400mm</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 text-foreground font-medium heading-secondary">
                  <span>Features and benefits</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <div className="pb-4 text-muted-foreground text-sm space-y-2 text-refined">
                  <p>• Superior acoustic performance</p>
                  <p>• Natural timber appearance</p>
                  <p>• Easy installation system</p>
                  <p>• Sustainable materials</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 text-foreground font-medium heading-secondary">
                  <span>Sizes</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <div className="pb-4 text-muted-foreground text-sm text-refined">
                  <p>Available in standard and custom dimensions to suit any project requirement.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-border">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-light text-foreground heading-secondary">Panel Material Samples</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-refined">
              View our current range of acoustic panel colors and textures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div id="fabric-felt-tile" className="space-y-4">
              <Dialog open={isGalleryOpen} onOpenChange={setGalleryOpen}>
                <DialogTrigger asChild>
                  <button className="w-full text-left">
                    <img
                      src="/color-swatches-1.jpg"
                      alt="Color swatches collection 1"
                      className="w-full h-64 object-cover rounded-lg shadow-lg hover-lift"
                    />
                    <p className="text-sm text-muted-foreground text-center mt-2">Warm tone collection</p>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-3/4">
                  <DialogHeader>
                    <DialogTitle>Fabric & Felt Range</DialogTitle>
                  </DialogHeader>
                  <div className="h-full w-full">
                    <CircularGallery items={fabricAndFeltImagesData} bend={0} font="bold 30px Poppins" />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="space-y-4">
              <div
                className="w-full h-64 rounded-lg shadow-lg hover-lift"
              >
                <CircularGallery items={vulcanImagesData} bend={0} font="bold 30px Poppins" />
              </div>
              <p className="text-sm text-muted-foreground text-center">Vulcan Range</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
