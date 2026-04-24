"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

const CTAButton = () => {
  return (
    <Link
      href="https://wa.me/5535998901480"
      target="_blank"
      className="group border-cream bg-blue-dark inline-flex items-center gap-3 overflow-hidden rounded-full border-2 px-4 py-2"
    >
      {/* Bolinha */}
      <span className="bg-cream flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-38">
        <ArrowRight className="h-4 w-4 text-blue-900" />
      </span>

      {/* Texto */}
      <span className="text-cream transition-all duration-300 group-hover:-translate-x-10">
        Entrar em contato
      </span>
    </Link>
  )
}

export default CTAButton
