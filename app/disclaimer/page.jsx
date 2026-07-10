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
          <div className="prose prose-lg text-gray-600">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General</h2>
              <p className="leading-relaxed">
                The information provided by SmartEprint Services ("we," "us," "our") on this website is for general informational purposes only. All information on this site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Professional Advice Disclaimer</h2>
              <p className="leading-relaxed">
                The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. External Links Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                The site may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              <p className="leading-relaxed">
                The inclusion of any links does not imply endorsement, approval, or agreement with the views expressed within them. The content of linked sites may change without notice. We are not responsible for the content or practices of any third-party sites or services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Errors and Omissions Disclaimer</h2>
              <p className="leading-relaxed">
                While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, we are not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided "as is" with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fair Use Notice</h2>
              <p className="leading-relaxed">
                This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of services, technologies, etc. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. No Liability Disclaimer</h2>
              <p className="leading-relaxed">
                Under no circumstances shall we be liable for any direct, indirect, special, incidental, consequential, or punitive damages arising out of or in connection with your access to or use of, or inability to access or use, the site or any content on the site. This liability limitation applies whether or not the damages were foreseeable, and whether or not we were advised of the possibility of such damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Services Disclaimer</h2>
              <p className="leading-relaxed">
                While we strive to provide quality service, we cannot guarantee specific results from any service. All service descriptions, photographs, costs, benefits, and availability of services are subject to change without notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Personal Responsibility</h2>
              <p className="leading-relaxed">
                By using this website or our services, you acknowledge and agree that you accept personal responsibility for your actions, and the outcomes of any actions you take as a result of information provided on the website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates</h2>
              <p className="leading-relaxed">
                We may update this disclaimer from time to time. Any changes will be posted on this page. The date of the last update will be indicated at the top of this page.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Disclaimer, please contact us at:
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
