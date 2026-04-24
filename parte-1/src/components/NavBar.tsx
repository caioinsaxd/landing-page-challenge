import { useState } from 'react'
import Logo from './ui/Logo'
import Button from './ui/Button'

const navItems = [
  { label: 'About us', href: 'https://www.google.com' },
  { label: 'Services', href: 'https://www.google.com' },
  { label: 'Use Cases', href: 'https://www.google.com' },
  { label: 'Pricing', href: 'https://www.google.com' },
  { label: 'Blog', href: 'https://www.google.com' },
]

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full top-0 left-0 z-50 fixed bg-white border-b border-gray">
      <header className="flex justify-between items-center h-[100px] max-w-[1440px] mx-auto px-[100px] py-4">
        <div>
          <Logo href="/" />
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black hover:text-gray-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="secondary">Request a quote</Button>
          </div>

          {/* botão pro mobile */}
          <button
            className="lg:hidden w-8 h-8 text-black cursor-pointer flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* dropdown*/}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[68px] left-0 right-0 bg-white border-b border-gray z-50">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black hover:text-gray-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="secondary" className="w-full">
              Request a quote
            </Button>
          </nav>
        </div>
      )}
    </nav>
  )
}