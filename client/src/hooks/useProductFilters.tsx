import { useState, useMemo } from "react";
import type { Product, ProductFilters } from "@shared/schema";

export function useProductFilters(products: Product[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState<ProductFilters['priceRange']>("");
  const [selectedPrintStyles, setSelectedPrintStyles] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const togglePrintStyle = (style: string) => {
    setSelectedPrintStyles(prev => 
      prev.includes(style) 
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
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
        if (priceFilter === 'low' && product.price >= 2000) return false;
        if (priceFilter === 'mid' && (product.price < 2000 || product.price > 3000)) return false;
        if (priceFilter === 'high' && product.price <= 3000) return false;
      }

      // Print style filter
      if (selectedPrintStyles.length > 0 && !selectedPrintStyles.includes(product.printStyle)) {
        return false;
      }

      // Color filter
      if (selectedColors.length > 0 && !selectedColors.some(color => product.colors.includes(color))) {
        return false;
      }

      return true;
    });
  }, [products, searchTerm, priceFilter, selectedPrintStyles, selectedColors]);

  return {
    searchTerm,
    setSearchTerm,
    priceFilter,
    setPriceFilter,
    selectedPrintStyles,
    togglePrintStyle,
    selectedColors,
    toggleColor,
    filteredProducts
  };
}
