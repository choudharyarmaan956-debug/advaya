import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
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
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading products...</p>
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
            <p className="text-destructive">Error loading products. Please try again.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-card mandala-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-rose-800 mb-4">Shop Our Collection</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each tote tells a story of tradition, craftsmanship, and modern style. Find your perfect carry companion.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h2 className="font-serif text-lg font-semibold mb-4">Filter Products</h2>
              
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