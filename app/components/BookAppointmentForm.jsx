"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    serviceType: "Select Service",
    description: "",
  });
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

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

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          serviceType: "Select Service",
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
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-7">
      <span className="inline-flex rounded-full bg-[#024AD8]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#024AD8]">
        Request a Consultation
      </span>
      <h2 className="mt-3 text-xl font-extrabold text-gray-900 sm:text-2xl">Let's Get Started</h2>
      <p className="mt-2 text-sm text-gray-600">
        Tell us about your requirements, and we'll contact you to discuss suitable on-site assistance.
      </p>

      {statusMessage && (
        <div
          className={`mt-4 rounded-lg p-4 text-center font-semibold ${
            status === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : status === "error"
              ? "bg-red-50 text-red-800 border border-red-200"
              : ""
          }`}
        >
          {statusMessage}
        </div>
      )}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-700">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-2 focus:ring-[#024AD8]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-700">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-2 focus:ring-[#024AD8]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-700">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-2 focus:ring-[#024AD8]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-700">Service Type *</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-2 focus:ring-[#024AD8]/10 bg-white"
          >
            <option value="" disabled>Select Service</option>
            {serviceOptions.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-700">Describe Your Requirements</label>
          <textarea
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your equipment or the assistance you need?"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-2 focus:ring-[#024AD8]/10"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#024AD8] to-[#0B63F6] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#024AD8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#024AD8]/30 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Request Consultation"}
          {status !== "loading" && (
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
      </form>
    </div>
  );
}
