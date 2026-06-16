'use client'

import { useRef, ReactNode } from 'react'
import Image from 'next/image'

interface ParallaxSectionProps {
  image: string
  children?: ReactNode
  height?: string
  overlay?: boolean
}

export default function ParallaxSection({ image, children, height = 'h-[60vh]', overlay = true }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section ref={ref} className={`relative ${height} overflow-hidden`}>
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {overlay && <div className="absolute inset-0 bg-[#0a0a0a]/60" />}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </section>
  )
}
