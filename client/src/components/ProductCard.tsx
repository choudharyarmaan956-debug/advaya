import { Link } from "wouter";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onViewDetails?: () => void;
  index?: number;
}

export function ProductCard({ product, onViewDetails, index = 0 }: ProductCardProps) {
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
      className={`bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer product-card-hover stagger-item border border-gray-100 ${index < 6 ? '' : 'opacity-100 transform-none'}`}
      data-testid={`card-product-${product.id}`}
      style={{ animationDelay: index < 6 ? `${(index + 1) * 0.1}s` : '0s' }}
    >
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900 group-hover:text-rose-800 transition-colors duration-300">{product.name}</h3>
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-amber-400">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500 ml-1">({product.reviewCount} reviews)</span>
        </div>
        <p className="text-rose-600 font-bold text-xl mb-4">₹{product.price.toLocaleString()}</p>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 rounded-lg font-semibold btn-hover focus-ring transition-all duration-300"
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
