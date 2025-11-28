
import AboutSection from "@/component/landing/About";
import { Community } from "@/component/landing/Community";
import CTASection from "@/component/landing/CTA";
import { EcosystemMomentum } from "@/component/landing/EcosystemMomen";
import Footer from "@/component/landing/Footer";
import Hero from "@/component/landing/Hero";
import { NewsAndAnnouncements } from "@/component/landing/NewsAndAnnounsement";
import ProgramSection from "@/component/landing/Program";
import Header from "@/component/landing/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ProgramSection />
      <Community />
      <NewsAndAnnouncements />
      <EcosystemMomentum />
      <CTASection />
      <Footer />
    </div>
  );
}
