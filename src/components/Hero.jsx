import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-pink-300/40 to-purple-300/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-cyan-300/40 to-blue-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Sunday's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-cyan-600">
                Ice Cream, Reimagined
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg leading-8 text-gray-600 max-w-xl"
            >
              Small-batch scoops crafted with real ingredients, bold flavors, and a
              whole lot of joy. Minimal design. Maximum delight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#flavors"
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 hover:bg-gray-800 transition"
              >
                Explore Flavors
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-6 py-3 text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 transition"
              >
                Our Story
                <Sparkles className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex items-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍨</span>
                Real dairy & vegan options
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                No artificial flavors
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 blur-2xl opacity-60" />
              <div className="relative rounded-3xl bg-white p-4 ring-1 ring-gray-100 shadow-xl">
                <div className="grid grid-cols-3 gap-3">
                  {['🍓','🍫','🍋','🥭','🍵','🫐','🍯','🍪','🌰'].map((s, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center text-4xl shadow-sm ring-1 ring-gray-100"
                    >
                      <span className="select-none">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
