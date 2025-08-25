import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Quick Bites
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing hostel convenience with smart vending solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Card className="p-8 bg-gradient-card border-0 shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Quick Bites is dedicated to transforming hostel life by providing 24×7 access to essential snacks, beverages, and daily necessities through our smart vending machine network.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every student deserves convenient, safe, and affordable access to their daily needs, regardless of the time of day or night.
              </p>
            </Card>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-primary flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">24×7 Availability</h4>
                <p className="text-muted-foreground">Round-the-clock access to snacks and essentials, perfect for late-night study sessions or early morning needs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-secondary flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">UPI Payments</h4>
                <p className="text-muted-foreground">Seamless cashless transactions with all major UPI platforms. No need to carry cash or coins.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-soft flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Reliable Service</h4>
                <p className="text-muted-foreground">Regular restocking every 2-3 days with dedicated customer support and maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;