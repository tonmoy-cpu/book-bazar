import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import heroBooks from "@/assets/hero-books.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 sm:py-32">
      <div className="absolute inset-0 bg-background/10" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
                One Stop Destination for{" "}
                <span className="text-accent-foreground">Book Lovers</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-xl">
                Discover your next great read from our curated collection of books across all genres. 
                From bestsellers to hidden gems, we have something for every reader.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" onClick={() => navigate('/books')}>
                <BookOpen className="h-5 w-5" />
                Explore Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30" onClick={() => navigate('/books')}>
                Browse Categories
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={heroBooks}
                alt="Collection of beautiful books"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-elevated">
              <p className="text-sm font-medium">10,000+ Books</p>
              <p className="text-xs opacity-90">Available Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;