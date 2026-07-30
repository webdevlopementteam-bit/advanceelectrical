import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-red-50 via-red-100 to-red-50 py-1">
      {/* Mobile */}
      <div className="block md:hidden">
        <Image
          src="/images/banner/banner1.webp"
          alt="Mobile Banner"
          width={800}
          height={1000}
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Image
          src="/images/banner/banner2.webp"
          alt="Desktop Banner"
          width={1920}
          height={720}
          priority
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
