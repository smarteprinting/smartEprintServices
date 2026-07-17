import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | SmartEprint Services",
  description: "Refund and cancellation policy for SmartEprint Services.",
};

export default function RefundCancellationPolicy() {
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
                Refund &amp;
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Cancellation Policy
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blue-100/90 md:text-xl">
                Date: July 2026
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

            {/* Quick Highlights Cards */}
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                <h3 className="text-xl font-extrabold text-[#024AD8] mb-2">Cancel Free</h3>
                <p className="text-gray-600">24+ hours before appointment &mdash; no charge</p>
              </div>
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                <h3 className="text-xl font-extrabold text-[#024AD8] mb-2">90-Day Parts Warranty</h3>
                <p className="text-gray-600">Replaced parts warranted for 90 days post-service</p>
              </div>
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                <h3 className="text-xl font-extrabold text-[#024AD8] mb-2">Returns Within 30 Days</h3>
                <p className="text-gray-600">Unopened supplies returnable within 30 days</p>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Refund & Cancellation Policy</h2>
              <p className="leading-relaxed mb-4">
                At Smart ePrint Services, we are committed to providing quality products and dependable customer service. This Refund & Cancellation Policy explains how cancellations, returns, exchanges, and refunds are handled for purchases made through smarteprintservices.com.
              </p>
              <p className="leading-relaxed">
                Smart ePrint Services is owned and operated by Innovation Dynamics Group LLC.
              </p>
            </section>

            <section className="mb-12 rounded-2xl bg-gray-50 p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-3 font-medium text-gray-700">
                <li><a href="#service-cancellation" className="hover:text-[#024AD8] transition-colors">Service Cancellation Policy</a></li>
                <li><a href="#refund-services" className="hover:text-[#024AD8] transition-colors">Refund Policy for Services</a></li>
                <li><a href="#refund-products" className="hover:text-[#024AD8] transition-colors">Refund Policy for Products & Supplies</a></li>
                <li><a href="#ongoing-agreements" className="hover:text-[#024AD8] transition-colors">Ongoing Service Agreements</a></li>
                <li><a href="#how-to-request" className="hover:text-[#024AD8] transition-colors">How to Request a Refund</a></li>
                <li><a href="#contact" className="hover:text-[#024AD8] transition-colors">Contact Us</a></li>
              </ol>
            </section>

            <section id="service-cancellation" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Service Cancellation Policy</h2>
              <p className="leading-relaxed mb-6">
                We understand that schedules can change. If you need to cancel or reschedule a service appointment, please notify us as early as possible so we can accommodate your request.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-900">Cancellation Time</th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-900">Charge</th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-900">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">24 hours or more before the scheduled appointment</td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#024AD8]">No Charge</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Appointment may be cancelled or rescheduled without a fee.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">Emergency cancellations</td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#024AD8]">Reviewed individually</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Please contact us as soon as possible so we can work with you.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="leading-relaxed">
                To cancel or reschedule an appointment, please contact our customer support team using the details provided at the end of this policy.
              </p>
            </section>

            <section id="refund-services" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Refund Policy for Services</h2>
              <p className="leading-relaxed mb-4">
                Customer satisfaction is important to us. If you believe there is an issue with a service you received, please contact us within 7 business days of the service date.
              </p>
              <p className="leading-relaxed mb-4">
                Our service refund guidelines include:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong className="text-gray-900">Workmanship Concerns:</strong> If the original service issue returns within 30 days, we may inspect the issue and provide additional service where appropriate. Replacement parts, if required, may be charged separately.
                </li>
                <li>
                  <strong className="text-gray-900">Service Not Completed:</strong> If we are unable to complete the requested service for reasons within our control, a refund or service credit may be provided.
                </li>
                <li>
                  <strong className="text-gray-900">Diagnostic Charges:</strong> Diagnostic or inspection fees are generally non-refundable but may be credited toward the final service cost if you proceed with the recommended work.
                </li>
                <li>
                  <strong className="text-gray-900">Completed Services:</strong> Refunds are generally not available once a service has been completed and accepted unless an error or billing issue is determined to have occurred on our part.
                </li>
              </ul>
            </section>

            <section id="refund-products" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Refund Policy for Products & Supplies</h2>
              <p className="leading-relaxed mb-4">
                For products purchased through Smart ePrint Services, the following guidelines apply:
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6">
                <li>
                  <strong className="text-gray-900">Unused Products:</strong> Items that are unopened, unused, and returned in their original packaging within 30 days of delivery may qualify for a refund.
                </li>
                <li>
                  <strong className="text-gray-900">Opened or Installed Products:</strong> Products that have been opened or installed are generally not eligible for a refund unless they are defective upon arrival.
                </li>
                <li>
                  <strong className="text-gray-900">Defective Products:</strong> If a product is found to be defective, we may offer a replacement, exchange, repair, or refund after reviewing the issue.
                </li>
                <li>
                  <strong className="text-gray-900">Special Order Products:</strong> Products ordered specifically for a customer may not be eligible for return unless they arrive damaged or defective.
                </li>
              </ul>
              <p className="leading-relaxed">
                Unless the return is due to our error or a defective product, return shipping costs are the responsibility of the customer.
              </p>
            </section>

            <section id="ongoing-agreements" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Ongoing Service Agreements</h2>
              <p className="leading-relaxed mb-4">
                Customers enrolled in ongoing maintenance plans or other service agreements should refer to the terms of their individual agreement for cancellation and refund details.
              </p>
              <p className="leading-relaxed mb-4">
                Where applicable:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellation requirements will be outlined in the applicable agreement.</li>
                <li>Advance notice may be required before cancelling recurring services.</li>
                <li>Any applicable early termination charges will be explained in the agreement.</li>
                <li>Eligible prepaid amounts for unused services may be refunded where permitted under the agreement.</li>
              </ul>
            </section>

            <section id="how-to-request" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. How to Request a Refund</h2>
              <p className="leading-relaxed mb-4">
                If you would like to request a refund or report an issue, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>Contact us within 7 business days of receiving your product or service.</li>
                <li>Provide your name, order or invoice number, purchase or service date, and a description of the issue.</li>
                <li>Include photographs or supporting documentation when applicable.</li>
                <li>Our team will review your request and respond as quickly as possible.</li>
              </ol>
              <p className="leading-relaxed">
                If approved, refunds are generally processed within 5–10 business days and issued to the original payment method whenever possible.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Contact Us</h2>
              <p className="leading-relaxed mb-6">
                If you have any questions regarding this Refund & Cancellation Policy or need assistance with a cancellation or refund request, please contact us:
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
