import { useState } from "react";

interface SizeInfo {
  ageGroup: string;
  description: string;
  dimensions: {
    height: string;
    width: string;
    handleDrop: string;
  };
  capacity: string;
  idealFor: string[];
  color: string;
}

const sizeData: SizeInfo[] = [
  {
    ageGroup: "Kids (5-12 years)",
    description: "Perfect for little ones to carry their treasures",
    dimensions: {
      height: "25cm",
      width: "20cm",
      handleDrop: "15cm"
    },
    capacity: "2-3 liters",
    idealFor: ["School books", "Toys", "Art supplies", "Small snacks"],
    color: "hsl(46,77%,47%)"
  },
  {
    ageGroup: "Teens (13-17 years)",
    description: "Stylish and practical for the young fashionista",
    dimensions: {
      height: "35cm",
      width: "28cm",
      handleDrop: "20cm"
    },
    capacity: "8-10 liters",
    idealFor: ["School essentials", "Weekend outings", "Shopping trips", "Books & laptop"],
    color: "hsl(332,64%,70%)"
  },
  {
    ageGroup: "Young Adults (18-25 years)",
    description: "Contemporary design for the modern lifestyle",
    dimensions: {
      height: "40cm",
      width: "32cm",
      handleDrop: "25cm"
    },
    capacity: "12-15 liters",
    idealFor: ["College books", "Work essentials", "Gym clothes", "Daily commute"],
    color: "hsl(16,57%,51%)"
  },
  {
    ageGroup: "Adults (26-45 years)",
    description: "Sophisticated elegance for professional women",
    dimensions: {
      height: "42cm",
      width: "35cm",
      handleDrop: "28cm"
    },
    capacity: "15-18 liters",
    idealFor: ["Work documents", "Laptop & chargers", "Personal items", "Shopping"],
    color: "hsl(345,56%,27%)"
  },
  {
    ageGroup: "Mature Adults (45+ years)",
    description: "Timeless design with comfort and functionality",
    dimensions: {
      height: "38cm",
      width: "33cm",
      handleDrop: "30cm"
    },
    capacity: "14-16 liters",
    idealFor: ["Daily essentials", "Reading materials", "Health items", "Travel documents"],
    color: "hsl(82,14%,49%)"
  }
];

export function SizeGuide() {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [animateCards, setAnimateCards] = useState(false);

  useState(() => {
    const timer = setTimeout(() => setAnimateCards(true), 100);
    return () => clearTimeout(timer);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(32,38%,94%)] via-white to-[hsl(32,38%,96%)] py-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in">
          <h1 className="font-serif text-5xl font-bold text-[hsl(345,56%,27%)] mb-4 tracking-tight">
            Size Guide
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[hsl(0,0%,45%)] max-w-3xl mx-auto leading-relaxed">
            Find the perfect tote bag size for every age and lifestyle. Our handcrafted bags are designed 
            to grow with you, offering comfort, style, and functionality at every stage of life.
          </p>
        </div>

        {/* Size Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sizeData.map((size, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 ${
                animateCards ? 'stagger-item' : 'opacity-0 translate-y-8'
              } ${selectedSize === index ? 'ring-4 ring-[hsl(16,57%,51%)] scale-105' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedSize(selectedSize === index ? null : index)}
              data-testid={`size-card-${index}`}
            >
              {/* Color Accent Bar */}
              <div 
                className="h-2 w-full"
                style={{ backgroundColor: size.color }}
              ></div>

              <div className="p-8">
                {/* Age Group Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 
                    className="font-serif text-2xl font-bold tracking-wide"
                    style={{ color: size.color }}
                  >
                    {size.ageGroup}
                  </h3>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: size.color }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[hsl(0,0%,45%)] mb-6 leading-relaxed">
                  {size.description}
                </p>

                {/* Dimensions */}
                <div className="bg-gradient-to-r from-[hsl(32,38%,96%)] to-[hsl(332,64%,70%)]/5 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-[hsl(0,0%,16%)] mb-3 font-serif">Dimensions</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-[hsl(0,0%,45%)]">Height:</span>
                      <span className="font-semibold text-[hsl(345,56%,27%)] ml-2">{size.dimensions.height}</span>
                    </div>
                    <div>
                      <span className="text-[hsl(0,0%,45%)]">Width:</span>
                      <span className="font-semibold text-[hsl(345,56%,27%)] ml-2">{size.dimensions.width}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[hsl(0,0%,45%)]">Handle Drop:</span>
                      <span className="font-semibold text-[hsl(345,56%,27%)] ml-2">{size.dimensions.handleDrop}</span>
                    </div>
                  </div>
                </div>

                {/* Capacity */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[hsl(0,0%,45%)]">Capacity:</span>
                  <span className="font-bold text-[hsl(16,57%,51%)] text-lg">{size.capacity}</span>
                </div>

                {/* Ideal For - Expandable */}
                <div className={`transition-all duration-300 ${selectedSize === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <h4 className="font-semibold text-[hsl(0,0%,16%)] mb-3 font-serif">Perfect For:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {size.idealFor.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: size.color }}
                        ></div>
                        <span className="text-[hsl(0,0%,45%)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Click Indicator */}
                <div className="flex items-center justify-center mt-6 pt-4 border-t border-[hsl(32,38%,90%)]">
                  <span className="text-xs text-[hsl(0,0%,45%)] group-hover:text-[hsl(16,57%,51%)] transition-colors">
                    {selectedSize === index ? 'Click to collapse' : 'Click for details'}
                  </span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[hsl(345,56%,27%)] mb-6">
                How to Choose Your Perfect Size
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,16%)] mb-2">Consider Your Daily Needs</h3>
                    <p className="text-[hsl(0,0%,45%)] leading-relaxed">
                      Think about what you'll typically carry - books, electronics, personal items, or shopping.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,16%)] mb-2">Match Your Lifestyle</h3>
                    <p className="text-[hsl(0,0%,45%)] leading-relaxed">
                      Choose based on your age group and activity level for optimal comfort and style.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,16%)] mb-2">Comfort is Key</h3>
                    <p className="text-[hsl(0,0%,45%)] leading-relaxed">
                      Consider the handle drop length for comfortable carrying on your shoulder or arm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[hsl(16,57%,51%)]/10 to-[hsl(332,64%,70%)]/10 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">👜</div>
                <h3 className="font-serif text-2xl font-bold text-[hsl(345,56%,27%)] mb-4">
                  Still Unsure?
                </h3>
                <p className="text-[hsl(0,0%,45%)] mb-6 leading-relaxed">
                  Our customer service team is here to help you find the perfect size for your needs.
                </p>
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  data-testid="contact-button"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}