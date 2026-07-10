import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SmartEprint Services",
  description: "Privacy policy and data protection practices of SmartEprint Services.",
};

export default function PrivacyPolicy() {
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
                Policies
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Privacy
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blue-100/90 md:text-xl">
                Last Updated: July 2026
              </p>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* ========== POLICY CONTENT ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
          <div className="prose prose-lg text-gray-600">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                SmartEprint Services ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, and service address when you book an appointment or contact us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent on pages, and referral sources.
                </li>
                <li>
                  <strong>Device Data:</strong> Information about your device, browser type, IP address, and operating system.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process your service requests and appointments</li>
                <li>To send you promotional communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To detect and prevent fraudulent transactions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Protect Your Information</h2>
              <p className="leading-relaxed">
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to other websites. We are not responsible for the privacy practices of other sites. We encourage you to review the privacy policies of any third-party sites before providing your information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided in the Contact Us section.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy at any time. We encourage you to periodically review this page for the latest information on our privacy practices. Your continued use of our website constitutes your acceptance of any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                <strong>SmartEprint Services</strong><br />
                878 JEFFERSON ST<br />
                Burlington, IA 52601<br />
                Email: <a href="mailto:info@smarteprintservices.com" className="text-[#024AD8] font-semibold">info@smarteprintservices.com</a><br />
                Phone: <a href="tel:+18887154577" className="text-[#024AD8] font-semibold">+1 (888) 715-4577</a>
              </p>
            </section>
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
                Have questions
                <span className="block text-blue-200">about our policies?</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/80">
                Contact us for clarification or more information about our policies and practices.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-bold text-[#024AD8] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Contact Us
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
