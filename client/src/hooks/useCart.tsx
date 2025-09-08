import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import type { Cart, CartItem } from "@shared/schema";

const CART_STORAGE_KEY = "advayaCart";

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], giftNote: "" });
  const { toast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(currentCart => {
      const existingItemIndex = currentCart.items.findIndex(
        cartItem => cartItem.id === item.id && cartItem.color === item.color
      );

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        const updatedItems = [...currentCart.items];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return { ...currentCart, items: updatedItems };
      } else {
        // Add new item
        return { 
          ...currentCart, 
          items: [...currentCart.items, item] 
        };
      }
    });

    toast({
      title: "Added to cart!",
      description: `${item.name} (${item.color}) has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: number, color: string) => {
    setCart(currentCart => ({
      ...currentCart,
      items: currentCart.items.filter(
        item => !(item.id === productId && item.color === color)
      )
    }));

    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const updateQuantity = (productId: number, color: string, change: number) => {
    setCart(currentCart => {
      const updatedItems = currentCart.items.map(item => {
        if (item.id === productId && item.color === color) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];

      return { ...currentCart, items: updatedItems };
    });
  };

  const clearCart = () => {
    setCart({ items: [], giftNote: "" });
  };

  const updateGiftNote = (note: string) => {
    setCart(currentCart => ({ ...currentCart, giftNote: note }));
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    updateGiftNote
  };
}
