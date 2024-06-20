import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash's Blog App",
  description:
    "This is my attempt at making a full stack blog application with next js and mongo db",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
