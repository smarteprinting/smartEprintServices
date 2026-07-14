import ConsultationSection from "./components/home/ConsultationSection";
import WhyChooseUs from "./components/WhyChooseUs";
import BlogSection from "./components/BlogSection";
const services = [
  {
    title: 'Computer Assistance',
    description: 'Reliable setup, troubleshooting, repair, and support for desktops, laptops, and everyday office technology.',
  },
  {
    title: 'Printer Assistance',
    description: 'Fast installation, maintenance, and printer troubleshooting for homes and businesses.',
  },
  {
    title: 'Smart Home Assistance',
    description: 'Setup and support for connected devices, smart systems, and home technology.',
  },
  {
    title: 'TV Mounting',
    description: 'Clean, secure installation and setup for televisions, displays, and entertainment systems.',
  },
];

const quickFacts = [
  'On-site visits for homes and businesses',
  'Support for printers, computers, smart devices, and appliances',
  'On-site service with clear communication',
];

const heroHighlights = [
  'On-site help for computers, printers, and smart devices',
  'Consultation before scheduling any on-site visit',
  'Appointments scheduled based on your availability',
];

export default function HomePage() {
  return (
    <>
      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <section
          className="relative overflow-hidden"
          style={{
  backgroundImage: "url('/bg-hero.png')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}}
        >
          <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center">
            <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-2xl text-white">
                <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-100 backdrop-blur-md">
                  SmartEprint Services
                </p>
                <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
                  On-site support for printers, computers, and home appliances.
                </h1>
                <p className="mt-5 max-w-xl text-lg text-slate-100/90 sm:text-xl">
                  We help with setup, troubleshooting, and maintenance, bringing tech and appliance support right to your door.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5" href="/book-an-appointment">
                    Book an Appointment
                  </a>
                  <a className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20" href="/services">
                    Explore Services
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {quickFacts.map((item) => (
                    <span key={item} className="rounded-full border border-white/20 bg-slate-950/20 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-[0_20px_60px_rgba(1,16,33,0.28)] backdrop-blur-xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <img
                      src="/svg-icon.png"
                      alt="Service icon"
                      className="h-12 w-12 rounded-2xl border border-white/20 bg-white/10 p-2 object-contain shadow-sm backdrop-blur-md"
                    />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">
                        Why clients choose us
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                        Simple and reliable on-site service.
                      </h2>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-3 text-center">
                    <span className="text-3xl font-black text-white">24/7</span>
                  </div>
                </div>

              

                <ul className="mt-6 space-y-3">
                  {heroHighlights.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-white/15 bg-slate-950/20 px-4 py-3 text-sm text-slate-100">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-cyan-300/30 bg-slate-950/20 p-4">
                  <p className="text-sm text-slate-200">Need immediate support?</p>
                  <a href="tel:+16518154630" className="mt-2 block text-lg font-semibold text-white">
                    +1 (651) 815-4630
                  </a>
                  <a href="mailto:support@smarteprintservices.com" className="mt-1 block text-sm text-slate-100/80">
                    support@smarteprintservices.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Printing Support for Your Business
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We help with printer setup, troubleshooting, and network connections for your business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-300/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-50 to-transparent transition-opacity"></div>
            
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#024AD8] group-hover:bg-[#024AD8]/90 transition-all">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.79v2h-4v-3.35L6.5 7h3v-2h4v3.29z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Printer Support & Maintenance</h3>
              <p className="mt-3 text-sm text-slate-600">
                Printer setup, troubleshooting, and maintenance.
              </p>
              <a href="/book-an-appointment" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 group/link">
                Book Now
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="group relative rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-300/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-50 to-transparent transition-opacity"></div>
            
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#024AD8] group-hover:bg-[#024AD8]/90 transition-all">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Multifunction Device Setup</h3>
              <p className="mt-3 text-sm text-slate-600">
                Configuration of multifunction printers for scanning, copying, and faxing.
              </p>
              <a href="/book-an-appointment" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 group/link">
                Book Now
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="group relative rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-300/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-50 to-transparent transition-opacity"></div>
            
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#024AD8] group-hover:bg-[#024AD8]/90 transition-all">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Network Printing Solutions</h3>
              <p className="mt-3 text-sm text-slate-600">
                Setup and troubleshooting for wireless printing, cloud, and network connections.
              </p>
              <a href="/book-an-appointment" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 group/link">
                Book Now
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="group relative rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-300/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-50 to-transparent transition-opacity"></div>
            
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#024AD8] group-hover:bg-[#024AD8]/90 transition-all">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Document Management Services</h3>
              <p className="mt-3 text-sm text-slate-600">
                Help with digital documents, workflows, and simple office setup.
              </p>
              <a href="/book-an-appointment" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 group/link">
                Book Now
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="group relative rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-300/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-50 to-transparent transition-opacity"></div>
            
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#024AD8] group-hover:bg-[#024AD8]/90 transition-all">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Print Fleet Management</h3>
              <p className="mt-3 text-sm text-slate-600">
                Management and monitoring for multiple printers and office setups.
              </p>
              <a href="/book-an-appointment" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 group/link">
                Book Now
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="group relative rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-300/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-50 to-transparent transition-opacity"></div>
            
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#024AD8] group-hover:bg-[#024AD8]/90 transition-all">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5 2c-1.93 0-3.5 1.57-3.5 3.5v13c0 1.93 1.57 3.5 3.5 3.5h9c1.93 0 3.5-1.57 3.5-3.5v-13c0-1.93-1.57-3.5-3.5-3.5h-9zm0 2h9c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5zm2 10h5v2H9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Supplies & Toner Management</h3>
              <p className="mt-3 text-sm text-slate-600">
                Help with printer supplies, toner cartridges, and basic maintenance.
              </p>
              <a href="/book-an-appointment" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 group/link">
                Book Now
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

     

      <ConsultationSection />
<section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24">
  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#024AD8]/10 blur-3xl" />
    <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#024AD8]/10 px-5 py-2 text-sm font-semibold text-[#024AD8]">
        OUR APPROACH
      </span>

      <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
        Smart Technology &
        <span className="text-[#024AD8]"> Appliance Assistance</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        At <strong>SmartEprint Services</strong>, every service begins with a
        consultation. We understand your equipment, environment, and service
        needs before coordinating an on-site visit that fits your schedule.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-[#024AD8] hover:shadow-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#024AD8]/10">
          🏠
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Home & Business Support
        </h3>

        <p className="mt-3 text-slate-600 leading-7">
          Coordinated assistance for residential homes, offices, retail stores,
          and commercial environments with flexible appointment scheduling.
        </p>
      </div>

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-[#024AD8] hover:shadow-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#024AD8]/10">
          📅
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Consultation First
        </h3>

        <p className="mt-3 text-slate-600 leading-7">
          Every request starts with understanding your requirements before
          arranging a technician visit, ensuring the right solution from the
          beginning.
        </p>
      </div>

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-[#024AD8] hover:shadow-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#024AD8]/10">
          🛠️
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          On-Site Assistance
        </h3>

        <p className="mt-3 text-slate-600 leading-7">
          On-site support for printers, computers, networking,
          smart devices, and a wide range of technology and appliance products.
        </p>
      </div>

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-[#024AD8] hover:shadow-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#024AD8]/10">
          🤝
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Independent Service Coordination
        </h3>

        <p className="mt-3 text-slate-600 leading-7">
          We coordinate independent technology assistance focused on your needs,
          providing clear communication and a customer-first experience.
        </p>
      </div>

    </div>

    {/* Divider */}
    <div className="my-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

    {/* HOW IT WORKS */}
    <div className="text-center">

      <span className="inline-flex rounded-full bg-[#024AD8]/10 px-5 py-2 text-sm font-semibold text-[#024AD8]">
        HOW IT WORKS
      </span>

      <h2 className="mt-5 text-4xl font-bold text-slate-900">
        A Simple Process Built Around You
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
        Our consultation process helps ensure every visit is planned
        according to your equipment, location, and service requirements.
      </p>

    </div>

    <div className="relative mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">

      {/* Step */}
      {[
        {
          number: "01",
          title: "Request a Consultation",
          desc: "Tell us about your technology or appliance concern. The more information you provide, the better we can prepare for your request."
        },
        {
          number: "02",
          title: "Personalised Service Review",
          desc: "Our team reviews your request, discusses available service options, and schedules an appointment based on availability."
        },
        {
          number: "03",
          title: "On-Site Visit",
          desc: "A technician visits your location to inspect the equipment, explain findings, and outline available service options."
        },
        {
          number: "04",
          title: "Support & Follow-Up",
          desc: "Once assistance is completed, we provide recommendations and guidance to help keep your equipment operating efficiently."
        }
      ].map((step) => (
        <div
          key={step.number}
          className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-[#024AD8] hover:shadow-2xl"
        >
          <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#024AD8] text-lg font-bold text-white shadow-lg">
            {step.number}
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-bold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {step.desc}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
<section className="relative overflow-hidden bg-white py-24">
  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#024AD8]/10 blur-3xl"></div>
    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl"></div>
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* LEFT CONTENT */}

      <div>

        <span className="inline-flex rounded-full bg-[#024AD8]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#024AD8]">
          WHY CHOOSE US
        </span>

        <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          Where Service Comes to You—
          <span className="text-[#024AD8]">
            {" "}On Site, On Time, On Point
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Every request begins with a consultation to understand your equipment and issues. We arrange on-site help based on your situation, location, and needs.
        </p>

        <div className="mt-10 space-y-5">

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#024AD8]/10 text-xl">
              ✓
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Personalized Service Planning
              </h4>

              <p className="mt-1 text-slate-600">
                Every request is reviewed individually to coordinate the most
                appropriate service based on your equipment and location.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#024AD8]/10 text-xl">
              ✓
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900">
                On-Site Assistance
              </h4>

              <p className="mt-1 text-slate-600">
                Technicians visit your location to check your equipment and explain the best service options.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#024AD8]/10 text-xl">
              ✓
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Transparent Customer Experience
              </h4>

              <p className="mt-1 text-slate-600">
                Clear communication, flexible scheduling, and dependable
                support from consultation through service completion.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="relative">

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_35px_80px_rgba(2,74,216,0.12)]">

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#024AD8] hover:bg-white hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#024AD8]/10 text-2xl">
                📅
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Consultation First
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                We begin by understanding your situation before scheduling any
                on-site assistance.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#024AD8] hover:bg-white hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#024AD8]/10 text-2xl">
                🚚
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                On-Site Support
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Convenient service delivered directly to your home or workplace
                whenever possible.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#024AD8] hover:bg-white hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#024AD8]/10 text-2xl">
                🛡️
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Trusted Process
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Every service request follows a structured process designed for
                quality, transparency, and convenience.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#024AD8] hover:bg-white hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#024AD8]/10 text-2xl">
                🤝
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Customer Focused
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Recommendations are tailored to your equipment, environment,
                and long-term service needs.
              </p>
            </div>

          </div>
        </div>

        {/* Floating Stats */}

       
        <div className="absolute -right-8 bottom-10 hidden rounded-3xl bg-[#024AD8] px-8 py-6 text-white shadow-2xl lg:block">
          <p className="text-4xl font-black">24/7</p>
          <p className="mt-2 text-sm text-blue-100">
            Appointment Support
          </p>
        </div>

      </div>

    </div>
  </div>
</section>
 <BlogSection />
    </>
  );
}
