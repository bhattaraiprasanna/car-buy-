import type { Metadata } from "next"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body   >
        <Navbar />
        <main className="mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
