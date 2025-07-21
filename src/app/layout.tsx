"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";
import { useLanguage } from "@/hooks/useLanguage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useDeviceDetection();
  const { languageState } = useLanguage();
  return (
    <html
      lang={languageState.toLocaleLowerCase()}
      dir={languageState === "Fa" ? "rtl" : "ltr"}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
