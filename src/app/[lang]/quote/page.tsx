'use client'

import { useState } from 'react'
import Image from 'next/image'
import RevealSection from '@/components/RevealSection'
import dictionary from '@/locales/en.json'
import dictionaryFr from '@/locales/fr.json'

interface Props {
  params: { lang: string }
}

export default function QuotePage({ params }: Props) {
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
          src="/images/image-60.jpg"
          alt="Request a Quote"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-premium pb-14 md:pb-20">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-light">
            {dict.quote.title}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-premium max-w-3xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="font-alt text-[11px] uppercase tracking-[0.3em] text-gold-500 mb-4 block">
                {dict.quote.title}
              </span>
              <p className="font-body text-lg text-stone-400">
                {dict.quote.subtitle}
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            {submitted ? (
              <div className="border border-gold-500/20 bg-gold-500/5 p-14 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold-500/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-body text-stone-300 text-lg">{dict.quote.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
                      {dict.quote.project_type} *
                    </label>
                    <select
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 font-body text-sm text-stone-400 focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                    >
                      <option value="">{dict.quote.project_type_placeholder}</option>
                      <option value="residential">{dict.quote.residential}</option>
                      <option value="commercial">{dict.quote.commercial}</option>
                      <option value="interior">{dict.quote.interior}</option>
                      <option value="renovation">{dict.quote.renovation}</option>
                      <option value="other">{dict.quote.other}</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
                      {dict.quote.budget}
                    </label>
                    <select className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 font-body text-sm text-stone-400 focus:outline-none focus:border-gold-500/50 transition-colors appearance-none">
                      <option value="">{dict.quote.budget_placeholder}</option>
                      <option value="1">{dict.quote.budget_1}</option>
                      <option value="2">{dict.quote.budget_2}</option>
                      <option value="3">{dict.quote.budget_3}</option>
                      <option value="4">{dict.quote.budget_4}</option>
                      <option value="5">{dict.quote.budget_5}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
                    {dict.quote.location} *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 font-body text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    placeholder={dict.quote.location}
                  />
                </div>

                <div>
                  <label className="font-alt text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
                    {dict.quote.description} *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 font-body text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                    placeholder={dict.quote.description_placeholder}
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

                <button type="submit" className="btn-primary w-full justify-center text-base !py-5">
                  {dict.quote.submit}
                </button>
              </form>
            )}
          </RevealSection>
        </div>
      </section>
    </>
  )
}
