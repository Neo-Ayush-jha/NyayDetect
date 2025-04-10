import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToasterProvider from "@/components/ToasterProvider";
import Script from 'next/script'



export const metadata: Metadata = {
  title: "Neo app",
  description: "Neo designing app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script src="https://ai-noir.vercel.app" />
      </head>
      <body className="bg-[#C7E6F5C4]">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <ToasterProvider />
        <Footer />
      </body>
    </html>
  );
}
