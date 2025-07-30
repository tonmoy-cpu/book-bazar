import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedBooks from "@/components/FeaturedBooks";
import WhyBookBazaar from "@/components/WhyBookBazaar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedBooks />
        <WhyBookBazaar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
