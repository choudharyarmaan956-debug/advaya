import genZDesiLifestyle from "@assets/generated_images/Gen_Z_desi_tote_lifestyle_29dad191.png";
import toteBagPattern from "@assets/generated_images/Tote_bag_pattern_closeup_f5a5f914.png";
import desiFlatLay from "@assets/generated_images/Desi_tote_flat_lay_45ab5c49.png";
import blockPrintingWork from "@assets/generated_images/Block_printing_artisan_work_42713c43.png";
import cafeLifestyle from "@assets/generated_images/Cafe_lifestyle_with_tote_84c00327.png";
import toteBagCollection from "@assets/generated_images/Tote_bag_collection_display_26f46b5d.png";

export function InstagramGallery() {
  const galleryImages = [
    {
      src: genZDesiLifestyle,
      alt: "Gen Z style woman with aesthetic desi tote bag in modern setting"
    },
    {
      src: toteBagPattern,
      alt: "Close-up detail of beautiful paisley and mandala patterns on white tote bag"
    },
    {
      src: desiFlatLay,
      alt: "Aesthetic flat lay styling with desi tote bag, pink flowers and traditional jewelry"
    },
    {
      src: blockPrintingWork,
      alt: "Traditional artisan hands creating authentic block print patterns with pink dye"
    },
    {
      src: cafeLifestyle,
      alt: "Stylish Gen Z woman with Advaya tote bag in trendy modern cafe"
    },
    {
      src: toteBagCollection,
      alt: "Beautiful collection of handcrafted tote bags with various desi patterns in white and pink"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-rose-800 mb-4">Follow Our Journey</h2>
          <p className="text-pink-600 text-lg">@advaya.bags</p>
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
