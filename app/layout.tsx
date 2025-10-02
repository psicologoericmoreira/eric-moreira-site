import type { Metadata } from 'next'
import { Work_Sans, Bebas_Neue } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Toaster } from '@/components/ui/sonner'
import GTMProvider from './components/GTMProvider'

// Configuração das fontes
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.psicologoericmoreira.com'),
  title: {
    default: 'Psicólogo TCC Online | Eric Moreira | Ansiedade, Depressão | Belo Horizonte',
    template: '%s | Eric Moreira - Psicólogo TCC'
  },
  description: 'Psicólogo especialista em Terapia Cognitivo-Comportamental (TCC). Atendimento online para todo o Brasil. Tratamento para ansiedade, depressão, pânico, TDAH. Agende sua sessão.',
  keywords: 'psicólogo TCC online, terapia cognitivo comportamental, psicólogo para ansiedade, psicólogo Belo Horizonte, TCC ansiedade, tratamento depressão',
  authors: [{ name: 'Eric Moreira' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.psicologoericmoreira.com',
    siteName: 'Eric Moreira - Psicólogo TCC',
    title: 'Psicólogo TCC Online | Eric Moreira',
    description: 'Psicólogo especialista em Terapia Cognitivo-Comportamental. Atendimento online para todo o Brasil.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric Moreira - Psicólogo TCC',
    description: 'Especialista em Terapia Cognitivo-Comportamental',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${workSans.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <GTMProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
