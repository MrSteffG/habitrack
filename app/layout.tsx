import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Supabase",
  description:
    "Boilerplate application bootstrapped with Next.js, Supabase & Clerk.",
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
          <div className="flex h-full w-full flex-col items-center gap-10">
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
