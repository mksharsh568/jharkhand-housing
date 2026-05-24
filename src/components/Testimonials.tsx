import { testimonials } from "@/data";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-1">
            Real stories
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Trusted by Jharkhand Families
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-base ${i < t.rating ? "text-amber-400" : "text-gray-200"}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed italic mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-orange-500">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
