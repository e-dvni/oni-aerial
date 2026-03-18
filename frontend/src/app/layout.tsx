import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Oni Aerial | Precision Drone Inspections & Aerial Imaging",
  description:
    "FAA Part 107 Certified and Veteran-Owned drone inspections and aerial imaging in Denver and surrounding Colorado areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#050505] text-[#F5F5F5] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}