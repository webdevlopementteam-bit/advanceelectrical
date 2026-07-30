import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-red-50 border-t-4 border-red-500">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company */}
            <div>
              <h2 className="text-2xl font-bold text-red-600">
                Advance Electricals
              </h2>

              <p className="mt-4 text-gray-600 leading-7 text-sm">
                Leading manufacturer of Industrial Heating Elements, Temperature
                Sensors and Controllers with superior quality and timely
                delivery.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <FaPhoneAlt className="text-red-600 text-sm" />
                  </div>

                  <Link href="tel:+919810262290">
                    <span className="text-sm text-gray-700 font-medium hover:text-red-500">
                      +91 9810262290
                    </span>
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <FaEnvelope className="text-red-600 text-sm" />
                  </div>

                  <Link href="mailto:advanceheaters@gmail.com">
                    <span className="text-sm text-gray-700 font-medium hover:text-red-500">
                      advanceheaters@gmail.com
                    </span>
                  </Link>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <FaMapMarkerAlt className="text-red-600 text-sm" />
                  </div>

                  <span className="text-gray-700 text-sm">Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {[
                  ["Home", "/"],
                  ["About Us", "#about"],
                  ["Products", "#products"],
                  ["Enquiry", "#FAQ"],
                  ["Contact", "#contact"],
                  ["Privacy Policy", "/"],
                ].map(([title, href]) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-all hover:translate-x-1"
                    >
                      <FaChevronRight className="text-xs" />
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-5">
                Products
              </h3>

              <ul className="space-y-3">
                {[
                  "Tubular Heaters",
                  "Cartridge Heaters",
                  "Drum Heaters",
                  "Hot Runner Heaters",
                  "Sensors",
                  "Controllers",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#products"
                      className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-all hover:translate-x-1"
                    >
                      <FaChevronRight className="text-xs" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-red-100 p-6">
                <h3 className="text-xl font-semibold text-red-600">
                  Newsletter
                </h3>

                <p className="text-gray-600 text-sm mt-3">
                  Subscribe to get our latest products and updates.
                </p>

                <form className="mt-5 space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-red-200 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-300 outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-red-500 py-3 text-white font-semibold hover:bg-red-600 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-red-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2026 Advance Electricals. All Rights Reserved.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-medium">
                ISO Certified
              </span>

              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-medium">
                Trusted Manufacturer
              </span>

              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-medium">
                Made in India
              </span>
            </div>
          </div>

          <div className="pb-5 text-center text-sm text-gray-500">
            Developed & Managed By{" "}
            <span className="font-semibold text-red-600">
              CyberTricks Media Pvt. Ltd.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
