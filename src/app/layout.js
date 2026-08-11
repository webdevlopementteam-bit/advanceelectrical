import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Floating from "@/components/Floating";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Advance Electricals | Industrial Heaters Manufacturer & Exporter",
  description:
    "Advance Electricals is a trusted manufacturer, exporter, supplier and retailer of industrial heaters, electric irons, electrical hot plates and thermocouples, based in Delhi, India since 2012.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <Floating/>
      </body>
    </html>
  );
}
