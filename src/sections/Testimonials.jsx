"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaCheck,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 18 18" width="1em" height="1em" {...props}>
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}

const PLATFORM_STYLES = {
  google: { icon: <GoogleIcon />, color: "" },
  facebook: { icon: <FaFacebook />, color: "text-[#1877F2]" },
  instagram: { icon: <FaInstagram />, color: "text-[#E1306C]" },
};

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi, India",
    platform: "google",
    rating: 5,
    text: "Advance Electricals delivered outstanding industrial heating solutions. Their product quality and durability are unmatched.",
    // image: "/images/customers/rahul-sharma.jpg",
  },
  {
    name: "Priya Verma",
    location: "Mumbai, India",
    platform: "facebook",
    rating: 5,
    text: "Since 2012, they have consistently provided reliable products with timely delivery. Truly our trusted partner.",
    // image: "/images/customers/priya-verma.jpg",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad, India",
    platform: "instagram",
    rating: 4,
    text: "The team is highly professional and innovative,They always ensuring top-quality electrical products .",
    // image: "/images/customers/amit-patel.jpg",
  },
  {
    name: "Neha Singh",
    location: "Bangalore, India",
    platform: "google",
    rating: 5,
    text: "With a modern infrastructure and a dedicated team of experts, Advance Electricals stands out in the market.",
    // image: "/images/customers/neha-singh.jpg",
  },
  {
    name: "Vikas Kumar",
    location: "Pune, India",
    platform: "facebook",
    rating: 5,
    text: "Every product undergoes strict quality checks before dispatch. Their commitment to excellence is evident.",
    // image: "/images/customers/vikas-kumar.jpg",
  },
  {
    name: "Suresh Iyer",
    location: "Chennai, India",
    platform: "google",
    rating: 4,
    text: "Good service on our bulk order. Tracking updates were accurate and the heaters were packaged securely.",
    // image: "/images/customers/suresh-iyer.jpg",
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-2 md:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-red-600" />
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">
              Testimonials
            </span>
            <span className="h-px w-10 bg-red-600" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
            Trusted by industries across India for delivering premium heating
            solutions with exceptional quality and reliable service.
          </p>

          <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Slider */}
        <div className="relative">
          <button
            ref={prevRef}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute -left-5 lg:-left-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
          >
            <FaChevronLeft />
          </button>

          <button
            ref={nextRef}
            aria-label="Next testimonial"
            className="hidden md:flex absolute -right-5 lg:-right-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
          >
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="pb-2"
          >
            {testimonials.map((item, index) => {
              const platform = PLATFORM_STYLES[item.platform];
              return (
                <SwiperSlide key={index} className="h-auto">
                  <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={44}
                            height={44}
                            className="w-11 h-11 rounded-full object-cover shrink-0"
                          />
                        ) : (
                          <div className="w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white font-bold flex items-center justify-center">
                            {item.name.charAt(0)}
                          </div>
                        )}

                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-gray-900">
                              {item.name}
                            </h4>
                            <MdVerified className="text-blue-500 text-base shrink-0" />
                          </div>
                          <p className="text-sm text-gray-500 mt-0.5">
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-9 h-9 shrink-0 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-base ${platform.color}`}
                      >
                        {platform.icon}
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < item.rating ? "text-yellow-400" : "text-gray-200"
                          }
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-700 leading-7 mt-4">
                      &ldquo;{item.text}&rdquo;
                    </p>

                    {/* Verified badge */}
                    <span className="inline-flex items-center gap-1.5 mt-6 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      <FaCheck className="text-[10px]" />
                      Verified customer
                    </span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
