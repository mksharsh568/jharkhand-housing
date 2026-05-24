import Image from "next/image";
import { newProjects } from "@/data";

const statusColors: Record<string, string> = {
  "Under Construction": "bg-amber-500",
  "Ready to Move": "bg-green-600",
  "New Launch": "bg-blue-600",
};

export default function NewProjects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-1">
              Fresh inventory
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              New Projects in Jharkhand
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-orange-600 hover:underline">
            View all projects →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover"
            >
              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`${statusColors[proj.status]} text-white text-xs font-bold px-2.5 py-1 rounded-full`}
                  >
                    {proj.status}
                  </span>
                </div>

                {proj.rera && (
                  <div className="absolute top-3 right-3 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                    RERA ✓
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-extrabold text-lg leading-tight">
                      {proj.name}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {proj.locality}, {proj.district}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xl font-extrabold text-gray-900">{proj.priceRange}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{proj.bhk} · {proj.developer}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-orange-600 font-bold text-sm">{proj.units} units</div>
                    <div className="text-xs text-gray-400">available</div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 text-sm font-semibold bg-orange-600 text-white py-2.5 rounded-xl hover:bg-orange-700 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 text-sm font-semibold border border-orange-200 text-orange-600 py-2.5 rounded-xl hover:bg-orange-50 transition-colors">
                    📞
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
