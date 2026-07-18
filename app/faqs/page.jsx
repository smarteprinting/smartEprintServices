import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "FAQs | SmartEprint Services",
  description: "Frequently asked questions about SmartEprint Services and support.",
};

export default function FAQs() {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We serve the Blaine, MN area and surrounding regions. Contact us to confirm service availability in your location.",
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by visiting our Book an Appointment page or calling us at +1 (877)765-2289.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and cash payments for our services.",
    },
    {
      question: "Do you provide emergency services?",
      answer: "Yes, we offer emergency services for critical issues. Please call us at +1 (877)765-2289 to inquire about availability.",
    },
    {
      question: "What can I expect from your service?",
      answer: "We aim to provide dependable workmanship, clear communication, and practical support. If you are not satisfied, please contact us so we can discuss the next steps.",
    },
    {
      question: "Can you help with smart home setup?",
      answer: "Yes, we offer comprehensive smart home assistance including setup, configuration, and integration of connected devices.",
    },
  ];

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

          <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-6 py-24 lg:py-32">
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                FAQs
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Frequently Asked
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blue-100/90 md:text-xl">
                Find answers to common questions about our services and support.
              </p>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* ========== FAQ LIST ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8"
              >
                {/* Accent bar */}
                <div
                  className="absolute left-0 top-0 h-1 w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "linear-gradient(135deg, #024AD8, #0B63F6)" }}
                />

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#024AD8]/10">
                    <HelpCircle className="h-6 w-6 text-[#024AD8]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== CTA ========== */}

    <StandardCTA />
    </section>
  );
}
