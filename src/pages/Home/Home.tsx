import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-20 mt-0">
      {/* Hero Section */}
      <section className="text-center py-5 lg:py-10">
        <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              A
            </span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Creative Developer
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            & Designer
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I craft digital experiences that blend beautiful design with cutting-edge technology.
          Passionate about creating solutions that make a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/blog"
            className="px-8 py-4 bg-black text-white dark:bg-gray-200 dark:text-black rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/blog"
            className="px-8 py-4 border-2 border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Work</h2>
          <Link
            to="/portfolio"
            className="text-gray-600 dark:text-gray-400 hover:text-black transition-colors flex items-center gap-2"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map(project => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 dark:bg-white/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Posts</h2>
          <Link
            to="/blog"
            // onClick={() => setActiveTab('blog')}
            className="text-gray-600 dark:text-gray-400 hover:text-black transition-colors flex items-center gap-2"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-8">
          {blogPosts.slice(0, 2).map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-white rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}


const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "A data visualization dashboard that displays weather patterns and climate data with interactive charts and forecasting.",
    tech: ["React", "D3.js", "API Integration", "Chart.js"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    link: "#",
    github: "#"
  }
];


const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React",
    excerpt: "Exploring the latest patterns and best practices in React development, from hooks to server components.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Development"
  },
  {
    id: 2,
    title: "The Future of Web Design",
    excerpt: "How minimalism and user experience are shaping the next generation of digital interfaces.",
    date: "2024-03-10",
    readTime: "3 min read",
    category: "Design"
  },
  {
    id: 3,
    title: "Performance Optimization Techniques",
    excerpt: "Advanced strategies for making your web applications lightning fast and user-friendly.",
    date: "2024-03-05",
    readTime: "7 min read",
    category: "Performance"
  }
];