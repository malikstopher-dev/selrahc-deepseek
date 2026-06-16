import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ClientLayout from '@/components/ClientLayout'
import dictionary from '@/locales/en.json'
import dictionaryFr from '@/locales/fr.json'

interface Props {
  children: React.ReactNode
  params: { lang: string }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang || 'en'
  return {
    title: lang === 'fr'
      ? 'Selrahc Architects | Architecture Contemporaine'
      : 'Selrahc Architects | Contemporary Architecture',
    description: lang === 'fr'
      ? "Cabinet d'architecture contemporaine primé créant des espaces qui inspirent, perdurent et transforment."
      : 'Award-winning contemporary architecture practice creating spaces that inspire, endure, and transform.',
    alternates: {
      languages: {
        'en': '/en',
        'fr': '/fr',
      },
    },
  }
}

export default function LangLayout({ children, params }: Props) {
  const { lang } = params

  if (lang !== 'en' && lang !== 'fr') {
    notFound()
  }

  const dict = lang === 'fr' ? dictionaryFr : dictionary

  return (
    <ClientLayout lang={lang} dict={dict}>
      {children}
    </ClientLayout>
  )
}
