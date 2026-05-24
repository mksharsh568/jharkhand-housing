import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OAO Property Dekho – Real Estate in Jharkhand | OAOprop Infrastructure Pvt. Ltd.",
  description:
    "OAO Property Dekho – Jharkhand's most trusted real estate platform by OAOprop Infrastructure Pvt. Ltd. Buy, sell & rent properties across Ranchi, Dhanbad, Bokaro, Hazaribag, Ramgarh and Deoghar.",
  keywords:
    "OAO Property Dekho, OAOprop, real estate Jharkhand, property Ranchi, flats Dhanbad, house Bokaro, property Hazaribag, land Deoghar, home Ramgarh",
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
