import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-1 md:space-y-0">
          {/* Logo and Company Name */}
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start"
          >
            <img
              src={logo}
              alt="Company Logo"
              className="h-15 w-auto max-w-none"
            />
            <div className="flex-col font-ofelia font-bold text-center center">
              <div className="leading-none">REAL ESTATE</div>
              <div className="leading-none">INMOBILIARIA</div>
            </div>
            <div className="font-ofelia font-bold text-3xl ml-1 text-red-600">
              LUZ
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 md:space-x-6 md:flex-nowrap">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Start
            </Link>
            <Link to="/buy" className="text-gray-700 hover:text-gray-900">
              Buy
            </Link>
            <Link to="/sell" className="text-gray-700 hover:text-gray-900">
              Sell
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/location" className="text-gray-700 hover:text-gray-900">
              Location
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
