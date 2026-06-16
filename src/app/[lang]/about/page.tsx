import SectionTitle from '@/components/SectionTitle'
import RevealSection from '@/components/RevealSection'
import Image from 'next/image'
import dictionary from '@/locales/en.json'
import dictionaryFr from '@/locales/fr.json'

interface Props {
  params: { lang: string }
}

export default function AboutPage({ params }: Props) {
  const { lang } = params
  const dict = lang === 'fr' ? dictionaryFr : dictionary

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/image-12.jpg"
          alt="About Selrahc Architects"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-premium pb-14 md:pb-20">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-light">
            {dict.about.title}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <RevealSection>
              <div className="lg:sticky lg:top-32">
                <span className="font-alt text-[11px] uppercase tracking-[0.3em] text-gold-500 mb-4 block">
                  {lang === 'fr' ? 'Notre Mission' : 'Our Mission'}
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-8">
                  {lang === 'fr' ? 'Créer une architecture qui résonne' : 'Creating architecture that resonates'}
                </h2>
                <div className="w-16 h-[1px] bg-gold-500/50" />
              </div>
            </RevealSection>

            <div className="space-y-10">
              <RevealSection delay={100}>
                <p className="font-body text-base md:text-lg text-stone-300 leading-relaxed">
                  {dict.about.mission}
                </p>
              </RevealSection>
              <RevealSection delay={200}>
                <p className="font-body text-base md:text-lg text-stone-300 leading-relaxed">
                  {dict.about.philosophy}
                </p>
              </RevealSection>
              <RevealSection delay={300}>
                <p className="font-body text-base md:text-lg text-stone-300 leading-relaxed">
                  {dict.about.team}
                </p>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/image-42.jpg"
          alt="Selrahc Architects studio"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/40" />
      </section>

      <section className="section-padding bg-charcoal-900">
        <div className="container-premium">
          <RevealSection>
            <SectionTitle
              label={lang === 'fr' ? 'Valeurs' : 'Values'}
              title={lang === 'fr' ? 'Ce en quoi nous croyons' : 'What we believe in'}
              align="center"
            />
          </RevealSection>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                number: '01',
                title: lang === 'fr' ? 'Excellence du Design' : 'Design Excellence',
                desc: lang === 'fr'
                  ? 'Chaque projet reçoit une attention méticuleuse aux détails et un engagement indéfectible envers la qualité.'
                  : 'Every project receives meticulous attention to detail and an unwavering commitment to quality.',
              },
              {
                number: '02',
                title: lang === 'fr' ? 'Approche Collaborative' : 'Collaborative Approach',
                desc: lang === 'fr'
                  ? 'Nous travaillons en étroite collaboration avec les clients, les consultants et les entrepreneurs pour donner vie à chaque vision.'
                  : 'We work closely with clients, consultants, and contractors to bring every vision to life.',
              },
              {
                number: '03',
                title: lang === 'fr' ? 'Design Durable' : 'Sustainable Design',
                desc: lang === 'fr'
                  ? "L'architecture responsable est au cœur de notre pratique, minimisant l'impact environnemental tout en maximisant la performance."
                  : 'Responsible architecture is at the core of our practice, minimizing environmental impact while maximizing performance.',
              },
            ].map((value, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="text-center">
                  <span className="font-display text-5xl text-gold-500/20">{value.number}</span>
                  <h3 className="font-display text-xl md:text-2xl text-white font-light mt-4 mb-4">{value.title}</h3>
                  <p className="font-body text-sm text-stone-400 leading-relaxed">{value.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
