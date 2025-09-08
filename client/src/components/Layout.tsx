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

  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-[#EDB7C4]/20 shadow-sm" style={{ backgroundColor: "#E3E2DD" }}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link 
                  href="/"
                  className="text-[#2A2A2A] hover:text-[#EDB7C4] transition-colors duration-300 px-3 py-2 font-medium"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  data-testid="nav-home"
                >
                  Home
                </Link>
                <Link 
                  href="/shop"
                  className="text-[#2A2A2A] hover:text-[#EDB7C4] transition-colors duration-300 px-3 py-2 font-medium"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  data-testid="nav-shop"
                >
                  Shop
                </Link>
                <Link 
                  href="/about"
                  className="text-[#2A2A2A] hover:text-[#EDB7C4] transition-colors duration-300 px-3 py-2 font-medium"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  data-testid="nav-about"
                >
                  Our Story
                </Link>
                <a 
                  href="#contact"
                  className="text-[#2A2A2A] hover:text-[#EDB7C4] transition-colors duration-300 px-3 py-2 font-medium"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  data-testid="nav-contact"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/cart"
                className="relative p-2 text-[#2A2A2A] hover:text-[#EDB7C4] transition-colors duration-300"
                data-testid="button-cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                    style={{ backgroundColor: "#EDB7C4" }}
                    data-testid="text-cart-count"
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
              <button className="md:hidden p-2 text-[#2A2A2A] hover:text-[#EDB7C4] transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
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
        className={`fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          showBackToTop ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ backgroundColor: "#EDB7C4" }}
        data-testid="button-back-to-top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
