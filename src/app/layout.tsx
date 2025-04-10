import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optimus Dental Studio",
  description: "A landing page for an OPTIMUS startup created with Frontend Tribe",

  icons: {
    icon: "/contact-public/LockMain.png", // Path to your image in the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* This will apply the favicon to your tab */}
        <link rel="icon" href="/contact-public/LockMain.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
