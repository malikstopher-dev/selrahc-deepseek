'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  lang: string
  dict: any
  index?: number
}

export default function ProjectCard({ project, lang, dict, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const title = lang === 'fr' && project.titleFr ? project.titleFr : project.title
  const location = lang === 'fr' && project.locationFr ? project.locationFr : project.location
  const isEven = index % 2 === 0

  return (
    <Link
      href={`/${lang}/portfolio/${project.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-charcoal-900">
        <div className={`relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden`}>
          <Image
            src={project.heroImage}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-alt text-[10px] uppercase tracking-[0.25em] text-gold-500">
                {dict.portfolio[project.category as keyof typeof dict.portfolio]}
              </span>
              <span className="text-stone-500 text-[10px]">•</span>
              <span className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-400">
                {project.year}
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white font-light mb-2 transition-all duration-500 group-hover:translate-x-2">
              {title}
            </h3>
            <p className="font-body text-sm text-stone-400">
              {location}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
