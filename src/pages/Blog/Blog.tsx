import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function Blog() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Thoughts on technology, design, and building better digital experiences.
        </p>
      </div>

      <div className="space-y-12">
        {blogPosts.map(post => (
          <article key={post.id} className="group cursor-pointer">
            <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

}
