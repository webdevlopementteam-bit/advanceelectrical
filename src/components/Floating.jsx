import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Floating() {
  return (
    <>
      {/* Call Button */}
      <div className="fixed bottom-3 left-2 z-50 group">
        <Link
          href="tel:+919899921526"
          className="flex items-center overflow-hidden rounded-full bg-red-600 text-white shadow-xl transition-all duration-300 w-12 sm:w-14 hover:w-56 h-12 sm:h-14"
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center">
            <FaPhoneAlt className="text-lg sm:text-xl md:text-2xl" />
          </div>
          <span className="whitespace-nowrap px-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
            +91 98999 21526
          </span>
        </Link>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-3 right-2 z-50 group">
        <Link
          href="https://wa.me/919810262290"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center overflow-hidden rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 w-12 sm:w-14 hover:w-56 h-12 sm:h-14"
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center">
            <FaWhatsapp className="text-lg sm:text-xl md:text-2xl" />
          </div>
          <span className="whitespace-nowrap px-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
            +91 98102 62290
          </span>
        </Link>
      </div>
    </>
  );
}

export default Floating;
