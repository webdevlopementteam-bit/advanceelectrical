import Image from "next/image";
import { FaCheckCircle, FaUsers, FaShieldAlt, FaStar } from "react-icons/fa";

const FEATURES = [
  {
    icon: <FaCheckCircle />,
    title: "High Quality Products",
    desc: "We deliver only the best industrial heating solutions with guaranteed performance.",
    color: "bg-red-600",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    desc: "Our experienced engineers and support staff ensure smooth service and guidance.",
    color: "bg-gray-900",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable & Safe",
    desc: "Safety and reliability are our top priorities in every product we manufacture.",
    color: "bg-red-700",
  },
  {
    icon: <FaStar />,
    title: "Customer Satisfaction",
    desc: "We value our customers and strive to exceed expectations every time.",
    color: "bg-black",
  },
];

function FeatureItem({ item }) {
  return (
    <div className="text-center">
      <div
        className={`w-20 h-20 mx-auto rounded-full ${item.color} text-white flex items-center justify-center text-3xl shadow-md`}
      >
        {item.icon}
      </div>
      <h3 className="mt-5 font-bold text-lg text-gray-900">{item.title}</h3>
      <p className="mt-2 text-sm text-gray-500 leading-6 max-w-[260px] mx-auto">
        {item.desc}
      </p>
    </div>
  );
}

function Features() {
  const [left1, left2, right1, right2] = FEATURES;

  return (
    <section className="bg-gray-50 py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-red-600" />
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">
              Why Choose Us
            </span>
            <span className="h-px w-10 bg-red-600" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">
            What Sets Us Apart
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
            A decade of engineering expertise, quality materials and
            dependable service, built into every heater we make.
          </p>

          <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-3 gap-10 items-center">
          <div className="space-y-20">
            <FeatureItem item={left1} />
            <FeatureItem item={left2} />
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-full bg-gray-200/70 shadow-inner flex items-center justify-center">
              <div className="w-60 h-60 rounded-full bg-white shadow-xl flex items-center justify-center p-8">
                <Image
                  src="/logo.png"
                  alt="Advance Electricals"
                  width={200}
                  height={200}
                  className="object-contain"
                  style={{ width: "auto", height: "auto", maxWidth: "170px", maxHeight: "170px" }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <FeatureItem item={right1} />
            <FeatureItem item={right2} />
          </div>
        </div>

        {/* Mobile / tablet fallback */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-12">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gray-200/70 shadow-inner flex items-center justify-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white shadow-xl flex items-center justify-center p-6">
                <Image
                  src="/logo.png"
                  alt="Advance Electricals"
                  width={140}
                  height={140}
                  className="object-contain"
                  style={{ width: "auto", height: "auto", maxWidth: "110px", maxHeight: "110px" }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
            {FEATURES.map((f) => (
              <FeatureItem key={f.title} item={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
