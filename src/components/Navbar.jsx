import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/logos/sundays-logo.svg"
        alt="Sunday's logo"
        className="h-8 w-auto hidden sm:block"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      <span className="font-semibold tracking-tight text-gray-900 text-lg">
        Sunday's
      </span>
    </div>
  )
}

const navItems = [
  { label: 'Flavors', href: '#flavors' },
  { label: 'Our Story', href: '#story' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#order"
              className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              Order Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-gray-900 px-4 py-2 text-center text-white"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
