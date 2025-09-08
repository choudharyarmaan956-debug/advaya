import { Logo } from "./Logo";

export function Footer() {
  const quickLinks = [
    { text: "Shop All", href: "#shop" },
    { text: "Our Story", href: "#about" },
    { text: "Size Guide", href: "#" },
    { text: "Care Instructions", href: "#" }
  ];

  const customerCareLinks = [
    { text: "Contact Us", href: "#contact" },
    { text: "Shipping Info", href: "#" },
    { text: "Returns & Exchanges", href: "#" },
    { text: "FAQ", href: "#" }
  ];

  const socialLinks = [
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-pinterest", href: "#" }
  ];

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-secondary-foreground mb-4">
              <Logo />
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Handcrafted tote bags that blend modern minimalism with the soul of Indian craft. 
              Carry your culture with pride.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  data-testid={`link-social-${index}`}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    data-testid={`link-quick-${index}`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              {customerCareLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    data-testid={`link-care-${index}`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Get in Touch</h4>
              <p className="text-secondary-foreground/80" data-testid="text-email">
                <i className="fas fa-envelope mr-2"></i>
                hello@advaya.bags
              </p>
              <p className="text-secondary-foreground/80" data-testid="text-whatsapp">
                <i className="fab fa-whatsapp mr-2"></i>
                +91 98765 43210
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow Our Journey</h4>
              <p className="text-secondary-foreground/80" data-testid="text-instagram">
                <i className="fab fa-instagram mr-2"></i>
                @advaya.bags
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/80" data-testid="text-copyright">
            © 2024 Advaya. All rights reserved. Made with ❤️ for Indian craft.
          </p>
        </div>
      </div>
    </footer>
  );
}
