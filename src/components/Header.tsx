import { Search, ShoppingCart, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { state } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Book Bazaar
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 items-center justify-center space-x-2 md:justify-end">
          <div className="w-full max-w-sm relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search books, authors, genres..."
              className="pl-10 bg-muted/50 border-border focus:bg-background"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigate('/books');
                }
              }}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => isAuthenticated ? navigate('/account') : navigate('/login')}
          >
            <User className="h-4 w-4" />
            <span className="hidden sm:inline-block">
              {isAuthenticated ? user?.firstName : 'Account'}
            </span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline-block">Cart</span>
            {state.itemCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                {state.itemCount}
              </Badge>
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;