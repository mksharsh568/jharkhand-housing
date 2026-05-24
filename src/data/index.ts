export interface District {
  id: string;
  name: string;
  tagline: string;
  properties: number;
  image: string;
  gradient: string;
  highlights: string[];
  localities: string[];
}

export interface Property {
  id: number;
  title: string;
  district: string;
  locality: string;
  type: "sale" | "rent" | "new";
  propertyType: string;
  price: string;
  priceNote: string;
  bhk: string;
  area: string;
  baths: number;
  image: string;
  agentName: string;
  agentRole: string;
  agentInitials: string;
  agentColor: string;
  verified: boolean;
  featured?: boolean;
}

export interface Project {
  id: number;
  name: string;
  developer: string;
  district: string;
  locality: string;
  priceRange: string;
  bhk: string;
  status: "Under Construction" | "Ready to Move" | "New Launch";
  units: number;
  image: string;
  amenities: string[];
  rera: boolean;
}

// ─── DISTRICTS ──────────────────────────────────────────────────────────────

export const districts: District[] = [
  {
    id: "ranchi",
    name: "Ranchi",
    tagline: "Capital City · IT Hub",
    properties: 4200,
    image: "https://picsum.photos/seed/ranchi-city/800/500",
    gradient: "from-orange-500 to-red-600",
    highlights: ["Capital of Jharkhand", "Fast-growing IT sector", "Best infrastructure"],
    localities: ["Harmu", "Kanke Road", "Lalpur", "Doranda", "Bariatu", "Argora", "Ratu Road", "Namkum"],
  },
  {
    id: "dhanbad",
    name: "Dhanbad",
    tagline: "Coal Capital · Commercial Hub",
    properties: 3100,
    image: "https://picsum.photos/seed/dhanbad-city/800/500",
    gradient: "from-slate-600 to-slate-800",
    highlights: ["Coal capital of India", "Strong commercial base", "ISM University"],
    localities: ["Jharia", "Katras", "Sindri", "Baghmara", "Topchanchi", "Govindpur"],
  },
  {
    id: "bokaro",
    name: "Bokaro",
    tagline: "Steel City · Industrial Pride",
    properties: 2400,
    image: "https://picsum.photos/seed/bokaro-steel/800/500",
    gradient: "from-blue-600 to-blue-800",
    highlights: ["Planned steel city", "SAIL township", "Great connectivity"],
    localities: ["Sector 4", "Sector 12", "Chas", "Bermo", "Phusro", "Petarwar"],
  },
  {
    id: "hazaribag",
    name: "Hazaribag",
    tagline: "Nature · Tourism · Serenity",
    properties: 1800,
    image: "https://picsum.photos/seed/hazaribag-nature/800/500",
    gradient: "from-green-600 to-emerald-700",
    highlights: ["National Park", "Scenic beauty", "Pleasant climate"],
    localities: ["Katkamsandi", "Barhi", "Barkagaon", "Ichak", "Churchu"],
  },
  {
    id: "ramgarh",
    name: "Ramgarh",
    tagline: "Industrial Town · Growing Fast",
    properties: 1200,
    image: "https://picsum.photos/seed/ramgarh-town/800/500",
    gradient: "from-amber-500 to-orange-600",
    highlights: ["Coal mines", "Industrial growth", "Near Ranchi"],
    localities: ["Gola", "Patratu", "Mandu", "Rajrappa", "Chitarpur"],
  },
  {
    id: "deoghar",
    name: "Deoghar",
    tagline: "City of God · Spiritual Hub",
    properties: 1500,
    image: "https://picsum.photos/seed/deoghar-temple/800/500",
    gradient: "from-purple-600 to-violet-700",
    highlights: ["Baidyanath Temple", "Religious tourism", "AIIMS Deoghar"],
    localities: ["Jasidih", "Mohanpur", "Sarwan", "Rikhia", "Palajori"],
  },
];

