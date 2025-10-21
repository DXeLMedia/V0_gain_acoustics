"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoadingScreen } from "@/components/loading-screen"
import { Phone, Mail, ArrowRight, ChevronDown, Play, Volume2, Headphones, CheckCircle, Video, Camera } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { WallSystemsShowcase } from "@/components/wall-systems-showcase"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import CircularGallery from "@/components/ui/CircularGallery"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [picturesModalOpen, setPicturesModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, index * 100)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" },
    )

    const elements = document.querySelectorAll(".scroll-animate, .fluid-animate, .cascade-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [isLoaded])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <LoadingScreen />
      <div
        className={`min-h-screen bg-background transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrollY > 50 ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-2xl" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-40">
              <div className="flex items-center fluid-animate opacity-0 translate-x-[-30px]">
                <a href="#home">
                  <img src="/GASLogoI_25.png" alt="Gain Acoustics" className="h-[150px] w-[150px]" />
                </a>
              </div>
              <nav className="hidden lg:flex items-center space-x-8">
                {["Solutions", "Demo", "Services", "Contact"].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`text-muted-foreground hover:text-primary transition-all duration-400 font-medium magnetic-hover relative group fluid-animate opacity-0 translate-y-[-20px] stagger-${index + 2}`}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
              <a href="#contact">
                <Button className="btn-primary magnetic-hover fluid-animate opacity-0 translate-x-[30px] stagger-6 transition-all duration-400">
                  Get Quote
                </Button>
              </a>
            </div>
          </div>
        </header>

        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://gainacousticssolutions.com/wp-content/uploads/2024/04/img_2260.jpg"
              alt="Acoustic panel installation"
              className="w-full h-full object-cover parallax-smooth transition-transform duration-700 ease-out"
              style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/60 to-background/40"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto px-6 leading-3 text-white">
            <h1 className="heading-primary text-5xl lg:text-7xl text-foreground mb-8 text-balance">
              <span className="inline-block cascade-animate opacity-0 translate-y-[40px] stagger-1 liquid-motion">
                Acoustic
              </span>{" "}
              <span className="inline-block cascade-animate opacity-0 translate-y-[40px] stagger-2 liquid-motion">
                Excellence
              </span>
              <span className="block text-primary mt-2 cascade-animate opacity-0 translate-y-[40px] stagger-3 liquid-motion">
                Redefined
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-refined mb-12 fluid-animate opacity-0 translate-y-[30px] stagger-4">
              We manufacture, deliver and install large format printed acoustic panels for exceptional sound
              environments that blend performance with stunning visual design.
            </p>
            <div className="flex flex-col gap-6 justify-center text-zinc-50 sm:flex-row bg-transparent">
              <a href="#solutions">
                <Button
                  size="lg"
                  className="btn-primary text-lg px-10 py-4 magnetic-hover shimmer-effect fluid-animate opacity-0 translate-y-[20px] stagger-5 transition-all duration-400 group">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-400 group-hover:translate-x-2" />
                </Button>
              </a>
              <a href="#demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-secondary text-lg px-10 py-4 magnetic-hover bg-transparent fluid-animate opacity-0 translate-y-[20px] stagger-6 transition-all duration-400 group"
                >
                  <Play className="mr-2 h-5 w-5 transition-transform duration-400 group-hover:scale-125" />
                  Watch Demo
                </Button>
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground breathe-animation">
            <ChevronDown className="h-6 w-6" />
          </div>
        </section>

        <section id="solutions" className="py-24 bg-muted/30 fluid-animate opacity-0 translate-y-[50px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 font-extralight leading-3">
            <div className="text-center space-y-6 mb-20 cascade-animate opacity-0 translate-y-[30px]">
              <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground text-balance">Our Solutions</h2>
              <div className="section-divider max-w-20 mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-refined leading-relaxed">
                Comprehensive acoustic solutions engineered for exceptional performance and aesthetic excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "/professional-recording-studio-with-acoustic-treatm.png",
                  icon: Volume2,
                  title: "Echo Reduction",
                  description:
                    "Advanced acoustic ceiling clouds engineered for optimal sound control in professional environments with superior performance.",
                  delay: 1,
                },
                {
                  image: "/modern-corporate-office-with-acoustic-ceiling-clou.png",
                  icon: Headphones,
                  title: "Soundproofing",
                  description:
                    "Comprehensive acoustic solutions designed to create peaceful, productive spaces with exceptional sound isolation.",
                  delay: 2,
                },
                {
                  image: "/modern-office-space-with-acoustic-panels-installat.png",
                  icon: Play,
                  title: "Custom Panels",
                  description:
                    "High-resolution printed acoustic panels that enhance both acoustics and aesthetics with stunning visual impact.",
                  delay: 3,
                },
              ].map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <div
                    key={solution.title}
                    className={`text-center space-y-6 magnetic-hover cascade-animate opacity-0 translate-y-[60px] stagger-${solution.delay} transition-all duration-700 group`}
                  >
                    <div className="aspect-[4/3] bg-muted/50 rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-700 relative">
                      <img
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 breathe-animation">
                        <IconComponent className="h-7 w-7 text-primary transition-all duration-400 group-hover:scale-110" />
                      </div>
                      <h3 className="heading-secondary text-xl text-foreground group-hover:text-primary transition-colors duration-400 text-balance">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground text-refined leading-relaxed">{solution.description}</p>
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <a href="#contact">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30 fluid-animate opacity-0 translate-y-[50px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 cascade-animate opacity-0 translate-x-[-60px]">
                <div className="space-y-6">
                  <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Vulcan Textured Panels</h2>
                  <p className="text-lg text-muted-foreground text-refined leading-relaxed">
                    A textured finish bringing depth and nuance to every space. Our signature acoustic panels combine
                    superior sound absorption with stunning visual appeal, creating environments that perform as
                    beautifully as they look. Superior acoustic performance. Custom visual designs.
                  </p>
                </div>
                <a href="#vulcan-range">
                  <Button className="btn-secondary magnetic-hover shimmer-effect fluid-animate opacity-0 translate-y-[20px] stagger-4 transition-all duration-400">
                    View Vulcan Range
                  </Button>
                </a>
              </div>
              <div className="relative cascade-animate opacity-0 translate-x-[60px]">
                <div className="professional-card p-4 rounded-2xl magnetic-hover transition-all duration-500">
                  <img
                    src="/modern-restaurant-interior-with-acoustic-panels-an.png"
                    alt="Vulcan textured acoustic panels"
                    className="w-full h-[500px] object-cover rounded-xl transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <div className="fluid-animate opacity-0 translate-y-[50px]">
          <WallSystemsShowcase />
        </div>

        <section id="services" className="py-24 bg-muted/30 fluid-animate opacity-0 translate-y-[50px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-6 mb-20 cascade-animate opacity-0 translate-y-[30px]">
              <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Our Services</h2>
              <div className="section-divider max-w-20 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {[
                {
                  title: "Manufacturing Excellence",
                  description:
                    "Our state-of-the-art manufacturing facility produces high-quality acoustic panels using advanced printing technology and premium materials. Each panel is crafted to meet exact specifications for both acoustic performance and visual appeal.\n\n⦁\tLarge format printing capabilities\n⦁\tCustom sizing and shapes\n⦁\tPremium acoustic materials",
                  features: [],
                  delay: 1,
                },
                {
                  title: "Professional Installation",
                  description:
                    "Our experienced installation team ensures perfect placement and optimal acoustic performance. We handle projects of all sizes, from single rooms to large commercial spaces, with meticulous attention to detail.\n\n⦁\tSite assessment and planning\n⦁\tProfessional installation team\n⦁\tPost-installation support",
                  features: [],
                  delay: 2,
                },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className={`space-y-8 magnetic-hover cascade-animate opacity-0 translate-y-[60px] stagger-${service.delay} transition-all duration-700 group`}
                >
                  <h3 className="heading-secondary text-2xl text-foreground group-hover:text-primary transition-colors duration-400">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-refined leading-relaxed">{service.description}</p>
                  <ul className="space-y-4 text-muted-foreground list-inside">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-3 fluid-animate opacity-0 translate-x-[-30px] stagger-${featureIndex + 3}`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="py-24 bg-muted/30 fluid-animate opacity-0 translate-y-[50px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-6 mb-20 cascade-animate opacity-0 translate-y-[30px]">
              <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Installation Demo Content</h2>
              <div className="section-divider max-w-20 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div
                onClick={() => setVideoModalOpen(true)}
                className="text-center space-y-6 p-8 border rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Video className="h-10 w-10 text-primary" />
                </div>
                <h3 className="heading-secondary text-2xl text-foreground">Videos</h3>
              </div>
              <div
                onClick={() => setPicturesModalOpen(true)}
                className="text-center space-y-6 p-8 border rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Camera className="h-10 w-10 text-primary" />
                </div>
                <h3 className="heading-secondary text-2xl text-foreground">Pictures</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-background fluid-animate opacity-0 translate-y-[50px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12 cascade-animate opacity-0 translate-y-[30px]">
                <div className="space-y-6">
                  <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Get in Touch</h2>
                  <div className="section-divider max-w-20"></div>
                  <p className="text-xl text-muted-foreground text-refined">
                    Ready to transform your space with exceptional acoustic design? Contact us today to start your project.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: Phone, text: "076 574 2053", delay: 1 },
                    { icon: Mail, text: "gainacousticsolutions@gmail.com", delay: 2 },
                  ].map((contact, index) => {
                    const IconComponent = contact.icon
                    return (
                      <div
                        key={contact.text}
                        className={`flex items-center gap-4 px-6 py-4 rounded-xl fluid-animate opacity-0 translate-y-[30px] stagger-${contact.delay} transition-all duration-500 group`}
                      >
                        <IconComponent className="h-6 w-6 text-primary group-hover:scale-125 transition-transform duration-400 breathe-animation" />
                        <span className="text-lg font-medium">{contact.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-8 rounded-2xl cascade-animate opacity-0 translate-y-[30px] stagger-2">
                <h3 className="text-2xl font-bold text-foreground mb-6">Lets Connect!</h3>
                <iframe
                  aria-label="Let's Connect"
                  frameBorder="0"
                  allow="camera;"
                  style={{ height: "500px", width: "99%", border: "none" }}
                  src="https://forms.zohopublic.com/dxelmediagm1/form/ContactUs/formperma/UsUj4NJVoS6TglQhRRbg-yGCmns6e5iVzLy3Z5IuLEE?zf_enablecamera=true"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 bg-muted/30 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <img src="/GASLogoI_25.png" alt="Gain Acoustics" className="h-10" />
              <p className="text-muted-foreground text-center">
                © 2024 Gain Acoustics Solutions. Creating acoustically exceptional environments.
              </p>
            </div>
          </div>
        </footer>

        <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
          <DialogContent className="max-w-4xl h-auto bg-black border-none">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/tOjVUTDVjvQ?si=S1fOoySFgPPomu2g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </DialogContent>
        </Dialog>

        <Dialog open={picturesModalOpen} onOpenChange={setPicturesModalOpen}>
          <DialogContent className="max-w-6xl h-[80vh] bg-transparent border-none p-0">
            <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} font="bold 30px Poppins" />
          </DialogContent>
        </Dialog>
        <ScrollToTop />
      </div>
    </>
  )
}
