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
            backgroundImage: "url('/bg-hero.png')",
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

          <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-6 py-24 lg:py-32">
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                Contact Us
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Get in touch with
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  SmartEprint Services
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blue-100/90 md:text-xl">
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
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT: Contact Details */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#024AD8]">
                Get In Touch
              </span>
              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
                Contact Information
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Have questions or need assistance? We're here to help! Reach out to us using any of the methods below, and our team will get back to you as soon as possible.
              </p>

              <div className="mt-10 space-y-6">
                {/* Phone */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6]">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">Call Us</h3>
                    <a href="tel:+16518154630" className="mt-2 inline-block text-[#024AD8] text-xl font-bold">+1 (651) 815-4630</a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6]">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">Email Us</h3>
                    <a href="mailto:support@smarteprintservices.com" className="mt-2 inline-block text-[#024AD8] text-xl font-bold">support@smarteprintservices.com</a>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6]">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">Location</h3>
                    <p className="mt-2 text-gray-600 text-lg">
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

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-20 text-center text-white lg:flex-row lg:text-left">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to book a
                <span className="block text-blue-200">consultation?</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/80">
                Contact SmartEprint Services today to schedule a consultation and let us help with your technology or appliance needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/book-an-appointment"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-bold text-[#024AD8] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Book an Appointment
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