// ─── FEATURED PROPERTIES ────────────────────────────────────────────────────

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "3 BHK Premium Apartment",
    district: "Ranchi",
    locality: "Harmu Housing Colony",
    type: "sale",
    propertyType: "Apartment",
    price: "₹62 Lakh",
    priceNote: "EMI ₹48K/mo",
    bhk: "3 BHK",
    area: "1,450 sq.ft",
    baths: 2,
    image: "https://picsum.photos/seed/prop-ranchi-1/800/500",
    agentName: "Ajit Tiwary",
    agentRole: "Owner",
    agentInitials: "AT",
    agentColor: "bg-orange-600",
    verified: true,
    featured: true,
  },
  {
    id: 2,
    title: "2 BHK Flat for Rent",
    district: "Ranchi",
    locality: "Lalpur, Ranchi",
    type: "rent",
    propertyType: "Apartment",
    price: "₹12,000",
    priceNote: "/month",
    bhk: "2 BHK",
    area: "950 sq.ft",
    baths: 2,
    image: "https://picsum.photos/seed/prop-ranchi-2/800/500",
    agentName: "Rajesh Kumar",
    agentRole: "Agent",
    agentInitials: "RK",
    agentColor: "bg-blue-600",
    verified: true,
  },
  {
    id: 3,
    title: "4 BHK Independent House",
    district: "Dhanbad",
    locality: "Hirapur, Dhanbad",
    type: "sale",
    propertyType: "Independent House",
    price: "₹85 Lakh",
    priceNote: "EMI ₹66K/mo",
    bhk: "4 BHK",
    area: "2,200 sq.ft",
    baths: 3,
    image: "https://picsum.photos/seed/prop-dhanbad-1/800/500",
    agentName: "Sunita Devi",
    agentRole: "Owner",
    agentInitials: "SD",
    agentColor: "bg-green-600",
    verified: true,
    featured: true,
  },
  {
    id: 4,
    title: "2 BHK Steel City Apartment",
    district: "Bokaro",
    locality: "Sector 4, Bokaro Steel City",
    type: "sale",
    propertyType: "Apartment",
    price: "₹38 Lakh",
    priceNote: "EMI ₹29K/mo",
    bhk: "2 BHK",
    area: "980 sq.ft",
    baths: 2,
    image: "https://picsum.photos/seed/prop-bokaro-1/800/500",
    agentName: "Mohan Singh",
    agentRole: "Agent",
    agentInitials: "MS",
    agentColor: "bg-slate-600",
    verified: false,
  },
  {
    id: 5,
    title: "Residential Plot 5 Kattha",
    district: "Hazaribag",
    locality: "Katkamsandi Road, Hazaribag",
    type: "sale",
    propertyType: "Plot / Land",
    price: "₹18 Lakh",
    priceNote: "Negotiable",
    bhk: "Plot",
    area: "3,000 sq.ft",
    baths: 0,
    image: "https://picsum.photos/seed/prop-hazaribag-1/800/500",
    agentName: "Prem Gupta",
    agentRole: "Owner",
    agentInitials: "PG",
    agentColor: "bg-emerald-600",
    verified: true,
  },
  {
    id: 6,
    title: "3 BHK Near Baidyanath Temple",
    district: "Deoghar",
    locality: "Mohanpur Colony, Deoghar",
    type: "sale",
    propertyType: "Apartment",
    price: "₹45 Lakh",
    priceNote: "EMI ₹35K/mo",
    bhk: "3 BHK",
    area: "1,250 sq.ft",
    baths: 2,
    image: "https://picsum.photos/seed/prop-deoghar-1/800/500",
    agentName: "Anita Sharma",
    agentRole: "Agent",
    agentInitials: "AS",
    agentColor: "bg-purple-600",
    verified: true,
    featured: true,
  },
  {
    id: 7,
    title: "2 BHK Near Patratu Valley",
    district: "Ramgarh",
    locality: "Patratu Township, Ramgarh",
    type: "rent",
    propertyType: "Apartment",
    price: "₹8,500",
    priceNote: "/month",
    bhk: "2 BHK",
    area: "880 sq.ft",
    baths: 2,
    image: "https://picsum.photos/seed/prop-ramgarh-1/800/500",
    agentName: "Vijay Mehta",
    agentRole: "Owner",
    agentInitials: "VM",
    agentColor: "bg-amber-600",
    verified: false,
  },
  {
    id: 8,
    title: "Commercial Shop Space",
    district: "Ranchi",
    locality: "Main Road, Doranda, Ranchi",
    type: "rent",
    propertyType: "Commercial",
    price: "₹22,000",
    priceNote: "/month",
    bhk: "Commercial",
    area: "450 sq.ft",
    baths: 1,
    image: "https://picsum.photos/seed/prop-ranchi-comm/800/500",
    agentName: "Ajit Tiwary",
    agentRole: "Owner",
    agentInitials: "AT",
    agentColor: "bg-orange-600",
    verified: true,
  },
];

