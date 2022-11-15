import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Link from 'next/link'

// later compute menu options based on user role
const navigation = [
  { name: 'Home', href: '/' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="isolate bg-white flex-none drop-shadow-lg container mx-auto rounded-bl-lg rounded-br-lg">
      <div className="px-6 p-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div className="sm:flex sm:min-w-0 sm:flex-1 sm:justify-center sm:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="sm:flex sm:min-w-0 sm:flex-1 sm:justify-end">
              <Link
                href="/login"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Log in
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}