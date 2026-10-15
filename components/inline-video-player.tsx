"use client"

import { useState } from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"

export default function InlineVideoPlayer({
  src,
  poster,
  alt,
  className = "",
}: {
  src: string
  poster: string
  alt: string
  className?: string
}) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <video
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
        className={`w-full h-full object-contain bg-black ${className}`}
      >
        Tu navegador no soporta el elemento de video.
      </video>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative w-full h-full block ${className}`}
      aria-label={`Reproducir video: ${alt}`}
    >
      <Image src={poster} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#2C3E50]/30 group-hover:bg-[#2C3E50]/40 transition-colors flex items-center justify-center">
        <div className="bg-white/90 group-hover:bg-white p-4 lg:p-5 rounded-full shadow-lg transform group-hover:scale-110 transition-all duration-300 border-2 border-green-500">
          <FaPlay className="text-xl lg:text-2xl text-[#2C3E50] ml-1" />
        </div>
      </div>
    </button>
  )
}
