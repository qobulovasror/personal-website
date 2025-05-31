import { lazy, Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Loading from "@/components/Loading/Loading"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "@/pages/Layout"
import '@/App.css'

const HomePage = lazy(() => import("@/pages/Home/Home"))
const Blog = lazy(() => import("@/pages/Blog/Blog"))
const Portfolio = lazy(() => import("@/pages/Portfolio/Portfolio"))
const BlogPost = lazy(() => import("@/pages/Blog/BlogPost"))

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />}>
                <Route path=":id" element={<BlogPost />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
