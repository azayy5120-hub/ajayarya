import Navigation from "@/components/ecommerce/Navigation";
import Hero from "@/components/ecommerce/Hero";
import Collections from "@/components/ecommerce/Collections";
import Craftsmanship from "@/components/ecommerce/Craftsmanship";
import WhyChooseUs from "@/components/ecommerce/WhyChooseUs";
import Testimonials from "@/components/ecommerce/Testimonials";
import Footer from "@/components/ecommerce/Footer";

const Home = () => {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      <Hero />
      <Collections />
      <Craftsmanship />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
