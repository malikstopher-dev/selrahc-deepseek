'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import SectionTitle from '@/components/SectionTitle'
import RevealSection from '@/components/RevealSection'
import { projects, categories } from '@/data/projects'
import type { ProjectCategory } from '@/data/projects'
import dictionary from '@/locales/en.json'
import dictionaryFr from '@/locales/fr.json'

interface Props {
  params: { lang: string }
}

export default function PortfolioPage({ params }: Props) {
  const { lang } = params
  const dict = lang === 'fr' ? dictionaryFr : dictionary
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#0a0a0a]">
        <div className="container-premium">
          <RevealSection>
            <SectionTitle
              label={dict.portfolio.title}
              title={dict.portfolio.subtitle}
            />
          </RevealSection>

          <RevealSection delay={200}>
            <div className="mt-12 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`font-alt text-[11px] uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 ${
                    activeFilter === cat.key
                      ? 'bg-white text-charcoal-900'
                      : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {lang === 'fr' ? cat.labelFr : cat.label}
                </button>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="pb-32 md:pb-40 bg-[#0a0a0a]">
        <div className="container-premium">
          <div className="space-y-8 md:space-y-10">
            {filtered.map((project, i) => (
              <RevealSection key={project.id} delay={i * 80}>
                <ProjectCard project={project} lang={lang} dict={dict} index={i} />
              </RevealSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-stone-500">
                {lang === 'fr' ? 'Aucun projet trouvé dans cette catégorie.' : 'No projects found in this category.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
