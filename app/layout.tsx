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
  title:
    "Sandeep Mehta — Full-Stack (MERN) Developer | React, Next.js, Node.js",
  description:
    "Sandeep Mehta is a Full-Stack (MERN) Developer specializing in React, Next.js, Node.js, and scalable backend systems. Builds high-performance, SEO-friendly, production-ready web applications with a strong product mindset.",

  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Software Engineer",
    "Product Engineer",
    "Freelance Full Stack Developer",
    "Hire MERN Developer",
    "Full Stack Developer India",
  ],

  authors: [{ name: "Sandeep Mehta" }],
  creator: "Sandeep Mehta",
  publisher: "Sandeep Mehta",

  openGraph: {
    title:
      "Sandeep Mehta — Full-Stack (MERN) Developer | Production-Ready Web Apps",
    description:
      "Full-Stack Developer building scalable, high-performance web products using React, Next.js, Node.js, and modern backend architectures.",
    url: "https://your-domain.com",
    siteName: "Sandeep Mehta Portfolio",
    type: "website",
    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
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
