import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt's Albums",
  description: "A page containing my vinyl collection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-center flex-col`}>
        <header className="flex justify-center my-12">
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
