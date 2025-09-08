import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { SkeletonCard } from "@/components/SkeletonCard";
import { useProductFilters } from "@/hooks/useProductFilters";
import type { Product } from "@shared/schema";

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export default function Shop() {
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
      <div className="min-h-screen bg-card mandala-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-rose-800 mb-4 slide-up">Shop Our Collection</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto fade-in">
              Each tote tells a story of tradition, craftsmanship, and modern style. Find your perfect carry companion.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl p-6 shadow-md filter-slide-in">
                <div className="h-6 bg-gray-200 rounded skeleton mb-4"></div>
                <div className="space-y-4">
                  <div className="h-10 bg-gray-200 rounded skeleton"></div>
                  <div className="h-10 bg-gray-200 rounded skeleton"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded skeleton"></div>
                    <div className="h-4 bg-gray-200 rounded skeleton"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-card mandala-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-card mandala-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-rose-800 mb-6 slide-up">Shop Our Collection</h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto fade-in leading-relaxed">
            Each tote tells a story of tradition, craftsmanship, and modern style. Find your perfect carry companion.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl p-6 shadow-md filter-slide-in border border-gray-100">
              <h2 className="font-serif text-xl font-semibold mb-6 text-gray-900">Filter Products</h2>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-gray-700">Search</label>
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search bags..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  data-testid="input-search"
                />
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-gray-700">Price Range</label>
                <select 
                  value={priceFilter} 
                  onChange={(e) => setPriceFilter(e.target.value as any)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
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
                <label className="block text-sm font-medium mb-3 text-gray-700">Print Style</label>
                <div className="space-y-2">
                  {["heritage", "vintage"].map((style) => (
                    <label key={style} className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={selectedPrintStyles.includes(style)}
                        onChange={() => togglePrintStyle(style)}
                        className="rounded border-gray-300 text-pink-600 focus:ring-pink-500 focus:ring-2 transition-all duration-300"
                        data-testid={`checkbox-print-${style}`}
                      />
                      <span className="ml-3 text-sm capitalize text-gray-700">{style}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={() => setSelectedProduct(product)}
                  index={index}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="col-span-full">
                <div className="text-center py-16" data-testid="text-no-products">
                  <div className="bg-white rounded-xl p-8 shadow-md max-w-md mx-auto">
                    <div className="text-gray-400 text-5xl mb-4">
                      <i className="fas fa-search"></i>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms to find what you're looking for.</p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setPriceFilter('');
                      }}
                      className="text-pink-600 hover:text-pink-700 font-semibold transition-colors duration-300"
                    >
                      Clear all filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
}