const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and tagline */}
          <div className="animate-fade-in">
            <div className="flex justify-center md:justify-start mb-4">
              <img 
                src="/lovable-uploads/46489922-43fb-4cd9-a6e3-270980b2796e.png" 
                alt="Quick-Bites Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-background/70 mb-4 max-w-sm">
              Enhancing hostel life with smart vending machines. Making student life more convenient, safe, and enjoyable.
            </p>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm">📞</span>
                </div>
                <div>
                  <p className="text-sm text-background/70">Sales & Inquiries</p>
                  <a href="tel:+918469822684" className="text-background hover:text-primary transition-colors">
                    +91 8469822684
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-sm">🛠️</span>
                </div>
                <div>
                  <p className="text-sm text-background/70">Support & Maintenance</p>
                  <a href="tel:+918469822684" className="text-background hover:text-secondary transition-colors">
                    +91 8469822684
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-background/70">Email Us</p>
                  <a href="mailto:service.quickbites@gmail.com" className="text-background hover:text-accent transition-colors">
                    service.quickbites@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => document.getElementById('how-we-operate')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors text-left"
              >
                How We Operate
              </button>
              <button 
                onClick={() => window.open('https://wa.me/918469822684?text=Hi%20Quick%20Bites!%20I%27m%20interested%20in%20your%20vending%20machine%20services%20for%20our%20hostel.', '_blank')}
                className="block text-background/70 hover:text-background transition-colors text-left"
              >
                Contact on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2024 Quick Bites. All rights reserved. Making hostel life better, one vending machine at a time.
          </p>
          <div className="flex gap-6 text-sm text-background/70">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;