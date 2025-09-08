import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Link } from "wouter";
import { useCart } from "@/hooks/useCart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Product } from "@shared/schema";

async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`/api/product/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
}

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id;
  
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['/api/product', productId],
    queryFn: () => fetchProduct(productId!),
    enabled: !!productId
  });

  const colorMap: Record<string, string> = {
    terracotta: "#C1623C",
    mustard: "#D6A419",
    maroon: "#6B1F2A",
    sage: "#7A8C6D",
    beige: "#F5EDE1"
  };

  // Set default color when product loads
  if (product && !selectedColor && product.colors.length > 0) {
    setSelectedColor(product.colors[0]);
  }

  const handleAddToCart = () => {
    if (!product || !selectedColor) return;
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      quantity: quantity
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`${i < rating ? 'fas' : 'far'} fa-star`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading product...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-destructive mb-4">Product not found</p>
            <Link href="/shop" className="text-primary hover:underline">Back to Shop</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8" data-testid="breadcrumb">
          <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link href="/shop" className="text-muted-foreground hover:text-foreground">Shop</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-card">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover product-zoom cursor-zoom-in"
                data-testid="img-product-main"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-secondary mb-4" data-testid="text-product-name">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-accent" data-testid="product-rating">
                  {renderStars(product.rating)}
                </div>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
              <p className="text-3xl font-bold text-primary mb-6" data-testid="text-product-price">
                ₹{product.price.toLocaleString()}
              </p>
            </div>

            <p className="text-lg text-muted-foreground" data-testid="text-product-description">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Available Colors</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 ${
                      selectedColor === color ? 'border-primary ring-2 ring-primary' : 'border-border'
                    }`}
                    style={{ backgroundColor: colorMap[color] }}
                    data-testid={`button-color-select-${color}`}
                  />
                ))}
              </div>
              {selectedColor && (
                <p className="mt-2 text-sm text-muted-foreground capitalize">
                  Selected: {selectedColor}
                </p>
              )}
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center border border-border rounded-md w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-muted"
                  data-testid="button-quantity-decrease"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1" 
                  className="w-16 text-center border-0 focus:ring-0 bg-transparent"
                  data-testid="input-quantity"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-muted"
                  data-testid="button-quantity-increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              disabled={!selectedColor}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed text-primary-foreground py-4 rounded-lg font-semibold text-lg transition-colors"
              data-testid="button-add-to-cart"
            >
              Add to Cart - ₹{(product.price * quantity).toLocaleString()}
            </button>

            {/* Collapsible Sections */}
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="fabric" data-testid="accordion-fabric">
                <AccordionTrigger className="p-4 bg-card rounded-lg font-semibold">
                  Fabric & Care
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-card/50 rounded-b-lg">
                  {product.care}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dimensions" data-testid="accordion-dimensions">
                <AccordionTrigger className="p-4 bg-card rounded-lg font-semibold">
                  Size & Dimensions
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-card/50 rounded-b-lg">
                  {product.dimensions}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping" data-testid="accordion-shipping">
                <AccordionTrigger className="p-4 bg-card rounded-lg font-semibold">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-card/50 rounded-b-lg">
                  Free shipping on orders over ₹2000. 15-day easy returns. Cash on delivery available.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}