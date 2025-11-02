import { motion } from 'framer-motion'

const flavors = [
  {
    name: "Strawberry Fields",
    note: "Roasted berries, balsamic swirl",
    color: "from-rose-100 to-rose-50",
    accent: "bg-rose-200",
    emoji: '🍓',
  },
  {
    name: "Midnight Cacao",
    note: "Single-origin 72% dark",
    color: "from-stone-100 to-stone-50",
    accent: "bg-stone-200",
    emoji: '🍫',
  },
  {
    name: "Matcha Mirage",
    note: "Ceremonial grade, silky",
    color: "from-emerald-100 to-emerald-50",
    accent: "bg-emerald-200",
    emoji: '🍵',
  },
  {
    name: "Mango Glow",
    note: "Alphonso mango, lime zest",
    color: "from-amber-100 to-amber-50",
    accent: "bg-amber-200",
    emoji: '🥭',
  },
  {
    name: "Blueberry Cloud",
    note: "Vanilla bean, blueberry jam",
    color: "from-indigo-100 to-indigo-50",
    accent: "bg-indigo-200",
    emoji: '🫐',
  },
  {
    name: "Honeycomb Crunch",
    note: "Caramel honeycomb shards",
    color: "from-yellow-100 to-yellow-50",
    accent: "bg-yellow-200",
    emoji: '🍯',
  },
]

export default function Flavors() {
  return (
    <section id="flavors" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Signature Flavors
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Rotating, seasonal, and made in small batches. Ask in-store for the
              full menu.
            </p>
          </div>
          <a
            href="#order"
            className="hidden sm:inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
          >
            Order Pints
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flavors.map((f, idx) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-b ${f.color} p-6 ring-1 ring-gray-100 shadow-sm`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-2xl ${f.accent}" />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{f.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.note}</p>
                </div>
                <div className="text-4xl">{f.emoji}</div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-flex h-2 w-2 rounded-full bg-gray-900" />
                Small-batch • Premium
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
