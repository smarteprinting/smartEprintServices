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
          <div className="prose prose-lg text-gray-600 max-w-none">
            <div className="mb-10 border-b border-gray-200 pb-8">
              <p className="text-gray-500 mb-2 font-medium">Effective Date: July 18, 2026</p>
              <p className="text-gray-500 font-medium">Last Updated: July 18, 2026</p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h2>
              <p className="leading-relaxed mb-4">
                This Cookie Policy explains how Smart ePrint Services ("Smart ePrint Services," "we," "us," or "our") uses cookies and similar technologies when you visit smarteprintservices.com.
              </p>
              <p className="leading-relaxed mb-4">
                Smart ePrint Services is owned and operated by Innovation Dynamics Group LLC.
              </p>
              <p className="leading-relaxed">
                By continuing to use our website, you agree to the use of cookies as described in this Cookie Policy.
              </p>
            </section>

            <section className="mb-12 rounded-2xl bg-gray-50 p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-3 font-medium text-gray-700">
                <li><a href="#what-are-cookies" className="hover:text-[#024AD8] transition-colors">What Are Cookies?</a></li>
                <li><a href="#cookies-we-use" className="hover:text-[#024AD8] transition-colors">Cookies We Use</a></li>
                <li><a href="#third-party-cookies" className="hover:text-[#024AD8] transition-colors">Third-Party Cookies</a></li>
                <li><a href="#managing-preferences" className="hover:text-[#024AD8] transition-colors">Managing Your Cookie Preferences</a></li>
                <li><a href="#changes" className="hover:text-[#024AD8] transition-colors">Changes to This Cookie Policy</a></li>
                <li><a href="#contact" className="hover:text-[#024AD8] transition-colors">Contact Us</a></li>
              </ol>
            </section>

            <section id="what-are-cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. What Are Cookies?</h2>
              <p className="leading-relaxed mb-4">
                Cookies are small text files that are stored on your computer, smartphone, or other device when you visit a website. They help websites function properly, remember your preferences, improve user experience, and provide website owners with information about how visitors use their websites.
              </p>
              <p className="leading-relaxed mb-4">
                Cookies do not contain viruses or malware and cannot access information stored elsewhere on your device.
              </p>
              <p className="leading-relaxed mb-4">
                There are two common types of cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-gray-900">Session Cookies</strong> &ndash; Temporary cookies that are removed when you close your browser.
                </li>
                <li>
                  <strong className="text-gray-900">Persistent Cookies</strong> &ndash; Cookies that remain on your device until they expire or are deleted.
                </li>
              </ul>
            </section>

            <section id="cookies-we-use" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Cookies We Use</h2>
              <p className="leading-relaxed mb-6">
                We use different types of cookies to improve your experience on our website.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Essential Cookies</h3>
              <p className="leading-relaxed mb-2">
                These cookies are necessary for the website to operate correctly. They enable core functions such as page navigation, website security, shopping cart functionality, and form submissions.
              </p>
              <p className="leading-relaxed mb-6 font-medium text-gray-800">
                These cookies cannot be disabled through our website.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics Cookies</h3>
              <p className="leading-relaxed mb-4">
                Analytics cookies help us understand how visitors interact with our website by collecting information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>Navigation patterns</li>
                <li>Website performance</li>
              </ul>
              <p className="leading-relaxed mb-6 font-medium text-gray-800">
                This information helps us improve our website and customer experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Advertising Cookies</h3>
              <p className="leading-relaxed mb-2">
                Advertising cookies help us measure the effectiveness of our marketing campaigns and may be used to display advertisements that are more relevant to your interests.
              </p>
              <p className="leading-relaxed mb-6 font-medium text-gray-800">
                These cookies are only used where permitted and may require your consent.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Functional Cookies</h3>
              <p className="leading-relaxed">
                Functional cookies remember your preferences, such as language settings or previously entered information, to provide a more personalized browsing experience.
              </p>
            </section>

            <section id="third-party-cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Third-Party Cookies</h2>
              <p className="leading-relaxed mb-4">
                Some cookies may be placed by trusted third-party services that help us operate and improve our website.
              </p>
              <p className="leading-relaxed mb-4">
                These services may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Google Analytics</li>
                <li>Google Ads</li>
                <li>Payment service providers</li>
                <li>Other website functionality and performance tools</li>
              </ul>
              <p className="leading-relaxed">
                These third parties operate under their own privacy and cookie policies. We encourage you to review their policies to understand how your information may be used.
              </p>
            </section>

            <section id="managing-preferences" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Managing Your Cookie Preferences</h2>
              <p className="leading-relaxed mb-6">
                You can control or manage cookies in several ways.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cookie Consent</h3>
              <p className="leading-relaxed mb-6">
                When you first visit our website, you may be presented with a cookie notice that allows you to accept or manage your cookie preferences where required.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Browser Settings</h3>
              <p className="leading-relaxed mb-4">
                Most web browsers allow you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>View stored cookies</li>
                <li>Block cookies</li>
                <li>Delete existing cookies</li>
                <li>Receive notifications before cookies are stored</li>
              </ul>
              <p className="leading-relaxed">
                Please note that disabling certain cookies may affect the functionality and performance of some parts of our website.
              </p>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Changes to This Cookie Policy</h2>
              <p className="leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our business practices, legal requirements, or the technologies we use.
              </p>
              <p className="leading-relaxed">
                Any updates will be posted on this page with a revised Last Updated date. We encourage you to review this Cookie Policy periodically.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Contact Us</h2>
              <p className="leading-relaxed mb-6">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <p className="font-bold text-xl text-gray-900 mb-1">Smart ePrint Services</p>
                <p className="text-gray-600 mb-6">Owned & Operated by Innovation Dynamics Group LLC</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address:</p>
                    <p className="text-gray-600">11397 Quincy St NE<br />Blaine, MN 55434<br />United States</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pt-4 border-t border-gray-200">
                    <div>
                      <span className="font-semibold text-gray-900 mr-2">Phone:</span>
                      <a href="tel:+18777652289" className="text-[#024AD8] hover:underline font-medium">+1 (877)765-2289</a>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 mr-2">Email:</span>
                      <a href="mailto:support@smarteprintservices.com" className="text-[#024AD8] hover:underline font-medium">support@smarteprintservices.com</a>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <span className="font-semibold text-gray-900 mr-2">Website:</span>
                    <a href="https://smarteprintservices.com" className="text-[#024AD8] hover:underline font-medium">smarteprintservices.com</a>
                  </div>
                </div>
              </div>
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
