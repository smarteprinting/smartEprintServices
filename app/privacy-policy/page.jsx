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
          <div className="prose prose-lg text-gray-600 max-w-none">
            <div className="mb-10 border-b border-gray-200 pb-8">
              <p className="text-gray-500 mb-2 font-medium">Effective Date: July 18, 2026</p>
              <p className="text-gray-500 font-medium">Last Updated: July 18, 2026</p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
              <p className="leading-relaxed mb-4">
                Smart ePrint Services ("Smart ePrint Services," "we," "us," or "our") values your privacy and is committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit smarteprintservices.com, contact us, or use our products and services.
              </p>
              <p className="leading-relaxed">
                Smart ePrint Services is owned and operated by Innovation Dynamics Group LLC. By accessing or using our website, you agree to the practices described in this Privacy Policy.
              </p>
            </section>

            <section className="mb-12 rounded-2xl bg-gray-50 p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-3 font-medium text-gray-700">
                <li><a href="#information-we-collect" className="hover:text-[#024AD8] transition-colors">Information We Collect</a></li>
                <li><a href="#how-we-use" className="hover:text-[#024AD8] transition-colors">How We Use Your Information</a></li>
                <li><a href="#sharing-of-information" className="hover:text-[#024AD8] transition-colors">Sharing of Information</a></li>
                <li><a href="#cookies" className="hover:text-[#024AD8] transition-colors">Cookies & Tracking Technologies</a></li>
                <li><a href="#data-security" className="hover:text-[#024AD8] transition-colors">Data Security</a></li>
                <li><a href="#rights-choices" className="hover:text-[#024AD8] transition-colors">Your Rights & Choices</a></li>
                <li><a href="#childrens-privacy" className="hover:text-[#024AD8] transition-colors">Children's Privacy</a></li>
                <li><a href="#ccpa" className="hover:text-[#024AD8] transition-colors">California Privacy Rights (CCPA)</a></li>
                <li><a href="#changes" className="hover:text-[#024AD8] transition-colors">Changes to This Privacy Policy</a></li>
                <li><a href="#contact" className="hover:text-[#024AD8] transition-colors">Contact Us</a></li>
              </ol>
            </section>

            <section id="information-we-collect" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
              <p className="leading-relaxed mb-6">
                We collect information that you voluntarily provide, information collected automatically while using our website, and information received from trusted third-party service providers where applicable.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Information You Provide</h3>
              <p className="leading-relaxed mb-4">
                When you interact with our website, place an order, request support, or communicate with us, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing and shipping address</li>
                <li>Payment information (processed securely through third-party payment providers)</li>
                <li>Printer brand and model information</li>
                <li>Product orders and purchase history</li>
                <li>Customer support inquiries and communications</li>
                <li>Account registration details (if you create an account)</li>
                <li>Information submitted through forms, surveys, or feedback</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Information Collected Automatically</h3>
              <p className="leading-relaxed mb-4">
                When you visit our website, certain information may be collected automatically, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Pages viewed and time spent on the website</li>
                <li>Referring websites and search terms</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section id="how-we-use" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill product orders</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Process payments and send invoices or order confirmations</li>
                <li>Improve our website, products, and customer experience</li>
                <li>Communicate important updates regarding orders or services</li>
                <li>Send promotional emails or marketing communications (you may opt out at any time)</li>
                <li>Detect and prevent fraud, unauthorized activity, and security risks</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
            </section>

            <section id="sharing-of-information" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Sharing of Information</h2>
              <p className="leading-relaxed mb-6 font-medium text-gray-800">
                We respect your privacy and do not sell your personal information.
              </p>
              <p className="leading-relaxed mb-6">
                We may share your information only in the following circumstances:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Providers</h3>
                  <p className="leading-relaxed">We may share information with trusted third-party providers that help us operate our business, including payment processors, shipping partners, website hosting providers, email service providers, analytics platforms, and customer support tools.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Transfers</h3>
                  <p className="leading-relaxed">If Innovation Dynamics Group LLC is involved in a merger, acquisition, business transfer, or sale of assets, your information may be transferred as part of that transaction.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Legal Requirements</h3>
                  <p className="leading-relaxed">We may disclose information when required by law or when necessary to comply with legal obligations, enforce our policies, or protect our legal rights.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Protection of Rights</h3>
                  <p className="leading-relaxed">Information may be disclosed to protect the rights, property, or safety of Smart ePrint Services, Innovation Dynamics Group LLC, our customers, or others.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">With Your Consent</h3>
                  <p className="leading-relaxed">We may share your information in other situations where you have provided your consent.</p>
                </div>
              </div>
            </section>

            <section id="cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Cookies & Tracking Technologies</h2>
              <p className="leading-relaxed mb-4">
                Our website uses cookies and similar technologies to improve functionality, enhance user experience, and better understand how visitors use our website.
              </p>
              <p className="leading-relaxed mb-4">
                The types of cookies we may use include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Essential Cookies</strong> – Required for basic website functionality.</li>
                <li><strong>Analytics Cookies</strong> – Help us understand website traffic and improve performance.</li>
                <li><strong>Marketing Cookies</strong> – Used to measure advertising effectiveness and deliver relevant advertisements where permitted.</li>
              </ul>
              <p className="leading-relaxed">
                Most web browsers allow you to control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of some parts of our website.
              </p>
            </section>

            <section id="data-security" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Security</h2>
              <p className="leading-relaxed mb-4">
                We take reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
              </p>
              <p className="leading-relaxed mb-4">
                Our security measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>SSL/TLS encryption</li>
                <li>Secure servers</li>
                <li>Restricted access to sensitive information</li>
                <li>Industry-standard security practices</li>
              </ul>
              <p className="leading-relaxed">
                Although we work to protect your information, no method of transmitting data over the Internet or storing electronic information is completely secure. Therefore, we cannot guarantee absolute security.
              </p>
            </section>

            <section id="rights-choices" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights & Choices</h2>
              <p className="leading-relaxed mb-4">
                Depending on your location and applicable law, you may have certain rights regarding your personal information.
              </p>
              <p className="leading-relaxed mb-4">
                These rights may include the ability to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information, subject to applicable legal requirements</li>
                <li>Request a copy of your information in a portable format where applicable</li>
                <li>Opt out of receiving promotional communications by following the unsubscribe instructions in our emails or by contacting us directly</li>
              </ul>
              <p className="leading-relaxed">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section id="childrens-privacy" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Children's Privacy</h2>
              <p className="leading-relaxed mb-4">
                Our website and services are intended for individuals who are at least 13 years of age.
              </p>
              <p className="leading-relaxed mb-4">
                We do not knowingly collect personal information from children under the age of 13. If we become aware that personal information has been collected from a child without appropriate consent, we will take reasonable steps to delete that information.
              </p>
              <p className="leading-relaxed">
                Parents or guardians who believe their child has submitted personal information may contact us using the details below.
              </p>
            </section>

            <section id="ccpa" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. California Privacy Rights (CCPA)</h2>
              <p className="leading-relaxed mb-4">
                If you are a California resident, you may have certain rights under the California Consumer Privacy Act (CCPA), including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>The right to know what personal information we collect</li>
                <li>The right to request deletion of your personal information, subject to applicable exceptions</li>
                <li>The right to request information regarding how your personal information is used</li>
                <li>The right not to be discriminated against for exercising your privacy rights</li>
              </ul>
              <p className="leading-relaxed mb-4 font-medium text-gray-800">
                Smart ePrint Services does not sell the personal information of California residents.
              </p>
              <p className="leading-relaxed">
                To submit a privacy request, please contact us using the information below.
              </p>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our business practices, legal requirements, or operational needs.
              </p>
              <p className="leading-relaxed">
                Any updates will be posted on this page with a revised Last Updated date. We encourage you to review this Privacy Policy periodically to stay informed about how your information is protected.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
              <p className="leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
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
                      <a href="tel:+18777652289" className="text-[#024AD8] hover:underline font-medium">1(877)765-2289</a>
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
