import type React from "react";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sandeep Mehta | Full-Stack Developer",
  description:
    "Full-stack developer with a product mindset, focused on clean architecture, performance, and long-term maintainability.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Product Engineer",
  ],
  authors: [{ name: "Shiv" }],
  openGraph: {
    title: "Shiv | Full-Stack Developer",
    description: "I architect scalable web products — not just interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="relative overflow-x-hidden min-h-screen">
          <ThemeProvider attribute="class">
            {children}
            <Toaster position="top-right" richColors />
          </ThemeProvider>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
