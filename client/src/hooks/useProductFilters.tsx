import { useState, useMemo } from "react";
import type { Product, ProductFilters } from "@shared/schema";

export function useProductFilters(products: Product[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState<ProductFilters['priceRange']>("");
  const [selectedPrintStyles, setSelectedPrintStyles] = useState<string[]>([]);

  const togglePrintStyle = (style: string) => {
    setSelectedPrintStyles(prev => 
      prev.includes(style) 
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };


  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Price filter
      if (priceFilter) {
        if (priceFilter === 'low' && product.price >= 500) return false;
        if (priceFilter === 'mid' && (product.price < 500 || product.price > 1000)) return false;
        if (priceFilter === 'high' && product.price <= 1000) return false;
      }

      // Print style filter
      if (selectedPrintStyles.length > 0 && !selectedPrintStyles.includes(product.printStyle)) {
        return false;
      }


      return true;
    });
  }, [products, searchTerm, priceFilter, selectedPrintStyles]);

  return {
    searchTerm,
    setSearchTerm,
    priceFilter,
    setPriceFilter,
    selectedPrintStyles,
    togglePrintStyle,
    filteredProducts
  };
}
