import Image from "next/image";
import { districts } from "@/data";

export default function DistrictSection() {
  return (
    <section id="districts" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
          <div>
            <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-1">
              All Jharkhand Districts
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Browse by District
            </h2>
          </div>
          <a href="#properties" className="text-sm font-semibold text-orange-600 hover:underline">
            View all properties →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {districts.map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover block"
            >
              {/* Image */}
              <div className="relative h-28 overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${d.gradient} opacity-50 group-hover:opacity-60 transition-opacity`} />
                {/* Count badge */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-800 px-2 py-0.5 rounded-full">
                  {d.properties.toLocaleString()}+
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
                  {d.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-tight">{d.tagline}</p>
              </div>
            </a>
          ))}
        </div>

        {/* District highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {districts.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${d.gradient} flex items-center justify-center text-white font-extrabold text-sm`}>
                  {d.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{d.name}</h3>
                  <p className="text-xs text-gray-400">{d.properties.toLocaleString()}+ Properties</p>
                </div>
              </div>

              {/* Localities */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {d.localities.slice(0, 4).map((loc) => (
                  <span
                    key={loc}
                    className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full"
                  >
                    {loc}
                  </span>
                ))}
                {d.localities.length > 4 && (
                  <span className="text-xs text-orange-600 font-semibold px-1 py-1">
                    +{d.localities.length - 4} more
                  </span>
                )}
              </div>

              {/* Highlights */}
              <ul className="space-y-1">
                {d.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      ✓
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href="#properties"
                className="mt-4 w-full block text-center text-xs font-semibold text-orange-600 border border-orange-200 py-2 rounded-lg hover:bg-orange-50 transition-colors"
              >
                View Properties in {d.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
