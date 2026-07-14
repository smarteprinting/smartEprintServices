import {
  Monitor,
  Printer,
  Smartphone,
  Wifi,
  Tv,
  WashingMachine,
  Refrigerator,
  Wrench,
  Building2,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | SmartEprint Services",
  description:
    "Explore our full range of on-site technology and appliance services. From computers and printers to smart devices and appliances — consultation-based assistance for homes and businesses.",
};

const services = [
  {
    id: "computer-assistance",
    title: "Computer Assistance",
    tagline:
      "Whether your computer is used for work, learning, or everyday tasks, JS Electronics provides consultation-based on-site assistance for desktop and laptop systems. Every request begins with a discussion of your requirements before arranging an appointment based on location and technician availability.",
    note: "Service options are determined after an on-site assessment. Recommendations, maintenance activities, troubleshooting, installation assistance, or repair possibilities depend on the equipment, operating environment, and service requirements.",
    icon: Monitor,
    gradient: "linear-gradient(135deg, #024AD8, #0B63F6)",
    items: [
      "Desktop and laptop assistance",
      "Software and system configuration",
      "Peripheral and accessory setup",
      "Performance evaluation",
      "Preventive maintenance",
    ],
  },
  {
    id: "printer-assistance",
    title: "Printer Assistance",
    tagline:
      "Printers are essential in both residential and business environments. Consultation-based on-site assistance is available for printing equipment, connectivity concerns, configuration, and general operational requirements.",
    note: "Every appointment includes an assessment of the equipment before discussing available service options. Recommendations vary depending on the printer, working environment, and customer requirements.",
    icon: Printer,
    gradient: "linear-gradient(135deg, #0137a7, #024AD8)",
    items: [
      "Printer installation assistance",
      "Wireless and wired connectivity",
      "Configuration support",
      "Printing performance evaluation",
      "Business printer setup",
    ],
  },
  {
    id: "smart-home-assistance",
    title: "Smart Home Assistance",
    tagline:
      "Connected devices can improve convenience when properly configured. JS Electronics provides on-site assistance for compatible smart home products following an initial consultation.",
    note: "Available services depend on device compatibility, installation environment, and customer requirements identified during the consultation.",
    icon: Smartphone,
    gradient: "linear-gradient(135deg, #0B63F6, #3B82F6)",
    items: [
      "Smart device installation",
      "Device configuration",
      "Connectivity assistance",
      "Smart home integration",
      "Basic operational guidance",
    ],
  },
  {
    id: "network-assistance",
    title: "Network Assistance",
    tagline:
      "Reliable connectivity supports everyday communication, entertainment, and business operations. Consultation-based on-site assistance is available for home and office network environments.",
    note: "Recommendations are provided after evaluating the network environment and connected equipment during the scheduled visit.",
    icon: Wifi,
    gradient: "linear-gradient(135deg, #024AD8, #0B63F6)",
    items: [
      "Wi-Fi setup",
      "Router configuration",
      "Network connectivity assistance",
      "Device communication review",
      "Basic network optimization",
    ],
  },
  {
    id: "tv-mounting",
    title: "TV Mounting",
    tagline:
      "Television installation often requires careful planning based on room layout, viewing position, and mounting location. On-site assistance helps customers prepare suitable installation arrangements.",
    note: "Available installation options vary according to the property, equipment, mounting surface, and customer preferences.",
    icon: Tv,
    gradient: "linear-gradient(135deg, #0137a7, #024AD8)",
    items: [
      "TV wall mounting",
      "Equipment positioning",
      "Cable organization",
      "Mount compatibility review",
      "Installation assistance",
    ],
  },
  {
    id: "washing-machine-assistance",
    title: "Washing Machine Assistance",
    tagline:
      "Proper installation and routine attention contribute to dependable appliance operation. Consultation-based on-site assistance is available for a variety of washing machine requirements.",
    note: "Service recommendations depend on the appliance condition, installation environment, and findings during the on-site assessment.",
    icon: WashingMachine,
    gradient: "linear-gradient(135deg, #0B63F6, #3B82F6)",
    items: [
      "Installation assistance",
      "Operational assessment",
      "Maintenance guidance",
      "Troubleshooting support",
      "Performance evaluation",
    ],
  },
  {
    id: "refrigerator-assistance",
    title: "Refrigerator Assistance",
    tagline:
      "Refrigerators support everyday household and business activities. On-site assistance helps evaluate appliance concerns before discussing available service options.",
    note: "Recommendations and available services vary according to the appliance condition, operating environment, and consultation details.",
    icon: Refrigerator,
    gradient: "linear-gradient(135deg, #024AD8, #0B63F6)",
    items: [
      "Appliance assessment",
      "Installation support",
      "Maintenance activities",
      "Performance review",
      "Troubleshooting assistance",
    ],
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance",
    tagline:
      "Routine inspections help identify potential concerns before they begin affecting everyday operation. Preventive maintenance supports both residential and commercial equipment.",
    note: "Maintenance activities are performed according to the equipment type, operating environment, and customer requirements discussed during the consultation.",
    icon: Wrench,
    gradient: "linear-gradient(135deg, #0137a7, #024AD8)",
    items: [
      "Equipment inspection",
      "Operational review",
      "Cleaning recommendations",
      "Configuration checks",
      "Maintenance planning",
    ],
  },
  {
    id: "business-printing-support",
    title: "Business Printing Support",
    tagline:
      "Business printing environments often involve multiple devices working together. On-site assistance helps evaluate printing workflows, device connectivity, and operational requirements.",
    note: "Service options are discussed following an assessment of the business environment, printing equipment, and operational requirements. Appointment availability depends on location, technician scheduling, and the scope of the service request.",
    icon: Building2,
    gradient: "linear-gradient(135deg, #0B63F6, #3B82F6)",
    items: [
      "Office printer environments",
      "Network printing assistance",
      "Device configuration",
      "Workflow evaluation",
      "Equipment connectivity",
    ],
  },
];

