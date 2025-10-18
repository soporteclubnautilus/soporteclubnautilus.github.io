"use client";

import { Inter } from "next/font/google";
import WhatsApp from "@/components/FloatingWhatsApp/FloatingWhatsApp";

import "@/styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          
          {children}
          < WhatsApp />
          
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

