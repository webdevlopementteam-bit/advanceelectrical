'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Advance Electricals"
            width={160}
            height={50}
            priority
            className="object-contain"
            style={{ width: "auto", height: "auto", maxHeight: "48px" }}
          />
        </Link>

        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-sm font-semibold text-gray-700">
            <li>
              <Link href="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-red-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#product" className="hover:text-red-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-red-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 bg-red-600 hover:bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get a Quote
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-500 focus:outline-none transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t shadow-md">
          <div className="flex flex-col px-6 py-4 text-gray-700 font-medium">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-3 border-b hover:text-red-500"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="py-3 border-b hover:text-red-500"
            >
              About Us
            </Link>
            <Link
              href="#product"
              onClick={() => setIsOpen(false)}
              className="py-3 border-b hover:text-red-500"
            >
              Products
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-3 border-b hover:text-red-500"
            >
              Contact Us
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-black text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
