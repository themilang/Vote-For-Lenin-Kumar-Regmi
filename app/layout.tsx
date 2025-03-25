import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "लेलिन कुमार रेग्मी - स्ववियु सभापति उम्मेदवार",
  description: "मध्यपश्चिम विश्वविद्यालय स्ववियु निर्वाचन 2081 का लागि लेलिन रेग्मीको आधिकारिक अभियान साइट। प्रतिबद्धता र एजेन्डा हेर्नुहोस्।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
