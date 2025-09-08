interface HeroProps {
  onShopClick: () => void;
  onStoryClick: () => void;
}

export function Hero({ onShopClick, onStoryClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pattern-overlay">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Woman in traditional Indian attire carrying handcrafted tote bag" 
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 slide-up">
            Advaya<br />
            <span className="text-primary">Carry Your Culture</span>
          </h1>
          <p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-md fade-in"
            data-testid="text-hero-subtitle"
          >
            Handcrafted tote bags inspired by Indian prints. Modern minimalism meets the soul of Indian craft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in">
            <button 
              onClick={onShopClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              data-testid="button-shop-now"
            >
              Shop Now
            </button>
            <button 
              onClick={onStoryClick}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-lg font-semibold transition-all"
              data-testid="button-our-story"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
