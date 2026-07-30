import {
  FaHandshake,
  FaUsers,
  FaBuilding,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";

export default function AboutProductGrid() {
  const info = [
    {
      icon: <FaHandshake />,
      title: "Nature of Business",
      value: "Manufacturers, Exporters, Supplier, Retailer & Trader",
    },
    {
      icon: <FaUsers />,
      title: "Employees",
      value: "20 - 50 Professionals",
    },
    {
      icon: <FaBuilding />,
      title: "Established",
      value: "2012",
    },
    {
      icon: <FaUserTie />,
      title: "CEO",
      value: "Mr. Harsh Verma",
    },
  ];

  
  return (
    <section className="bg-gray-50 py-16" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-red-100 text-red-600 font-semibold px-4 py-1 rounded-full text-sm tracking-wide">
              ABOUT US
            </span>

            <h2 className="mt-4 text-2xl md:text-4xl font-extrabold text-gray-900 leading-snug tracking-tight">
              Advance <span className="text-red-600">Electricals</span>
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mt-4 mb-6"></div>

            <p className="text-gray-700 leading-7 text-base sm:text-lg">
              Advance Electricals was established in 2012 in Delhi, India, under
              the leadership of Mr. Harsh Verma. With over 15 years of industry
              experience, we have become a trusted Manufacturer, Exporter,
              Supplier, Retailer, and Trader of Electric Irons, Industrial
              Heaters, Electrical Hot Plates, and Thermocouples.
            </p>

            <p className="mt-5 text-gray-700 leading-7 text-base sm:text-lg">
              We focus on delivering innovative solutions, maintaining strict
              quality standards, and building long-term relationships with our
              customers across India.
            </p>

           
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {info.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-600 text-3xl mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

       
       
      </div>
    </section>
  );
}
