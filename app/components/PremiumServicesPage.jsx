import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
  FileText,
  Home,
  Printer,
  Search,
  Settings,
  Wifi,
  Wrench,
} from "lucide-react";
import StandardCTA from "./StandardCTA";

const services = [
  { id: "setup", title: "Setup and installation", short: "Get a new or relocated printer connected, configured, and ready to work.", icon: Wrench, points: ["New printer configuration", "Wi-Fi, USB, and computer setup", "Print and scan testing"] },
  { id: "troubleshooting", title: "Printer troubleshooting", short: "Resolve offline devices, blocked queues, error messages, and interrupted printing.", icon: AlertCircle, points: ["Printer not responding", "Offline and queue issues", "Error and connection diagnosis"] },
  { id: "network", title: "Wireless and network help", short: "Reconnect compatible printers after router, password, or computer changes.", icon: Wifi, points: ["Wi-Fi reconnection", "Shared printer configuration", "Wireless printing tests"] },
  { id: "paper", title: "Paper-feed assistance", short: "Find the cause of repeated jams, angled feeds, and multiple-page feeding.", icon: FileText, points: ["Paper-path review", "Tray and roller inspection", "Paper size and type checks"] },
  { id: "quality", title: "Print-quality assistance", short: "Improve faded text, streaks, smudges, blank areas, and uneven color output.", icon: Settings, points: ["Cleaning and alignment checks", "Supply-level review", "Print-quality testing"] },
  { id: "scanner", title: "Scanner and all-in-one setup", short: "Make printing and scanning work together across compatible devices.", icon: Search, points: ["Scan-to-computer setup", "Document feeder testing", "File format guidance"] },
  { id: "maintenance", title: "Preventive maintenance", short: "Keep frequently used printers in better working condition with practical care.", icon: Printer, points: ["Accessible interior cleaning", "Paper-path and roller review", "Visible wear assessment"] },
  { id: "assessment", title: "Printer assessment", short: "Understand whether service, supplies, or replacement makes the most sense.", icon: Check, points: ["Condition and age review", "Supply availability", "Practical replacement guidance"] },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <a href={`#${service.id}`} className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(10,38,72,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(2,74,216,0.12)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf2ff] text-[#0758cf] transition group-hover:bg-[#0758cf] group-hover:text-white"><Icon size={22} /></div>
        <span className="text-xs font-black tracking-[0.2em] text-slate-300">0{index + 1}</span>
      </div>
      <h3 className="mt-6 text-lg font-extrabold tracking-tight text-[#10233d] group-hover:text-[#0758cf]">{service.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#0758cf]">Explore service <ArrowRight size={14} className="transition group-hover:translate-x-1" /></span>
    </a>
  );
}

export default function PremiumServicesPage() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      <section className="relative isolate border-b border-blue-950/10 bg-[#061d39]">
        <div className="absolute inset-0 -z-10 bg-[url('/printer-support-hero1.png')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,#061d39_12%,rgba(6,29,57,.9)_48%,rgba(6,29,57,.42))]" />
        <div className="mx-auto grid min-h-[480px] max-w-7xl items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-100"><span className="h-2 w-2 rounded-full bg-[#55a2ff]" /> Printer support, made practical</span>
            <h1 className="mt-7 text-4xl font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">A printer should<br /><span className="text-[#65adff]">just work.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8">From first-time setup to stubborn offline errors, Smart ePrint Services brings calm, practical help to homes and workplaces across the United States.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/book-an-appointment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-extrabold text-[#0758cf] shadow-xl transition hover:-translate-y-0.5">Book an appointment <ArrowRight size={17} /></Link><a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10">View services</a></div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/15 pt-6 text-white"><div><p className="text-2xl font-black">8+</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-blue-200/70">Service areas</p></div><div><p className="text-2xl font-black">Home</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-blue-200/70">And business</p></div><div><p className="text-2xl font-black">Clear</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-blue-200/70">Next steps</p></div></div>
          </div>
          <div className="hidden lg:block"><div className="relative ml-auto max-w-[390px] rounded-[30px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md"><img src="/printer-support-hero.png" alt="Printer support equipment" className="h-[390px] w-full rounded-[22px] object-cover" /><div className="absolute -bottom-7 -left-7 max-w-[230px] rounded-2xl border border-slate-200 bg-white p-5 shadow-xl"><p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0758cf]">The Smart ePrint approach</p><p className="mt-2 text-sm font-bold leading-5 text-[#10233d]">Understand the issue. Explain the options. Get you moving.</p></div></div></div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-10 lg:flex-row lg:items-end"><div><p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#0758cf]">Services, without the jargon</p><h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#10233d] sm:text-5xl">Focused help for the problems people actually face.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500">Choose a starting point below. Every service is shaped around your printer, environment, and desired outcome.</p></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}</div>
      </section>

      {services.slice(0, 6).map((service, index) => {
        const Icon = service.icon;
        return <section id={service.id} key={service.id} className={`scroll-mt-24 border-t border-slate-200 ${index % 2 ? "bg-white" : "bg-[#edf4ff]"}`}><div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:px-10 lg:py-20"><div><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0758cf] text-white shadow-lg shadow-blue-900/15"><Icon size={25} /></div><p className="mt-6 text-[10px] font-black uppercase tracking-[0.22em] text-[#0758cf]">Service {String(index + 1).padStart(2, "0")}</p><h2 className="mt-3 text-3xl font-black tracking-tight text-[#10233d] sm:text-4xl">{service.title}</h2><p className="mt-4 max-w-md text-base leading-7 text-slate-600">{service.short}</p><Link href="/book-an-appointment" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#0758cf]">Request this service <ArrowRight size={16} /></Link></div><div className="grid gap-3 sm:grid-cols-3">{service.points.map((point) => <div key={point} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"><Check size={18} className="text-[#0758cf]" /><p className="mt-4 text-sm font-bold leading-5 text-[#10233d]">{point}</p></div>)}</div></div></section>;
      })}

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:px-10"><div className="relative overflow-hidden rounded-[30px] bg-[#0758cf] p-8 text-white sm:p-10"><Home size={34} className="text-blue-200" /><h2 className="mt-8 text-3xl font-black">For your home</h2><p className="mt-4 max-w-md leading-7 text-blue-100">Get your home printer connected, understood, and ready for school, work, forms, and everyday life.</p><Link href="/book-an-appointment" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#0758cf]">Book home service <ArrowRight size={16} /></Link></div><div className="relative overflow-hidden rounded-[30px] bg-[#10233d] p-8 text-white sm:p-10"><Building2 size={34} className="text-blue-300" /><h2 className="mt-8 text-3xl font-black">For your business</h2><p className="mt-4 max-w-md leading-7 text-slate-300">Keep office printers, scanners, and shared devices dependable without adding more technical noise to your day.</p><Link href="/book-an-appointment" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#65adff] px-5 py-3 text-sm font-extrabold text-[#10233d]">Request business help <ArrowRight size={16} /></Link></div></section>
      <StandardCTA />
    </main>
  );
}