// ─── NEW PROJECTS ────────────────────────────────────────────────────────────

export const newProjects: Project[] = [
  {
    id: 1,
    name: "Ranchi Green Valley",
    developer: "Jharkhand Builders Pvt. Ltd.",
    district: "Ranchi",
    locality: "Kanke Road, Ranchi",
    priceRange: "₹42L – ₹85L",
    bhk: "2, 3 BHK",
    status: "Under Construction",
    units: 64,
    image: "https://picsum.photos/seed/project-ranchi-1/800/500",
    amenities: ["🏊 Pool", "🏋️ Gym", "🌳 Garden", "🅿️ Parking", "🛡️ 24/7 Security"],
    rera: true,
  },
  {
    id: 2,
    name: "Dhanbad Heights",
    developer: "Coal City Developers",
    district: "Dhanbad",
    locality: "Bhuli, Dhanbad",
    priceRange: "₹55L – ₹1.1Cr",
    bhk: "2, 3, 4 BHK",
    status: "Ready to Move",
    units: 12,
    image: "https://picsum.photos/seed/project-dhanbad-1/800/500",
    amenities: ["🏊 Pool", "🎾 Tennis", "🏋️ Gym", "🌳 Landscape", "⚡ Power Backup"],
    rera: true,
  },
  {
    id: 3,
    name: "Bokaro Smart Homes",
    developer: "Steel City Infrastructure",
    district: "Bokaro",
    locality: "Chas, Bokaro",
    priceRange: "₹28L – ₹52L",
    bhk: "1, 2, 3 BHK",
    status: "New Launch",
    units: 120,
    image: "https://picsum.photos/seed/project-bokaro-1/800/500",
    amenities: ["🌳 Garden", "🅿️ Parking", "🛡️ Security", "⚡ Solar Power", "🏋️ Gym"],
    rera: true,
  },
];

// ─── SERVICES ────────────────────────────────────────────────────────────────

export const services = [
  {
    icon: "🏦",
    title: "Home Loans",
    desc: "Best home loan rates from top banks in Jharkhand starting at 8.40% p.a.",
    link: "Check Eligibility",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: "⚖️",
    title: "Legal Services",
    desc: "Property registration, mutation, and legal verification by local experts.",
    link: "Know More",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: "📦",
    title: "Packers & Movers",
    desc: "Trusted shifting services across all 6 districts of Jharkhand.",
    link: "Get Quotes",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: "🛠️",
    title: "Home Interiors",
    desc: "Affordable interior design for your new home by Ranchi-based experts.",
    link: "Explore Designs",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: "📊",
    title: "Rental Agreement",
    desc: "Legal rental agreements drafted for properties across Jharkhand.",
    link: "Create Agreement",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: "🔍",
    title: "Property Valuation",
    desc: "Get accurate market valuations for properties in Jharkhand districts.",
    link: "Get Valuation",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export const testimonials = [
  {
    name: "Ranjit Mahato",
    location: "Bought in Harmu, Ranchi",
    text: "Found a beautiful 3 BHK in Ranchi through JH Homes. Ajit Tiwary's team was incredibly helpful and made the entire process smooth and transparent.",
    rating: 5,
    initials: "RM",
    color: "bg-orange-500",
  },
  {
    name: "Kavita Singh",
    location: "Renting in Sector 4, Bokaro",
    text: "Got my flat in Bokaro Steel City listed and rented within 2 weeks. Great reach across all major districts of Jharkhand!",
    rating: 5,
    initials: "KS",
    color: "bg-blue-600",
  },
  {
    name: "Deepak Prasad",
    location: "Invested in Dhanbad",
    text: "The property valuation service helped me get the right price for my plot in Dhanbad. Honest and professional service.",
    rating: 4,
    initials: "DP",
    color: "bg-green-600",
  },
];
