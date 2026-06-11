"use client"

import { VideoCard } from "@/components/VideoCard"
import Image from "next/image"
import { useState } from "react"

type TestimonialCardProps = {
  testimonial: {
    id: number
    name: string
    treatment: string
    recovery: string
    thumbnail: string
    videoUrl: string
    quote: string
  }
  className?: string // Adiciona a prop className
}

const TestimonialCard = ({ testimonial, className }: TestimonialCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article
      key={testimonial.id}
      className={`group flex w-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/8 md:max-w-80 ${className || ""}`}
      onClick={toggleModal}
    >
      {/* Imagem do Card */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={testimonial.thumbnail}
          alt={testimonial.name}
          fill
          priority
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        <button
          className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cyan-400/80"
          aria-label={`Assistir depoimento de ${testimonial.name}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-1 h-8 w-8 text-white"
          >
            <path d="M8 5.14v14l11-7-11-7Z" />
          </svg>
        </button>

        <div className="absolute right-4 bottom-4 left-4">
          <span className="inline-flex rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur-sm">
            {testimonial.treatment}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
            <p className="mt-2 text-sm text-emerald-300">
              {testimonial.recovery}
            </p>
          </div>
          <blockquote className="border-l-2 border-cyan-400/50 pl-4 leading-relaxed text-neutral-300 italic">
            “{testimonial.quote}”
          </blockquote>
        </div>

        <a
          href={testimonial.videoUrl}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
        >
          Assistir depoimento completo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0h-11.25m11.25 0v11.25"
            />
          </svg>
        </a>
      </div>

      <VideoCard
        videoUrl={testimonial.videoUrl}
        open={isOpen}
        onChange={toggleModal}
        title={testimonial.name}
      />
    </article>
  )
}

export default TestimonialCard
