import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Wrench,
  DollarSign,
  ThumbsUp,
} from "lucide-react";
import BookAppointmentForm from "../components/BookAppointmentForm";

export const metadata = {
  title: "Book an Appointment | SmartEprint Services",
  description:
    "Schedule a consultation with SmartEprint Services for on-site printer repair and setup for home and business users.",
};

const processSteps = [
  {
    number: "01",
    title: "Submit your Consultation Request",
    description: "Fill out the form with your requirements, and we'll review your request.",
    icon: CheckCircle2,
  },
  {
    number: "02",
    title: "Discuss your Service Needs",
    description: "Our team contacts you to understand your issue and recommend the right service.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Schedule an On-site Visit",
    description: "Choose a convenient date and time for our technician to visit your location.",
    icon: Calendar,
  },
  {
    number: "04",
    title: "On-site Equipment Assessment",
    description: "The technician inspects your equipment and explains the available service options.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Cost-effective Solutions",
    description: "Receive a clear service estimate with practical solutions based on your needs.",
    icon: DollarSign,
  },
  {
    number: "06",
    title: "Service Completion & Follow-up",
    description: "After the service, we confirm everything is working and answer any remaining questions.",
    icon: ThumbsUp,
  },
];

export default function BookingPage() {
  return (
    <section className="bg-white">
      {/* ========== FULL-WIDTH HERO WITH BACKGROUND IMAGE ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/bg-hero.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#011B3E]/95 via-[#024AD8]/80 to-[#0B63F6]/70" />

          {/* Decorative orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#3B82F6]/10 blur-3xl" />
            <div className="absolute top-1/2 right-1/4 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-6 py-12 lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* LEFT: CONTENT */}
              <div>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                  On-site Printer Repair and Setup
                </span>

                <h1 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Fast, reliable printer solutions
                  <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                    at your doorstep
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-[15.5px] sm:text-[17px] font-medium leading-relaxed text-blue-100/90">
                  Fast, reliable printer solutions at your doorstep for home and business users.
                </p>

                {/* Trust Badges */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {["Consultation-based service", "No hidden charges", "Doorstep service"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold tracking-wide uppercase text-white backdrop-blur-sm">
                      <CheckCircle2 className="h-3 w-3 text-[#60A5FA]" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Call Us CTA */}
                <div className="mt-8 flex flex-row items-center gap-4 sm:gap-6 flex-wrap" >
                  <a
                    href="tel:+18777652289"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[14px] font-bold text-[#024AD8] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <Phone size={16} />
                    Call Us: +1 (877)765-2289
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  
                  <img src="/hp-partner.png" alt="HP Partner" width="220" height="100" className="h-16 lg:h-20 w-auto object-contain" />
                </div>
              </div>

              {/* RIGHT: FORM */}
              <div>
                <BookAppointmentForm />
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* ========== OUR PROCESS ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#024AD8]">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8"
                >
                  {/* Accent bar */}
                  <div
                    className="absolute left-0 top-0 h-1 w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "linear-gradient(135deg, #024AD8, #0B63F6)" }}
                  />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#024AD8] to-[#0B63F6] text-xl font-extrabold text-white shadow-lg shadow-[#024AD8]/20">
                      {step.number}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#024AD8]/20 to-transparent" />
                  </div>

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#024AD8]/10">
                    <StepIcon className="h-6 w-6 text-[#024AD8]" />
                  </div>

                  <h3 className="text-[16px] font-extrabold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-[13.5px] font-medium text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========== CONTACT INFO ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-gradient-to-b from-[#F8FAFF] to-white">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Call Us */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6] shadow-lg shadow-[#024AD8]/20 transition-transform duration-500 group-hover:scale-110">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[16px] font-extrabold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">Call Us</h3>
              <p className="mt-2.5 text-[13.5px] font-medium text-gray-500">Have questions? Give us a call anytime.</p>
              <a
                href="tel:+18777652289"
                className="mt-4 inline-block text-[14px] font-bold text-[#024AD8]"
              >
                +1 (877)765-2289
              </a>
            </div>

            {/* Email Us */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6] shadow-lg shadow-[#024AD8]/20 transition-transform duration-500 group-hover:scale-110">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[16px] font-extrabold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">Email Us</h3>
              <p className="mt-2.5 text-[13.5px] font-medium text-gray-500">Send us an email and we'll get back to you.</p>
              <a
                href="mailto:support@smarteprintservices.com"
                className="mt-4 inline-block text-[14px] font-bold text-[#024AD8]"
              >
                support@smarteprintservices.com
              </a>
            </div>

            {/* Location */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6] shadow-lg shadow-[#024AD8]/20 transition-transform duration-500 group-hover:scale-110">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[16px] font-extrabold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">Service Availability</h3>
              <p className="mt-2.5 text-[13.5px] font-medium text-gray-500">We serve residential and business locations.</p>
              <p className="mt-4 text-[14px] font-bold text-[#024AD8]">Blaine, MN & Surrounding Areas</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== CTA ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <section className="relative overflow-hidden bg-gradient-to-r from-[#011B3E] via-[#024AD8] to-[#0B63F6]">
          {/* Decorative */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center text-white lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Ready to get on-site
                <span className="block text-blue-200">assistance?</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-blue-100/80">
                Contact SmartEprint Services today to schedule a consultation and let us help with your technology or appliance needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[14px] font-bold text-[#024AD8] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Contact Us
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
