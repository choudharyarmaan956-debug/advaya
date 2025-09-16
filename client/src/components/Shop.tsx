import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { SkeletonCard } from "./SkeletonCard";
import { useProductFilters } from "@/hooks/useProductFilters";
import type { Product } from "@shared/schema";

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['/api/products'],
    queryFn: fetchProducts
  });

  const {
    searchTerm,
    setSearchTerm,
    priceFilter,
    setPriceFilter,
    selectedPrintStyles,
    togglePrintStyle,
    filteredProducts
  } = useProductFilters(products);

  if (isLoading) {
    return (
      <section id="shop" className="py-16 bg-card mandala-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-rose-800 mb-4">Shop Our Collection</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Loading our beautiful collection...
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="shop" className="py-16 bg-card mandala-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-md max-w-md mx-auto">
              <div className="text-red-500 text-4xl mb-4">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-2">Oops! Something went wrong</h2>
              <p className="text-gray-600 mb-4">We couldn't load the products. Please check your connection and try again.</p>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                data-testid="button-try-again"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="py-16 bg-card mandala-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-rose-800 mb-4">Shop Our Collection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each tote tells a story of tradition, craftsmanship, and modern style. Find your perfect carry companion.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-lg font-semibold mb-4">Filter Products</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Search</label>
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search bags..." 
                  className="w-full px-3 py-2 border border-border rounded-md bg-input focus:ring-2 focus:ring-ring focus:border-transparent"
                  data-testid="input-search"
                />
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <select 
                  value={priceFilter} 
                  onChange={(e) => setPriceFilter(e.target.value as any)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input"
                  data-testid="select-price-filter"
                >
                  <option value="">All Prices</option>
                  <option value="low">Under ₹500</option>
                  <option value="mid">₹500 - ₹1000</option>
                  <option value="high">Above ₹1000</option>
                </select>
              </div>

              {/* Print Style Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Print Style</label>
                <div className="space-y-2">
                  {["heritage", "vintage"].map((style) => (
                    <label key={style} className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={selectedPrintStyles.includes(style)}
                        onChange={() => togglePrintStyle(style)}
                        className="rounded border-border text-primary focus:ring-ring"
                        data-testid={`checkbox-print-${style}`}
                      />
                      <span className="ml-2 text-sm capitalize">{style}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={() => setSelectedProduct(product)}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12" data-testid="text-no-products">
                <i className="fas fa-search text-4xl text-muted mb-4"></i>
                <p className="text-muted-foreground">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
