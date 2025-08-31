"use client"

import { Button } from "@/components/ui/button"
import { LoadingScreen } from "@/components/loading-screen"
import { Phone, Mail, ArrowRight, ChevronDown, Play, Volume2, Headphones, CheckCircle } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { WallSystemsShowcase } from "@/components/wall-systems-showcase"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)

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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [isLoaded])

  return (
    <>
      <LoadingScreen />
      <div
        className={`min-h-screen bg-background transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrollY > 50 ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center animate-slide-in-left">
                <span className="text-2xl font-bold text-foreground tracking-tight hover-scale transition-all duration-300 hover:text-primary">
                  Gain Acoustics
                </span>
              </div>
              <nav className="hidden lg:flex items-center space-x-8 animate-fade-in-up animate-delay-200">
                {["Solutions", "Projects", "Services", "Contact"].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover-scale relative group"
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
              <Button className="btn-secondary hover-lift animate-slide-in-right animate-delay-300 transition-all duration-300 hover:scale-105">
                Get Quote
              </Button>
            </div>
          </div>
        </header>

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://gainacousticssolutions.com/wp-content/uploads/2024/04/img_2260.jpg"
              alt="Acoustic panel installation"
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            <h1 className="heading-primary text-5xl lg:text-7xl text-foreground mb-8 text-balance animate-fade-in-up opacity-0 animation-fill-forwards">
              <span className="inline-block animate-slide-up" style={{ animationDelay: "0.5s" }}>
                Acoustic
              </span>{" "}
              <span className="inline-block animate-slide-up" style={{ animationDelay: "0.7s" }}>
                Excellence
              </span>
              <span className="block text-primary mt-2 animate-slide-up" style={{ animationDelay: "0.9s" }}>
                Redefined
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-refined mb-12 animate-fade-in-up animate-delay-1000 opacity-0 animation-fill-forwards">
              We manufacture, deliver and install large format printed acoustic panels for exceptional sound
              environments that blend performance with stunning visual design.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-1200 opacity-0 animation-fill-forwards">
              <Button
                size="lg"
                className="btn-primary text-lg px-10 py-4 hover-lift transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-secondary text-lg px-10 py-4 hover-lift bg-transparent transition-all duration-300 hover:scale-105 hover:bg-primary/10"
              >
                <Play className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-float">
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </section>

        <section className="py-24 bg-muted/30 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700 delay-200">
                <div className="space-y-6">
                  <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Mirage™ Textured Panels</h2>
                  <p className="text-lg text-muted-foreground text-refined">
                    A textured finish bringing depth and nuance to every space. Our signature acoustic panels combine
                    superior sound absorption with stunning visual appeal, creating environments that perform as
                    beautifully as they look.
                  </p>
                </div>
                {["Superior acoustic performance", "Custom visual designs"].map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 scroll-animate opacity-0 translate-x-[-30px] transition-all duration-500"
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
                <Button className="btn-secondary hover-lift transition-all duration-300 hover:scale-105 scroll-animate opacity-0 translate-y-4 transition-all duration-500 delay-600">
                  View Mirage™ Collection
                </Button>
              </div>
              <div className="relative scroll-animate opacity-0 translate-x-[50px] transition-all duration-700 delay-300">
                <div className="professional-card p-4 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <img
                    src="/modern-restaurant-interior-with-acoustic-panels-an.png"
                    alt="Mirage textured acoustic panels"
                    className="w-full h-[500px] object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="py-24 bg-background scroll-animate opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-6 mb-20 scroll-animate opacity-0 translate-y-4 transition-all duration-600">
              <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Our Solutions</h2>
              <div className="section-divider max-w-20 mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-refined">
                Comprehensive acoustic solutions designed for every environment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "/professional-recording-studio-with-acoustic-treatm.png",
                  icon: Volume2,
                  title: "Echo Reduction",
                  description:
                    "Acoustic ceiling clouds engineered for optimal sound control in professional environments.",
                  delay: 100,
                },
                {
                  image: "/modern-corporate-office-with-acoustic-ceiling-clou.png",
                  icon: Headphones,
                  title: "Soundproofing",
                  description: "Comprehensive acoustic solutions designed to create peaceful, productive spaces.",
                  delay: 200,
                },
                {
                  image: "/modern-office-space-with-acoustic-panels-installat.png",
                  icon: Play,
                  title: "Custom Panels",
                  description: "High-resolution printed acoustic panels that enhance both acoustics and aesthetics.",
                  delay: 300,
                },
              ].map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <div
                    key={solution.title}
                    className="professional-card p-8 rounded-2xl text-center space-y-6 hover-lift scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] group"
                    style={{ transitionDelay: `${solution.delay}ms` }}
                  >
                    <div className="aspect-square bg-muted/50 rounded-xl overflow-hidden mb-6 group-hover:shadow-lg transition-all duration-500">
                      <img
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="heading-secondary text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground text-refined">{solution.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <WallSystemsShowcase />
        </div>

        <section
          id="services"
          className="py-24 bg-muted/30 scroll-animate opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-6 mb-20 scroll-animate opacity-0 translate-y-4 transition-all duration-600">
              <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Our Services</h2>
              <div className="section-divider max-w-20 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {[
                {
                  title: "Manufacturing Excellence",
                  description:
                    "Our state-of-the-art manufacturing facility produces high-quality acoustic panels using advanced printing technology and premium materials. Each panel is crafted to meet exact specifications for both acoustic performance and visual appeal.",
                  features: [
                    "Large format printing capabilities",
                    "Custom sizing and shapes",
                    "Premium acoustic materials",
                  ],
                  delay: 200,
                },
                {
                  title: "Professional Installation",
                  description:
                    "Our experienced installation team ensures perfect placement and optimal acoustic performance. We handle projects of all sizes, from single rooms to large commercial spaces, with meticulous attention to detail.",
                  features: [
                    "Site assessment and planning",
                    "Professional installation team",
                    "Post-installation support",
                  ],
                  delay: 400,
                },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className="professional-card p-10 rounded-2xl space-y-8 hover-lift scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] group"
                  style={{ transitionDelay: `${service.delay}ms` }}
                >
                  <h3 className="heading-secondary text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-refined">{service.description}</p>
                  <ul className="space-y-4 text-muted-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 scroll-animate opacity-0 translate-x-[-20px] transition-all duration-500"
                        style={{ transitionDelay: `${service.delay + 200 + featureIndex * 100}ms` }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-24 bg-background scroll-animate opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="space-y-12">
              <div className="space-y-6 scroll-animate opacity-0 translate-y-4 transition-all duration-600">
                <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Get in Touch</h2>
                <div className="section-divider max-w-20 mx-auto"></div>
                <p className="text-xl text-muted-foreground text-refined">
                  Ready to transform your space with exceptional acoustic design?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground">
                {[
                  { icon: Phone, text: "678.575.2453", delay: 200 },
                  { icon: Mail, text: "gainacousticssolutions@gmail.com", delay: 300 },
                ].map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div
                      key={contact.text}
                      className="flex items-center gap-3 professional-card px-6 py-4 rounded-xl hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-500 hover:shadow-lg hover:scale-105 group"
                      style={{ transitionDelay: `${contact.delay}ms` }}
                    >
                      <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">{contact.text}</span>
                    </div>
                  )
                })}
              </div>

              <Button
                size="lg"
                className="btn-primary text-lg px-12 py-4 hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-500 delay-400 hover:scale-105 hover:shadow-xl group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-12 bg-muted/30 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-xl font-bold text-foreground tracking-tight">Gain Acoustics</span>
              <p className="text-muted-foreground text-center">
                © 2024 Gain Acoustics Solutions. Creating acoustically exceptional environments.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
