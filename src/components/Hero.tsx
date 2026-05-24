"use client";
import { useState } from "react";

const tabs = ["Buy", "Rent", "New Projects", "Commercial", "Plot / Land"];

const quickSearches = [
  "2 BHK in Ranchi",
  "3 BHK in Dhanbad",
  "Flat in Bokaro",
  "House in Hazaribag",
  "Plot in Deoghar",
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [query, setQuery] = useState("");

  return (
    <section className="relative min-h-[580px] flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/jharkhand-hero/1600/700')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-orange-900/60 to-gray-900/70" />

      {/* Jharkhand badge */}
      <div className="relative z-10 flex justify-center pt-10">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
          <span className="text-orange-400">📍</span> Serving Jharkhand Exclusively
        </span>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center px-4 pt-6 pb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3 tracking-tight">
          Find Your Dream Home in{" "}
          <span className="text-orange-400">Jharkhand</span>
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Search verified properties across Ranchi, Dhanbad, Bokaro, Hazaribag, Deoghar &amp; Ramgarh
        </p>
      </div>

      {/* Search card */}
      <div className="relative z-10 px-4 pb-14 max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto scrollbar-hide bg-gray-50 border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-orange-600 text-orange-600 bg-white"
                    : "border-transparent text-gray-500 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search row */}
          <div className="p-4 flex flex-col sm:flex-row gap-3">
            {/* Location */}
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Enter city, district, locality…"
                className="w-full pl-9 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* District */}
            <select className="px-3 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 bg-white text-gray-600 appearance-none min-w-[150px]">
              <option value="">All Districts</option>
              <option>Ranchi</option>
              <option>Dhanbad</option>
              <option>Bokaro</option>
              <option>Hazaribag</option>
              <option>Deoghar</option>
              <option>Ramgarh</option>
            </select>

            {/* Budget */}
            <select className="px-3 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 bg-white text-gray-600 appearance-none min-w-[130px]">
              <option value="">Budget</option>
              <option>Under ₹20 Lakh</option>
              <option>₹20L – ₹50L</option>
              <option>₹50L – ₹1 Cr</option>
              <option>₹1 Cr+</option>
            </select>

            <button className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              Search
            </button>
          </div>

          {/* Quick searches */}
          <div className="px-4 pb-4 flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-400 font-semibold">Popular:</span>
            {quickSearches.map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
