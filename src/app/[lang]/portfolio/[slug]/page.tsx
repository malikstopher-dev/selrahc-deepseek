import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ProjectGallery from '@/components/ProjectGallery'
import { projects, getProjectBySlug, getAdjacentProjects } from '@/data/projects'
import dictionary from '@/locales/en.json'
import dictionaryFr from '@/locales/fr.json'
import type { Metadata } from 'next'

interface Props {
  params: { lang: string; slug: string }
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = []
  for (const lang of ['en', 'fr']) {
    for (const project of projects) {
      params.push({ lang, slug: project.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  const title = params.lang === 'fr' && project.titleFr ? project.titleFr : project.title
  return {
    title: `${title} | Selrahc Architects`,
    description: project.description,
    openGraph: {
      title: `${title} | Selrahc Architects`,
      description: project.description,
      images: [project.heroImage],
    },
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const { lang, slug } = params
  const dict = lang === 'fr' ? dictionaryFr : dictionary
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const title = lang === 'fr' && project.titleFr ? project.titleFr : project.title
  const location = lang === 'fr' && project.locationFr ? project.locationFr : project.location
  const description = lang === 'fr' && project.descriptionFr ? project.descriptionFr : project.description
  const { prev, next } = getAdjacentProjects(slug)

  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-premium pb-14 md:pb-20">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Link
              href={`/${lang}/portfolio`}
              className="font-alt text-[10px] uppercase tracking-[0.25em] text-stone-400 hover:text-white transition-colors"
            >
              {dict.project.back}
            </Link>
            <span className="text-stone-600">/</span>
            <span className="font-alt text-[10px] uppercase tracking-[0.25em] text-gold-500">
              {dict.portfolio[project.category as keyof typeof dict.portfolio]}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-light">
            {title}
          </h1>
          <p className="font-body text-stone-400 mt-2">{location} — {project.year}</p>
        </div>
      </section>

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <h2 className="font-alt text-[11px] uppercase tracking-[0.3em] text-gold-500 mb-6">
                {dict.project.overview}
              </h2>
              <p className="font-body text-base md:text-lg text-stone-300 leading-relaxed">
                {description}
              </p>
            </div>
            <div className="space-y-8">
              {[
                { label: lang === 'fr' ? 'Année' : 'Year', value: project.year },
                { label: lang === 'fr' ? 'Emplacement' : 'Location', value: location },
                { label: lang === 'fr' ? 'Catégorie' : 'Category', value: dict.portfolio[project.category as keyof typeof dict.portfolio] },
                ...(project.area ? [{ label: lang === 'fr' ? 'Superficie' : 'Area', value: project.area }] : []),
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-500">{label}</span>
                  <p className="font-body text-white mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-[#0a0a0a]">
        <div className="container-premium">
          <div className="mb-12">
            <h2 className="font-alt text-[11px] uppercase tracking-[0.3em] text-stone-400">
              {dict.project.gallery}
            </h2>
          </div>
          <ProjectGallery images={project.images} title={title} />
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-[#0a0a0a] border-t border-white/[0.04]">
        <div className="container-premium">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12">
            {prev ? (
              <Link
                href={`/${lang}/portfolio/${prev.slug}`}
                className="group flex items-center gap-4"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-stone-500 group-hover:text-white transition-colors">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <div className="text-left">
                  <span className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-500">{dict.project.prev}</span>
                  <p className="font-display text-white text-sm mt-0.5">{lang === 'fr' && prev.titleFr ? prev.titleFr : prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/${lang}/portfolio/${next.slug}`}
                className="group flex items-center gap-4 text-right"
              >
                <div className="text-right">
                  <span className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-500">{dict.project.next}</span>
                  <p className="font-display text-white text-sm mt-0.5">{lang === 'fr' && next.titleFr ? next.titleFr : next.title}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-stone-500 group-hover:text-white transition-colors">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  )
}
