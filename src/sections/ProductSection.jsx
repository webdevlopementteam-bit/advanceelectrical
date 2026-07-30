"use client";
import {
  FaShieldAlt,
  FaFire,
  FaRegClock,
  FaCog,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { PRODUCTS } from "../data/products.js";

export const FEATURES = [
  {
    icon: <FaShieldAlt />,
    title: "High Thermal Efficiency",
    desc: "Fast and uniform heat distribution",
  },
  {
    icon: <FaFire />,
    title: "Rugged Construction",
    desc: "Built to withstand extreme conditions",
  },
  {
    icon: <FaRegClock />,
    title: "Long Service Life",
    desc: "Reliable performance over time",
  },
  {
    icon: <FaCog />,
    title: "Customizable Solutions",
    desc: "Tailored to meet unique requirements",
  },
];

import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Image from "next/image";
import Link from "next/link.js";

export default function ProductSection() {
  return (
    <section
      id="product"
      className="relative bg-white py-2 md:py-8 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-gray-200 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-red-600" />
              <span className="text-red-600 font-semibold tracking-[0.25em] text-xs uppercase">
                Product Range
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-bold text-gray-900 leading-[1.15] tracking-tight max-w-xl">
              Engineered for Superior Heating Performance
            </h2>
          </div>
          <p className="text-gray-500 leading-7 text-sm max-w-sm md:text-right">
            A precision-built range of industrial heating equipment, tested for
            durability and consistent thermal performance under demanding
            conditions.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={{ prevEl: ".product-prev", nextEl: ".product-next" }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          className="pb-12"
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="overflow-hidden rounded-[32px] border border-red-100 bg-gradient-to-br from-white via-red-50 to-orange-50 lg:min-h-[600px]">
                <div className="grid lg:grid-cols-2">
                  {/* LEFT */}
                  <div className="relative flex flex-col overflow-hidden p-6 lg:p-8 min-h-[280px] lg:min-h-[600px]">
                    {/* Decorative Glow */}
                    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-red-300/40 to-orange-300/30 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-gradient-to-bl from-orange-200/40 to-red-200/30 blur-3xl" />

                    {/* Image (Top Half) */}
                    <div className="relative z-10 flex justify-center items-center flex-1">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="max-h-[300px] lg:max-h-[400px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:scale-110 hover:-rotate-2 hover:drop-shadow-[0_30px_40px_rgba(255,100,100,0.35)]"
                      />

                      {/* Floating Badge */}
                      <div className="absolute left-0 top-0 md:left-2 md:top-2 rounded-full bg-white/80 backdrop-blur-md border border-red-100 px-1 py-1 md:px-5 md:py-2 shadow-lg">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide md:tracking-widest text-red-600 whitespace-nowrap">
                          Premium Quality
                        </span>
                      </div>
                    </div>

                    {/* Features (Bottom Half) */}
                    {/* Features (Bottom Half) */}
                    <div className="relative z-10 flex-1 border-t border-gray-200 mt-4 sm:mt-6 pt-4 sm:pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                        {FEATURES.map((f) => (
                          <div
                            key={f.title}
                            className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-lg sm:rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
                          >
                            {/* Icon */}
                            <div className="flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 text-sm sm:text-lg shadow-sm">
                              {f.icon}
                            </div>

                            {/* Content */}
                            <div className="min-w-0">
                              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                                {f.title}
                              </h4>

                              <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs leading-4 sm:leading-snug text-gray-500 line-clamp-2 break-words">
                                {f.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col bg-white/90 backdrop-blur-md p-4 h-full">
                    <div>
                      {product.code && (
                        <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-red-100 to-orange-100 px-3 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide uppercase text-red-600 shadow-sm">
                          {product.code}
                        </span>
                      )}

                      {/* Product Name */}
                      <h2 className="mt-3 text-base sm:text-2xl md:text-3xl font-extrabold leading-tight text-gray-900 tracking-tight sm:line-clamp-2">
                        {product.name}
                      </h2>

                      <div className="mt-2 h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-red-600 to-orange-500 shadow-md"></div>

                      {/* Description */}
                      <p className="mt-3 text-sm sm:text-[14px] leading-6 sm:leading-7 text-gray-700 break-words sm:line-clamp-3">
                        {product.description}
                      </p>

                      {/* SPECIFICATIONS */}
                      {product.specs?.length > 0 && (
                        <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                          {product.specs.map((spec) => (
                            <div
                              key={spec.label}
                              className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl"
                            >
                              <div className="mb-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-100 to-orange-100 text-base sm:text-lg text-red-600 shadow-sm">
                                {spec.icon}
                              </div>
                              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 truncate">
                                {spec.label}
                              </p>
                              <p className="mt-1 text-sm sm:text-base font-bold leading-6 text-gray-900 break-words">
                                {spec.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Button aligned just after specs */}
                      <div className="mt-6">
                        <Link href="#contact">
                          <button className="inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-4 sm:px-6 py-2 sm:py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-red-300 text-sm sm:text-base">
                            Request Quote
                            <FaArrowRight />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <button className="product-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border items-center justify-center hover:bg-red-600 hover:text-white transition">
          <FaChevronLeft />
        </button>
        <button className="product-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border items-center justify-center hover:bg-red-600 hover:text-white transition">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
