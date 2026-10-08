"use client";

import { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Search,
  CheckCircle2,
  Clock,
  ShieldCheck,
  CreditCard,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";

interface Step {
  id: string;
  number: string;
  name: string;
  title: string;
  route: string;
  summary: string;
  techHighlight: string;
}

const STEPS: Step[] = [
  {
    id: "discover",
    number: "01",
    name: "Discover",
    title: "Browse Partner Kitchens & Categories",
    route: "pet-protocols.vercel.app/",
    summary:
      "Explore verified partner cloud kitchens, gourmet categories, and curated dishes without aggregator lock-in.",
    techHighlight: "Next.js App Router • Dynamic Category Filtering • Cloudinary Asset CDN",
  },
  {
    id: "select",
    number: "02",
    name: "Select",
    title: "Customize Dish Portions & Modifiers",
    route: "pet-protocols.vercel.app/menu",
    summary:
      "Select dishes, adjust live quantity counters, and view immediate ingredient and pricing updates.",
    techHighlight: "Atomic React State • Optimistic Quantity Sync • Instant Subtotal Recalculation",
  },
  {
    id: "cart",
    number: "03",
    name: "Cart",
    title: "Multi-Kitchen Cart & Fee Verification",
    route: "pet-protocols.vercel.app/cart",
    summary:
      "Review itemized selections, restaurant packaging fees, GST compliance, and delivery charges.",
    techHighlight: "Zustand Global Store • LocalStorage Persistence • Multi-Item Quantity Mutation",
  },
  {
    id: "checkout",
    number: "04",
    name: "Checkout",
    title: "Delivery Coordinates & Razorpay Initiation",
    route: "pet-protocols.vercel.app/checkout",
    summary:
      "Specify delivery addresses, verify contact info, and initiate server-verified Razorpay payments.",
    techHighlight: "Server-Side Razorpay Order Creation • HMAC-SHA256 Signature Verification",
  },
  {
    id: "order",
    number: "05",
    name: "Order",
    title: "Live Kitchen Preparation Lifecycle",
    route: "pet-protocols.vercel.app/orders/ORD-8924",
    summary:
      "Follow real order timeline stages from kitchen acknowledgment to delivery handoff.",
    techHighlight: "REST Order Status Polling • State Transition Pipeline • MongoDB Order Document",
  },
];

export default function PetProtocolsWalkthrough() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [quantity, setQuantity] = useState(2);

  const currentStep = STEPS[activeStepIndex];

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : STEPS.length - 1));
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < STEPS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      aria-label="Pet Protocols Interactive Product Walkthrough"
      className="space-y-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-5 sm:p-7 shadow-[var(--shadow-subtle)]"
    >
      {/* Top Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-[var(--border-subtle)]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block mb-1">
            Product Walkthrough
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
            Inside Pet Protocols
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
            Interactive breakdown of the multi-tenant food ordering user flow from catalog discovery to kitchen fulfillment.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <Button
            href="https://pet-protocols.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={<ExternalLink className="w-3.5 h-3.5" />}
          >
            Open Live App
          </Button>
        </div>
      </div>

      {/* Step Selector Tabs & Navigation Controls */}
      <div className="flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none flex-1 min-w-0">
          {STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[var(--accent)] text-white font-medium shadow-sm"
                    : "bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--card-hover)] border border-[var(--border-subtle)]"
                }`}
                aria-pressed={isActive}
              >
                <span
                  className={`text-[10px] ${
                    isActive ? "text-white/80" : "text-[var(--text-muted)]"
                  }`}
                >
                  {step.number}
                </span>
                <span>{step.name}</span>
              </button>
            );
          })}
        </div>

        {/* Previous / Next Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous step"
            className="p-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)] transition-colors cursor-pointer"
            title="Previous step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-[var(--text-muted)] px-1 select-none">
            {activeStepIndex + 1}/{STEPS.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next step"
            className="p-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)] transition-colors cursor-pointer"
            title="Next step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Browser Frame Showcase */}
      <div className="rounded-xl border border-[var(--border-medium)] bg-[#0d0f12] overflow-hidden shadow-lg">
        {/* Browser Top Navigation Chrome */}
        <div className="px-4 py-2.5 bg-[#14171d] border-b border-[#222731] flex items-center justify-between gap-3 text-xs">
          {/* Window dots */}
          <div className="flex items-center gap-1.5 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/70" />
          </div>

          {/* Centered URL Pill */}
          <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-md bg-[#0a0c0f] border border-[#232936] text-[11px] font-mono text-neutral-300 flex items-center justify-center gap-1.5 truncate">
            <span className="text-emerald-400 select-none text-[10px]">🔒</span>
            <span className="truncate">{currentStep.route}</span>
          </div>

          {/* Quick External Link */}
          <a
            href="https://pet-protocols.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-1 select-none"
            title="Launch verified live deployment"
          >
            <span className="hidden sm:inline">Live</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Dynamic Step View Content (Pet Protocols Brand UI) */}
        <div className="p-4 sm:p-6 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between bg-[#12141a] text-neutral-100 font-sans">
          {/* STEP 1: DISCOVER */}
          {activeStepIndex === 0 && (
            <div className="space-y-5 animate-[fadeIn_0.2s_ease]">
              {/* Pet Protocols Mock Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-black text-sm tracking-tight text-orange-500">
                    PET PROTOCOLS
                  </span>
                  <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-bold">
                    Certified Kitchen Partners
                  </span>
                </div>
                <div className="flex items-center gap-3 font-medium text-neutral-300">
                  <span className="text-orange-400">Explore Menu</span>
                  <span className="hidden sm:inline text-neutral-400">Offers</span>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-800 border border-neutral-700 text-[11px]">
                    <ShoppingBag className="w-3.5 h-3.5 text-orange-400" />
                    <span>0</span>
                  </div>
                </div>
              </div>

              {/* Hero Banner */}
              <div className="text-center py-4 space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Fresh food. <span className="text-orange-500">Zero compromises.</span>
                </h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Discover partner restaurants, explore chef-crafted menus, and order freshly prepared meals with seamless multi-restaurant ordering.
                </p>
                <div className="pt-2 flex items-center justify-center gap-2 max-w-sm mx-auto">
                  <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs text-neutral-400">
                    <Search className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="truncate">Search burgers, pizza, momos...</span>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-orange-600 text-white text-xs font-bold shrink-0">
                    Explore
                  </span>
                </div>
              </div>

              {/* Category Chips */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  Browse Popular Categories
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  {[
                    { name: "Gourmet Burgers", tag: "Handcrafted Patties", count: "12 Items" },
                    { name: "Stone-Baked Pizza", tag: "Artisan Crust", count: "9 Items" },
                    { name: "Crispy Loaded Fries", tag: "House Seasonings", count: "6 Items" },
                    { name: "Steamed Momos", tag: "Traditional Stuffing", count: "8 Items" },
                  ].map((cat, i) => (
                    <div
                      key={cat.name}
                      className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/50 transition-colors"
                    >
                      <span className="font-bold text-white block text-xs">{cat.name}</span>
                      <span className="text-[10px] text-orange-400 block mt-0.5">{cat.tag}</span>
                      <span className="text-[10px] text-neutral-500 block mt-1">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: SELECT */}
          {activeStepIndex === 1 && (
            <div className="space-y-4 animate-[fadeIn_0.2s_ease]">
              {/* Category Breadcrumb */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-orange-400">Menu Catalog</span>
                  <span className="text-neutral-600">/</span>
                  <span className="text-white font-bold">Gourmet Burgers</span>
                </div>
                <span className="text-[11px] text-neutral-400 font-mono">Kitchen: The Burger Lab</span>
              </div>

              {/* Dish Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Active Selected Dish */}
                <div className="p-3.5 rounded-xl bg-neutral-900 border-2 border-orange-500/70 space-y-2.5 relative">
                  <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-semibold">
                    In Cart
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-white">Smoked Truffle Bacon Burger</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                      Toasted brioche bun, double grilled patty, aged cheddar, caramelized onions, and house truffle aioli.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-bold text-sm text-orange-400">₹349</span>
                    <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-neutral-800 border border-neutral-700">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-neutral-400 hover:text-white p-0.5 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs font-bold text-white px-1">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-neutral-400 hover:text-white p-0.5 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Dish Options */}
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2.5">
                  <div>
                    <h4 className="font-bold text-sm text-white">Crispy Farmhouse Supreme</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                      Herb-crusted vegetable patty, sharp cheddar, shredded iceberg, smoked paprika mayo.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-bold text-sm text-neutral-200">₹289</span>
                    <button
                      type="button"
                      className="px-3 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-orange-400 font-semibold border border-neutral-700 cursor-pointer"
                    >
                      + Add Item
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2.5 sm:col-span-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-white">Peri-Peri Seasoned Fries</h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Freshly cut golden potatoes tossed with signature African peri-peri spice dust.
                      </p>
                    </div>
                    <span className="font-bold text-sm text-orange-400">₹149</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-neutral-500 font-mono">Popular Side Companion</span>
                    <button
                      type="button"
                      className="px-3 py-1 rounded-lg bg-orange-600/20 text-orange-400 hover:bg-orange-600/30 text-xs font-semibold border border-orange-500/30 cursor-pointer"
                    >
                      + Add to Feast
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Cart Bar */}
              <div className="p-3 rounded-xl bg-orange-600 text-white flex items-center justify-between text-xs font-medium shadow-md">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {quantity} Item{quantity > 1 ? "s" : ""} selected • ₹{349 * quantity}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex(2)}
                  className="flex items-center gap-1 font-bold hover:underline cursor-pointer"
                >
                  <span>Review Cart</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CART */}
          {activeStepIndex === 2 && (
            <div className="space-y-4 animate-[fadeIn_0.2s_ease]">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-orange-400" />
                  <span className="font-bold text-white text-sm">Your Feast Cart</span>
                </div>
                <span className="text-[11px] text-neutral-400 font-mono">2 Dish Types</span>
              </div>

              {/* Itemized List */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">Smoked Truffle Bacon Burger</span>
                    <span className="text-[10px] text-neutral-400">Qty: 2 × ₹349 (The Burger Lab)</span>
                  </div>
                  <span className="font-mono font-bold text-white">₹698</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">Peri-Peri Seasoned Fries</span>
                    <span className="text-[10px] text-neutral-400">Qty: 1 × ₹149 (The Burger Lab)</span>
                  </div>
                  <span className="font-mono font-bold text-white">₹149</span>
                </div>
              </div>

              {/* Bill Summary */}
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-neutral-400">
                  <span>Item Subtotal</span>
                  <span>₹847</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Restaurant Packaging & GST (5%)</span>
                  <span>₹58</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Delivery Partner Fee</span>
                  <span>₹30</span>
                </div>
                <div className="pt-2 border-t border-neutral-800 flex justify-between text-sm font-bold text-white">
                  <span>Grand Total</span>
                  <span className="text-orange-400">₹935</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveStepIndex(3)}
                className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* STEP 4: CHECKOUT */}
          {activeStepIndex === 3 && (
            <div className="space-y-4 animate-[fadeIn_0.2s_ease]">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-orange-400" />
                  <span className="font-bold text-white text-sm">Checkout & Payment Gateway</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">SSL Encrypted</span>
              </div>

              {/* Delivery Address Card */}
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Delivery Coordinates</span>
                  <span className="text-[10px] text-orange-400 font-mono">DEFAULT</span>
                </div>
                <p className="text-neutral-300">A-402, Green Avenue, Phase 2, New Delhi — 110016</p>
                <p className="text-neutral-500 text-[11px]">Contact: +91 98765 43210 • Recipient: Verified</p>
              </div>

              {/* Payment Gateway Box */}
              <div className="p-3.5 rounded-xl bg-neutral-900 border-2 border-orange-500/60 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-blue-400 tracking-wider">Razorpay</span>
                    <span className="text-[10px] text-neutral-400">• Cards, UPI, NetBanking</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Cryptographic HMAC-SHA256 signature verification validates the settlement server-side before persisting order status to Paid.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Total Payable:</span>
                <span className="text-base font-bold text-orange-400">₹935.00</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveStepIndex(4)}
                className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Authorize & Pay with Razorpay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* STEP 5: ORDER */}
          {activeStepIndex === 4 && (
            <div className="space-y-4 animate-[fadeIn_0.2s_ease]">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
                <div>
                  <span className="font-bold text-white text-sm">Order #ORD-8924</span>
                  <span className="text-[10px] text-neutral-500 block font-mono">Placed 12:42 PM</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold">
                  Payment Verified
                </span>
              </div>

              {/* Order Stages Pipeline */}
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Kitchen Prep Stage Timeline
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Order Received & Payment Confirmed</span>
                      <span className="text-[11px] text-neutral-400">Razorpay transaction verified (12:42 PM)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                    </div>
                    <div>
                      <span className="font-bold text-orange-400 block">Kitchen Preparing Food</span>
                      <span className="text-[11px] text-neutral-300">The Burger Lab kitchen line acknowledged (12:44 PM)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 opacity-50">
                    <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-400 block">Out for Delivery</span>
                      <span className="text-[11px] text-neutral-500">Delivery handoff pending kitchen seal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Handoff */}
              <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-neutral-400 block text-[11px]">Estimated Fulfillment Time</span>
                  <span className="font-bold text-white">~18 mins remaining</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex(0)}
                  className="text-xs font-mono text-orange-400 hover:underline cursor-pointer"
                >
                  Restart Walkthrough ↺
                </button>
              </div>
            </div>
          )}

          {/* Bottom Step Context Strip */}
          <div className="pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-bold text-white text-xs block">
                {currentStep.title}
              </span>
              <p className="text-[11px] text-neutral-400 mt-0.5 max-w-xl">
                {currentStep.summary}
              </p>
            </div>
            <div className="text-[10px] font-mono text-orange-400/90 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20 shrink-0 self-start sm:self-auto">
              {currentStep.techHighlight}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
