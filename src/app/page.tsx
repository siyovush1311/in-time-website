import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import SEOContent from "@/components/sections/SEOContent";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/process/Process";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import FAQ from "@/components/sections/faq/FAQ";
import CTA from "@/components/sections/cta/CTA";
import Contacts from "@/components/sections/contacts";
import Statistics from "@/components/sections/statistics/Statistics";
import Trusted from "@/components/sections/trusted";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="bg-[#050816]">
      <Header />

      <Hero />

      <Services />

      <About />

      <SEOContent />

      <WhyChooseUs />

      <Process />

      <Testimonials />

      <FAQ />

      <CTA />

      <Contacts />

      <Statistics />

      <Trusted />

      <Footer />
    </main>
  );
}
