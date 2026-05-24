import Image from "next/image";

const footerLinks = {
  "Buy Property": [
    "Flats in Ranchi",
    "House in Dhanbad",
    "Apartment in Bokaro",
    "Villa in Hazaribag",
    "Property in Deoghar",
    "Land in Ramgarh",
  ],
  "Rent Property": [
    "Flats for Rent Ranchi",
    "PG in Ranchi",
    "Office Space Ranchi",
    "Flat Rent Dhanbad",
    "Flat Rent Bokaro",
    "Shop Rent Deoghar",
  ],
  "New Projects": [
    "Projects in Ranchi",
    "Projects in Dhanbad",
    "RERA Registered",
    "Ready to Move",
    "Under Construction",
    "New Launch 2025",
  ],
  Company: [
    "About OAO",
    "Careers",
    "Post Free Property",
    "Advertise with Us",
    "Privacy Policy",
    "Terms of Service",
  ],
};

const popularSearches = [
  "2 BHK Ranchi under 50 Lakh",
  "3 BHK Dhanbad",
  "Plot Deoghar",
  "Flat Bokaro Steel City",
  "House Hazaribag",
  "PG Ramgarh",
  "Commercial Ranchi",
  "Villa Ranchi",
  "RERA projects Jharkhand",
  "Ready to move Ranchi",
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Top CTA */}
      <div className="bg-orange-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-extrabold text-xl mb-1">
              Have a Property in Jharkhand?
            </h3>
            <p className="text-orange-100 text-sm">
              List it for free and reach thousands of buyers across all 6 districts.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#contact"
              className="bg-white text-orange-600 font-bold px-6 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors"
            >
              Post Property Free
            </a>
            <a
              href="tel:+919334168597"
              className="border-2 border-white/50 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 pb-10 border-b border-white/10">

          {/* Brand col */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-black rounded-xl overflow-hidden flex items-center justify-center border border-white/10">
                <Image
                  src="/logo.svg"
                  alt="OAO Property Dekho"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-white text-xl tracking-tight">OAO</span>
                  <span className="font-bold text-orange-400 text-sm">Property Dekho</span>
                </div>
                <div className="text-[9px] text-gray-500 mt-0.5 tracking-wide">
                  OAOprop Infrastructure Pvt. Ltd.
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              Jharkhand&apos;s most trusted real estate platform. Serving Ranchi, Dhanbad, Bokaro,
              Hazaribag, Deoghar &amp; Ramgarh since 2010.
            </p>

            {/* Office address */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-5">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                📍 Main Office
              </div>
              <div className="text-sm font-semibold text-white">Ajit Tiwary</div>
              <div className="text-sm text-gray-400">Hari Om Tower, 2nd Floor, Room No. 210</div>
              <div className="text-sm text-gray-400">Circular Road, Lalpur, Ranchi</div>
              <div className="text-sm text-gray-400">Jharkhand</div>
              <a href="tel:+919334168597" className="text-sm text-orange-400 font-semibold mt-1 block hover:underline">
                +91 93341 68597
              </a>
              <a href="tel:+919162813888" className="text-sm text-orange-400 font-semibold hover:underline">
                +91 91628 13888
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {[
                { label: "Facebook", icon: "f" },
                { label: "Instagram", icon: "ig" },
                { label: "WhatsApp", icon: "wa" },
                { label: "YouTube", icon: "yt" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular searches */}
        <div className="py-6 border-b border-white/10">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
            Popular Searches
          </h4>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-400 hover:border-orange-500 hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 OAOprop Infrastructure Pvt. Ltd. – Hari Om Tower, 2nd Floor, Room 210, Circular Road, Lalpur, Ranchi, Jharkhand.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
