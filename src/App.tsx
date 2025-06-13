import { lazy, Suspense, useEffect, useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Loading from "@/components/Loading/Loading"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "@/pages/Layout"
import '@/App.css'
import type { Post } from "./type/blog"
import type { Project } from "./type/project"
import { collection, QueryDocumentSnapshot, type DocumentData } from "firebase/firestore"
import { db } from "@/firabase.config"
import { getDocs } from "firebase/firestore"

const HomePage = lazy(() => import("@/pages/Home/Home"))
const Blog = lazy(() => import("@/pages/Blog/Blog"))
const Portfolio = lazy(() => import("@/pages/Portfolio/Portfolio"))
const AboutPage = lazy(() => import("@/pages/About/About"))
const ContactPage = lazy(() => import("@/pages/Contact/Contact"))
const BlogPost = lazy(() => import("@/pages/Blog/BlogPost"))
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"))

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      // Fetch Projects
      const projectSnap = await getDocs(collection(db, "projects"));
      const projectsData: Project[] = projectSnap.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          tech: data.tech,
          description: data.description,
          image: data.image,
          link_demo: data.link_demo,
          link_code: data.link_code,
        };
      });

      // Fetch Posts
      const postSnap = await getDocs(collection(db, "posts"));
      const postsData: Post[] = postSnap.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
        const data = doc.data();
        const wordCount = data.content?.split(/\s+/).length || 0;
        const readTime = (wordCount / 200).toFixed(1) + " min read";
        return {
          id: doc.id,
          title: data.title,
          content: data.content,
          date: data.date,
          category: data.category,
          image: data.image,
          readTime,
          excerpt: data.content.slice(0, 100) + "...",
        };
      });

      setProjects(projectsData);
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={loading ? <Loading /> : null}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage projects={projects} blogPosts={posts} />} />
              <Route path="/portfolio" element={<Portfolio projects={projects} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<Blog posts={posts} />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
