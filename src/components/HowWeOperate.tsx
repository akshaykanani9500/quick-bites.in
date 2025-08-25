const HowWeOperate = () => {
  const steps = [
    {
      step: "01",
      title: "Site Assessment & Installation",
      description: "We conduct a thorough evaluation of your hostel premises and install our smart vending machines at optimal locations for maximum accessibility.",
      icon: "📍"
    },
    {
      step: "02", 
      title: "Inventory Setup & Configuration",
      description: "Our team stocks the machines with carefully selected products based on student preferences and configures payment systems for seamless transactions.",
      icon: "📦"
    },
    {
      step: "03",
      title: "Regular Restocking & Maintenance",
      description: "We ensure consistent availability by restocking every 2-3 days and performing regular maintenance to keep machines running smoothly.",
      icon: "🔄"
    },
    {
      step: "04",
      title: "24/7 Support & Monitoring",
      description: "Dedicated customer support team and real-time monitoring ensures any issues are resolved quickly and efficiently.",
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How We <span className="bg-gradient-primary bg-clip-text text-transparent">Operate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, efficient, and completely hassle-free process from start to finish
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Step number and icon */}
                  <div className="flex items-center gap-4 md:w-80">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-primary z-10 relative">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      {/* Timeline dot */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full hidden md:block" style={{left: '-2rem'}} />
                    </div>
                    <div className="text-4xl font-bold text-primary/20">{step.step}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gradient-card rounded-2xl p-8 shadow-soft border border-border">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center animate-scale-in">
          <h3 className="text-3xl font-bold text-white mb-6">Why Our Process Works</h3>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/90">Compliance with hostel regulations and safety standards</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2-3</div>
              <div className="text-white/90">Days maximum between restocking visits</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Customer support and technical assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeOperate;