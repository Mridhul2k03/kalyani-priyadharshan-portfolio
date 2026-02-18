import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Landing from './Pages/Landing'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Films from './Pages/Films'
import Awards from './Pages/Awards' // Added Import
import FilmDetail from './Pages/FilmDetail'
import {useState} from 'react'
import Loader from './Components/Loader'
import ScrollToTop from './Components/ScrollToTop'

function App() {

  const [loading, setLoading] = useState(true);

  if (loading) {

    return <Loader onComplete={() => setLoading(false)} />;

  }

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Global Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none animate-in fade-in duration-1000">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* Navbar Visibility Overlay */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-40 pointer-events-none" />

      <div className="min-h-screen bg-background relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmDetail />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
