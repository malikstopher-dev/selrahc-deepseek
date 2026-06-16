import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import SectionTitle from '@/components/SectionTitle'
import RevealSection from '@/components/RevealSection'
import Link from 'next/link'
import Image from 'next/image'
import { featuredProjects } from '@/data/projects'
import dictionary from '@/locales/en.json'
import dictionaryFr from '@/locales/fr.json'

interface Props {
  params: { lang: string }
}

export default function HomePage({ params }: Props) {
  const { lang } = params
  const dict = lang === 'fr' ? dictionaryFr : dictionary

  return (
    <>
      <Hero lang={lang} dict={dict} />

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-premium">
          <RevealSection>
            <SectionTitle
              label={lang === 'fr' ? 'Projets en Vedette' : 'Featured Projects'}
              title={dict.home.featured_title}
            />
          </RevealSection>

          <div className="mt-16 md:mt-24 space-y-6 md:space-y-8">
            {featuredProjects.slice(0, 4).map((project, i) => (
              <RevealSection key={project.id} delay={i * 100}>
                <ProjectCard project={project} lang={lang} dict={dict} index={i} />
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={300}>
            <div className="mt-12 text-center">
              <Link href={`/${lang}/portfolio`} className="btn-outline">
                {lang === 'fr' ? 'Voir Tous les Projets' : 'View All Projects'}
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/image-66.jpg"
          alt="Architecture detail"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-2xl px-6">
            <RevealSection>
              <span className="font-alt text-[11px] uppercase tracking-[0.3em] text-gold-500 mb-4 block">
                {lang === 'fr' ? 'Notre Philosophie' : 'Our Philosophy'}
              </span>
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-white font-light italic leading-relaxed">
                &ldquo;{lang === 'fr'
                  ? 'L\'architecture est le dialogue entre la lumière, la matière et l\'espace — une conversation qui façonne la façon dont nous vivons.'
                  : 'Architecture is the dialogue between light, material, and space — a conversation that shapes how we live.'}
                &rdquo;
              </blockquote>
            </RevealSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-900">
        <div className="container-premium">
          <RevealSection>
            <SectionTitle
              label={lang === 'fr' ? 'Notre Expertise' : 'Our Expertise'}
              title={dict.home.services_title}
            />
          </RevealSection>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {dict.services.items.map((service: any, i: number) => (
              <RevealSection key={i} delay={i * 80} className="bg-charcoal-900 p-8 md:p-10 lg:p-12">
                <span className="font-alt text-[10px] tracking-[0.3em] text-gold-500/60">{(i + 1).toString().padStart(2, '0')}</span>
                <h3 className="font-display text-xl md:text-2xl text-white font-light mt-4 mb-4">{service.title}</h3>
                <p className="font-body text-sm text-stone-400 leading-relaxed">{service.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-premium">
          <RevealSection>
            <SectionTitle
              label={lang === 'fr' ? 'Notre Processus' : 'Our Process'}
              title={dict.home.process_title}
              align="center"
            />
          </RevealSection>

          <div className="mt-16 md:mt-24 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/20 via-gold-500/10 to-transparent -translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {dict.process.steps.map((step: any, i: number) => (
                <RevealSection key={i} delay={i * 80} className={`relative flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                  <div className="flex-1">
                    <span className="font-alt text-[10px] tracking-[0.3em] text-gold-500">{step.title.toUpperCase()}</span>
                    <h3 className="font-display text-2xl md:text-3xl text-white font-light mt-3 mb-4">{step.title}</h3>
                    <p className="font-body text-stone-400 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-gold-500/20 bg-charcoal-900 shrink-0 relative z-10">
                    <span className="font-display text-lg text-gold-500">{(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1" />
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40 overflow-hidden">
        <Image
          src="/images/image-30.jpg"
          alt="Contact CTA"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        <div className="relative container-premium text-center">
          <RevealSection>
            <span className="font-alt text-[11px] uppercase tracking-[0.3em] text-gold-500 mb-4 block">
              {lang === 'fr' ? 'Commençons' : 'Let\'s Begin'}
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-light mb-6">
              {dict.home.cta_title}
            </h2>
            <p className="font-body text-lg text-stone-300 max-w-xl mx-auto mb-10">
              {dict.home.cta_subtitle}
            </p>
            <Link href={`/${lang}/quote`} className="btn-primary text-base !px-10 !py-5">
              {dict.home.cta_button}
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
