import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/ui/common/navbar";
import Footer from "@/components/ui/common/footer";
import Tagline from "@/components/ui/common/tagline";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Procure Solutions",
  description: "Your trusted partner in healthcare solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={'/assets/images/logoImg.png'} type="svg" sizes="16x16" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f1a10d]`}
      >
        <Tagline />
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          {children}
            <Toaster position="top-center" reverseOrder={false} />
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
