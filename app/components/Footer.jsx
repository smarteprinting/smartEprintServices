"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact-us', label: 'Contact Us' },
];

const serviceLinks = [
  { href: '/book-an-appointment', label: 'Computer Assistance' },
  { href: '/book-an-appointment', label: 'Printer Assistance' },
  { href: '/book-an-appointment', label: 'Smart Home Assistance' },
  { href: '/book-an-appointment', label: 'Network Assistance' },
  { href: '/book-an-appointment', label: 'TV Mounting' },
  { href: '/book-an-appointment', label: 'Appliance Support' },
];

const policyLinks = [
  { href: '/faqs', label: 'FAQs' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/refund-cancellation-policy', label: 'Refund & Cancellation' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">
      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 md:col-span-2">
             {/* <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">< */}
             <Link href="/" className="flex items-center gap-3" aria-label="SmartEprint Services Home">
          <div className="flex h-12 w-auto items-center justify-center p-1">
            <Image 
              src="/footer-logo.png" 
              width={100}
              alt="SmartEprint Logo"
              height={56} 
              priority
              className="h-full w-auto"
            />
          </div>
          {/* <div className="hidden sm:flex flex-col">
            <h2 className="text-lg font-extrabold text-slate-800">SmartEprint</h2>
            <p className="text-xs uppercase tracking-wider text-slate-500">Services</p>
          </div> */}
        </Link>


            
            
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Dependable on-site technology and appliance support with fast response and expert care for homes and businesses.
            </p>

            {/* Social Links */}
            {/* <div className="flex gap-3 flex-wrap">
              <a 
                href="#" 
                aria-label="Instagram"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 transition hover:bg-brand-600 hover:text-white"
              >
                Instagram
              </a>
              <a 
                href="#" 
                aria-label="Facebook"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 transition hover:bg-brand-600 hover:text-white"
              >
                Facebook
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 transition hover:bg-brand-600 hover:text-white"
              >
                LinkedIn
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Policies</h4>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href="tel:+16518154630"
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-brand-400 transition"
              >
                <div className="flex items-center justify-center h-6 w-6 rounded bg-[#024AD8] flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-white" />
                </div>
                <span>+1 (651) 815-4630</span>
              </a>
              
              <a 
                href="mailto:support@smarteprintservices.com"
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-brand-400 transition"
              >
                <div className="flex items-center justify-center h-6 w-6 rounded bg-[#024AD8] flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-white" />
                </div>
                <span>support@smarteprintservices.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <div className="flex items-center justify-center h-6 w-6 rounded bg-[#024AD8] flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p>11397 Quincy St NE</p>
                  <p>Blaine, Minnesota, 55434</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400 text-center md:text-left">
            © {currentYear} SmartEprint Services. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link 
              href="/privacy-policy"
              className="text-xs text-slate-400 hover:text-brand-400 transition"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-and-conditions"
              className="text-xs text-slate-400 hover:text-brand-400 transition"
            >
              Terms of Service
            </Link>
            <Link 
              href="/refund-cancellation-policy"
              className="text-xs text-slate-400 hover:text-brand-400 transition"
            >
              Refund & Cancellation
            </Link>
            <Link 
              href="/disclaimer"
              className="text-xs text-slate-400 hover:text-brand-400 transition"
            >
              Disclaimer
            </Link>
            <Link 
              href="/cookie-policy"
              className="text-xs text-slate-400 hover:text-brand-400 transition"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
