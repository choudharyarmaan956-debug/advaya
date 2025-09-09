import { useState, useEffect } from "react";

interface CareStep {
  icon: string;
  title: string;
  description: string;
  tips: string[];
  warning?: string;
  color: string;
}

const careSteps: CareStep[] = [
  {
    icon: "🧼",
    title: "Gentle Cleaning",
    description: "Keep your tote bag fresh and beautiful with proper cleaning techniques",
    tips: [
      "Spot clean with mild soap and cold water",
      "Use a soft brush for stubborn stains",
      "Test cleaning solution on a hidden area first",
      "Clean spills immediately to prevent staining"
    ],
    warning: "Avoid harsh chemicals or bleach",
    color: "hsl(332,64%,70%)"
  },
  {
    icon: "💧",
    title: "Proper Drying",
    description: "Maintain the shape and quality of your bag with correct drying methods",
    tips: [
      "Air dry naturally away from direct sunlight",
      "Stuff with tissue paper to maintain shape",
      "Hang by handles or lay flat to dry",
      "Ensure completely dry before storage"
    ],
    warning: "Never use a dryer or direct heat",
    color: "hsl(16,57%,51%)"
  },
  {
    icon: "👗",
    title: "Smart Storage",
    description: "Preserve your bag's beauty with thoughtful storage practices",
    tips: [
      "Store in a cool, dry place",
      "Use dust bags or cotton covers",
      "Avoid overpacking or crushing",
      "Keep away from sharp objects"
    ],
    color: "hsl(46,77%,47%)"
  },
  {
    icon: "🌟",
    title: "Daily Care",
    description: "Simple habits to keep your tote bag looking its best every day",
    tips: [
      "Empty and organize contents regularly",
      "Rotate between bags to prevent overuse",
      "Handle with clean hands",
      "Avoid overloading beyond capacity"
    ],
    color: "hsl(82,14%,49%)"
  },
  {
    icon: "🔄",
    title: "Maintenance",
    description: "Long-term care to ensure your bag lasts for years to come",
    tips: [
      "Inspect regularly for wear and tear",
      "Condition fabric seasonally if needed",
      "Repair small issues promptly",
      "Professional cleaning for deep stains"
    ],
    color: "hsl(345,56%,27%)"
  }
];

const fabricTypes = [
  {
    name: "Cotton Canvas",
    icon: "🌿",
    care: "Machine wash cold, gentle cycle",
    color: "hsl(82,14%,49%)"
  },
  {
    name: "Printed Cotton",
    icon: "🎨",
    care: "Hand wash or delicate cycle",
    color: "hsl(16,57%,51%)"
  },
  {
    name: "Mixed Blends",
    icon: "✨",
    care: "Follow care label instructions",
    color: "hsl(332,64%,70%)"
  }
];

const dosDonts = [
  {
    type: "do",
    icon: "✅",
    text: "Clean spills immediately",
    color: "hsl(82,14%,49%)"
  },
  {
    type: "dont",
    icon: "❌",
    text: "Never machine dry",
    color: "hsl(345,56%,27%)"
  },
  {
    type: "do",
    icon: "✅",
    text: "Store in breathable bags",
    color: "hsl(82,14%,49%)"
  },
  {
    type: "dont",
    icon: "❌",
    text: "Avoid harsh chemicals",
    color: "hsl(345,56%,27%)"
  },
  {
    type: "do",
    icon: "✅",
    text: "Rotate between bags",
    color: "hsl(82,14%,49%)"
  },
  {
    type: "dont",
    icon: "❌",
    text: "Don't overload capacity",
    color: "hsl(345,56%,27%)"
  }
];

