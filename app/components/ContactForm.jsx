"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
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
      const response = await fetch("/api/contact/", {
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
        setFormData({ fullName: "", email: "", message: "" });
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
    <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-8 shadow-xl sm:p-10">
      <span className="inline-flex rounded-full bg-[#024AD8]/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#024AD8]">
        Send a Message
      </span>
      <h2 className="mt-4 text-2xl font-extrabold text-gray-900 sm:text-3xl">Quick Contact Form</h2>
      <p className="mt-2 text-gray-600">
        Fill out the form below and we'll get back to you soon.
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

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-2 focus:ring-[#024AD8]/10"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-2 focus:ring-[#024AD8]/10"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Message</label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
            className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-2 focus:ring-[#024AD8]/10"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#024AD8] to-[#0B63F6] px-8 py-5 text-lg font-bold text-white shadow-lg shadow-[#024AD8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#024AD8]/30 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
          {status !== "loading" && (
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
      </form>
    </div>
  );
}
