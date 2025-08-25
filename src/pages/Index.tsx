import Hero from "@/components/Hero";
import About from "@/components/About";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import HowWeOperate from "@/components/HowWeOperate";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ProblemSolution />
      <Benefits />
      <HowWeOperate />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;