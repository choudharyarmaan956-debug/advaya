export function Benefits() {
  const benefits = [
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Cotton",
      description: "Sustainably sourced organic cotton, gentle on the environment and your skin.",
      iconBg: "bg-accent/20",
      iconColor: "text-accent"
    },
    {
      icon: "fas fa-paint-brush",
      title: "Handcrafted Prints",
      description: "Each design is hand-blocked by skilled artisans, preserving traditional craft techniques.",
      iconBg: "bg-primary/20",
      iconColor: "text-primary"
    },
    {
      icon: "fas fa-truck",
      title: "COD & Easy Returns",
      description: "Cash on delivery available with hassle-free 15-day return policy.",
      iconBg: "bg-secondary/20",
      iconColor: "text-secondary"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center" data-testid={`benefit-${index}`}>
              <div className={`w-16 h-16 ${benefit.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${benefit.icon} ${benefit.iconColor} text-2xl`}></i>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
