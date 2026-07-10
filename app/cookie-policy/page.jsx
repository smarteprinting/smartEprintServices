import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | SmartEprint Services",
  description: "Cookie policy for SmartEprint Services.",
};

export default function CookiePolicy() {
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
                Cookie
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
                This Cookie Policy explains how SmartEprint Services ("we," "us," "our") uses cookies and similar technologies on our website. By using our website, you consent to our use of cookies in accordance with this policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device by websites you visit. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Cookies</h2>
              <p className="leading-relaxed mb-4">
                We use cookies for several purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide essential functionality and to remember your preferences</li>
                <li>To improve and optimize the performance of our website</li>
                <li>To analyze how visitors use our website</li>
                <li>To personalize content and advertisements</li>
                <li>To enable social media features</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Types of Cookies We Use</h2>
              <p className="leading-relaxed mb-4">
                We use the following types of cookies on our website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Necessary Cookies:</strong> These cookies are essential for the website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> These cookies help us improve our website's performance and user experience by collecting information about how visitors interact with the site. They may track metrics such as page load time, bounce rate, traffic sources, etc.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices (like language or region) or displaying personalized content based on your past visits.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
                </li>
                <li>
                  <strong>Third-Party Cookies:</strong> Our website may include third-party services (like social media buttons or analytics tools) that set their own cookies. We don't have control over these cookies, and their use is governed by the third-party's privacy policy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="leading-relaxed mb-4">
                You can control and/or delete cookies as you wish. For details, see <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#024AD8] font-semibold">aboutcookies.org</a>. You can delete all cookies that are already on your computer, and you can set most browsers to prevent them from being placed.
              </p>
              <p className="leading-relaxed">
                However, if you block or delete cookies, some parts of our website may not work properly, or you may not be able to access certain features.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser Settings</h2>
              <p className="leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#024AD8] font-semibold">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#024AD8] font-semibold">www.allaboutcookies.org</a>.
              </p>
              <p className="leading-relaxed">
                Information about managing cookies for specific browsers is available at:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#024AD8] font-semibold">https://support.google.com/chrome/answer/95647</a></li>
                <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#024AD8] font-semibold">https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop</a></li>
                <li>Safari: <a href="https://support.apple.com/guide/safari/sfri40598/mac" target="_blank" rel="noopener noreferrer" className="text-[#024AD8] font-semibold">https://support.apple.com/guide/safari/sfri40598/mac</a></li>
                <li>Microsoft Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40fc-a43c-a454-3b7678461d09" target="_blank" rel="noopener noreferrer" className="text-[#024AD8] font-semibold">https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40fc-a43c-a454-3b7678461d09</a></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Cookie Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Any updates will be posted on this page, and the revised version will be effective immediately when it is posted.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Cookie Policy, please contact us at:
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
