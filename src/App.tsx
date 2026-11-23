import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import KisioArt from './pages/KisioArt'
import KisioDev from './pages/KisioDev'
import KisioPlay from './pages/KisioPlay'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/art" element={<KisioArt />} />

        <Route path="/dev" element={<KisioDev />} />

        <Route path="/play" element={<KisioPlay />} />

        {/* Página inexistente */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-3 text-zinc-400">
          Página no encontrada
        </p>
      </div>
    </main>
  )
}

export default App