import { Github, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Project } from '@/type/project';

export default function Portfolio({ projects }: { projects: Project[] }) {
  const { t } = useTranslation();
  console.log(projects);
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t('portfolio.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('portfolio.description')}
        </p>
      </div>

      <div className="grid gap-12">
        {projects ? projects.map((project: Project) => (
          <div key={project.id} className="group">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link_demo}
                    className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-gray-200 dark:text-black text-white rounded-lg font-medium dark:hover:bg-gray-800 transition-colors dark:hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('portfolio.live_demo')}
                  </a>
                  <a
                    href={project.link_code}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white rounded-lg font-medium dark:hover:bg-gray-600 dark:hover:text-white hover:bg-gray-50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {t('portfolio.code')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
          :
          <div className='flex justify-center items-center h-full'>
            <h1 className='text-2xl font-bold text-gray-600 dark:text-gray-400'>{t('portfolio.no_projects')}</h1>
          </div>
        }
      </div>
    </div>
  )
}


// const projects1 = [
//   {
//     id: 1,
//     title: "E-commerce Platform",
//     description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
//     link: "#",
//     github: "#"
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
//     tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
//     image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
//     link: "#",
//     github: "#"
//   },
//   {
//     id: 3,
//     title: "Weather Analytics Dashboard",
//     description: "A data visualization dashboard that displays weather patterns and climate data with interactive charts and forecasting.",
//     tech: ["React", "D3.js", "API Integration", "Chart.js"],
//     image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
//     link: "#",
//     github: "#"
//   }
// ];






