import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JH Homes – Real Estate in Jharkhand | Ranchi, Dhanbad, Bokaro & More",
  description:
    "Jharkhand's most trusted real estate platform. Buy, sell & rent properties across Ranchi, Dhanbad, Bokaro, Hazaribag, Ramgarh and Deoghar. Contact Ajit Tiwary at Hariom Tower, Ranchi.",
  keywords:
    "real estate Jharkhand, property Ranchi, flats Dhanbad, house Bokaro, property Hazaribag, land Deoghar, home Ramgarh",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
