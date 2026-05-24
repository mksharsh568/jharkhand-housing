import { services } from "@/data";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-1">
            End-to-end support
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Our Services in Jharkhand
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto text-sm">
            From finding a property to moving in — we help you at every step across all 6 districts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center text-2xl mb-4`}
              >
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
              <a
                href="#contact"
                className={`text-sm font-semibold ${s.iconColor} hover:underline inline-flex items-center gap-1`}
              >
                {s.link}
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
