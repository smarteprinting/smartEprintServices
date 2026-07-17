

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

const quickBenefits = [
  {
    title: 'Convenient Scheduling',
    description: 'Choose an available appointment time that works for your home or business schedule.',
    icon: '📅'
  },
  {
    title: 'On-Site Assistance',
    description: 'A service professional visits your location to inspect the printer and determine the appropriate next steps.',
    icon: '🛠️'
  },
  {
    title: 'Clear Communication',
    description: 'We explain the issue, available service options, and expected charges before approved work begins.',
    icon: '💬'
  },
  {
    title: 'Home and Office Printers',
    description: 'Assistance is available for commonly used inkjet, laser, wireless, and multifunction printers.',
    icon: '🖨️'
  },
];

export default function HomePage() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-[#024AD8]/20 selection:text-[#024AD8]">
      <div className="relative left-1/2 w-screen -ml-[50vw]">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden min-h-[calc(80vh-80px)] flex flex-col justify-center py-12 lg:py-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/bg-hero.webp')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 via-white/50 to-slate-50/80" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full flex flex-col items-center">
            <div className="mx-auto max-w-4xl text-center">
              
              <div className="mb-6 inline-flex items-center justify-center rounded-full border border-[#024AD8]/20 bg-[#024AD8]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#024AD8] backdrop-blur-md">
                Professional Printer Support
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[4.5rem] lg:leading-[1.1] pb-2 drop-shadow-sm">
                On-Site Printer Service <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-slate-900 via-[#024AD8] to-[#024AD8] bg-clip-text text-transparent">
                  for Homes and Businesses
                </span>
              </h1>
              
              <p className="mt-8 text-[15.5px] leading-relaxed text-slate-600 sm:text-[17px] max-w-3xl mx-auto font-medium">
                From printer setup and connectivity problems to paper jams, error messages, and routine maintenance, Smart ePrint Services provides practical on-site assistance to help keep your printer working properly.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                <a className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-[#024AD8] px-9 py-4 text-[14px] font-bold text-white shadow-xl shadow-[#024AD8]/25 transition-all hover:scale-[1.02] hover:bg-blue-800 hover:shadow-2xl hover:shadow-[#024AD8]/40" href="/book-an-appointment">
                  <span>Book an Appointment</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
                <a className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/60 px-9 py-4 text-[14px] font-bold text-slate-700 backdrop-blur-md transition-all hover:border-[#024AD8]/30 hover:bg-white hover:text-[#024AD8] shadow-sm hover:shadow-md" href="/services">
                  View Our Services
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Quick Benefits Section */}
        <section className="relative z-20 px-6 lg:px-8 max-w-7xl mx-auto -mt-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickBenefits.map((benefit) => (
              <div key={benefit.title} className="group rounded-[24px] border border-white bg-white/70 backdrop-blur-xl p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_40px_rgb(2,74,216,0.08)] hover:border-[#024AD8]/10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-2xl shadow-sm border border-slate-100 group-hover:bg-[#024AD8]/5 group-hover:border-[#024AD8]/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-[15px] font-extrabold text-slate-900 tracking-tight group-hover:text-[#024AD8] transition-colors">{benefit.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-slate-500 font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#024AD8] uppercase mb-4 opacity-90">
            Find the Right Service for Your Printer
          </h3>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore Our Printer Services
          </h2>
          <div className="mt-6 text-[15px] text-slate-500 leading-relaxed space-y-3 font-medium">
            <p>
              Printers are used differently in every home and workplace. Some customers need help installing a new device, while others are dealing with connection errors, poor print quality, repeated paper jams, or an older printer that requires attention.
            </p>
            <p>
              Select the service category that best matches your requirement.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Printer Troubleshooting */}
          <div className="group flex flex-col rounded-[28px] border border-slate-200/60 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_rgb(2,74,216,0.06)] hover:border-[#024AD8]/30 transition-all duration-500 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-blue-700 text-white shadow-lg shadow-[#024AD8]/30 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#024AD8] transition-colors tracking-tight">Printer Troubleshooting</h3>
            <div className="mt-3.5 flex-1 space-y-2.5 text-[13.5px] text-slate-500 leading-relaxed font-medium">
              <p>We review common printer problems such as offline status, unresponsive devices, printing interruptions, error notifications, paper-feed concerns, and unexpected changes in printer performance.</p>
              <p>The purpose of the assessment is to understand the reported issue and identify practical next steps based on the printer model, condition, configuration, and available service options.</p>
            </div>
            <a href="/book-an-appointment" className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#024AD8] hover:text-blue-800 transition-colors group/btn">
              Book an Appointment
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          {/* Printer Installation and Setup */}
          <div className="group flex flex-col rounded-[28px] border border-slate-200/60 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_rgb(2,74,216,0.06)] hover:border-[#024AD8]/30 transition-all duration-500 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-blue-700 text-white shadow-lg shadow-[#024AD8]/30 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#024AD8] transition-colors tracking-tight">Printer Installation and Setup</h3>
            <div className="mt-3.5 flex-1 space-y-2.5 text-[13.5px] text-slate-500 leading-relaxed font-medium">
              <p>Setting up a printer involves more than connecting it to a power outlet. The printer may also need to be configured with a compatible computer, wireless network, mobile device, or office environment.</p>
              <p>Our setup services may include assistance with basic printer preparation, device connection, network configuration, compatible software setup, printer preferences, and test printing.</p>
            </div>
            <a href="/book-an-appointment" className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#024AD8] hover:text-blue-800 transition-colors group/btn">
              Book an Appointment
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          {/* Wireless and Network Assistance */}
          <div className="group flex flex-col rounded-[28px] border border-slate-200/60 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_rgb(2,74,216,0.06)] hover:border-[#024AD8]/30 transition-all duration-500 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-blue-700 text-white shadow-lg shadow-[#024AD8]/30 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#024AD8] transition-colors tracking-tight">Wireless and Network Assistance</h3>
            <div className="mt-3.5 flex-1 space-y-2.5 text-[13.5px] text-slate-500 leading-relaxed font-medium">
              <p>A printer may stop connecting after a router replacement, Wi-Fi password change, operating-system update, computer replacement, or network interruption.</p>
              <p>We help customers review common wireless and network configuration issues and reconnect compatible printers to supported computers or networks where possible.</p>
            </div>
            <a href="/book-an-appointment" className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#024AD8] hover:text-blue-800 transition-colors group/btn">
              Book an Appointment
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          {/* Printer Maintenance */}
          <div className="group flex flex-col rounded-[28px] border border-slate-200/60 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_rgb(2,74,216,0.06)] hover:border-[#024AD8]/30 transition-all duration-500 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-blue-700 text-white shadow-lg shadow-[#024AD8]/30 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#024AD8] transition-colors tracking-tight">Printer Maintenance</h3>
            <div className="mt-3.5 flex-1 space-y-2.5 text-[13.5px] text-slate-500 leading-relaxed font-medium">
              <p>Routine printer care can help reduce avoidable printing interruptions and identify visible signs of wear before they become more disruptive.</p>
              <p>Maintenance services may include accessible cleaning, paper-path checks, roller inspection, supply review, basic performance testing, and recommendations based on the printer’s condition.</p>
            </div>
            <a href="/book-an-appointment" className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#024AD8] hover:text-blue-800 transition-colors group/btn">
              Book an Appointment
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          {/* Home Printer Services */}
          <div className="group flex flex-col rounded-[28px] border border-slate-200/60 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_rgb(2,74,216,0.06)] hover:border-[#024AD8]/30 transition-all duration-500 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-blue-700 text-white shadow-lg shadow-[#024AD8]/30 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#024AD8] transition-colors tracking-tight">Home Printer Services</h3>
            <div className="mt-3.5 flex-1 space-y-2.5 text-[13.5px] text-slate-500 leading-relaxed font-medium">
              <p>Home printers are commonly used for schoolwork, personal documents, remote work, forms, photographs, and everyday printing.</p>
              <p>We assist residential customers with new printer setup, connection problems, paper handling, print-quality concerns, scanning configuration, and other common printer-related requirements.</p>
            </div>
            <a href="/book-an-appointment" className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#024AD8] hover:text-blue-800 transition-colors group/btn">
              Book an Appointment
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          {/* Business Printer Services */}
          <div className="group flex flex-col rounded-[28px] border border-slate-200/60 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_rgb(2,74,216,0.06)] hover:border-[#024AD8]/30 transition-all duration-500 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-blue-700 text-white shadow-lg shadow-[#024AD8]/30 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#024AD8] transition-colors tracking-tight">Business Printer Services</h3>
            <div className="mt-3.5 flex-1 space-y-2.5 text-[13.5px] text-slate-500 leading-relaxed font-medium">
              <p>Reliable printing is important for invoices, customer records, reports, contracts, labels, shipping documents, and daily office operations.</p>
              <p>Smart ePrint Services works with offices and businesses that need help with printer setup, workstation connections, device configuration, recurring maintenance, or common printing interruptions.</p>
            </div>
            <a href="/book-an-appointment" className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#024AD8] hover:text-blue-800 transition-colors group/btn">
              Book an Appointment
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 relative">
        <div className="absolute top-1/2 left-0 -ml-32 -mt-32 h-64 w-64 rounded-full bg-[#024AD8]/5 blur-3xl -z-10 pointer-events-none"></div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative">
            <div className="absolute -left-6 top-2 h-20 w-1 bg-[#024AD8] rounded-r-full"></div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#024AD8] uppercase mb-4 opacity-90">What We Offer</h3>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Practical Printer Assistance at Your Location
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[15px] text-slate-500 leading-relaxed font-medium">
            <p className="text-lg text-slate-700 font-semibold leading-relaxed">Printer problems can interrupt work, delay important documents, and create unnecessary frustration. Smart ePrint Services helps home users, professionals, and businesses resolve common printer issues without requiring them to transport bulky equipment to a service location.</p>
            <div className="h-px w-20 bg-slate-200 my-6"></div>
            <p>Our services may include printer setup, basic troubleshooting, wireless configuration, print-quality checks, paper-feed inspection, driver guidance, scanning setup, preventive maintenance, and other printer-related assistance.</p>
            <p>Every service request is different. The exact solution depends on the printer model, age, condition, availability of compatible parts, and the nature of the problem. Our goal is to provide a clear assessment and practical recommendation based on the condition of the equipment.</p>
          </div>
        </div>
      </section>

      {/* How Our On-Site Printer Service Works */}
      <section className="relative overflow-hidden bg-white py-14 border-y border-slate-100">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-slate-50/50 -z-10 skew-x-[-20deg] transform origin-top hidden lg:block"></div>
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#024AD8] uppercase mb-4 opacity-90">Process</h3>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              How Our On-Site Printer Service Works
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5 relative z-10">
            {[
              { num: '1', title: 'Submit Your Request', desc: 'Call us or complete the appointment form with your contact details, printer model, location, and a short description of the issue.' },
              { num: '2', title: 'Confirm the Appointment', desc: 'Our team reviews your request and contacts you to confirm service availability, appointment timing, and any information needed before the visit.' },
              { num: '3', title: 'On-Site Inspection', desc: 'A service professional visits the confirmed location, inspects the printer, and explains the likely cause of the problem.' },
              { num: '4', title: 'Approve the Service', desc: 'You receive an explanation of the recommended work and applicable charges. No additional work should begin without your approval.' },
              { num: '5', title: 'Service and Testing', desc: 'After approval, the service professional completes the agreed work and tests the printer where possible.' },
            ].map((step, idx) => (
              <div key={idx} className="relative group flex flex-col rounded-[24px] bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-[#024AD8]/10 border border-slate-100 hover:border-[#024AD8]/20 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-[#024AD8] font-black text-xl shadow-sm border border-slate-100 group-hover:bg-[#024AD8] group-hover:text-white group-hover:border-[#024AD8] transition-colors">
                  {step.num}
                </div>
                <h4 className="text-[16px] font-extrabold text-slate-900 mb-2.5 tracking-tight group-hover:text-[#024AD8] transition-colors">{step.title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed flex-1 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Smart ePrint Services? */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 relative">
        <div className="absolute bottom-0 right-0 -mr-32 -mb-32 h-64 w-64 rounded-full bg-[#024AD8]/5 blur-3xl -z-10 pointer-events-none"></div>
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#024AD8] uppercase mb-4 opacity-90">Benefits</h3>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Choose Smart ePrint Services?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Local and Convenient Service', desc: 'We provide appointment-based service for customers in Blaine and nearby areas, subject to availability.', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', extraIcon: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
            { title: 'Clear Service Process', desc: 'We gather the required information before the visit so the service professional arrives with a better understanding of the issue.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
            { title: 'Upfront Communication', desc: 'The issue, recommended service, and applicable charges are explained before approved work begins.', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
            { title: 'Home and Business Assistance', desc: 'Our services are suitable for home offices, remote workers, small businesses, professional offices, and other workplaces that depend on reliable printing.', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
            { title: 'Customer-Focused Approach', desc: 'We take time to understand the problem, answer relevant questions, and explain the next steps in straightforward language.', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5' },
          ].map((item, idx) => (
            <div key={idx} className="group flex gap-5 p-7 rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-[0_20px_40px_rgb(2,74,216,0.06)] hover:border-[#024AD8]/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#024AD8] border border-slate-100 group-hover:bg-[#024AD8] group-hover:border-[#024AD8] group-hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                  {item.extraIcon && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.extraIcon} />}
                </svg>
              </div>
              <div>
                <h4 className="text-[15px] font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#024AD8] transition-colors">{item.title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="mx-auto max-w-5xl px-6 py-10 pb-16 sm:px-8 lg:px-10">
        <div className="rounded-[40px] bg-gradient-to-br from-[#024AD8] to-blue-900 px-8 py-16 text-center sm:px-16 shadow-[0_30px_60px_rgba(2,74,216,0.3)] relative overflow-hidden group">
          {/* animated background decorations */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-white/10 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-white/10 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white sm:text-4xl tracking-tight drop-shadow-sm">Need Help With a Printer?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] text-blue-100/90 leading-relaxed font-medium">
              Tell us what is happening, provide your printer model, and choose a convenient appointment time. Our team will review your request and contact you to confirm the next steps.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <a href="/book-an-appointment" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[14px] font-bold text-[#024AD8] hover:bg-slate-50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-black/10">
                Book an Appointment
              </a>
              <a href="tel:+18777652289" className="inline-flex items-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-[14px] font-bold text-white hover:bg-white/20 hover:border-white/50 transition-all">
                <svg className="mr-2.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +1 (877)765-2289
              </a>
              <a href="mailto:support@smarteprintservices.com" className="inline-flex items-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-[14px] font-bold text-white hover:bg-white/20 hover:border-white/50 transition-all">
                <svg className="mr-2.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
}
