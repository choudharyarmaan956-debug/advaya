import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Logo } from "./Logo";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "@/hooks/useCart";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-white/95 via-[hsl(32,38%,94%)]/95 to-white/95 border-b border-gradient-to-r from-[hsl(16,57%,51%)]/10 via-[hsl(332,64%,70%)]/20 to-[hsl(16,57%,51%)]/10 shadow-lg">
        <nav className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 py-3">
            {/* Logo */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                <Link 
                  href="/"
                  className="relative group px-4 py-2.5 font-medium text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] transition-all duration-300 rounded-xl font-serif text-lg tracking-wide"
                  data-testid="nav-home"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(332,64%,70%)]/0 to-[hsl(332,64%,70%)]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
                <Link 
                  href="/shop"
                  className="relative group px-4 py-2.5 font-medium text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] transition-all duration-300 rounded-xl font-serif text-lg tracking-wide"
                  data-testid="nav-shop"
                >
                  <span className="relative z-10">Shop</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(332,64%,70%)]/0 to-[hsl(332,64%,70%)]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
                <Link 
                  href="/about"
                  className="relative group px-4 py-2.5 font-medium text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] transition-all duration-300 rounded-xl font-serif text-lg tracking-wide"
                  data-testid="nav-about"
                >
                  <span className="relative z-10">Our Story</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(332,64%,70%)]/0 to-[hsl(332,64%,70%)]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
                <Link 
                  href="/size-guide"
                  className="relative group px-4 py-2.5 font-medium text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] transition-all duration-300 rounded-xl font-serif text-lg tracking-wide"
                  data-testid="nav-size-guide"
                >
                  <span className="relative z-10">Size Guide</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(332,64%,70%)]/0 to-[hsl(332,64%,70%)]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
                <a 
                  href="#contact"
                  className="relative group px-4 py-2.5 font-medium text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] transition-all duration-300 rounded-xl font-serif text-lg tracking-wide"
                  data-testid="nav-contact"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(332,64%,70%)]/0 to-[hsl(332,64%,70%)]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </a>
              </div>
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/cart"
                className="relative group p-3 text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-[hsl(332,64%,70%)]/5 hover:to-[hsl(16,57%,51%)]/5 transform hover:scale-105"
                data-testid="button-cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] shadow-md"
                    data-testid="text-cart-count"
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-3 text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-[hsl(332,64%,70%)]/5 hover:to-[hsl(16,57%,51%)]/5 transform hover:scale-105"
                data-testid="button-mobile-menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-x-0 top-20 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-gradient-to-b from-white/98 to-[hsl(32,38%,94%)]/98 backdrop-blur-xl border-b border-[hsl(16,57%,51%)]/20 shadow-xl">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/"
                  onClick={closeMobileMenu}
                  className="block py-3 px-4 text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] font-serif text-xl tracking-wide rounded-xl hover:bg-gradient-to-r hover:from-[hsl(332,64%,70%)]/10 hover:to-[hsl(16,57%,51%)]/10 transition-all duration-300"
                  data-testid="mobile-nav-home"
                >
                  Home
                </Link>
                <Link 
                  href="/shop"
                  onClick={closeMobileMenu}
                  className="block py-3 px-4 text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] font-serif text-xl tracking-wide rounded-xl hover:bg-gradient-to-r hover:from-[hsl(332,64%,70%)]/10 hover:to-[hsl(16,57%,51%)]/10 transition-all duration-300"
                  data-testid="mobile-nav-shop"
                >
                  Shop
                </Link>
                <Link 
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block py-3 px-4 text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] font-serif text-xl tracking-wide rounded-xl hover:bg-gradient-to-r hover:from-[hsl(332,64%,70%)]/10 hover:to-[hsl(16,57%,51%)]/10 transition-all duration-300"
                  data-testid="mobile-nav-about"
                >
                  Our Story
                </Link>
                <Link 
                  href="/size-guide"
                  onClick={closeMobileMenu}
                  className="block py-3 px-4 text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] font-serif text-xl tracking-wide rounded-xl hover:bg-gradient-to-r hover:from-[hsl(332,64%,70%)]/10 hover:to-[hsl(16,57%,51%)]/10 transition-all duration-300"
                  data-testid="mobile-nav-size-guide"
                >
                  Size Guide
                </Link>
                <a 
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block py-3 px-4 text-[hsl(0,0%,16%)] hover:text-[hsl(16,57%,51%)] font-serif text-xl tracking-wide rounded-xl hover:bg-gradient-to-r hover:from-[hsl(332,64%,70%)]/10 hover:to-[hsl(16,57%,51%)]/10 transition-all duration-300"
                  data-testid="mobile-nav-contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] ${
          showBackToTop ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        data-testid="button-back-to-top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
