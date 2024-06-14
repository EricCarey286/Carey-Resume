import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Eric W Carey Resume",
  description: `Welcome to my professional portfolio! Explore my resume, career highlights, and projects. 
  Discover my skills and experience, and see how I can contribute to your next big idea. 
  Let's connect and create something great together!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>{children}</body>
    </html>
  );
}
