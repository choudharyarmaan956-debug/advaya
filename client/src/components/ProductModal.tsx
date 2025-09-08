import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Product } from "@shared/schema";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const colorMap: Record<string, string> = {
    terracotta: "#C1623C",
    mustard: "#D6A419",
    maroon: "#6B1F2A",
    sage: "#7A8C6D",
    beige: "#F5EDE1"
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      quantity: quantity
    });
    onClose();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`${i < rating ? 'fas' : 'far'} fa-star`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={onClose}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div 
          className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          data-testid="modal-product-detail"
        >
          <div className="sticky top-0 bg-background border-b border-border p-4 flex justify-between items-center">
            <h2 className="font-serif text-2xl font-bold">Product Details</h2>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-close-modal"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg bg-card">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover product-zoom cursor-zoom-in"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-secondary mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-accent">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                  </div>
                  <p className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
                </div>

                <p className="text-muted-foreground">{product.description}</p>

                {/* Color Selection */}
                <div>
                  <h4 className="font-semibold mb-3">Available Colors</h4>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedColor === color ? 'border-primary ring-2 ring-primary' : 'border-border'
                        }`}
                        style={{ backgroundColor: colorMap[color] }}
                        data-testid={`button-color-select-${color}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div>
                  <h4 className="font-semibold mb-3">Quantity</h4>
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-semibold text-lg transition-colors"
                  data-testid="button-add-to-cart-modal"
                >
                  Add to Cart - ₹{(product.price * quantity).toLocaleString()}
                </button>

                {/* Collapsible Sections */}
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="fabric">
                    <AccordionTrigger className="p-4 bg-card rounded-lg font-semibold">
                      Fabric & Care
                    </AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/50 rounded-b-lg">
                      {product.care}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="dimensions">
                    <AccordionTrigger className="p-4 bg-card rounded-lg font-semibold">
                      Size & Dimensions
                    </AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/50 rounded-b-lg">
                      {product.dimensions}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="shipping">
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
      </div>
    </div>
  );
}
