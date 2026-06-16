import SectionTitle from '@/components/SectionTitle'
import RevealSection from '@/components/RevealSection'
import Image from 'next/image'
import dictionary from '@/locales/en.json'
import dictionaryFr from '@/locales/fr.json'

interface Props {
  params: { lang: string }
}

export default function ServicesPage({ params }: Props) {
  const { lang } = params
  const dict = lang === 'fr' ? dictionaryFr : dictionary

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/image-24.jpg"
          alt="Services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-premium pb-14 md:pb-20">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-light">
            {dict.services.title}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-premium">
          <RevealSection>
            <SectionTitle
              label={dict.services.title}
              title={dict.services.subtitle}
            />
          </RevealSection>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {dict.services.items.map((service: any, i: number) => (
              <RevealSection key={i} delay={i * 80} className="bg-[#0a0a0a] p-10 md:p-14 lg:p-16">
                <span className="font-alt text-[10px] tracking-[0.3em] text-gold-500/60">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-white font-light mt-6 mb-6">
                  {service.title}
                </h3>
                <p className="font-body text-stone-400 leading-relaxed">
                  {service.desc}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/image-01.jpg"
          alt="Architecture detail"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-2xl">
            <RevealSection>
              <span className="font-alt text-[11px] uppercase tracking-[0.3em] text-gold-500 mb-4 block">
                {lang === 'fr' ? 'Pourquoi Nous Choisir' : 'Why Choose Us'}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight">
                {lang === 'fr'
                  ? 'Des décennies d\'excellence en design architectural'
                  : 'Decades of architectural design excellence'}
              </h2>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  )
}
