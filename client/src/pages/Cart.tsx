import { useState } from "react";
import { Link } from "wouter";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

interface OrderRequest {
  items: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
    color: string;
    quantity: number;
  }>;
  giftNote?: string;
  subtotal: number;
}

interface OrderResponse {
  success: boolean;
  orderId: number;
  whatsappUrl: string;
  message: string;
}

async function createOrder(orderData: OrderRequest): Promise<OrderResponse> {
  const response = await fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error('Failed to create order');
  }

  return response.json();
}

export default function Cart() {
  const [giftNote, setGiftNote] = useState("");
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();

  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const orderMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      toast({
        title: "Order created successfully!",
        description: "Redirecting to WhatsApp to complete your order.",
      });
      
      // Open WhatsApp link
      window.open(data.whatsappUrl, '_blank');
      
      // Clear cart after successful order
      clearCart();
    },
    onError: () => {
      toast({
        title: "Order failed",
        description: "There was an error creating your order. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleCheckout = () => {
    if (cart.items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart before checkout.",
        variant: "destructive"
      });
      return;
    }

    orderMutation.mutate({
      items: cart.items,
      giftNote: giftNote || undefined,
      subtotal
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="mb-4" data-testid="breadcrumb">
            <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Cart</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-secondary">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.items.length === 0 ? (
              <div className="text-center py-12 bg-card rounded-lg" data-testid="empty-cart">
                <i className="fas fa-shopping-bag text-6xl text-muted mb-6"></i>
                <h2 className="font-serif text-2xl font-semibold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Discover our beautiful collection of handcrafted tote bags</p>
                <Link 
                  href="/shop"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div 
                    key={`${item.id}-${item.color}`}
                    className="flex gap-4 p-6 bg-card rounded-lg shadow-sm"
                    data-testid={`cart-item-${item.id}`}
                  >
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold mb-1">{item.name}</h3>
                      <p className="text-muted-foreground mb-2 capitalize">Color: {item.color}</p>
                      <p className="font-semibold text-primary text-lg">₹{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <div className="flex items-center border border-border rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, item.color, -1)}
                          className="px-3 py-2 hover:bg-muted rounded-l-lg"
                          data-testid={`button-decrease-${item.id}`}
                        >
                          -
                        </button>
                        <span className="px-4 py-2 border-x border-border" data-testid={`text-quantity-${item.id}`}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.color, 1)}
                          className="px-3 py-2 hover:bg-muted rounded-r-lg"
                          data-testid={`button-increase-${item.id}`}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.color)}
                        className="text-destructive hover:text-destructive/80 text-sm flex items-center gap-1"
                        data-testid={`button-remove-${item.id}`}
                      >
                        <i className="fas fa-trash"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          {cart.items.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 shadow-sm sticky top-4">
                <h2 className="font-serif text-xl font-semibold mb-6">Order Summary</h2>

                {/* Gift Note */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Gift Note (Optional)</label>
                  <textarea 
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Add a personal message..." 
                    className="w-full px-3 py-2 border border-border rounded-md bg-input resize-none" 
                    rows={3}
                    data-testid="textarea-gift-note"
                  />
                </div>

                {/* Order Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Items ({cart.items.reduce((sum, item) => sum + item.quantity, 0)})</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{subtotal >= 2000 ? 'Free' : '₹100'}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span data-testid="text-cart-total">
                      ₹{(subtotal + (subtotal >= 2000 ? 0 : 100)).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button 
                  onClick={handleCheckout}
                  disabled={orderMutation.isPending}
                  className="w-full bg-secondary hover:bg-secondary/90 disabled:bg-muted disabled:cursor-not-allowed text-secondary-foreground py-4 rounded-lg font-semibold text-lg transition-colors mb-4"
                  data-testid="button-checkout"
                >
                  {orderMutation.isPending ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <i className="fab fa-whatsapp mr-2"></i>
                      Checkout via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Secure checkout via WhatsApp • COD Available • Free shipping on orders over ₹2000
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}