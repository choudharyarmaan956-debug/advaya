import { z } from "zod";
import { pgTable, serial, varchar, text, integer, boolean, json, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

// Validation schemas for frontend
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

export type CartItem = z.infer<typeof cartItemSchema>;
export type Cart = z.infer<typeof cartSchema>;

export const filterSchema = z.object({
  search: z.string().optional(),
  priceRange: z.enum(["", "low", "mid", "high"]).optional(),
  printStyles: z.array(z.string()).optional(),
  colors: z.array(z.string()).optional()
});

export type ProductFilters = z.infer<typeof filterSchema>;

// Database Tables
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  price: integer("price").notNull(),
  colors: json("colors").$type<string[]>().notNull(),
  printStyle: varchar("print_style", { length: 50 }).notNull(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  care: text("care").notNull(),
  rating: integer("rating").notNull().default(5),
  reviewCount: integer("review_count").notNull().default(0),
  dimensions: text("dimensions").notNull(),
  inStock: boolean("in_stock").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  items: json("items").$type<CartItem[]>().notNull(),
  giftNote: text("gift_note"),
  subtotal: integer("subtotal").notNull(),
  customerName: varchar("customer_name", { length: 255 }),
  customerPhone: varchar("customer_phone", { length: 20 }),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});

// Insert schemas
export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

// Types
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Order = typeof orders.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
