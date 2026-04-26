import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/icons/Navbar.svg"; // use your actual file name

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Xaam logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg font-bold text-blue-600">Xaam</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-700">
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-gray-700 bg-white border-t">
          <Link to="/" className="block">Home</Link>
          <Link to="#" className="block">Courses</Link>
          <Link to="#" className="block">Past Question</Link>
          <Link to="#" className="block">Reviews</Link>
          <Link to="#" className="block">About Us</Link>

          <div className="flex flex-col gap-2 pt-2">
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg">
              Login
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;