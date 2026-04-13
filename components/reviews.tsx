
import React from 'react';
import Script from 'next/script';
import LogoLoop from "@/components/ui/LogoLoop"

const imageLogos = [
  { src: "/Client_Logos/1.png", alt: "Modular", title: "Modular" },
  { src: "/Client_Logos/2.png", alt: "M&M Music Academy", title: "M&M Music Academy" },
  { src: "/Client_Logos/3.png", alt: "In Fusion", title: "In Fusion" },
  { src: "/Client_Logos/4.png", alt: "Royal Cape Yacht Club", title: "Royal Cape Yacht Club" },
  { src: "/Client_Logos/5.png", alt: "XAGO", title: "XAGO" },
  { src: "/Client_Logos/6.png", alt: "Fools Gold", title: "Fools Gold" },
  { src: "/Client_Logos/7.png", alt: "Wimmy", title: "Wimmy" },
  { src: "/Client_Logos/8.png", alt: "Resource Plus", title: "Resource Plus" },
  { src: "/Client_Logos/9.png", alt: "Vitanova International", title: "Vitanova International" },
  { src: "/Client_Logos/10.png", alt: "Desmond Tutu and Leah foundation", title: "Desmond Tutu and Leah foundation" },
  { src: "/Client_Logos/11.png", alt: "OutProsys", title: "OutProsys" },
  { src: "/Client_Logos/12.png", alt: "Byte Orbit", title: "Byte Orbit" },
  { src: "/Client_Logos/13.png", alt: "Impact.com", title: "Impact.com" },
  { src: "/Client_Logos/14.png", alt: "QueLinda Restaurant", title: "QueLinda Restaurant" },
]

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-muted/30 fluid-animate opacity-0 translate-y-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20 cascade-animate opacity-0 translate-y-[30px]">
          <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Reviews</h2>
          <div className="section-divider max-w-20 mx-auto"></div>
        </div>

        {/* Elfsight Google Reviews Embed */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
        <div className="elfsight-app-a0da7ef4-9a6b-4002-abcf-5ba07a7148e0" data-elfsight-app-lazy></div>

        <div className="py-24">
          <LogoLoop
            logos={imageLogos}
            speed={80}
            direction="left"
            logoHeight={120}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};
