import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToasterProvider from "@/components/ToasterProvider"; // Import Toaster in a client component

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
      <body className="bg-[#C7E6F5C4]">
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <ToasterProvider /> {/* Now handled in a separate client component */}
        <Footer />
      </body>
    </html>
  );
}
