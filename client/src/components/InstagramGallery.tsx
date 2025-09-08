export function InstagramGallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      alt: "Woman shopping at local market with Advaya tote"
    },
    {
      src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      alt: "Close-up detail of paisley print pattern on tote bag"
    },
    {
      src: "https://pixabay.com/get/gaecebf590e56a391876de6162da2cc7f509b76f828040cad4b57dc2e1df6adb033365d77d8e07987911461d90043eee82f1f8755d24b5d33f5f032cd4de30303_1280.jpg",
      alt: "Flat lay styling of tote bag with traditional Indian jewelry and accessories"
    },
    {
      src: "https://pixabay.com/get/g48b8f39e99b955c7ced51acdb92a67bd8a88bb65b5a944801ae999d3d6b2b3a0eea5dd625c94e449344c43f622d549785809f3f41bd110345d79d395d66d5304_1280.jpg",
      alt: "Artisan hands creating block print design on fabric"
    },
    {
      src: "https://pixabay.com/get/g5013e7e2952562aeaa85c3c493e22c602c8bff3028ab580ad3f30fb3d9d6a8b92bc8a8fc9e682a668ca0a455c6e463c52fadc9b34a43f73459e9ed7f33bf4291_1280.jpg",
      alt: "Stylish woman with Advaya tote bag in modern cafe setting"
    },
    {
      src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      alt: "Collection of various Advaya tote bags with different prints displayed together"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary mb-4">Follow Our Journey</h2>
          <p className="text-muted-foreground text-lg">@advaya.bags</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
              data-testid={`gallery-image-${index}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
