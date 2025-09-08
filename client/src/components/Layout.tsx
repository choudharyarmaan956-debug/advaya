import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "@/hooks/useCart";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-foreground hover:text-primary transition-colors px-3 py-2 font-medium"
                  data-testid="nav-home"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('shop')} 
                  className="text-foreground hover:text-primary transition-colors px-3 py-2 font-medium"
                  data-testid="nav-shop"
                >
                  Shop
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-foreground hover:text-primary transition-colors px-3 py-2 font-medium"
                  data-testid="nav-about"
                >
                  Our Story
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-foreground hover:text-primary transition-colors px-3 py-2 font-medium"
                  data-testid="nav-contact"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsCartOpen(true)} 
                className="relative p-2 text-foreground hover:text-primary transition-colors"
                data-testid="button-cart"
              >
                <i className="fas fa-shopping-bag text-xl"></i>
                {totalItems > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    data-testid="text-cart-count"
                  >
                    {totalItems}
                  </span>
                )}
              </button>
              <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all transform ${
          showBackToTop ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        data-testid="button-back-to-top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
