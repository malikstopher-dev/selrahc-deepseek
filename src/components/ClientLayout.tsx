'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

interface ClientLayoutProps {
  children: ReactNode
  lang: string
  dict: any
}

export default function ClientLayout({ children, lang, dict }: ClientLayoutProps) {
  const pathname = usePathname()
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className={`min-h-screen ${isHome ? '' : 'pt-20 md:pt-24'}`}>
        {children}
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
