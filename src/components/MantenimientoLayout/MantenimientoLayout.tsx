import WhatsApp from "@/components/FloatingWhatsApp/FloatingWhatsApp";

export default function MantenimientoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <WhatsApp />
    </>
  );
}