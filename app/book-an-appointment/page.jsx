import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Wrench,
  DollarSign,
  ThumbsUp,
} from "lucide-react";
import BookAppointmentForm from "../components/BookAppointmentForm";
import StandardCTA from "../components/StandardCTA";

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
      {/* ========== COMBINED HERO + FORM FRAME ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">

        {/* --- TOP: HERO WITH BACKGROUND IMAGE --- */}
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/appointment-hero-1.webp')",
            backgroundPosition: "center right",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >


          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 py-7 sm:py-8 lg:py-10">
            <div className="max-w-xl">
              {/* HP Partner Badge */}
              <div className="mb-3">
                <img
                  src="/hp-partner.png"
                  alt="HP Partner"
                  width="220"
                  height="100"
                  className="h-10 lg:h-12 w-auto object-contain drop-shadow-lg"
                />
              </div>

              {/* Title */}
              <h1 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
                On-site Printer Repair and Setup
              </h1>

              {/* Call Us */}
              <p className="mt-2 text-xs font-medium text-blue-200/80">Call Us:</p>
              <a
                href="tel:+18777652289"
                className="mt-1 inline-flex items-center gap-2 rounded-lg border-2 border-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#024AD8] cursor-pointer"
              >
                <Phone size={18} />
                +1 (877)765-2289
              </a>

              {/* Subtext */}
              <p className="mt-3 max-w-md text-xs sm:text-sm font-medium leading-relaxed text-blue-100/85">
                Fast, reliable printer solutions at your doorstep for home and business users.
              
              </p>

              {/* Trust Points */}
              <p className="mt-1.5 text-[11px] font-semibold text-blue-200/80">
                • Consultation-based service &nbsp;&nbsp; • No hidden charges &nbsp;&nbsp; • Doorstep service
              </p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM: FORM + IMAGE SECTION (seamless, no gap) --- */}
        <div className="relative bg-[#F2F4F7]">
          {/* Cyan/Blue top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#00B4D8]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-6 lg:py-8">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">

              {/* LEFT: Form */}
              <div>
                <BookAppointmentForm />
              </div>

              {/* RIGHT: Image */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                    <img
                      src="/hero-consultatent.png"
                      alt="Professional printer consultation and repair service"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
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

<StandardCTA/>
    </section>
  );
}
