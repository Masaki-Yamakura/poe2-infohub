import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Path of Exile 2 Info Hub",
  description: "Path of Exile 2 の攻略情報、用語集、金策方法などを網羅した総合情報サイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans antialiased`}>
        <Header />
        <div className="flex flex-1">
          <Suspense fallback={<div className="w-64 border-r border-zinc-800 bg-black/90 hidden md:block" />}>
            <Sidebar />
          </Suspense>
          <main className="flex-1 py-6 md:ml-64 lg:ml-72">
            <div className="container mx-auto px-4">
              {children}
            </div>
          </main>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
