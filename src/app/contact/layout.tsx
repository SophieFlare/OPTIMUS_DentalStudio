import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar";
import { Footer } from "../../sections/Footer";
import { Header } from "../../sections/Header"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optimus Dental Studio",
  description: "space Optimus contact page",

  icons: {
    icon: "/contact-public/LockMain.png", // Path to your image in the public directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
