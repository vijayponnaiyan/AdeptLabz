import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import logo from "../../assets/images/logo.png";
import SubNavbar from "../../Layout/component/SubNavbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white text-[#444444] font-normal w-full h-16  top-0 left-0 z-50 shadow-sm px-5  border-b-gray-700 ">
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="h-full flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex space-x-10 xl:space-x-20">
            <li>
              <Link
                to="/home"
                className="hover:text-gray-400 text-[#E10000] transition"
              >
                For Me
              </Link>
            </li>
            <li>
              <Link to="/card" className="hover:text-gray-400 transition">
                Jeans
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover:text-gray-400 transition">
                Shirts
              </Link>
            </li>
            <li>
              <Link to="/card" className="hover:text-gray-400 transition">
                T-Shirts
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover:text-gray-400 transition">
                Trousers
              </Link>
            </li>
            <li>
              <Link to="/card" className="hover:text-gray-400 transition">
                Joggers
              </Link>
            </li>
            <li>
              <Link to="/card" className="hover:text-gray-400 transition">
                Shorts
              </Link>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile View Icons */}
            <div className="flex lg:hidden space-x-4">
              <Link to="/home" className="hover:text-gray-400 transition">
                <Search size={20} />
              </Link>
              <Link to="/card" className="hover:text-gray-400 transition">
                <ShoppingCart size={20} />
              </Link>
            </div>

            {/* Desktop View Icons */}
            <ul className="hidden lg:flex space-x-6">
              <li>
                <Link to="/home" className="hover:text-gray-400 transition">
                  <Search size={18} />
                </Link>
              </li>
              <li>
                <Link to="/card" className="hover:text-gray-400 transition">
                  <ShoppingCart size={18} />
                </Link>
              </li>
              <li>
                <Link to="/card" className="hover:text-gray-400 transition">
                  <User size={18} />
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="lg:hidden fixed right-0 top-16 h-[calc(100vh-4rem)] w-1/2 bg-white py-4 space-y-3 text-[#777777] z-50 flex flex-col items-center  px-4 shadow-lg overflow-y-auto">
            <li>
              <Link
                to="/home"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                For Me
              </Link>
            </li>
            <li>
              <Link
                to="/card"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                For Me
              </Link>
            </li>
            <li>
              <Link
                to="/card"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Jeans
              </Link>
            </li>

            <li>
              <Link
                to="/home"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                For Me
              </Link>
            </li>
            <li>
              <Link
                to="/card"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Jeans
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Shirts
              </Link>
            </li>
            <li>
              <Link
                to="/card"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                T-Shirts
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Trousers
              </Link>
            </li>
            <li>
              <Link
                to="/card"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Joggers
              </Link>
            </li>
            <li>
              <Link
                to="/card"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Shorts
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <div className="block lg:hidden ">
        <SubNavbar />
      </div>
    </div>
  );
}
