"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function CTASection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CTA Banner */}
      <section className="bg-red-600 py-4 sm:py-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white px-4">
          <h2 className="text-1xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            We will send you the Best Price Possible
          </h2>
          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold flex items-center gap-2 mx-auto hover:bg-gray-900 transition text-sm sm:text-base"
          >
            Get Instant Quote <span>→</span>
          </button>
        </div>
      </section>

      {/* Modal Form */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[9999] px-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-5 sm:p-6 relative z-[10000]">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Send Email
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Product / Service Looking for
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300 placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Enter product/service"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Describe your requirement
                </label>
                <textarea
                  rows="3"
                  className="w-full border rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300 placeholder-gray-400 text-sm sm:text-base"
                  placeholder="We will get back soon..."
                ></textarea>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Enter Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300 placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Enter Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300 placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Mobile No
                </label>
                <div className="flex">
                  <span className="px-3 py-2 border rounded-l-md bg-gray-100 text-sm sm:text-base">
                    +91
                  </span>
                  <input
                    type="tel"
                    className="w-full border rounded-r-md px-3 py-2 focus:ring focus:ring-blue-300 placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Your mobile number"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 sm:py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition text-sm sm:text-base"
              >
                <FaPaperPlane /> Send Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CTASection;
