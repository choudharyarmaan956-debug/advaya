import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema, type CartItem } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // GET /api/products - Returns all products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  // GET /api/product/:id - Returns single product by id
  app.get("/api/product/:id", async (req, res) => {
    try {
      const productId = parseInt(req.params.id);
      if (isNaN(productId)) {
        return res.status(400).json({ error: "Invalid product ID" });
      }

      const product = await storage.getProduct(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  // POST /api/order - Creates new order and returns WhatsApp link
  app.post("/api/order", async (req, res) => {
    try {
      // Validate request body
      const orderData = insertOrderSchema.parse(req.body);

      // Create order in database
      const order = await storage.createOrder(orderData);

      // Generate WhatsApp message
      let message = "Hello Advaya, I'd like to order:\n\n";
      
      orderData.items.forEach((item: CartItem) => {
        message += `• ${item.name} (${item.color}) x${item.quantity} - ₹${item.price.toLocaleString()}\n`;
      });

      message += `\nTotal: ₹${orderData.subtotal.toLocaleString()}`;

      if (orderData.giftNote) {
        message += `\n\nGift Note: ${orderData.giftNote}`;
      }

      message += `\n\nOrder ID: ${order.id}\nPlease confirm my order. Thank you!`;

      // WhatsApp number - you can replace this with actual number
      const whatsappNumber = process.env.WHATSAPP_NUMBER || "919876543210";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      res.json({
        success: true,
        orderId: order.id,
        whatsappUrl,
        message: "Order created successfully"
      });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
