import { Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="visit" className="relative border-t border-gray-200 bg-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-full rounded-t-3xl bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logos/sundays-mark.svg"
                alt="Sunday's mark"
                className="h-9 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="text-xl font-semibold tracking-tight">Sunday's</span>
            </div>
            <p className="mt-4 max-w-xs text-gray-600">
              Scoops, pints, and soft serve crafted with care in our sunny studio.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Visit Us</h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Sundae Lane, Sweet City</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@sundays.shop</li>
            </ul>
          </div>

          <div id="order">
            <h4 className="font-semibold text-gray-900">Order</h4>
            <p className="mt-4 text-gray-600">Pre-order pints for pickup this weekend.</p>
            <form className="mt-4 flex w-full max-w-sm gap-3">
              <input
                type="email"
                required
                placeholder="Email for drop alerts"
                className="flex-1 rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-gray-900"
              />
              <button
                type="submit"
                className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
              >
                Notify me
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sunday's. All rights reserved.</p>
          <p>Made with love and good taste.</p>
        </div>
      </div>
    </footer>
  )
}
