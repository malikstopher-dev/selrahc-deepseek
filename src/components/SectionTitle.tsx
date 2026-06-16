'use client'

import { useRef, useEffect } from 'react'

interface SectionTitleProps {
  label: string
  title: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionTitle({ label, title, align = 'left', light = false }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <span className={`font-alt text-[11px] uppercase tracking-[0.3em] ${light ? 'text-stone-400' : 'text-gold-500'} mb-4 block`}>
        {label}
      </span>
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
    </div>
  )
}
