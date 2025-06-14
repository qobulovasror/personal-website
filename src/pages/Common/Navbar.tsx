import { useState } from 'react';
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OtherLinks } from './Footer';
import { ModeToggle } from '@/components/mode-toggle';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menus = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.blog'), path: '/blog' },
    { name: t('navbar.projects'), path: '/portfolio' },
    { name: t('navbar.about'), path: '/about' },
    { name: t('navbar.contact'), path: '/contact' },
  ];

  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    window.location.search = `?lng=${lng}`;
  };

  return (
    <nav className="sticky top-0 z-50 dark:bg-gray-900 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <Link to="/" className="text-xl font-bold dark:text-white text-gray-900">Asror Qobulov</Link>
          </div>

          {/* Desktop Navigation */}
          <div className='flex items-center gap-2'>
            <div className="hidden md:flex items-center gap-2">
              {
                menus.map((menu) => (
                  <NavLink key={menu.name} link={menu.path} onClick={() => setMobileMenuOpen(false)}>
                    {menu.name}
                  </NavLink>
                ))
              }
            </div>
            <ModeToggle />

            <Select value={i18n.language.split('').includes('-')? i18n.language == "en-GB" ? "en" : "uz": i18n.language} onValueChange={(value) => changeLanguage(value)}>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent className='bg-white dark:bg-gray-900 text-black dark:text-white w-20'>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="uz">UZ</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-black"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 absolute top-20 left-0 right-0 bg-white shadow-lg p-5 dark:bg-gray-900">
            <div className="flex flex-col gap-4 dark:text-white">
              {
                menus.map((menu) => (
                  <NavLink key={menu.name} link={menu.path} onClick={() => setMobileMenuOpen(false)}>
                    {menu.name}
                  </NavLink>
                ))
              }
              <hr className="w-full border-gray-200 my-4" />
              <div className='justify-center items-center flex flex-col gap-4 dark:text-white'>
                <span className="text-gray-600 text-sm">Connect with me:</span>
                <OtherLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
