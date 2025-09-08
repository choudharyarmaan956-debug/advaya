import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  colors: z.array(z.string()),
  printStyle: z.enum(["blockprint", "paisley", "mandala"]),
  image: z.string(),
  description: z.string(),
  care: z.string(),
  rating: z.number().min(0).max(5),
  reviewCount: z.number(),
  dimensions: z.string(),
  inStock: z.boolean().default(true)
});

export const cartItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  color: z.string(),
  quantity: z.number().min(1)
});

export const cartSchema = z.object({
  items: z.array(cartItemSchema),
  giftNote: z.string().optional()
});

export type Product = z.infer<typeof productSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type Cart = z.infer<typeof cartSchema>;

export const filterSchema = z.object({
  search: z.string().optional(),
  priceRange: z.enum(["", "low", "mid", "high"]).optional(),
  printStyles: z.array(z.string()).optional(),
  colors: z.array(z.string()).optional()
});

export type ProductFilters = z.infer<typeof filterSchema>;
