import {
  FaClipboardList,
  FaDraftingCompass,
  FaIndustry,
  FaTruck,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

const STEPS = [
  {
    icon: <FaClipboardList />,
    title: "Requirement Analysis",
    desc: "We understand your application, heating needs and technical specifications in detail.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Design & Engineering",
    desc: "Our engineers design a custom heating solution tailored to your exact requirements.",
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing & Testing",
    desc: "Products are manufactured with premium materials and tested for quality and safety.",
  },
  {
    icon: <FaTruck />,
    title: "Packaging & Delivery",
    desc: "Finished products are carefully packed and delivered on time, anywhere in India.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-red-600" />
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">
              Our Process
            </span>
            <span className="h-px w-10 bg-red-600" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">
            How We Work
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
            From understanding your requirement to delivering the finished
            product, every step is handled with precision and care.
          </p>

          <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="relative grid gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Connecting line + chevrons (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-red-600" />
          {[25, 50, 75].map((pos) => (
            <div
              key={pos}
              className="hidden lg:flex absolute top-[52px] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-red-200 shadow items-center justify-center text-red-600 text-xs z-10"
              style={{ left: `${pos}%` }}
            >
              <FaChevronRight />
            </div>
          ))}

          {STEPS.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center">
              {/* Ribbon number tag */}
              <div
                className="relative z-20 -mb-5 w-12 h-8 bg-red-600 text-white text-sm font-bold flex items-center justify-center shadow-sm"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon circle with dashed ring */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center">
                <div className="absolute -inset-1.5 rounded-full border-2 border-dashed border-red-200" />
                <div className="text-red-600 text-2xl">{step.icon}</div>
              </div>

              {/* Card */}
              <div className="relative -mt-10 mb-5 w-full bg-white rounded-2xl shadow-md pt-14 pb-9 px-5 text-center">
                <h3 className="font-bold text-gray-900 uppercase tracking-tight">
                  {step.title}
                </h3>

                <div className="relative w-24 h-px bg-gray-200 mx-auto mt-3 mb-4">
                  <span className="absolute left-0 top-0 h-px w-10 bg-red-600" />
                </div>

                <p className="text-sm text-gray-500 leading-6">{step.desc}</p>

                {/* Bottom ticket stub */}
                <div className="absolute left-0 right-0 bottom-0 h-3 bg-red-600 rounded-b-2xl" />
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-red-600">
                  <FaArrowRight className="text-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