/* Quick-nav icons for the top grid */
const quickServices = services.map((s) => ({
  title: s.title,
  icon: s.icon,
  id: s.id,
  gradient: s.gradient,
}));

export default function ServicesPage() {
  return (
    <section className="bg-white">

      {/* ========== FULL-WIDTH HERO WITH BACKGROUND IMAGE ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/bg-hero.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#011B3E]/95 via-[#024AD8]/85 to-[#0B63F6]/75" />

          {/* Decorative orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#3B82F6]/10 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-24 lg:py-32">

            <div className="max-w-4xl">

              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                On-Site Services
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Consultation-Based
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  On-Site Assistance
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blue-100/90 md:text-xl">
                From computers and printers to smart devices, JS Electronics
                provides consultation-based on-site assistance for homes and
                businesses. Every service begins with understanding your needs.
              </p>

            </div>

          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* ========== QUICK-NAV SERVICE GRID ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#024AD8]">
              Our Services
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We <span className="text-[#024AD8]">Offer</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Tap any service below to learn more about what&apos;s included.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {quickServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <a
                  href={`#${svc.id}`}
                  key={svc.id}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-400 hover:-translate-y-1 hover:border-[#024AD8]/20 hover:shadow-lg hover:shadow-[#024AD8]/8"
                >
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                    style={{ background: svc.gradient }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <span className="flex items-center gap-1 text-sm text-[#024AD8] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </div>

      {/* ========== DETAILED SERVICE SECTIONS ========== */}

      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;

        return (
          <div
            key={service.id}
            id={service.id}
            className="relative left-1/2 w-screen -ml-[50vw] scroll-mt-24"
          >
            <div className={isEven ? "bg-white" : "bg-[#F8FAFF]"}>
              <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">

                <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${!isEven ? "lg:[direction:rtl]" : ""}`}>

                  {/* Content Side */}
                  <div className={!isEven ? "lg:[direction:ltr]" : ""}>

                    {/* Service number + icon header */}
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                        style={{
                          background: service.gradient,
                          boxShadow: "0 12px 30px rgba(2, 74, 216, 0.2)",
                        }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-[#024AD8]/60">
                          Service {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-4 text-lg leading-8 text-gray-600">
                      {service.tagline}
                    </p>

                    <p className="mt-4 text-[0.95rem] leading-7 text-gray-500 italic">
                      {service.note}
                    </p>

                    <div className="mt-8">
                      <Link
                        href="/book-an-appointment"
                        className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#024AD8] to-[#0B63F6] px-7 py-4 font-bold text-white shadow-lg shadow-[#024AD8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#024AD8]/30"
                      >
                        Request a Consultation
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>

                  </div>

                  {/* Feature List Card */}
                  <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                    <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">

                      {/* Decorative top accent */}
                      <div
                        className="absolute left-0 top-0 h-1.5 w-full"
                        style={{ background: service.gradient }}
                      />

                      {/* Background watermark */}
                      <span className="absolute -bottom-4 -right-2 text-[7rem] font-black leading-none text-[#024AD8]/[0.03] select-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mb-6 text-lg font-bold text-gray-900">
                        Service May Include
                      </h3>

                      <ul className="relative z-10 space-y-4">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#024AD8]" />
                            <span className="text-[1.02rem] leading-relaxed text-gray-600">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Decorative corner circle */}
                      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#024AD8]/[0.03]" />

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* ========== BOTTOM CTA ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <section className="relative overflow-hidden bg-gradient-to-r from-[#011B3E] via-[#024AD8] to-[#0B63F6]">

          {/* Decorative */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-20 text-center text-white lg:flex-row lg:text-left">

            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Get
                <span className="block text-blue-200">On-Site Help?</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/80">
                Contact JS Electronics today to schedule a consultation. We&apos;ll
                discuss your needs and arrange convenient on-site assistance.
              </p>
            </div>

            <Link
              href="/book-an-appointment"
              className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-bold text-[#024AD8] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Book an Appointment
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </section>
      </div>

    </section>
  );
}
