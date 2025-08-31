"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const colorOptions = [
  { name: "Forest Green", color: "#2d4a3e", description: "Deep forest tones for sophisticated spaces" },
  { name: "Jaffa", color: "#e67e22", description: "Warm orange bringing energy and vibrancy" },
  { name: "Crimson", color: "#c0392b", description: "Bold red for dramatic impact" },
  { name: "Teal", color: "#16a085", description: "Calming blue-green for modern environments" },
  { name: "Plum", color: "#8e44ad", description: "Rich purple adding luxury and depth" },
  { name: "Amber", color: "#f39c12", description: "Golden yellow for warmth and brightness" },
  { name: "Charcoal", color: "#2c3e50", description: "Classic dark tone for timeless elegance" },
  { name: "Sage", color: "#95a5a6", description: "Soft gray-green for subtle sophistication" },
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
    <section className="py-32 bg-earth-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-earth-900">Wall Systems</h2>
          <div className="section-divider max-w-24 mx-auto"></div>
          <p className="text-lg text-earth-700 font-light max-w-2xl mx-auto">
            Explore our extensive range of acoustic wall panel colors and textures, each designed to enhance both sound
            quality and visual appeal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Wall System Visualization */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-[4/5] bg-earth-100 rounded-lg overflow-hidden shadow-2xl">
              {/* Wall panels with selected color */}
              <div className="w-full h-full relative">
                <div
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{ backgroundColor: colorOptions[selectedColor].color }}
                >
                  {/* Panel grid lines */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-3 h-full">
                      <div className="border-r border-white/30"></div>
                      <div className="border-r border-white/30"></div>
                      <div></div>
                    </div>
                    <div className="absolute inset-0 grid grid-rows-4">
                      <div className="border-b border-white/30"></div>
                      <div className="border-b border-white/30"></div>
                      <div className="border-b border-white/30"></div>
                      <div></div>
                    </div>
                  </div>

                  {/* Texture overlay */}
                  <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                </div>

                {/* Room context elements */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-end justify-between">
                    <div className="w-16 h-12 bg-earth-800/80 rounded-sm"></div>
                    <div className="w-20 h-8 bg-earth-600/60 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color name overlay */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="font-serif text-lg font-light text-earth-900">{colorOptions[selectedColor].name}</span>
            </div>
          </div>

          {/* Color Selection Interface */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-light text-earth-900">{colorOptions[selectedColor].name}</h3>
              <p className="text-lg text-earth-700 font-light leading-relaxed">
                {colorOptions[selectedColor].description}
              </p>
            </div>

            {/* Color Navigation */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevColor}
                className="border-earth-300 text-earth-700 hover:bg-earth-100 hover-lift bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex-1 flex items-center gap-3 overflow-x-auto pb-2">
                {colorOptions.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(index)}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg border-2 transition-all duration-300 hover-lift ${
                      index === selectedColor
                        ? "border-accent-copper shadow-lg scale-110"
                        : "border-earth-200 hover:border-earth-300"
                    }`}
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextColor}
                className="border-earth-300 text-earth-700 hover:bg-earth-100 hover-lift bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Material Swatches Reference */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-light text-earth-900">Material Samples</h4>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/color-swatches-1.jpg"
                  alt="Color swatches collection 1"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover-lift"
                />
                <img
                  src="/color-swatches-2.jpg"
                  alt="Color swatches collection 2"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover-lift"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-accent-copper text-earth-50 hover:bg-accent-warm font-light hover-lift">
                Request Samples
              </Button>
              <Button
                variant="outline"
                className="border-earth-300 text-earth-700 hover:bg-earth-100 font-light hover-lift bg-transparent"
              >
                View All Colors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
