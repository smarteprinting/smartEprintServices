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
                Refund &
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Cancellation Policy
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Appointment Cancellation</h2>
              <p className="leading-relaxed mb-4">
                <strong>Full Refund:</strong> Cancellations made 48 hours or more before your scheduled appointment will receive a full refund of any deposits or payments made.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>50% Refund:</strong> Cancellations made 24-47 hours before your scheduled appointment will receive a 50% refund of the appointment fee.
              </p>
              <p className="leading-relaxed">
                <strong>No Refund:</strong> Cancellations made less than 24 hours before your scheduled appointment will not receive a refund. This cancellation fee helps us manage our scheduling and technician availability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Satisfaction Guarantee</h2>
              <p className="leading-relaxed">
                If you are not satisfied with the service provided, you must notify us within 48 hours of service completion. We will attempt to resolve any issues to your satisfaction. If we cannot resolve the issue, we will issue a refund for the service charge (labor only, not parts).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. No-Show Policy</h2>
              <p className="leading-relaxed">
                If you are not present at your scheduled appointment time and do not contact us to reschedule, you will be charged the full appointment fee. We consider this a no-show if you fail to cancel at least 24 hours before your scheduled time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Parts and Materials</h2>
              <p className="leading-relaxed">
                Refunds for parts and materials are not provided unless the part is defective or fails within 30 days of installation. In such cases, we will replace the part at no charge. If you wish to return materials purchased through us within 30 days of purchase, a 15% restocking fee may apply.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Methods and Refunds</h2>
              <p className="leading-relaxed">
                Refunds will be issued to the original payment method used for the appointment or purchase. For credit card payments, refunds may take 3-5 business days to appear in your account, depending on your bank.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Rescheduling</h2>
              <p className="leading-relaxed">
                If you need to reschedule your appointment, please contact us at least 24 hours before your scheduled time. We will do our best to accommodate your new preferred time. Rescheduling does not incur any additional fees.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Emergency Service Cancellations</h2>
              <p className="leading-relaxed">
                Emergency services have different cancellation terms. If you request emergency service and then cancel, a service call fee will apply even if we are unable to provide the service. This fee compensates for our technician's time and travel.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Warranty on Services</h2>
              <p className="leading-relaxed">
                We warrant that all work performed by our technicians will be done in a professional and workmanlike manner. If there are issues with the work performed, please contact us within 30 days and we will address the problem at no additional cost.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Non-Refundable Items</h2>
              <p className="leading-relaxed mb-4">
                The following items are generally non-refundable:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Diagnostic fees (unless we determine the issue is not fixable and you choose not to proceed)</li>
                <li>Travel charges</li>
                <li>Time spent on site before determining that service is needed</li>
                <li>Software licenses or digital products</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
              <p className="leading-relaxed">
                In case of a dispute regarding refunds or cancellations, please contact us at <a href="mailto:info@smarteprintservices.com" className="text-[#024AD8] font-semibold">info@smarteprintservices.com</a> or call <a href="tel:+18887154577" className="text-[#024AD8] font-semibold">+1 (888) 715-4577</a>. We will work with you to resolve any concerns within 10 business days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We reserve the right to modify this Refund & Cancellation Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes your acceptance of the modified policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Refund & Cancellation Policy, please contact us at:
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
