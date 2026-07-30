import {
  FaHardHat,
  FaBolt,
  FaChargingStation,
  FaThermometerHalf,
  FaCogs,
} from "react-icons/fa";

export const PRODUCTS = [
  {
    id: 1,
    code: "HT-ABH",
    name: "Aluminium Band Heaters",
    image: "/images/p1.png",
    description:
      "High-performance aluminium band heaters designed for efficient barrel heating with excellent thermal conductivity, uniform heat distribution, and long service life.",
    specs: [
      { icon: <FaHardHat />, label: "Material", value: "Cast Aluminium" },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 10 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 450°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Plastic Extruders, Injection Molding Machines",
      },
    ],
  },
  {
    id: 2,
    code: "HT-ACBH",
    name: "Aluminium Casted Band Heaters",
    image: "/images/p2.png",
    description:
      "Precision-cast aluminium heaters offering excellent heat transfer, energy efficiency, and durability for industrial processing equipment.",
    specs: [
      { icon: <FaHardHat />, label: "Material", value: "Cast Aluminium Alloy" },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 12 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 500°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Extrusion, Blow Molding, Dies",
      },
    ],
  },
  {
    id: 3,
    code: "HT-BJBH",
    name: "Blower Jackets for Band Heaters",
    image: "/images/p3.png",
    description:
      "Protective blower jackets improve heating efficiency by reducing heat loss and providing uniform air circulation around band heaters.",
    specs: [
      {
        icon: <FaHardHat />,
        label: "Material",
        value: "Aluminium / Stainless Steel",
      },
      { icon: <FaBolt />, label: "Voltage", value: "230V / 415V" },
      { icon: <FaChargingStation />, label: "Power", value: "Custom Design" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 400°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Plastic Processing Equipment",
      },
    ],
  },
  {
    id: 4,
    code: "HT-NIBH",
    name: "Nano Infrared Band Heaters",
    image: "/images/p4.png",
    description:
      "Advanced nano infrared heaters delivering rapid heating, significant energy savings, and superior temperature uniformity.",
    specs: [
      {
        icon: <FaHardHat />,
        label: "Material",
        value: "Nano Infrared Ceramic",
      },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 8 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 700°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Extruders, Injection Molding",
      },
    ],
  },
  {
    id: 5,
    code: "HT-BSMH",
    name: "Box Strapping Machine Heater",
    image: "/images/p5.png",
    description:
      "Reliable heaters specially designed for box strapping machines, ensuring consistent sealing temperatures and continuous production.",
    specs: [
      { icon: <FaHardHat />, label: "Material", value: "Stainless Steel" },
      { icon: <FaBolt />, label: "Voltage", value: "110V / 220V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "200W – 1000W" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 350°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Packaging & Strapping Machines",
      },
    ],
  },
  {
    id: 6,
    code: "HT-CBH",
    name: "CERAMIC BAND HEATERS",
    image: "/images/p6.png",
    description:
      "Heavy-duty ceramic insulated band heaters providing high operating temperatures, energy efficiency, and extended service life.",
    specs: [
      { icon: <FaHardHat />, label: "Material", value: "Ceramic Insulated" },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 15 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 750°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Extrusion, Blow Molding, Plastic Industry",
      },
    ],
  },
  {
    id: 7,
    code: "HT-CNH",
    name: "Ceramic Nozzle Heaters",
    image: "/images/p7.png",
    description:
      "Compact ceramic nozzle heaters engineered for precise nozzle heating with excellent thermal insulation and fast response.",
    specs: [
      { icon: <FaHardHat />, label: "Material", value: "Ceramic" },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 240V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "100W – 1500W" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 700°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Injection Molding Nozzles",
      },
    ],
  },
  {
    id: 8,
    code: "HT-HRM",
    name: "HOT RUNNER MOLD COIL HEATERS",
    image: "/images/p8.png",
    description:
      "High-density coil heaters designed for hot runner systems, providing precise temperature control and excellent heat transfer.",
    specs: [
      {
        icon: <FaHardHat />,
        label: "Material",
        value: "Nickel-Chromium Alloy",
      },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 240V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "100W – 3000W" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 800°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Hot Runner Systems, Nozzles",
      },
    ],
  },
  {
    id: 9,
    code: "HT-MWQ",
    name: "MEDIUM WAVE SILICA OR QUARTZ TUBE INFRARED HEATERS",
    image: "/images/p9.png",
    description:
      "Medium-wave infrared heaters with silica or quartz tubes delivering fast, efficient, and non-contact heating for industrial processes.",
    specs: [
      { icon: <FaHardHat />, label: "Material", value: "Quartz / Silica Tube" },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "250W – 6 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 900°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Drying, Coating, Printing",
      },
    ],
  },
  {
    id: 10,
    code: "HT-CIH",
    name: "CAST IN HEATERS",
    image: "/images/p4.png",
    description:
      "Robust cast-in heaters manufactured for demanding industrial applications with excellent thermal efficiency and mechanical strength.",
    specs: [
      {
        icon: <FaHardHat />,
        label: "Material",
        value: "Cast Aluminium / Bronze",
      },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 50 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 750°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Extrusion, Dies, Packaging",
      },
    ],
  },
  {
    id: 11,
    code: "HT-MFH",
    name: "MANIFOLD HEATERS",
    image: "/images/p5.png",
    description:
      "Precision manifold heaters ensuring uniform heat distribution for hot runner systems and high-quality molding operations.",
    specs: [
      { icon: <FaHardHat />, label: "Material", value: "Copper / Brass" },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 440V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 20 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 450°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Injection Molding, Hot Runner Systems",
      },
    ],
  },
  {
    id: 12,
    code: "HT-TUB",
    name: "TUBULAR HEATERS",
    image: "/images/p6.png",
    description:
      "Versatile tubular heaters suitable for air, liquid, and surface heating with outstanding corrosion resistance and durability.",
    specs: [
      {
        icon: <FaHardHat />,
        label: "Material",
        value: "Stainless Steel / Incoloy",
      },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 15 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 650°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Ovens, Tanks, Immersion Heating",
      },
    ],
  },
  {
    id: 13,
    code: "HT-LHG",
    name: "Leister Hot Air Gun Heater",
    image: "/images/p7.png",
    description:
      "Industrial hot air gun heaters delivering accurate temperature control and powerful airflow for welding and plastic processing.",
    specs: [
      {
        icon: <FaHardHat />,
        label: "Material",
        value: "Ceramic / Stainless Steel",
      },
      { icon: <FaBolt />, label: "Voltage", value: "120V – 240V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 3.6 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 650°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Plastic Welding, Shrink Fitting",
      },
    ],
  },
  {
    id: 14,
    code: "HT-SWIH",
    name: "Short Wave Infrared Heater",
    image: "/images/p8.png",
    description:
      "Fast-response short wave infrared heaters ideal for instant heating, drying, curing, and thermoforming applications.",
    specs: [
      { icon: <FaHardHat />, label: "Material", value: "Quartz Glass" },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "500W – 6 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 1200°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Drying, Paint Curing, Thermoforming",
      },
    ],
  },
  {
    id: 15,
    code: "HT-CIR",
    name: "Ceramic IR Heater",
    image: "/images/p9.png",
    description:
      "High-efficiency ceramic infrared heaters providing uniform radiant heat with long operating life and energy savings.",
    specs: [
      { icon: <FaHardHat />, label: "Material", value: "Ceramic" },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "250W – 2 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 750°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Packaging, Drying, Thermoforming",
      },
    ],
  },
  {
    id: 16,
    code: "HT-MBH",
    name: "MICA BAND HEATERS",
    image: "/images/p10.png",
    description:
      "Economical mica insulated band heaters offering fast heating, excellent efficiency, and reliable performance for plastic processing equipment.",
    specs: [
      {
        icon: <FaHardHat />,
        label: "Material",
        value: "Mica Insulated Stainless Steel",
      },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 8 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 450°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Extruders, Injection Molding Machines",
      },
    ],
  },
  {
    id: 17,
    code: "HT-MBH2",
    name: "Mica Band Heaters",
    image: "/images/p11.png",
    description:
      "Premium mica band heaters designed for uniform heating, long operational life, and efficient heat transfer in industrial machinery.",
    specs: [
      {
        icon: <FaHardHat />,
        label: "Material",
        value: "Mica & Stainless Steel",
      },
      { icon: <FaBolt />, label: "Voltage", value: "110V – 480V" },
      { icon: <FaChargingStation />, label: "Wattage", value: "Up to 8 kW" },
      {
        icon: <FaThermometerHalf />,
        label: "Temperature",
        value: "Up to 450°C",
      },
      {
        icon: <FaCogs />,
        label: "Applications",
        value: "Plastic Processing, Packaging Equipment",
      },
    ],
  },
];
