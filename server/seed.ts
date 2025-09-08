import { db } from "./db";
import { products } from "@shared/schema";
import productsData from "../client/src/data/products.json";

async function seedDatabase() {
  try {
    console.log("🌱 Seeding database with products...");

    // Clear existing products
    await db.delete(products);

    // Insert all products
    const insertedProducts = await db
      .insert(products)
      .values(productsData.map((product: any) => ({
        name: product.name,
        price: product.price,
        colors: product.colors,
        printStyle: product.printStyle,
        image: product.image,
        description: product.description,
        care: product.care,
        rating: product.rating,
        reviewCount: product.reviewCount,
        dimensions: product.dimensions,
        inStock: product.inStock || true
      })))
      .returning();

    console.log(`✅ Successfully seeded ${insertedProducts.length} products`);
    
    // Close the database connection
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase();