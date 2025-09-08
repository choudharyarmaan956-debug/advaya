import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [giftNote, setGiftNote] = useState("");
  const { cart, updateQuantity, removeFromCart } = useCart();
  const { toast } = useToast();

  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cart.items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart before checkout.",
        variant: "destructive"
      });
      return;
    }

    let message = "I want to order the following items from Advaya:\n\n";
    
    cart.items.forEach(item => {
      message += `• ${item.name} (${item.color}) - Qty: ${item.quantity} - ₹${item.price.toLocaleString()}\n`;
    });

    message += `\nSubtotal: ₹${subtotal.toLocaleString()}`;

    if (giftNote) {
      message += `\n\nGift Note: ${giftNote}`;
    }

    message += "\n\nPlease confirm my order. Thank you!";

    const whatsappNumber = process.env.VITE_WHATSAPP_NUMBER || "919876543210";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        data-testid="cart-drawer"
      >
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="p-6 border-b border-border">
            <div className="flex justify-between items-center">
              <h2 className="font-serif text-2xl font-bold">Your Cart</h2>
              <button 
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
                data-testid="button-close-cart"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.items.length === 0 ? (
              <div className="text-center py-8" data-testid="empty-cart">
                <i className="fas fa-shopping-bag text-4xl text-muted mb-4"></i>
                <p className="text-muted-foreground">Your cart is empty</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div 
                    key={`${item.id}-${item.color}`}
                    className="flex gap-4 p-4 bg-card rounded-lg"
                    data-testid={`cart-item-${item.id}`}
                  >
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.color}</p>
                      <p className="font-semibold text-primary">₹{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center border border-border rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.color, -1)}
                          className="px-2 py-1 hover:bg-muted"
                          data-testid={`button-decrease-${item.id}`}
                        >
                          -
                        </button>
                        <span className="px-3 py-1" data-testid={`text-quantity-${item.id}`}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.color, 1)}
                          className="px-2 py-1 hover:bg-muted"
                          data-testid={`button-increase-${item.id}`}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.color)}
                        className="text-destructive hover:text-destructive/80 text-sm"
                        data-testid={`button-remove-${item.id}`}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cart.items.length > 0 && (
            <div className="p-6 border-t border-border">
              <div className="space-y-4">
                {/* Gift Note */}
                <div>
                  <label className="block text-sm font-medium mb-2">Gift Note (Optional)</label>
                  <textarea 
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Add a personal message..." 
                    className="w-full px-3 py-2 border border-border rounded-md bg-input resize-none" 
                    rows={2}
                    data-testid="textarea-gift-note"
                  />
                </div>

                {/* Subtotal */}
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Subtotal:</span>
                  <span data-testid="text-cart-subtotal">₹{subtotal.toLocaleString()}</span>
                </div>

                {/* Checkout Button */}
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-4 rounded-lg font-semibold text-lg transition-colors"
                  data-testid="button-checkout"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Checkout via WhatsApp
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Secure checkout via WhatsApp • COD Available
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
