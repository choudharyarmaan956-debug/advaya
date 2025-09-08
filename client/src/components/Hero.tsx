import pinkDesiToteBag from "@assets/generated_images/Pink_desi_tote_bag_ada8f8dc.png";

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
          src={pinkDesiToteBag} 
          alt="Beautiful handcrafted desi tote bag with pink Indian patterns" 
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/85 via-rose-50/70 to-pink-100/50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-800 mb-6 slide-up">
            Advaya<br />
            <span className="text-pink-600">Carry Your Culture</span>
          </h1>
          <p 
            className="text-lg sm:text-xl text-rose-700/80 mb-8 max-w-md fade-in"
            data-testid="text-hero-subtitle"
          >
            Handcrafted tote bags inspired by Indian prints. Modern minimalism meets the soul of Indian craft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in">
            <button 
              onClick={onShopClick}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              data-testid="button-shop-now"
            >
              Shop Now
            </button>
            <button 
              onClick={onStoryClick}
              className="border-2 border-rose-400 text-rose-600 hover:bg-rose-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
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
