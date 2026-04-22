import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          Xaam
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="#">Courses</Link>
          <Link to="#">Past Question</Link>
          <Link to="#">Reviews</Link>
          <Link to="#">About Us</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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
        <div className="md:hidden px-6 pb-4 space-y-4 text-gray-700">
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