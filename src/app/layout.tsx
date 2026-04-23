import type { Metadata } from "next"
import { Open_Sans, Montserrat, Alex_Brush } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

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
  weight: "400", // importante pra essa fonte
  variable: "--font-alex-brush",
})

export const metadata: Metadata = {
  title: "Letícia Moni Fisioterapia",
  description:
    "Fisioterapia Especializada em Reabilitação de Face, Cabeça e Pescoço",
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
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
