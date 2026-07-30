"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

function ProductRange({ title, products }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-red-600" />
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">
              Featured Range
            </span>
            <span className="h-px w-10 bg-red-600" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">
            {title}
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
            Explore our most trusted industrial heating products, engineered for
            performance and built to last.
          </p>

          <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-6" />
        </div>

        {products?.length ? (
          <div className="relative">
            {/* Previous Button */}
            <button
              ref={prevRef}
              aria-label="Previous product"
              className="hidden md:flex absolute -left-5 lg:-left-14 top-[38%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
            >
              <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
              ref={nextRef}
              aria-label="Next product"
              className="hidden md:flex absolute -right-5 lg:-right-14 top-[38%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
            >
              <FaChevronRight />
            </button>

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="pb-12"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* Product Image */}
                    <div className="relative h-40 sm:h-52 md:h-64 bg-gray-50 flex items-center justify-center p-6">
                      <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gray-300" />
                      <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gray-300" />

                      <Image
                        src={product.src}
                        alt={product.name}
                        width={240}
                        height={20}
                        className="relative z-10 object-contain max-h-full transition-transform duration-500 group-hover:scale-105"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>

                    {/* Product Content */}
                    <div className="p-4 sm:p-5 border-t border-gray-100 text-center">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 min-h-[40px] sm:min-h-[48px]">
                        {product.name}
                      </h3>
                      <Link href={"#contact"}>
                        <button className="mt-3 sm:mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg  text-red-500 border border-red-500 transition-colors duration-300">
                          enquiry now
                          <FaArrowRight className="text-xs" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="custom-pagination flex justify-center mt-6 space-x-2"></div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-lg">
            No products available right now.
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductRange;
