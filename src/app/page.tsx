import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import DistrictSection from "@/components/DistrictSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import NewProjects from "@/components/NewProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <DistrictSection />
        <FeaturedProperties />
        <NewProjects />
        <Services />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
