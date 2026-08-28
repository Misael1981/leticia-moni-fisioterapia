import type { Metadata } from "next"
import {
  Open_Sans,
  Montserrat,
  Alex_Brush,
  Kaushan_Script,
} from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
import localFont from "next/font/local"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alex-brush",
})

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan-script",
})

const anotherShabby = localFont({
  src: [
    {
      path: "../fonts/Anothershabby_trial.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Anothershabby_trial_regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-custom",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://leticia-moni-fisioterapia.vercel.app"),
  title: "Letícia Moni Fisioterapia",
  description:
    "Fisioterapia Especializada em Reabilitação de Face, Cabeça e Pescoço",

  openGraph: {
    title: "Letícia Moni Fisioterapia",
    description:
      "Fisioterapia Especializada em Reabilitação de Face, Cabeça e Pescoço.",
    url: "https://leticia-moni-fisioterapia.vercel.app",
    siteName: "Letícia Moni Fisioterapia",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Letícia Moni Fisioterapia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full",
        "antialiased",
        openSans.variable,
        montserrat.variable,
        alexBrush.variable,
        anotherShabby.variable,
        kaushanScript.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
