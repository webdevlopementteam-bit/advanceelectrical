import Link from "next/link";
import { Phone, Mail, BadgePercent } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  const socialLinks = [
    { id: "fb", icon: <FaFacebookF size={16} />, link: "https://facebook.com" },
    {
      id: "ig",
      icon: <FaInstagram size={16} />,
      link: "https://instagram.com",
    },
    {
      id: "ln",
      icon: <FaLinkedinIn size={16} />,
      link: "https://linkedin.com",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-red-700 text-white text-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between py-3 gap-4">
          {/* Contact */}
          <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 sm:gap-x-6 text-center sm:text-left">
            <Link
              href="tel:+919810262290"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-red-300 transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <Phone size={16} className="text-red-400 shrink-0" />
              <span className="text-xs sm:text-base font-medium whitespace-nowrap">
                +91 9810262290
              </span>
            </Link>

            <Link
              href="mailto:advanceheaters@gmail.com"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-red-300 transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <Mail size={16} className="text-red-400 shrink-0" />
              <span className="text-xs sm:text-base font-medium whitespace-nowrap">
                advanceheaters@gmail.com
              </span>
            </Link>

            {/* GST केवल md और उससे ऊपर पर दिखेगा */}
            <div className="hidden md:flex items-center gap-2">
              <BadgePercent size={18} className="text-red-400" />
              <span className="text-sm sm:text-base font-medium">
                GST: 09ABCDE1234F1Z5
              </span>
            </div>
          </div>

          {/* Social Icons केवल md और उससे ऊपर पर दिखेंगे */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-gray-300 text-xs">Follow Us</span>

            {socialLinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md 
                           hover:bg-red-600 active:scale-95 
                           flex items-center justify-center 
                           transition-all duration-300 hover:scale-110 shadow-md"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
