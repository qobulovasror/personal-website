import { ArrowLeft, BookOpen, Calendar, Clock, Eye, Github, Linkedin, Mail, Share2 } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  const [selectedPost, setSelectedPost] = useState(blogPosts.find(post => post.id === parseInt(id as string)) || blogPosts[0]);
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        // onClick={closeBlogPost}
        className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </button>

      {/* Article Header */}
      <header className="mb-12">
        {/* Featured Image */}
        <div className="relative overflow-hidden rounded-2xl mb-8 bg-gray-100">
          <img
            src={selectedPost?.image}
            alt={selectedPost?.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
            {selectedPost?.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(selectedPost.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {selectedPost.readTime}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            1.2k views
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {selectedPost.title}
        </h1>

        {/* Author & Share */}
        <div className="flex items-center justify-between pb-8 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Azimjon</div>
              <div className="text-sm text-gray-500">Developer & Designer</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black transition-colors">
              <BookOpen className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: selectedPost.content }}
        />
      </article>

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">Azimjon</div>
              <div className="text-gray-600">
                Full-stack developer passionate about creating amazing web experiences.
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Github className="w-4 h-4 text-gray-700" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-gray-700" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-4 h-4 text-gray-700" />
            </a>
          </div>
        </div>
      </footer>

      {/* Related Posts */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts
            .filter(post => post.id !== selectedPost.id)
            .slice(0, 2)
            .map(post => (
              <article
                key={post.id}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedPost(post);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}





const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React",
    excerpt: "Exploring the latest patterns and best practices in React development, from hooks to server components.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: `
      <p>React has revolutionized the way we build web applications, introducing a component-based architecture that promotes reusability and maintainability. In this comprehensive guide, we'll explore the latest patterns and best practices that every React developer should know in 2024.</p>
      
      <h2>The Evolution of React</h2>
      <p>Since its inception, React has continuously evolved to meet the changing needs of web development. From class components to functional components with hooks, and now with the introduction of server components, React continues to push the boundaries of what's possible in web development.</p>
      
      <h3>Modern Hooks Patterns</h3>
      <p>Hooks have transformed how we manage state and side effects in React applications. Here are some advanced patterns that can improve your code quality:</p>
      
      <ul>
        <li><strong>Custom Hooks:</strong> Extract complex logic into reusable functions</li>
        <li><strong>useReducer for Complex State:</strong> When useState isn't enough</li>
        <li><strong>useMemo and useCallback:</strong> Optimization techniques for performance</li>
      </ul>
      
      <h2>Server Components: The Future is Here</h2>
      <p>Server Components represent a paradigm shift in how we think about React applications. By rendering components on the server, we can significantly improve performance and user experience while maintaining the developer experience we love about React.</p>
      
      <blockquote>
        "The best thing about React Server Components is that they allow us to build faster applications without sacrificing the developer experience." - React Team
      </blockquote>
      
      <h3>Performance Optimization</h3>
      <p>Modern React applications require careful attention to performance. Here are key strategies to keep your applications fast:</p>
      
      <ol>
        <li>Code splitting with React.lazy()</li>
        <li>Optimizing bundle size with tree shaking</li>
        <li>Implementing proper caching strategies</li>
        <li>Using React DevTools Profiler for performance debugging</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>React continues to be the go-to choice for building modern web applications. By staying up-to-date with the latest patterns and best practices, we can build applications that are not only performant but also maintainable and scalable.</p>
      
      <p>What's your favorite React pattern? Let me know in the comments below!</p>
    `
  },
  {
    id: 2,
    title: "The Future of Web Design",
    excerpt: "How minimalism and user experience are shaping the next generation of digital interfaces.",
    date: "2024-03-10",
    readTime: "3 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    content: `
      <p>Web design is constantly evolving, and we're witnessing a significant shift towards minimalism and user-centered design. This transformation isn't just about aesthetics—it's about creating digital experiences that truly serve users' needs.</p>
      
      <h2>The Rise of Minimalism</h2>
      <p>Minimalist design isn't just a trend; it's a philosophy that prioritizes function over form. By removing unnecessary elements, we create interfaces that are easier to navigate and understand.</p>
      
      <h3>Key Principles of Modern Web Design</h3>
      <ul>
        <li><strong>White Space:</strong> Strategic use of negative space to improve readability</li>
        <li><strong>Typography:</strong> Clear, readable fonts that enhance the user experience</li>
        <li><strong>Color Psychology:</strong> Using colors intentionally to guide user behavior</li>
        <li><strong>Accessibility:</strong> Designing for all users, regardless of ability</li>
      </ul>
      
      <h2>User Experience as a Priority</h2>
      <p>Today's web design is increasingly focused on user experience. This means understanding user behavior, conducting user research, and iterating based on feedback.</p>
      
      <blockquote>
        "Good design is obvious. Great design is transparent." - Joe Sparano
      </blockquote>
      
      <h3>The Role of Technology</h3>
      <p>Modern web technologies enable us to create more engaging and interactive experiences:</p>
      
      <ol>
        <li>CSS Grid and Flexbox for responsive layouts</li>
        <li>CSS animations for smooth interactions</li>
        <li>Progressive Web Apps for native-like experiences</li>
        <li>WebGL for immersive 3D experiences</li>
      </ol>
      
      <h2>Looking Ahead</h2>
      <p>The future of web design will be shaped by emerging technologies like AI, voice interfaces, and augmented reality. However, the core principles of good design—usability, accessibility, and user satisfaction—will remain constant.</p>
    `
  },
  {
    id: 3,
    title: "Performance Optimization Techniques",
    excerpt: "Advanced strategies for making your web applications lightning fast and user-friendly.",
    date: "2024-03-05",
    readTime: "7 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    content: `
      <p>In today's fast-paced digital world, website performance is crucial for user satisfaction and business success. A slow website can lead to high bounce rates, poor user experience, and lost revenue. Let's explore advanced techniques to optimize your web applications.</p>
      
      <h2>Understanding Web Performance</h2>
      <p>Web performance encompasses various metrics that affect how users perceive your website's speed and responsiveness. Key metrics include:</p>
      
      <ul>
        <li><strong>First Contentful Paint (FCP):</strong> When the first content appears</li>
        <li><strong>Largest Contentful Paint (LCP):</strong> When the main content loads</li>
        <li><strong>First Input Delay (FID):</strong> Time to first user interaction</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> Visual stability of the page</li>
      </ul>
      
      <h2>Frontend Optimization Strategies</h2>
      
      <h3>1. Code Splitting and Lazy Loading</h3>
      <p>Break your application into smaller chunks that load only when needed:</p>
      
      <ul>
        <li>Route-based code splitting</li>
        <li>Component-based code splitting</li>
        <li>Dynamic imports for large libraries</li>
      </ul>
      
      <h3>2. Image Optimization</h3>
      <p>Images often account for the majority of a webpage's size. Optimize them with:</p>
      
      <ol>
        <li>Modern formats (WebP, AVIF)</li>
        <li>Responsive images with srcset</li>
        <li>Lazy loading for below-the-fold images</li>
        <li>Proper compression techniques</li>
      </ol>
      
      <h2>Backend Performance</h2>
      
      <h3>Database Optimization</h3>
      <p>A well-optimized database is crucial for application performance:</p>
      
      <blockquote>
        "Premature optimization is the root of all evil, but timely optimization is the key to success."
      </blockquote>
      
      <ul>
        <li>Proper indexing strategies</li>
        <li>Query optimization</li>
        <li>Connection pooling</li>
        <li>Caching frequently accessed data</li>
      </ul>
      
      <h3>Caching Strategies</h3>
      <p>Implement multi-layer caching for maximum performance:</p>
      
      <ol>
        <li><strong>Browser Caching:</strong> Cache static assets locally</li>
        <li><strong>CDN Caching:</strong> Distribute content globally</li>
        <li><strong>Server-side Caching:</strong> Cache dynamic content</li>
        <li><strong>Database Caching:</strong> Cache query results</li>
      </ol>
      
      <h2>Monitoring and Measurement</h2>
      <p>Use tools to continuously monitor your application's performance:</p>
      
      <ul>
        <li>Google PageSpeed Insights</li>
        <li>Lighthouse audits</li>
        <li>WebPageTest</li>
        <li>Real User Monitoring (RUM)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process that requires constant attention and measurement. By implementing these techniques and continuously monitoring your application, you can ensure that your users have the best possible experience.</p>
      
      <p>Remember, every millisecond counts in the digital world. Start optimizing today!</p>
    `
  }
];