import Link from "next/link";
import { User, MapPin, Phone, Mail, Globe, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen" id="contact">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-red-100 max-w-2xl mx-auto text-base md:text-lg">
            We’d love to hear from you. Send us your enquiry and our team will
            get back to you promptly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-black/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold mb-8">
              Advance <span className="text-red-500">Electricals</span>
            </h2>

            <div className="space-y-6 text-sm sm:text-base break-words">
              <div className="flex gap-4">
                <User className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Contact Person</h4>
                  <p className="text-gray-300">Mr. Harsh Verma</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-300 leading-tight">
                    PLOT NO-6, KH NO 37/4, <br />
                    DADA BHAIYA MARG RANHOLLA,
                    <br />
                    NANGLOI, NEW DELHI-110041
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <Link
                    href="tel:+919899921526"
                    className="text-red-400 hover:text-white transition"
                  >
                    +91 9899921526
                  </Link>
                  <br />
                  <Link
                    href="tel:+919810262290"
                    className="text-red-400 hover:text-white transition"
                  >
                    +91 9810262290
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <Link
                    href="mailto:advanceheaters@gmail.com"
                    className="text-gray-300 hover:text-red-400 transition break-words"
                  >
                    advanceheaters@gmail.com
                  </Link>
                  <br />
                  <Link
                    href="mailto:info@advanceheaters.com"
                    className="text-gray-300 hover:text-red-400 transition break-words"
                  >
                    info@advanceheaters.com
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe className="text-red-500 mt-1" />
                <div className="space-y-2">
                  <h4 className="font-semibold">Website</h4>
                  <Link
                    href="https://www.advanceelectricals.in "
                    target="_blank"
                    className="block text-red-400 hover:text-white transition break-words"
                  >
                    www.advanceelectricals.in
                  </Link>
                  <Link
                    href="https://www.advanceheaters.com"
                    target="_blank"
                    className="block text-red-400 hover:text-white transition break-words"
                  >
                    www.advanceheaters.com
                  </Link>
                  <Link
                    href="https://www.advanceheater.com"
                    target="_blank"
                    className="block text-red-400 hover:text-white transition break-words"
                  >
                    www.advanceheater.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form (Static) */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Send an Enquiry
            </h2>
            <div className="w-20 h-1 bg-red-600 rounded mt-2 mb-8"></div>

            <form className="space-y-5 text-sm sm:text-base">
              <input
                type="text"
                placeholder="Product / Service Looking For *"
                className="w-full rounded-lg border border-gray-300 p-3 
                           text-black placeholder-gray-500 
                           focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
              />

              <input
                type="text"
                placeholder="Your Name *"
                className="w-full rounded-lg border border-gray-300 p-3 
                           text-black placeholder-gray-500 
                           focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address *"
                className="w-full rounded-lg border border-gray-300 p-3 
                           text-black placeholder-gray-500 
                           focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none break-words"
              />

              <div className="flex w-full">
                <span
                  className="bg-gray-100 border border-r-0 border-gray-300 
                   rounded-l-lg px-3 sm:px-4 flex items-center 
                   text-black text-sm sm:text-base whitespace-nowrap"
                >
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  className="flex-1 min-w-0 rounded-r-lg border border-gray-300 p-3 
               text-black placeholder-gray-500 
               focus:border-red-600 focus:ring-2 focus:ring-red-200 
               outline-none text-sm sm:text-base"
                />
              </div>

              <textarea
                rows={4}
                placeholder="Enquiry Details *"
                className="w-full rounded-lg border border-gray-300 p-3 
                           text-black placeholder-gray-500 
                           focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none resize-none break-words"
              />

              <button
                type="button"
                className="flex items-center justify-center gap-2 
                           bg-gradient-to-r from-red-600 to-orange-500 
                           hover:from-pink-600 hover:to-purple-600 
                           text-white px-6 py-3 rounded-lg 
                           transition-all shadow-lg 
                           hover:shadow-[0_0_15px_rgba(255,0,0,0.6)] 
                           active:scale-95 w-full sm:w-auto"
              >
                <Send size={18} />
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
