"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", district: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", district: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Office Info */}
          <div>
            <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-1">
              Get in touch
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Our Ranchi office serves clients across all 6 districts of Jharkhand.
              Walk in or reach out — we&apos;re happy to help you find your dream property.
            </p>

            {/* Office card */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-extrabold text-lg">
                  AT
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-lg">Ajit Tiwary</h3>
                  <p className="text-orange-600 font-semibold text-sm">Founder &amp; Property Consultant</p>
                  <p className="text-gray-500 text-xs mt-1">15+ Years in Jharkhand Real Estate</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-orange-600">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Office Address</div>
                  <div className="text-sm font-semibold text-gray-800 mt-0.5">
                    Ajit Tiwary, Hariom Tower
                  </div>
                  <div className="text-sm text-gray-600">
                    Ranchi, Jharkhand – 834001
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-orange-600">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</div>
                  <a href="tel:+919876543210" className="text-sm font-semibold text-orange-600 hover:underline mt-0.5 block">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-orange-600">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</div>
                  <a href="mailto:ajit@jhhomes.in" className="text-sm font-semibold text-orange-600 hover:underline mt-0.5 block">
                    ajit@jhhomes.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-orange-600">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Office Hours</div>
                  <div className="text-sm text-gray-700 mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM</div>
                  <div className="text-xs text-gray-400">Sunday: 10:00 AM – 4:00 PM</div>
                </div>
              </div>
            </div>

            {/* Districts served */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                Districts We Serve
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Ranchi", "Dhanbad", "Bokaro", "Hazaribag", "Deoghar", "Ramgarh"].map((d) => (
                  <span
                    key={d}
                    className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full"
                  >
                    📍 {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">
              Send an Enquiry
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Tell us what you&apos;re looking for and we&apos;ll get back within 2 hours.
            </p>

            {sent && (
              <div className="mb-4 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-3 rounded-xl flex items-center gap-2">
                ✓ Enquiry sent! Ajit Tiwary will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  District of Interest
                </label>
                <select
                  value={form.district}
                  onChange={(e) => setForm({ ...form, district: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-orange-500 appearance-none"
                >
                  <option value="">Select a district</option>
                  <option>Ranchi</option>
                  <option>Dhanbad</option>
                  <option>Bokaro</option>
                  <option>Hazaribag</option>
                  <option>Deoghar</option>
                  <option>Ramgarh</option>
                  <option>Any / Multiple</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Message / Requirement
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="e.g. Looking for 3 BHK flat in Ranchi under ₹60 Lakh…"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl text-sm transition-colors"
              >
                Send Enquiry to Ajit Tiwary
              </button>

              <p className="text-xs text-gray-400 text-center">
                🔒 Your information is kept private and secure.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
