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
                Refund &amp;
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Cancellation Policy
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blue-100/90 md:text-xl">
                Date: July 02, 2026
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
            {/* Quick Highlights Cards */}
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                <h3 className="text-xl font-extrabold text-[#024AD8] mb-2">No Fee to Cancel</h3>
                <p className="text-gray-600">Free 24+ hours before appointment</p>
              </div>
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                <h3 className="text-xl font-extrabold text-[#024AD8] mb-2">Parts Warranty: 90 Days</h3>
                <p className="text-gray-600">Parts covered for 90 days after service.</p>
              </div>
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8">
                <h3 className="text-xl font-extrabold text-[#024AD8] mb-2">30 Day Returns</h3>
                <p className="text-gray-600">30 days to return unopened supplies</p>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">1. Policy for Cancelling a Service</h2>
              <p className="leading-relaxed mb-4">
                We know that the needs of businesses change over time. Our stance on cancellations is meant to be fair to both our customers and the technicians who plan their days around appointments.
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-2xl">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Cancellation Time</th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Fee</th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">24 or more hours before the meeting</td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#024AD8]">No Cost</td>
                      <td className="px-6 py-4 text-sm text-gray-600">You can return in full for free.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">Cancellation for emergency</td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#024AD8]">Case-by-case</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Our team will assist you immediately.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="leading-relaxed">
                Please email <a href="mailto:info@smarteprintservices.com" className="text-[#024AD8] font-semibold">info@smarteprintservices.com</a> as soon as possible to stop or change the time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">2. Policy for Refunds for Services Rendered</h2>
              <p className="leading-relaxed mb-4">
                Our goal is for you to be completely happy. Please let us know within 7 business days of the service date if you are not happy with the work that was done.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Problems with the work:</strong> If the problem that was serviced comes up again within 30 days, we will come back to diagnose and fix it again at no extra cost for work (parts not included).
                </li>
                <li>
                  <strong>Not Enough Work Done:</strong> If our technician can’t do the job the customer asked for and it’s not their fault, they will give them a full refund or credit.
                </li>
                <li>
                  <strong>Fees for diagnostics:</strong> Diagnostic fees usually can’t be returned, but they can be used as a credit toward the cost of the fix if you decide to go ahead with service.
                </li>
                <li>
                  <strong>Services Paid for:</strong> We don’t usually give refunds for services that have been done and accepted unless there is a clear error on our part.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">3. Policy for Refunds on Goods and Supplies</h2>
              <p className="leading-relaxed mb-4">
                For toner cartridges, ink, paper, drums, and repair kits, as well as other printer supplies and consumables:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Unopened / Unused Items:</strong> Returns allowed within 30 days of purchase with original packaging and receipt – full refund provided
                </li>
                <li>
                  <strong>Opened or installed items:</strong> Non-refundable unless defective upon receipt.
                </li>
                <li>
                  <strong>Products With Flaws:</strong> Within 90 days of purchase, we will replace or refund broken items at our discretion.
                </li>
                <li>
                  <strong>Special Order Items:</strong> You can’t get your money back for items that were carefully ordered for your equipment unless they are broken.
                </li>
                <li>
                  Customers are responsible for paying for the shipping costs to send back a qualified item unless the return is our fault or the item is broken.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">4. Managed Print/Service Contracts</h2>
              <p className="leading-relaxed mb-4">
                For customers who have signed up for managed print agreements or regular service contracts:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Your Service Agreement spells out the terms of the contract and how to end it.
                </li>
                <li>
                  Most contracts need to be broken with 30 days’ written notice.
                </li>
                <li>
                  If you end your deal early, you may have to pay fees.
                </li>
                <li>
                  A pro-rated refund may be given for prepaid contract amounts for service times that were not used.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">5. How to Get a Refund or Report a Problem</h2>
              <p className="leading-relaxed mb-4">
                To get a return or let us know about a problem with the service, please:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  You have 7 business days from the date of service or product receipt to get in touch with us.
                </li>
                <li>
                  Give your name, the date of service, the invoice number, and a brief statement of the problem.
                </li>
                <li>
                  Within two business days, our team will get back to you.
                </li>
                <li>
                  Within 5–10 business days, approved refunds are sent back to the original method of payment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Refund &amp; Cancellation Policy, please contact us at:
              </p>
              <p className="mt-4">
                <strong>SmartEprint Services</strong><br />
                878 Jefferson St<br />
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
