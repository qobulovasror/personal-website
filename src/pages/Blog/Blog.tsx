import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Post } from '@/type/blog';

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  const { t } = useTranslation();
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t('blog.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('blog.description')}
        </p>
      </div>

      <div className="space-y-12">
        {posts.map(post => (
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
                {t('blog.button')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
