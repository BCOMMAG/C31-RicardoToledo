import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ComfortTechSection } from "@/components/ComfortTechSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { DoctorSection } from "@/components/DoctorSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ClinicGallerySection } from "@/components/ClinicGallerySection";
import { GuidesPreviewSection } from "@/components/GuidesPreviewSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <TreatmentsSection />
        <ComfortTechSection />
        <BeforeAfterSection />
        <DoctorSection />
        <ReviewsSection />
        <ClinicGallerySection />
        <GuidesPreviewSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

