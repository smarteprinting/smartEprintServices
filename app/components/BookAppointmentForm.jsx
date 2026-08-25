"use client";

import { useState } from "react";
import { ArrowRight, User, Phone, Mail, ChevronDown, MessageSquare, Wrench } from "lucide-react";
import Turnstile from "../../components/Turnstile";

const serviceOptions = [
  "Printer Setup & Installation",
  "Printer Troubleshooting & Repair",
  "Computer Support",
  "Network & Wi-Fi Setup",
  "Smart Home Device Assistance",
  "Home Appliance Help",
  "Business Printing Solutions",
  "General Consultation",
];

export default function BookAppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    description: "",
  });
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    if (!turnstileToken) {
      setStatus("error");
      setStatusMessage("Please complete the security check and try again.");
      return;
    }

    try {
      const response = await fetch("/api/book-appointment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, turnstileToken, honeypot }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          serviceType: "",
          description: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.message);
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-[#024AD8]/8 w-full">
      {/* Decorative colored bar on top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#024AD8] via-[#0B63F6] to-[#3B82F6]" />

      {/* Decorative corner accent */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#024AD8]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#0B63F6]/5 blur-3xl pointer-events-none" />

      {statusMessage && (
        <div
          className={`mb-5 rounded-xl p-4 text-center text-sm font-medium transition-all duration-300 ${
            status === "success"
              ? "bg-green-50 text-green-800 border border-green-200 shadow-sm"
              : status === "error"
              ? "bg-red-50 text-red-800 border border-red-200 shadow-sm"
              : ""
          }`}
        >
          {statusMessage}
        </div>
      )}

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
        <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
          <label htmlFor="appointment-website">Website</label>
          <input id="appointment-website" type="text" name="honeypot" tabIndex="-1" autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </div>
        <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
          <Turnstile onToken={setTurnstileToken} />
        </div>
        {/* Full Name */}
        <div className="relative">
          <label className="mb-1.5 block text-[12px] font-semibold text-gray-600 uppercase tracking-wide">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-300" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="relative">
          <label className="mb-1.5 block text-[12px] font-semibold text-gray-600 uppercase tracking-wide">Phone Number *</label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-300" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="relative">
          <label className="mb-1.5 block text-[12px] font-semibold text-gray-600 uppercase tracking-wide">Email Address *</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-300" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal"
            />
          </div>
        </div>

        {/* Service Type */}
        <div className="relative">
          <label className="mb-1.5 block text-[12px] font-semibold text-gray-600 uppercase tracking-wide">Service Type *</label>
          <div className="relative">
            <Wrench className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-300 pointer-events-none" />
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 pl-10 pr-10 py-3 text-sm outline-none appearance-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal cursor-pointer"
            >
              <option value="" disabled>Select Service</option>
              {serviceOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-400 transition-colors duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Describe Your Requirements */}
        <div className="sm:col-span-2 relative">
          <label className="mb-1.5 block text-[12px] font-semibold text-gray-600 uppercase tracking-wide">Describe Your Requirements</label>
          <div className="relative">
            <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400 transition-colors duration-300" />
            <textarea
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about your equipment or the assistance you need?"
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 mt-1">
          <button
            type="submit"
            disabled={status === "loading"}
            className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#024AD8] to-[#0B63F6] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#024AD8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#024AD8]/30 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "loading" ? "Sending..." : "Request Consultation"}
            {status !== "loading" && (
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
