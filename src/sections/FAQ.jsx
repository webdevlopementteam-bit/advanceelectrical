'use client'
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "When was Advance Electricals established?",
      answer:
        "Advance Electricals was incepted in 2012 at Delhi, India under the guidance of Mr. Harsh Verma.",
    },
    {
      question: "What products do you manufacture and supply?",
      answer:
        "We are distinguished Manufacturers, Exporters, Suppliers, Retailers & Traders of Electric Irons, Industrial Heaters, Electrical Hot Plates, and Thermocouples.",
    },
    {
      question: "What infrastructure do you have?",
      answer:
        "We have a modern infrastructural unit spanning 800 square feet, equipped with Hi-Tech machines. Our machinery is regularly upgraded to ensure flawless production and superior quality.",
    },
    {
      question: "How big is your team?",
      answer:
        "We are assisted by a team of 12 highly qualified and experienced professionals who continuously research and innovate to deliver qualitative electrical products.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "We are a quality-conscious organization. Every product is tested on multiple parameters before dispatch, and quality is maintained across production, packaging, and delivery.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-4 md:py-8" id="FAQ">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-4 mb-10"></div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-red-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`px-6 pb-4 mb-3 text-gray-600 leading-7 transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
