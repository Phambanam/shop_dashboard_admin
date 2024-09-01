import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSideBar from "@/components/layout/LeftSideBar"
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Component } from "react";
import { loadComponents } from "next/dist/server/load-components";
import TopBar from "@/components/layout/TopBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop - DashBoard",
  description: "Admin dashboard to manage Shop's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <LeftSideBar/>
        <TopBar/>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
