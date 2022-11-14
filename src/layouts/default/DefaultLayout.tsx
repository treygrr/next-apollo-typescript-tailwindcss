import Header from './Header'
import Footer from './Footer'
import { ScriptProps } from 'next/script'

export default function DefaultLayout({ children }: ScriptProps) {
  return (
    <>
      <Header />
      <main className="min-h-full">
        {children}
      </main>
      <Footer />
    </>
  )
}