import { ArrowRight, Award, Clock, Coffee, Download, Users } from 'lucide-react'
import profileImage from '../../assets/image/profile.jpg';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <div className="inline-block p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-8">
          <div className="w-35 h-35 bg-white rounded-2xl flex items-center justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-35 h-35 rounded-xl object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">About Me</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed dark:text-gray-400">
          I'm a passionate developer who loves creating digital experiences that make a difference.
          With over 5 years of experience in web development, I specialize in building modern, scalable applications.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
          <div className="text-gray-600">Projects Completed</div>
        </div>
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
          <div className="text-gray-600">Happy Clients</div>
        </div>
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Coffee className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
          <div className="text-gray-600">Cups of Coffee</div>
        </div>
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
      </section>

      {/* My Journey */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center dark:text-white">My Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold">2020</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">Started My Developer Journey</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  Began learning web development with HTML, CSS, and JavaScript. Built my first websites and
                  discovered my passion for creating digital experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold dark:text-white">2021</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">Specialized in React & Node.js</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  Dove deep into modern web technologies, mastering React, Node.js, and various databases.
                  Started working on more complex full-stack applications.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold dark:text-white">2023</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">Freelance & Client Work</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  Started taking on freelance projects and working with clients to build custom web applications.
                  Focus on delivering high-quality, scalable solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold dark:text-white">2024</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">Building & Sharing</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  Currently focused on building innovative projects and sharing knowledge through blog posts
                  and open-source contributions to the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center dark:text-white">Skills & Technologies</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 dark:text-white">Frontend</h3>
            <div className="space-y-3">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Material UI'].map(skill => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 dark:text-white">Backend</h3>
            <div className="space-y-3">
              {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'FastAPI', 'Flask'].map(skill => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 dark:text-white">Mobile</h3>
            <div className="space-y-3">
              {['React Native', 'Expo', 'Firebase', 'REST APIs'].map(skill => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 dark:text-white">Tools & Others</h3>
            <div className="space-y-3">
              {['Git & Github', 'Gitlab', 'Docker', 'Vercel', 'Firebase'].map(skill => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">Let's Work Together</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-200">
          I'm always open to discussing new opportunities and interesting projects.
          Let's create something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 dark:bg-white dark:text-black"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/assets/Asror_Qobulov_cv.pdf"
            target="_blank"
            className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-gray-300 hover:bg-white transition-colors flex items-center justify-center gap-2 dark:border-white dark:text-white dark:hover:bg-gray-800"
          >
            <Download className="w-4 h-4" />
            Download CV
          </Link>
        </div>
      </section>
    </div>
  )
}
