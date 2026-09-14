import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import ContactForm from "./ContactForm";
import StandardCTA from "./StandardCTA";

const contactOptions = [
  { icon: Phone, label: "Call our team", value: "+1 (877) 765-2289", href: "tel:+18777652289" },
  { icon: Mail, label: "Send an email", value: "support@smarteprintservices.com", href: "mailto:support@smarteprintservices.com" },
];

export default function PremiumContactPage() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      <section className="relative isolate border-b border-blue-950/10 bg-[#061d39]">
        <div className="absolute inset-0 -z-10 bg-[url('/customer-care.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,#061d39_10%,rgba(6,29,57,.9)_52%,rgba(6,29,57,.46))]" />
        <div className="mx-auto grid min-h-[360px] max-w-7xl items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-100"><span className="h-2 w-2 rounded-full bg-[#65adff]" /> Contact Smart ePrint</span>
            <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">Let&apos;s solve the<br /><span className="text-[#65adff]">next problem.</span></h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-blue-100/80 sm:text-lg">Tell us what is happening with your printer or technology. We will help you understand the next practical step.</p>
          </div>
          <div className="hidden justify-end lg:flex"><div className="max-w-xs rounded-[26px] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-md"><ShieldCheck size={28} className="text-[#65adff]" /><p className="mt-5 text-lg font-black">Clear answers. Helpful service.</p><p className="mt-2 text-sm leading-6 text-blue-100/75">Reach out for scheduling, support questions, or guidance for your home or workplace.</p></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#0758cf]">Start a conversation</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#10233d] sm:text-4xl">We&apos;re easy to reach.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">Whether you need printer setup, troubleshooting, a service estimate, or help choosing the right next step, send us a note or use one of the direct options below.</p>

            <div className="mt-8 space-y-3">{contactOptions.map(({ icon: Icon, label, value, href }) => <a key={label} href={href} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#0758cf] transition group-hover:bg-[#0758cf] group-hover:text-white"><Icon size={19} /></span><span><span className="block text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{label}</span><span className="mt-1 block text-sm font-extrabold text-[#10233d] group-hover:text-[#0758cf]">{value}</span></span><ArrowRight size={16} className="ml-auto text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0758cf]" /></a>)}</div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-5"><MapPin size={19} className="text-[#0758cf]" /><p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-slate-400">Service location</p><p className="mt-2 text-sm font-bold leading-6 text-[#10233d]">11397 Quincy St NE<br />Blaine, Minnesota 55434</p></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><Clock3 size={19} className="text-[#0758cf]" /><p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-slate-400">Response</p><p className="mt-2 text-sm font-bold leading-6 text-[#10233d]">Tell us what you need and our team will follow up as soon as possible.</p></div></div>
          </div>

          <div className="lg:sticky lg:top-24"><ContactForm /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10"><div className="flex flex-col justify-between gap-5 rounded-[26px] bg-[#eaf2ff] p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">Prefer to schedule directly?</p><h2 className="mt-2 text-2xl font-black text-[#10233d]">Book an appointment online.</h2></div><Link href="/book-an-appointment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0758cf] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#0647a8]">Schedule service <ArrowRight size={16} /></Link></div></section>
      <StandardCTA />
    </main>
  );
}
