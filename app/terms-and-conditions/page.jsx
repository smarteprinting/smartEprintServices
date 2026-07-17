import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | SmartEprint Services",
  description: "Terms and conditions for using SmartEprint Services.",
};

export default function TermsAndConditions() {
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
                Terms &
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Conditions
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
              <p className="leading-relaxed mb-4">
                These Terms & Conditions ("Terms") govern your access to and use of smarteprintservices.com and the products and services offered by Smart ePrint Services ("Smart ePrint Services," "we," "us," or "our").
              </p>
              <p className="leading-relaxed mb-4">
                Smart ePrint Services is owned and operated by Innovation Dynamics Group LLC.
              </p>
              <p className="leading-relaxed">
                By accessing our website, placing an order, requesting a service, or otherwise using our website, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-12 rounded-2xl bg-gray-50 p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-3 font-medium text-gray-700">
                <li><a href="#acceptance" className="hover:text-[#024AD8] transition-colors">Acceptance of Terms</a></li>
                <li><a href="#products-services" className="hover:text-[#024AD8] transition-colors">Products & Services</a></li>
                <li><a href="#eligibility" className="hover:text-[#024AD8] transition-colors">Eligibility</a></li>
                <li><a href="#pricing-payments" className="hover:text-[#024AD8] transition-colors">Pricing, Payments & Billing</a></li>
                <li><a href="#orders-requests" className="hover:text-[#024AD8] transition-colors">Orders & Service Requests</a></li>
                <li><a href="#cancellation" className="hover:text-[#024AD8] transition-colors">Cancellation</a></li>
                <li><a href="#warranty-liability" className="hover:text-[#024AD8] transition-colors">Warranty & Limitation of Liability</a></li>
                <li><a href="#intellectual-property" className="hover:text-[#024AD8] transition-colors">Intellectual Property</a></li>
                <li><a href="#acceptable-use" className="hover:text-[#024AD8] transition-colors">Acceptable Use</a></li>
                <li><a href="#indemnification" className="hover:text-[#024AD8] transition-colors">Indemnification</a></li>
                <li><a href="#governing-law" className="hover:text-[#024AD8] transition-colors">Governing Law</a></li>
                <li><a href="#changes" className="hover:text-[#024AD8] transition-colors">Changes to These Terms</a></li>
                <li><a href="#contact" className="hover:text-[#024AD8] transition-colors">Contact Information</a></li>
              </ol>
            </section>

            <section id="acceptance" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="leading-relaxed mb-4">
                By accessing or using our website, submitting an inquiry, placing an order, or purchasing any product or service from Smart ePrint Services, you acknowledge that you have read, understood, and agree to these Terms & Conditions and our Privacy Policy.
              </p>
              <p className="leading-relaxed">
                These Terms apply to all visitors, customers, and users of our website.
              </p>
            </section>

            <section id="products-services" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Products & Services</h2>
              <p className="leading-relaxed mb-4">
                Smart ePrint Services offers products and services related to home, office, and business printing, which may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Printers</li>
                <li>Ink cartridges</li>
                <li>Toner cartridges</li>
                <li>Printer accessories</li>
                <li>Printer setup assistance</li>
                <li>Wireless printer setup</li>
                <li>Driver installation guidance</li>
                <li>Printer troubleshooting assistance</li>
                <li>General product information</li>
              </ul>
              <p className="leading-relaxed">
                Product availability may change without prior notice. We reserve the right to modify, discontinue, or update any product or service at any time.
              </p>
            </section>

            <section id="eligibility" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Eligibility</h2>
              <p className="leading-relaxed mb-4">
                To purchase products or use our services, you must be at least 18 years of age or have the legal authority to enter into a binding agreement.
              </p>
              <p className="leading-relaxed mb-4">
                By placing an order or requesting assistance, you confirm that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The information you provide is accurate and complete.</li>
                <li>You are authorized to make purchases using the selected payment method.</li>
                <li>You will provide accurate shipping and contact information.</li>
                <li>You will cooperate with any reasonable information requests necessary to process your order or service request.</li>
              </ul>
            </section>

            <section id="pricing-payments" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Pricing, Payments & Billing</h2>
              <p className="leading-relaxed mb-4">
                All prices displayed on our website are listed in U.S. Dollars (USD) unless otherwise stated.
              </p>
              <p className="leading-relaxed mb-4">
                We reserve the right to update pricing without prior notice. The price displayed at the time your order is placed will generally be the price charged.
              </p>
              <p className="leading-relaxed mb-4">
                Payments are processed securely through trusted third-party payment providers.
              </p>
              <p className="leading-relaxed mb-4">
                We reserve the right to refuse or cancel any order if:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Payment cannot be verified.</li>
                <li>Fraudulent activity is suspected.</li>
                <li>Pricing or product information contains an error.</li>
                <li>Products become unavailable.</li>
              </ul>
              <p className="leading-relaxed">
                If payment has already been received for a cancelled order, an appropriate refund will be issued.
              </p>
            </section>

            <section id="orders-requests" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Orders & Service Requests</h2>
              <p className="leading-relaxed mb-4">
                When placing an order or requesting support, you agree to provide complete and accurate information.
              </p>
              <p className="leading-relaxed mb-4">
                After an order is placed, you may receive email confirmations, shipping updates, or customer service communications regarding your purchase.
              </p>
              <p className="leading-relaxed mb-4">
                While we make every effort to fulfill orders promptly, shipping times, inventory availability, and delivery schedules may vary.
              </p>
              <p className="leading-relaxed">
                For service-related requests, response times may vary depending on request volume and availability.
              </p>
            </section>

            <section id="cancellation" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cancellation</h2>
              <p className="leading-relaxed mb-4">
                Orders may be cancelled before shipment whenever possible.
              </p>
              <p className="leading-relaxed mb-4">
                Once an order has been shipped, cancellation may no longer be available and any return will be subject to our Refund & Return Policy.
              </p>
              <p className="leading-relaxed">
                If you need to modify or cancel an order, please contact us as soon as possible.
              </p>
            </section>

            <section id="warranty-liability" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Warranty & Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                Where applicable, products may include a manufacturer's warranty. Any warranty coverage is subject to the terms provided by the manufacturer.
              </p>
              <p className="leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Smart ePrint Services makes no guarantee that our website will always be uninterrupted or error-free.</li>
                <li>We are not responsible for delays caused by shipping carriers, manufacturers, weather conditions, or circumstances beyond our reasonable control.</li>
                <li>We are not liable for indirect, incidental, special, consequential, or punitive damages arising from the use of our website, products, or services.</li>
                <li>Our total liability for any claim shall not exceed the amount paid by you for the applicable product or service.</li>
              </ul>
              <p className="leading-relaxed">
                Nothing in these Terms limits any rights that cannot legally be excluded under applicable law.
              </p>
            </section>

            <section id="intellectual-property" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                All content available on smarteprintservices.com, including text, graphics, logos, images, icons, website design, and other materials, is owned by or licensed to Smart ePrint Services and Innovation Dynamics Group LLC and is protected by applicable intellectual property laws.
              </p>
              <p className="leading-relaxed">
                You may not copy, reproduce, distribute, modify, publish, or use any content without prior written permission.
              </p>
            </section>

            <section id="acceptable-use" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Acceptable Use</h2>
              <p className="leading-relaxed mb-4">
                When using our website, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Violate any applicable laws or regulations.</li>
                <li>Attempt unauthorized access to our website or systems.</li>
                <li>Introduce viruses, malware, or harmful code.</li>
                <li>Interfere with the operation or security of the website.</li>
                <li>Use automated tools to scrape or extract website content without permission.</li>
                <li>Misrepresent your identity or affiliation.</li>
              </ul>
              <p className="leading-relaxed">
                We reserve the right to suspend or restrict access if these Terms are violated.
              </p>
            </section>

            <section id="indemnification" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Indemnification</h2>
              <p className="leading-relaxed mb-4">
                You agree to indemnify and hold harmless Smart ePrint Services, Innovation Dynamics Group LLC, its officers, employees, affiliates, and service providers from any claims, damages, liabilities, costs, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of our website or services.</li>
                <li>Your violation of these Terms.</li>
                <li>Your violation of any applicable law or the rights of another party.</li>
              </ul>
            </section>

            <section id="governing-law" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Governing Law</h2>
              <p className="leading-relaxed mb-4">
                These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the State of Minnesota, without regard to its conflict of law principles.
              </p>
              <p className="leading-relaxed mb-4">
                Any dispute arising from these Terms or your use of our website shall be subject to the jurisdiction of the appropriate state or federal courts located in Minnesota.
              </p>
              <p className="leading-relaxed">
                We encourage customers to contact us first so we can attempt to resolve any concerns before formal legal action is pursued.
              </p>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Changes to These Terms</h2>
              <p className="leading-relaxed mb-4">
                We may update these Terms & Conditions from time to time to reflect changes in our business, legal requirements, or website operations.
              </p>
              <p className="leading-relaxed">
                Any updates will be posted on this page along with a revised Last Updated date. Continued use of our website after changes become effective constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Contact Information</h2>
              <p className="leading-relaxed mb-6">
                If you have any questions regarding these Terms & Conditions, please contact us:
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
