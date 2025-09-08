import { Link } from "wouter";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onViewDetails?: () => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: product.colors[0],
      quantity: 1
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`${i < rating ? 'fas' : 'far'} fa-star text-sm`}
      />
    ));
  };

  const cardContent = (
    <div 
      className="bg-background rounded-lg shadow-sm overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      data-testid={`card-product-${product.id}`}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-accent">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
        </div>
        <p className="text-primary font-semibold text-lg mb-3">₹{product.price.toLocaleString()}</p>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-md transition-colors"
          data-testid={`button-add-to-cart-${product.id}`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  // If onViewDetails is provided (legacy modal mode), use onClick
  if (onViewDetails) {
    return (
      <div onClick={onViewDetails}>
        {cardContent}
      </div>
    );
  }

  // Otherwise, use Link to navigate to product detail page
  return (
    <Link href={`/product/${product.id}`}>
      {cardContent}
    </Link>
  );
}
