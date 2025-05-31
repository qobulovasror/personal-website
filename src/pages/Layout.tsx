import { Outlet } from "react-router-dom"
import Navbar from "@/pages/Common/Navbar"
import { Footer } from "@/pages/Common/Footer"

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
