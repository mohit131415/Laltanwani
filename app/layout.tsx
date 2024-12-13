import "./globals.css"
import { Inter, Playfair_Display } from 'next/font/google'
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
})

export const metadata = {
  title: "Dr. Lal Tanwani - Educator, Entrepreneur, Visionary",
  description: "Personal branding website of Dr. Lal Tanwani, a doctorate, educator, and entrepreneur with 14 degrees.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

