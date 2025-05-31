import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ children, link, onClick }: { children: React.ReactNode; link: string; onClick?: () => void }) {
  const location = useLocation();
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${location.pathname === link
        ? 'bg-black text-white shadow-lg dark:bg-gray-200 dark:text-black'
        : 'text-gray-600 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
        }`}
    >
      {children}
    </Link>
  );

}