export function CareInstructions() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateElements(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(32,38%,94%)] via-white to-[hsl(32,38%,96%)] py-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in">
          <h1 className="font-serif text-5xl font-bold text-[hsl(345,56%,27%)] mb-4 tracking-tight">
            Care Instructions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[hsl(0,0%,45%)] max-w-3xl mx-auto leading-relaxed">
            Preserve the beauty and extend the life of your handcrafted tote bags with our 
            comprehensive care guide. Each bag is made with love and deserves proper care.
          </p>
        </div>

        {/* Main Care Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {careSteps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 ${
                animateElements ? 'stagger-item' : 'opacity-0 translate-y-8'
              } ${selectedStep === index ? 'ring-4 ring-[hsl(16,57%,51%)] scale-105' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedStep(selectedStep === index ? null : index)}
              data-testid={`care-step-${index}`}
            >
              {/* Color Accent Bar */}
              <div 
                className="h-2 w-full"
                style={{ backgroundColor: step.color }}
              ></div>

              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 
                      className="font-serif text-2xl font-bold tracking-wide"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: step.color }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[hsl(0,0%,45%)] mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Warning if exists */}
                {step.warning && (
                  <div className="bg-gradient-to-r from-[hsl(345,56%,27%)]/10 to-[hsl(345,56%,27%)]/5 border-l-4 border-[hsl(345,56%,27%)] p-4 mb-6 rounded-r-lg">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">⚠️</span>
                      <span className="text-[hsl(345,56%,27%)] font-semibold text-sm">
                        {step.warning}
                      </span>
                    </div>
                  </div>
                )}

                {/* Tips - Expandable */}
                <div className={`transition-all duration-300 ${selectedStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <h4 className="font-semibold text-[hsl(0,0%,16%)] mb-4 font-serif">Care Tips:</h4>
                  <div className="space-y-3">
                    {step.tips.map((tip, tipIndex) => (
                      <div 
                        key={tipIndex}
                        className="flex items-start space-x-3 text-sm"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        ></div>
                        <span className="text-[hsl(0,0%,45%)] leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Click Indicator */}
                <div className="flex items-center justify-center mt-6 pt-4 border-t border-[hsl(32,38%,90%)]">
                  <span className="text-xs text-[hsl(0,0%,45%)] group-hover:text-[hsl(16,57%,51%)] transition-colors">
                    {selectedStep === index ? 'Click to collapse' : 'Click for tips'}
                  </span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Fabric Care Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16 fade-in">
          <h2 className="font-serif text-3xl font-bold text-[hsl(345,56%,27%)] mb-8 text-center">
            Fabric-Specific Care
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {fabricTypes.map((fabric, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{ backgroundColor: `${fabric.color}15` }}
              >
                <div className="text-4xl mb-4">{fabric.icon}</div>
                <h3 
                  className="font-serif text-xl font-bold mb-3"
                  style={{ color: fabric.color }}
                >
                  {fabric.name}
                </h3>
                <p className="text-[hsl(0,0%,45%)] text-sm leading-relaxed">
                  {fabric.care}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Do's and Don'ts Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16 fade-in">
          <h2 className="font-serif text-3xl font-bold text-[hsl(345,56%,27%)] mb-8 text-center">
            Quick Do's & Don'ts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dosDonts.map((item, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  item.type === 'do' ? 'bg-gradient-to-r from-[hsl(82,14%,49%)]/10 to-[hsl(82,14%,49%)]/5' : 'bg-gradient-to-r from-[hsl(345,56%,27%)]/10 to-[hsl(345,56%,27%)]/5'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span 
                  className="font-medium"
                  style={{ color: item.color }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Care Section */}
        <div className="bg-gradient-to-r from-[hsl(345,56%,27%)]/5 to-[hsl(16,57%,51%)]/5 rounded-2xl p-8 md:p-12 fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[hsl(345,56%,27%)] mb-6">
                Emergency Stain Removal
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    🩹
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,16%)] mb-2">Oil-Based Stains</h3>
                    <p className="text-[hsl(0,0%,45%)] leading-relaxed">
                      Blot immediately, sprinkle cornstarch, let sit for 10 minutes, then brush off gently.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    💧
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,16%)] mb-2">Water-Based Stains</h3>
                    <p className="text-[hsl(0,0%,45%)] leading-relaxed">
                      Dab with clean cloth, work from outside in, use cold water and mild soap.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    🎨
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,16%)] mb-2">Ink Stains</h3>
                    <p className="text-[hsl(0,0%,45%)] leading-relaxed">
                      Don't rub! Blot with rubbing alcohol on a cotton swab, then rinse with cold water.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[hsl(16,57%,51%)]/10 to-[hsl(332,64%,70%)]/10 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🆘</div>
                <h3 className="font-serif text-2xl font-bold text-[hsl(345,56%,27%)] mb-4">
                  Need Professional Help?
                </h3>
                <p className="text-[hsl(0,0%,45%)] mb-6 leading-relaxed">
                  For stubborn stains or vintage bags, consider professional cleaning services.
                </p>
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-[hsl(16,57%,51%)] to-[hsl(332,64%,70%)] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  data-testid="contact-button"
                >
                  Get Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}