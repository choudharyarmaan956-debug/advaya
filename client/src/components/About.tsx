export function About() {
  const values = [
    {
      icon: "fas fa-heart",
      title: "Authentic Craft",
      description: "Every piece is handcrafted by skilled artisans using time-honored techniques passed down through generations.",
      bgColor: "bg-primary/20",
      iconColor: "text-primary"
    },
    {
      icon: "fas fa-seedling",
      title: "Sustainable Future",
      description: "We use only organic, eco-friendly materials and support sustainable practices throughout our supply chain.",
      bgColor: "bg-accent/20",
      iconColor: "text-accent"
    },
    {
      icon: "fas fa-hands-helping",
      title: "Fair Partnership",
      description: "We believe in fair wages and long-term partnerships with our artisans, ensuring dignity and growth for all.",
      bgColor: "bg-secondary/20",
      iconColor: "text-secondary"
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary mb-6">Our Story</h2>
            <p className="text-xl text-muted-foreground">Where tradition meets contemporary style</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Advaya was born from a simple belief: that the beauty of Indian craftsmanship deserves a place in the modern world. 
                Our name, meaning "non-dual" in Sanskrit, reflects our mission to bridge the gap between traditional artisanship and contemporary design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each tote bag in our collection tells a story—of skilled artisans who have perfected their craft over generations, 
                of sustainable materials sourced with care, and of designs that honor our cultural heritage while embracing modern functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the bustling markets of Rajasthan to the artistic quarters of Gujarat, we work directly with craftspeople to ensure 
                fair wages and authentic techniques, creating products that you can carry with pride and purpose.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://pixabay.com/get/g9ca73f68fb992e4edc21d6bcf28ab0a904ad5a6d1da05859aedd68ed8ced293216759341304ec81eefd1d5518875de76c908c02810ea348d3954054437fd91db_1280.jpg" 
                alt="Skilled artisan hand-crafting traditional block print patterns in workshop" 
                className="w-full h-full object-cover"
                data-testid="img-artisan-crafting"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center" data-testid={`value-${index}`}>
                <div className={`w-20 h-20 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${value.icon} ${value.iconColor} text-2xl`}></i>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
