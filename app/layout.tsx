import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Gain Acoustic Solutions",
  description: "We manufacture, deliver and install large format printed acoustic panels",
  generator: 'v0.app',
  icons: {
    icon: '/GASLogoI_25.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          {/* Elfsight WhatsApp Chat | GAS WhatsApp Chat */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-d5f516f3-fedb-4922-9248-10eb830fdf9b" data-elfsight-app-lazy></div>
        </ThemeProvider>
      </body>
    </html>
  )
}
