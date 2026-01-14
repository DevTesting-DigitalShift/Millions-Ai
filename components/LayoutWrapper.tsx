"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CurtainWrapper from "@/components/CurtainWrapper";
import MorphingShape from "@/components/MorphingShape";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <SmoothScrollProvider>
      <div className="relative">
        <Header />
        <MorphingShape />

        <div className="fixed bottom-0 left-0 right-0 z-0">
          <Footer />
        </div>

        <CurtainWrapper>
          <div className="min-h-screen">
            <div className="h-[88px]" />
            {children}
            <div className="h-screen" />
          </div>
        </CurtainWrapper>
      </div>
    </SmoothScrollProvider>
  );
}
