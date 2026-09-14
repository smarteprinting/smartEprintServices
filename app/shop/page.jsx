"use client";
 
import { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  Star,
  Check,
  Truck,
  ShieldCheck,
  Wrench,
  Sparkles,
  Eye,
  ShoppingCart,
  Zap,
  ArrowRight,
  Filter,
  X,
  Package,
  RotateCcw,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { categories, brands } from "../../lib/productsData";
import { useCart } from "../components/CartContext";
import CheckoutModal from "../components/CheckoutModal";
import { useAuth } from "../components/AuthContext";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const { addToCart } = useCart();
  const { user, loading: authLoading } = useAuth();

  const [catalogProducts, setCatalogProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand] = useState("HP");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  // Live fetch from MongoDB /api/products
  useEffect(() => {
    fetch("/api/products", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.products)) {
          setCatalogProducts(data.products);
        }
      })
      .catch((err) => {
        console.warn("Could not fetch live products from API:", err);
      });
  }, []);

  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [directCheckoutItem, setDirectCheckoutItem] = useState(null);

  // Quantity inside Quick View
  const [quickViewQty, setQuickViewQty] = useState(1);

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return catalogProducts
      .filter((product) => {
        // Category filter
        if (selectedCategory !== "all" && product.category !== selectedCategory) {
          return false;
        }
        // Brand filter
        if (selectedBrand !== "All Brands" && product.brand !== selectedBrand) {
          return false;
        }
        // In stock filter
        if (onlyInStock && !product.inStock) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = (product.name || product.title || "").toLowerCase().includes(q);
          const matchBrand = (product.brand || "").toLowerCase().includes(q);
          const matchDesc = (product.shortDesc || "").toLowerCase().includes(q);
          const matchFeatures = (product.features || []).some((f) =>
            f.toLowerCase().includes(q)
          );
          if (!matchName && !matchBrand && !matchDesc && !matchFeatures) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // featured
      });
  }, [catalogProducts, selectedCategory, selectedBrand, searchQuery, sortBy, onlyInStock]);

  useEffect(() => {
    setVisibleCount(12);
  }, [selectedCategory, searchQuery, sortBy, onlyInStock]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setQuickViewQty(1);
  };

  const handleDirectBuy = (product) => {
    if (authLoading) return;
    if (!user) {
      window.location.assign(`/login?returnTo=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    setDirectCheckoutItem({ ...product, quantity: 1 });
  };

  const handleQuickViewCheckout = (item) => {
    if (authLoading) return;
    if (!user) {
      window.location.assign(`/login?returnTo=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    setQuickViewProduct(null);
    setDirectCheckoutItem(item);
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-[#01235b] text-white py-16 lg:py-20">
        {/* Glow decoration */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300 mb-4 backdrop-blur-md">
                <Sparkles size={14} className="text-blue-400" />
                <span>Authorized Hardware & Genuine Supplies Store</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Printers, Toners & <br />
                <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                  Smart Hardware Deals
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Purchase authentic laser printers, inkjets, supertanks, and original cartridges with full manufacturer warranties, fast nationwide delivery, and optional on-site setup.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-blue-400">
                    <Truck size={15} />
                  </div>
                  <span>Free Shipping over $49</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-emerald-400">
                    <ShieldCheck size={15} />
                  </div>
                  <span>1-Year Official Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-amber-400">
                    <Wrench size={15} />
                  </div>
                  <span>On-Site Setup Available</span>
                </div>
              </div>
            </div>

            {/* Banner Promotional Card */}
            <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Limited Offer
                </span>
                <span className="text-xs text-blue-200">Coupon: SMART10</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Save 10% Extra Today
              </h3>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Use promo code <span className="font-mono font-bold text-white">SMART10</span> in your cart on any printer or genuine supply bundle.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-900/60 p-3.5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Questions on compatibility?</span>
                <a
                  href="tel:+18777652289"
                  className="font-bold text-blue-400 hover:text-blue-300 transition"
                >
                  Call +1 (877) 765-2289
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Container */}
      <main className="mx-auto max-w-7xl px-6 pt-10">
        {/* Search, Filter & Controls Bar */}
        <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search printers by model, brand, or supplies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3 pl-11 pr-10 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sorting & Options */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Brand Selector */}
              <div className="relative">
                <select
                  value={selectedBrand}
                  disabled
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 outline-none transition focus:border-brand-500 focus:bg-white cursor-pointer"
                >
                  {brands.filter((brand) => brand === "HP").map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 outline-none transition focus:border-brand-500 focus:bg-white cursor-pointer"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* In-Stock Toggle */}
              <label className="flex items-center gap-2 cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="h-4 w-4 rounded text-brand-500 focus:ring-brand-500 cursor-pointer"
                />
                <span>In Stock Only</span>
              </label>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 rounded-2xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? "bg-brand-500 text-white shadow-md shadow-brand-500/20 scale-100"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-slate-600">
            Showing <strong className="text-slate-900">{visibleProducts.length}</strong> of <strong className="text-slate-900">{filteredProducts.length}</strong> HP products
            {selectedCategory !== "all" && (
              <span> in <strong className="text-brand-600">{categories.find(c => c.id === selectedCategory)?.label}</strong></span>
            )}
            {selectedBrand !== "All Brands" && (
              <span> by <strong className="text-brand-600">{selectedBrand}</strong></span>
            )}
          </p>

          {(selectedCategory !== "all" || searchQuery || onlyInStock) && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setOnlyInStock(false);
                setVisibleCount(12);
              }}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Package size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              No products match your filter
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Try searching with different keywords or resetting your selected category and brand.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setOnlyInStock(false);
                setVisibleCount(12);
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-brand-700"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product) => {
              const discountPercent = product.originalPrice
                ? Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )
                : 0;

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
                >
                  {/* Card Top / Badges */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {product.badge ? (
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-brand-600 border border-blue-100">
                          {product.badge}
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {product.brand}
                        </span>
                      )}

                      {discountPercent > 0 && (
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold text-emerald-700 border border-emerald-100">
                          Save {discountPercent}%
                        </span>
                      )}
                    </div>

                    {/* Image Area with Quick View Hover Overlay */}
                    <div className="relative mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50 p-4 transition group-hover:bg-blue-50/30">
                      {product.image ? <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                      /> : <span className="text-xs font-semibold text-slate-400">Image unavailable</span>}

                      {/* Quick View Button on Hover */}
                      <button
                        onClick={() => handleQuickView(product)}
                        className="absolute inset-x-4 bottom-3 flex items-center justify-center gap-1.5 rounded-xl bg-slate-900/85 py-2 text-xs font-semibold text-white backdrop-blur-sm opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-slate-900 shadow-md"
                        aria-label={`Quick preview for ${product.name}`}
                      >
                        <Eye size={14} />
                        <span>Quick Preview</span>
                      </button>
                    </div>

                    {/* Brand & Rating */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                      <span className="font-semibold text-slate-400">
                        {product.brand}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star size={13} className="fill-amber-400 text-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-slate-400 font-normal">
                          ({product.reviewsCount})
                        </span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => handleQuickView(product)}
                      className="cursor-pointer line-clamp-2 text-sm font-bold text-slate-800 transition hover:text-brand-500"
                      title={product.name}
                    >
                      {product.name}
                    </h3>
                    <Link href={`/shop/${product.id}`} className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700">
                      View full details <ArrowRight size={12} />
                    </Link>

                    {/* Short Description */}
                    <p className="mt-2 line-clamp-2 text-xs text-slate-500 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Feature tags */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {(product.features || []).slice(0, 2).map((feat, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600"
                        >
                          <Check size={10} className="text-brand-500" />
                          <span className="line-clamp-1">{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom / Price & CTA */}
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-xl font-extrabold text-slate-900">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="ml-2 text-xs text-slate-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-600">
                        {product.inStock ? "● In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => addToCart(product, 1, true)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-brand-500 bg-white py-2.5 text-xs font-bold text-brand-500 transition hover:bg-brand-50 active:scale-95 shadow-sm"
                      >
                        <ShoppingCart size={14} />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        onClick={() => handleDirectBuy(product)}
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-500 py-2.5 text-xs font-bold text-white shadow-md shadow-brand-500/20 transition hover:bg-brand-700 active:scale-95"
                      >
                        <Zap size={14} className="fill-white" />
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {visibleProducts.length < filteredProducts.length && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 12)}
              className="rounded-2xl bg-brand-500 px-8 py-3 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition hover:bg-brand-700"
            >
              Show More Products
            </button>
          </div>
        )}

        {/* Benefits & Guarantees Section */}
        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Why Buy Hardware Through SmartEprint?
            </h2>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              We combine hardware sales with nationwide technical support to ensure your printer works flawlessly from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-brand-500">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                100% Genuine Supplies
              </h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Direct authorized vendor supplies with guaranteed serials and manufacturer warranties.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Truck size={28} />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Fast Insured Shipping
              </h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Reliable dispatch with tracking numbers. Free standard delivery on all orders over $49.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <Wrench size={28} />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                On-Site Setup Assistance
              </h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Add certified technician setup at checkout to connect all computers and Wi-Fi networks in your location.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <RotateCcw size={28} />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                30-Day Easy Returns
              </h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Hassle-free replacement or return options if your hardware does not suit your operational needs.
              </p>
            </div>
          </div>
        </section>

        {/* E-Commerce Support Assistance Banner */}
        <section className="mt-12 rounded-3xl bg-gradient-to-r from-blue-900 to-brand-700 p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Not sure which printer fits your workflow?
            </h3>
            <p className="mt-1 text-sm text-blue-100 max-w-xl">
              Talk directly with a printer specialist. We help you choose the right model based on page yield, wireless compatibility, and budget.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+18777652289"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-md transition hover:bg-blue-50"
            >
              Call (877) 765-2289
            </a>
            <Link
              href="/contact-us"
              className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
            >
              Message Us
            </Link>
          </div>
        </section>
      </main>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setQuickViewProduct(null)}
          />

          <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Product Visual */}
              <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-50 p-6 border border-slate-100">
                <div className="relative h-64 w-full">
                  <Image
                    src={quickViewProduct.image || "/logo.png"}
                    alt={quickViewProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-4 text-xs font-semibold text-slate-400">
                  {quickViewProduct.brand} Official Hardware
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-600">
                      {quickViewProduct.badge || "Verified"}
                    </span>
                    <span className="text-xs text-slate-400">
                      SKU: {quickViewProduct.id.slice(0, 10).toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {quickViewProduct.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <div className="flex items-center text-amber-500 font-bold">
                      <Star size={14} className="fill-amber-400 text-amber-400 mr-1" />
                      {quickViewProduct.rating}
                    </div>
                    <span>•</span>
                    <span>{quickViewProduct.reviewsCount} verified customer reviews</span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-slate-900">
                      ${quickViewProduct.price.toFixed(2)}
                    </span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        ${quickViewProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {quickViewProduct.shortDesc}
                  </p>

                  {/* Specifications List */}
                  {quickViewProduct.specs && (
                    <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs space-y-1.5">
                      {Object.entries(quickViewProduct.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-slate-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                          <span className="font-semibold text-slate-800 text-right">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Stepper */}
                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50">
                      <button
                        onClick={() => setQuickViewQty((q) => Math.max(1, q - 1))}
                        className="px-3 py-2 text-slate-600 hover:text-brand-500"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-slate-900">
                        {quickViewQty}
                      </span>
                      <button
                        onClick={() => setQuickViewQty((q) => q + 1)}
                        className="px-3 py-2 text-slate-600 hover:text-brand-500"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(quickViewProduct, quickViewQty, true);
                        setQuickViewProduct(null);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-brand-500 py-3 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition hover:bg-brand-700"
                    >
                      <ShoppingCart size={16} />
                      <span>Add to Cart • ${(quickViewProduct.price * quickViewQty).toFixed(2)}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      const item = { ...quickViewProduct, quantity: quickViewQty };
                      handleQuickViewCheckout(item);
                    }}
                    className="w-full rounded-xl border border-slate-300 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    Direct Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Direct Checkout Modal */}
      {directCheckoutItem && (
        <CheckoutModal
          isOpen={Boolean(directCheckoutItem)}
          onClose={() => setDirectCheckoutItem(null)}
          directItem={directCheckoutItem}
        />
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-500 border-r-transparent" />
            <p className="mt-3 text-sm font-semibold text-slate-600">
              Loading SmartEprint Hardware Store...
            </p>
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
