import { useState } from 'react';
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OtherLinks } from './Footer';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menus = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/portfolio' },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <Link to="/" className="text-xl font-bold text-gray-900">Asror</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {
              menus.map((menu) => (
                <NavLink key={menu.name} link={menu.path} onClick={() => setMobileMenuOpen(false)}>
                  {menu.name}
                </NavLink>
              ))
            }
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 absolute top-20 left-0 right-0 bg-white shadow-lg p-5">
            <div className="flex flex-col gap-4">
              {
                menus.map((menu) => (
                  <NavLink key={menu.name} link={menu.path} onClick={() => setMobileMenuOpen(false)}>
                    {menu.name}
                  </NavLink>
                ))
              }
              <hr className="w-full border-gray-200 my-4" />
              <div className='justify-center items-center flex flex-col gap-4 '>
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
