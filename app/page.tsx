import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSlider } from "@/components/hero-slider"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <HeroSlider />

        {/* Welcome section moved below slider */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Bienvenidos a la Facultad de Ingenieria Industrial y de Sistemas - UNI</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La Facultad de Ingenieria Industrial y de Sistemas - UNI es una institución académica comprometida con la excelencia en la enseñanza,
              la investigación y la transferencia del conocimiento.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
