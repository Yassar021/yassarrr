"use client"

import { Poppins } from "next/font/google"
import Provider from "./provider"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={poppins.className} lang='en' suppressHydrationWarning>
      <head>
        <title>Ahmad Muyassar Yani | Front-End Developer</title>
        {/* [cite_start]<meta name="description" content="Personal portfolio of Ahmad Muyassar Yani [cite: 1][cite_start], a Front-End Developer [cite: 2] [cite_start]specializing in building responsive and user-friendly web applications [cite: 2] [cite_start]with React.js and Next.js[cite: 65]." /> */}
        <meta name="keywords" content="Ahmad Muyassar Yani, Front-End Developer, Web Designer, UI/UX, React.js, Next.js, JavaScript, Portfolio, Makassar" />
        {/* [cite_start]<meta name="author" content="Ahmad Muyassar Yani [cite: 1]" /> */}
        <meta property="og:title" content="Ahmad Muyassar Yani - Front-End Developer & UI/UX Enthusiast" />
        {/* [cite_start]<meta property="og:description" content="Explore the portfolio of Ahmad Muyassar Yani [cite: 1][cite_start], a Front-End Developer [cite: 2] [cite_start]creating responsive and engaging web applications with a focus on great user experience[cite: 4]." /> */}
        <meta property="og:url" content="https://yassarrr.vercel.app" />

        {/* <meta property="og:image" content="https://www.yourwebsite.com/link-to-your-image.jpg"></meta> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}