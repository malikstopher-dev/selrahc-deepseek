'use client'

import { useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import RevealSection from '@/components/RevealSection'
import Image from 'next/image'
import dictionary from '@/locales/en.json'
import dictionaryFr from '@/locales/fr.json'

interface Props {
  params: { lang: string }
}

export default function ContactPage({ params }: Props) {
  const { lang } = params
  const dict = lang === 'fr' ? dictionaryFr : dictionary
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/image-54.jpg"
          alt="Contact"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-premium pb-14 md:pb-20">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-light">
            {dict.contact.title}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <RevealSection>
              <SectionTitle
                label={dict.contact.title}
                title={dict.contact.subtitle}
              />
              <div className="mt-12 space-y-8">
                {[
                  {
                    icon: (
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    ),
                    label: dict.contact.address,
                  },
                  {
                    icon: (
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    ),
                    label: 'info@selrahcarchitects.com',
                    href: 'mailto:info@selrahcarchitects.com',
                  },
                  {
                    icon: (
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    ),
                    label: '+27 11 234 5678',
                    href: 'tel:+27112345678',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/[0.06] bg-white/[0.02]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
                        {item.icon}
                      </svg>
                    </div>
                    {item.href ? (
                      <a href={item.href} className="font-body text-sm text-stone-300 hover:text-white transition-colors">
                        {item.label}
                      </a>
                    ) : (
                      <span className="font-body text-sm text-stone-300">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              {submitted ? (
                <div className="border border-gold-500/20 bg-gold-500/5 p-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold-500/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-body text-stone-300">{dict.contact.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
                      {dict.contact.name} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 font-body text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                      placeholder={dict.contact.name}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
                        {dict.contact.email} *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 font-body text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                        placeholder={dict.contact.email}
                      />
                    </div>
                    <div>
                      <label className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
                        {dict.contact.phone}
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 font-body text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                        placeholder={dict.contact.phone}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
                      {dict.contact.message} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 font-body text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                      placeholder={dict.contact.message}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    {dict.contact.submit}
                  </button>
                </form>
              )}
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  )
}
