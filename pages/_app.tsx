// pages/_app.tsx
import '@/styles/index.css'; // tu CSS global

import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/index.css";
import { Providers } from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsApp from "@/components/FloatingWhatsApp/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <div className={inter.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ScrollToTop />
        <WhatsApp />
      </div>
    </Providers>
  );
}
