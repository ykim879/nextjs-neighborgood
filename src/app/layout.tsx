import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/slidebar/slidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taking Care of Yourself 🪴",
  description: "Journaling to nourish yourslef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex', height: '100vh', padding: 0 }}>
        <div style={{ width: '16.666%', height: '100%', backgroundColor: '#EAD8C0' }}>
          <Sidebar />
        </div>
        {children}
      </body>
    </html>
  );
}
