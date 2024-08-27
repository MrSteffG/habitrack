import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habitrack",
  description:
    "Habit tracking application built with Next.js, Supabase & Clerk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <div className="flex min-h-screen w-full flex-col items-center gap-20 dark:bg-zinc-900 dark:text-zinc-200">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
