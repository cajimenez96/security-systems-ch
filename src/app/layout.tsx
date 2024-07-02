import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  weight: '400',
  style: 'normal',
  variable: '--font-manrope',
  display: 'swap',
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Security and System - Carlos Jimenez",
  description: "Challenge - Carlos Jimenez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${manrope.className}`}>{children}</body>
    </html>
  );
}
