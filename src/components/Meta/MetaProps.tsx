// components/Meta.tsx
"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function Meta({
  title = "Nautilus Club",
  description = "Bienvenido a Nautilus Club, actividades y horarios",
  image = "https://tusitio.com/default-og-image.png",
}: MetaProps) {
  const pathname = usePathname(); // obtiene la ruta actual
  const url = `https://tusitio.com${pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
