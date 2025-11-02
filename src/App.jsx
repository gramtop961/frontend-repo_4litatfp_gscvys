import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Flavors from './components/Flavors'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Hero />

        <section id="story" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Crafted like a Sunday ritual
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We take a minimalist approach to ice cream: fewer ingredients,
                  exceptional quality, and flavors that feel both nostalgic and
                  new. Every batch is churned in-house, balanced for ultra-creamy
                  texture, and finished with signature swirls and crunches.
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><span className="text-xl">🌿</span> Organic dairy & plant-based options</li>
                  <li className="flex items-center gap-2"><span className="text-xl">🍫</span> Single-origin chocolates & real fruit</li>
                  <li className="flex items-center gap-2"><span className="text-xl">💫</span> No artificial colors or flavors</li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-xl">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 blur-2xl opacity-60" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 ring-1 ring-gray-100 shadow-xl flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-3 p-6">
                      {['Vanilla Bean','Pistachio','Caramel','Cookies','Lemon','Coffee','Hazelnut','Ube','Coconut'].map((n) => (
                        <div key={n} className="rounded-2xl bg-white px-3 py-4 text-center text-xs font-medium text-gray-700 ring-1 ring-gray-100 shadow-sm">
                          {n}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Flavors />
      </main>

      <Footer />
    </div>
  )
}

export default App
