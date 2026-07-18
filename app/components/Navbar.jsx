"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X, Search } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Our Services" },
  { href: "/book-an-appointment", label: "Book an Appointment" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      return;
    }

    router.push(`/services?search=${encodeURIComponent(trimmedQuery)}`);
    setSearchQuery("");
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-6 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="SmartEprint Services Home">
          <div className="flex h-12 w-auto items-center justify-center p-1">
            <Image 
              src="/logo.png" 
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-4">
          <form
            onSubmit={handleSearch}
            className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm transition focus-within:border-brand-500 focus-within:bg-white focus-within:shadow-md"
          >
            <Search size={16} className="mr-2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search services"
              className="w-40 border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              aria-label="Search services"
            />
          </form>

          <nav className="flex items-center gap-7">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-brand-500"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            href="/book-an-appointment"
            className="rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book Service
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 lg:hidden">
          <form
            onSubmit={handleSearch}
            className="flex flex-1 max-w-[220px] items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm"
          >
            <Search size={15} className="mr-2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search"
              className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              aria-label="Search services"
            />
          </form>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-brand-500 transition-colors hover:bg-slate-100"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full screen backdrop */}
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 top-20 z-40 bg-slate-950/50 transition-opacity duration-300 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Menu */}
      {open && (
        <aside
          className={`fixed right-0 top-20 z-50 h-[calc(100vh-5rem)] w-full max-w-sm overflow-y-auto border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden translate-x-0`}>
          <nav className="flex flex-col gap-1 p-4">
            <form onSubmit={handleSearch} className="mb-3 flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 shadow-sm">
              <Search size={16} className="mr-2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search services"
                className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                aria-label="Search services"
              />
            </form>

            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600 active:bg-brand-100"
              >
                {link.label}
              </Link>
            ))}

            <div className="my-4 border-t border-slate-200" />

            <Link
              href="/book-an-appointment"
              onClick={closeMenu}
              className="rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-3 text-center font-semibold text-white shadow-lg transition hover:shadow-xl active:shadow-md"
            >
              Book Service
            </Link>
          </nav>
        </aside>
      )}
    </header>
  );
}
