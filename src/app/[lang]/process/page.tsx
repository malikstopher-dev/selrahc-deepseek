import SectionTitle from '@/components/SectionTitle'
import RevealSection from '@/components/RevealSection'
import Image from 'next/image'
import dictionary from '@/locales/en.json'
import dictionaryFr from '@/locales/fr.json'

interface Props {
  params: { lang: string }
}

export default function ProcessPage({ params }: Props) {
  const { lang } = params
  const dict = lang === 'fr' ? dictionaryFr : dictionary

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/image-18.jpg"
          alt="Our Process"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-premium pb-14 md:pb-20">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-light">
            {dict.process.title}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-premium">
          <RevealSection>
            <SectionTitle
              label={dict.process.title}
              title={dict.process.subtitle}
            />
          </RevealSection>

          <div className="mt-16 md:mt-24 relative">
            <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/30 via-gold-500/10 to-transparent" />

            <div className="space-y-20 md:space-y-28">
              {dict.process.steps.map((step: any, i: number) => (
                <RevealSection key={i} delay={i * 100} className="relative pl-0 lg:pl-28">
                  <div className="hidden lg:flex absolute left-0 top-0 w-24 h-24 items-center justify-center">
                    <span className="font-display text-6xl text-gold-500/10">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <span className="font-alt text-[10px] tracking-[0.3em] text-gold-500 block mb-3 lg:hidden">
                      {step.title.toUpperCase()}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white font-light mb-6">
                      {step.title}
                    </h3>
                    <p className="font-body text-base md:text-lg text-stone-400 leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/image-48.jpg"
          alt="Process"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/50" />
      </section>
    </>
  )
}
