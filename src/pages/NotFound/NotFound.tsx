import { Link } from 'react-router-dom'
import './style.css'

export default function NotFound() {
  return (
    <div className="not-found flex flex-col items-center justify-center h-100">
      <div className="loader2 m-5"></div>
      <p className="text-gray-500">Page not found</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3">Go back to home</Link>
    </div>
  )
}
