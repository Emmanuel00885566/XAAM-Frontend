import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        Xaam
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="#" className="hover:text-blue-600 transition">
          Courses
        </Link>
        <Link to="#" className="hover:text-blue-600 transition">
          Past Question
        </Link>
        <Link to="#" className="hover:text-blue-600 transition">
          Reviews
        </Link>
        <Link to="#" className="hover:text-blue-600 transition">
          About Us
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition">
          Login
        </button>

        <button className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;