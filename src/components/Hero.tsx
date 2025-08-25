import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px] animate-float" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-xl p-3 shadow-soft">
                <div className="w-full h-full bg-gradient-primary rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2h2v2H6V8zm4 0h2v2h-2V8zm4 0h2v2h-2V8zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Quick<span className="text-secondary">-</span>Bites
              </h1>
            </div>
            
            <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              Enhancing Hostel Life with Smart Vending Machines
            </h2>
            
            <p className="text-lg text-white/80 mb-10 max-w-lg mx-auto lg:mx-0">
              24×7 access to snacks, essentials, and convenience. Making hostel life easier, safer, and more enjoyable for students everywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern vending machine in hostel setting with happy students"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-soft animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-foreground">24/7 Available</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-soft animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-sm font-medium text-foreground">UPI Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;