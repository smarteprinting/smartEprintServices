import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Disclaimer | SmartEprint Services",
  description: "Disclaimer for SmartEprint Services.",
};

export default function Disclaimer() {
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
                Disclaimer
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Statement
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                This Disclaimer governs your use of smarteprintservices.com and the information, products, and services provided by Smart ePrint Services ("Smart ePrint Services," "we," "us," or "our").
              </p>
              <p className="leading-relaxed mb-4">
                Smart ePrint Services is owned and operated by Innovation Dynamics Group LLC.
              </p>
              <p className="leading-relaxed">
                By using our website, you acknowledge and agree to the terms of this Disclaimer.
              </p>
            </section>

            <section className="mb-12 rounded-2xl bg-gray-50 p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-3 font-medium text-gray-700">
                <li><a href="#general-disclaimer" className="hover:text-[#024AD8] transition-colors">General Disclaimer</a></li>
                <li><a href="#product-service-info" className="hover:text-[#024AD8] transition-colors">Product & Service Information</a></li>
                <li><a href="#third-party-websites" className="hover:text-[#024AD8] transition-colors">Third-Party Websites</a></li>
                <li><a href="#errors-omissions" className="hover:text-[#024AD8] transition-colors">Errors & Omissions</a></li>
                <li><a href="#limitation-liability" className="hover:text-[#024AD8] transition-colors">Limitation of Liability</a></li>
                <li><a href="#contact" className="hover:text-[#024AD8] transition-colors">Contact Us</a></li>
              </ol>
            </section>

            <section id="general-disclaimer" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. General Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                The information available on smarteprintservices.com is provided for general informational purposes only. While we make reasonable efforts to keep the information accurate and up to date, we make no representations or warranties, express or implied, regarding the accuracy, completeness, reliability, suitability, or availability of any information, products, or services presented on this website.
              </p>
              <p className="leading-relaxed">
                Your use of the website and reliance on any information is entirely at your own risk.
              </p>
            </section>

            <section id="product-service-info" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Product & Service Information</h2>
              <p className="leading-relaxed mb-4">
                Smart ePrint Services provides printer-related products, accessories, and customer assistance intended to help individuals and businesses with their printing needs.
              </p>
              <p className="leading-relaxed mb-4">
                While we strive to provide accurate product descriptions and helpful information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Product specifications, pricing, availability, and images may change without prior notice.</li>
                <li>Product colors, packaging, and appearance may vary from those displayed on the website.</li>
                <li>Compatibility between printers, accessories, consumables, and other products should always be verified before purchase.</li>
                <li>General setup guidance or troubleshooting information provided through our website or customer support is intended for informational purposes and may not resolve every issue.</li>
              </ul>
              <p className="leading-relaxed">
                Where applicable, manufacturer warranties are provided solely by the respective manufacturer and are subject to their own warranty terms and conditions.
              </p>
            </section>

            <section id="third-party-websites" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Third-Party Websites</h2>
              <p className="leading-relaxed mb-4">
                Our website may contain links to third-party websites for your convenience or additional information.
              </p>
              <p className="leading-relaxed mb-4">
                These links do not imply any endorsement, sponsorship, or approval of the content, products, services, or policies of those websites.
              </p>
              <p className="leading-relaxed mb-4">
                Smart ePrint Services has no control over third-party websites and is not responsible for their content, privacy practices, or the accuracy of any information they provide.
              </p>
              <p className="leading-relaxed">
                We encourage you to review the privacy policies and terms of any third-party websites you visit.
              </p>
            </section>

            <section id="errors-omissions" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Errors & Omissions</h2>
              <p className="leading-relaxed mb-4">
                Although we make every effort to ensure the information on our website is accurate, errors or omissions may occasionally occur.
              </p>
              <p className="leading-relaxed mb-4">
                We reserve the right to correct errors, update information, modify pricing, change product availability, or revise website content at any time without prior notice.
              </p>
              <p className="leading-relaxed">
                Nothing on this website should be interpreted as a guarantee of product availability or pricing until an order has been accepted.
              </p>
            </section>

            <section id="limitation-liability" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                To the fullest extent permitted by applicable law, Smart ePrint Services and Innovation Dynamics Group LLC shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Your use of or inability to use our website.</li>
                <li>Reliance on information published on our website.</li>
                <li>Product availability or pricing changes.</li>
                <li>Delays caused by shipping carriers, manufacturers, or circumstances beyond our reasonable control.</li>
                <li>Technical interruptions, website downtime, or temporary unavailability.</li>
              </ul>
              <p className="leading-relaxed">
                Nothing in this Disclaimer excludes liability where such exclusion is prohibited by applicable law.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Contact Us</h2>
              <p className="leading-relaxed mb-6">
                If you have any questions regarding this Disclaimer, please contact us:
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
