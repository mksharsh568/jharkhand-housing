"use client";
import { useState } from "react";
import Image from "next/image";
import { featuredProperties, type Property } from "@/data";

const filters = ["All", "Buy", "Rent", "New Projects"];

function PropertyCard({ p }: { p: Property }) {
  const [wishlisted, setWishlisted] = useState(false);

  const tagMap: Record<Property["type"], { label: string; cls: string }> = {
    sale: { label: "For Sale", cls: "bg-white text-orange-600 font-bold" },
    rent: { label: "For Rent", cls: "bg-blue-600 text-white" },
    new:  { label: "New Launch", cls: "bg-green-600 text-white" },
  };
  const tag = tagMap[p.type];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover flex flex-col">
      {/* Image */}
      <div className="relative h-48 flex-shrink-0">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${tag.cls}`}>
            {tag.label}
          </span>
          {p.verified && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-black/40 text-white font-semibold backdrop-blur-sm">
              ✓ Verified
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            wishlisted
              ? "bg-orange-600 text-white"
              : "bg-white/90 text-gray-500 hover:bg-orange-600 hover:text-white"
          }`}
          aria-label="Add to wishlist"
        >
          {wishlisted ? "♥" : "♡"}
        </button>

        {/* District chip */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xs bg-orange-600/90 text-white px-2.5 py-1 rounded-full font-semibold backdrop-blur-sm">
            📍 {p.district}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div className="text-lg font-extrabold text-gray-900">{p.price}</div>
          <span className="text-xs text-gray-400 font-medium mt-1">{p.priceNote}</span>
        </div>
        <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{p.title}</h3>
        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-orange-500 flex-shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
          {p.locality}
        </p>

        {/* Specs */}
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 pb-3 border-b border-gray-100">
          {p.bhk !== "Plot" && p.bhk !== "Commercial" && (
            <span>🛏 {p.bhk}</span>
          )}
          {p.baths > 0 && <span>🚿 {p.baths} Bath</span>}
          <span>📐 {p.area}</span>
          <span className="text-gray-400">🏠 {p.propertyType}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-8 h-8 rounded-full ${p.agentColor} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}
          >
            {p.agentInitials}
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-800 leading-none">{p.agentName}</div>
            <div className="text-[10px] text-gray-400 mt-0.5">{p.agentRole}</div>
          </div>
        </div>
        <button className="text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200 px-3 py-1.5 rounded-lg hover:bg-orange-600 hover:text-white transition-colors">
          Contact
        </button>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  const [filter, setFilter] = useState("All");

  const filtered = featuredProperties.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Buy") return p.type === "sale";
    if (filter === "Rent") return p.type === "rent";
    if (filter === "New Projects") return p.type === "new";
    return true;
  });

  return (
    <section id="properties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-1">
              Hand-picked listings
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Featured Properties
            </h2>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                  filter === f
                    ? "bg-orange-600 border-orange-600 text-white"
                    : "border-gray-200 text-gray-500 hover:border-orange-400 hover:text-orange-600"
                }`}
              >
                {f}
              </button>
            ))}
            <a href="#" className="text-sm font-semibold text-orange-600 hover:underline ml-2">
              View all →
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-orange-600 text-orange-600 font-bold rounded-xl hover:bg-orange-600 hover:text-white transition-colors">
            View All Properties in Jharkhand
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
