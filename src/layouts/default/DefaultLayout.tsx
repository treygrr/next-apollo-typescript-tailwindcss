import Header from './Header'
import Footer from './Footer'
import { ScriptProps } from 'next/script'

export default function DefaultLayout({ children }: ScriptProps) {
  return (
    <div className="flex flex-col" style={{ height: '100vh' }}>
      <div className="z-0 absolute left-0 right-0 top-0 bg-gradient-to-b from-indigo-500 to-purple-500" style={{ height: '100vh' }}></div>
      <Header />
        <main className="bg-white drop-shadow-lg h-full flex-grow mx-auto m-4 rounded-lg p-4 container z-10">
          {children}
        </main>
      <Footer />
    </div>
  )
}