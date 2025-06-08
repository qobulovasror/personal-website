import { Github, Linkedin, Mail, Send, } from 'lucide-react'
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} {t('footer.copyright')}. {t('footer.all_rights_reserved')}</span>
          </div>
          <OtherLinks />
        </div>
      </div>
    </footer>
  )
}

export function OtherLinks() {
  return (
    <div className="flex items-center gap-6">
      <a href="https://github.com/qobulovasror" target='_blank' className="text-gray-600 dark:text-white dark:hover:text-gray-500 hover:text-black transition-colors">
        <Github className="w-5 h-5" />
      </a>
      <a href="https://www.linkedin.com/in/asrorqobulov/" target='_blank' className="text-gray-600 dark:text-white dark:hover:text-gray-500 hover:text-black transition-colors">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="mailto:qobulovasror0@gmail.com" target='_blank' className="text-gray-600 dark:text-white dark:hover:text-gray-500 hover:text-black transition-colors">
        <Mail className="w-5 h-5" />
      </a>
      <a href="https://t.me/Qobulov_Asror" target='_blank' className="text-gray-600 dark:text-white dark:hover:text-gray-500 hover:text-black transition-colors">
        <Send className="w-5 h-5" />
      </a>
    </div>
  );
}
