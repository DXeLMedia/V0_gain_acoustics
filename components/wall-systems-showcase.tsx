"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageTrail from "@/components/ImageTrail"
import "@/components/ImageTrail.css"

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
              <img
                src="/color-swatches-1.jpg"
                alt="Color swatches collection 1"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover-lift"
              />
              <p className="text-sm text-muted-foreground text-center">Warm tone collection</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                <div
                  className="w-full h-64 rounded-lg shadow-lg hover-lift"
                  style={{
                    backgroundImage: `url('/VULCAN/Fire 42.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <ImageTrail items={vulcanImages} variant={7} />
                </div>
                <p className="text-sm text-muted-foreground text-center">Vulcan Range</p>
              </div>
              <div className="space-y-4">
                <div
                  className="w-full h-64 rounded-lg shadow-lg hover-lift"
                  style={{
                    backgroundImage: `url('/FABRIC & FELT/Swatch 62.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <ImageTrail items={fabricAndFeltImages} variant={7} />
                </div>
                <p className="text-sm text-muted-foreground text-center">Fabric & Felt Range</p>
              </div>
              <div id="vulcan-range" className="space-y-4">
                <img
                  src="/modern-restaurant-interior-with-acoustic-panels-an.png"
                  alt="Vulcan textured acoustic panels"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover-lift"
                />
                <p className="text-sm text-muted-foreground text-center">Vulcan Range</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
