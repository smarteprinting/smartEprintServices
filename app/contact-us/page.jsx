import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us | SmartEprint Services",
  description: "Get in touch with SmartEprint Services for on-site technology and appliance assistance.",
};

export default function ContactPage() {
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

          <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-6 py-16 lg:py-20">
            <div className="max-w-4xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                Contact Us
              </span>

              <h1 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Get in touch with
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  SmartEprint Services
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15.5px] sm:text-[17px] font-medium leading-relaxed text-blue-100/90">
                Reach out for on-site help, scheduling, or service questions. SmartEprint Services is here to help with consultation-based support for home and business technology, appliances, and connected devices.
              </p>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* ========== CONTACT INFO ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT: Contact Details */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#024AD8]">
                Get In Touch
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl">
                Contact Information
              </h2>
              <p className="mt-5 text-[15px] font-medium leading-relaxed text-gray-500">
                Have questions or need assistance? We're here to help! Reach out to us using any of the methods below, and our team will get back to you as soon as possible.
              </p>

              <div className="mt-8 space-y-5">
                {/* Phone */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6]">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">Call Us</h3>
                    <a href="tel:+16518154630" className="mt-1 inline-block text-[#024AD8] text-[14px] font-bold">+1 (651) 815-4630</a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6]">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">Email Us</h3>
                    <a href="mailto:support@smarteprintservices.com" className="mt-1 inline-block text-[#024AD8] text-[14px] font-bold">support@smarteprintservices.com</a>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6]">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">Location</h3>
                    <p className="mt-1.5 text-[14px] font-medium leading-relaxed text-gray-500">
                      11397 Quincy St NE<br />
                      Blaine, Minnesota, 55434<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Quick Form */}
            <div>
              <ContactForm />
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
                Ready to book a
                <span className="block text-blue-200">consultation?</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-blue-100/90">
                Contact SmartEprint Services today to schedule a consultation and let us help with your technology or appliance needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/book-an-appointment"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[14px] font-bold text-[#024AD8] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Book an Appointment
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
