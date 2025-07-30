import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import { booksData } from "@/data/books";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const FeaturedBooks = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  // Get first 4 books as featured
  const featuredBooks = booksData.slice(0, 4);

  const handleAddToCart = (book: any, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(book);
    toast.success(`Added "${book.title}" to cart`);
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Books</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our most popular and highly-rated books
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <Card 
              key={book.id} 
              className="group overflow-hidden border-0 shadow-book hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {book.badge && (
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                      {book.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Button
                    size="icon"
                    onClick={(e) => handleAddToCart(book, e)}
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary hover:bg-primary/90"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                    <p className="text-xs text-accent-foreground font-medium">{book.category}</p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(book.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {book.rating} ({book.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-primary">
                          ${book.price}
                        </span>
                        {book.originalPrice > book.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${book.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button 
                      variant="book" 
                      size="sm" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={() => navigate('/books')}>
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;