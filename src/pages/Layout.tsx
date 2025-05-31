import { Outlet } from "react-router-dom"
import Navbar from "@/pages/Common/Navbar"
import { Footer } from "@/pages/Common/Footer"
import CircleLoader from "@/components/Loading/CircleLoader"
import { ArrowUpIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function Layout() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Navbar />

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <button
        className={`fixed bottom-4 right-4 z-50 rounded-full bg-black text-white transition-opacity duration-300 ${scrollPercentage > 0.5 ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <CircleLoader scrollPercentage={scrollPercentage}>
          <ArrowUpIcon className="h-6 w-6" />
        </CircleLoader>
      </button>
    </>
  )
}
