import { Card } from "@/components/ui/card";

const Benefits = () => {
  const studentBenefits = [
    {
      icon: "⚡",
      title: "Instant Convenience",
      description: "Get what you need in seconds, any time of day or night, without leaving your hostel."
    },
    {
      icon: "🛡️",
      title: "Enhanced Safety",
      description: "No need to venture outside late at night. Everything you need is right in your building."
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      description: "Fair pricing with no delivery charges or surge pricing. Student-friendly rates always."
    },
    {
      icon: "🎯",
      title: "Student-Focused Selection",
      description: "Curated products specifically chosen for student needs and preferences."
    }
  ];

  const managementBenefits = [
    {
      icon: "💸",
      title: "Zero Investment",
      description: "No upfront costs. We handle installation, maintenance, and inventory management completely."
    },
    {
      icon: "🤝",
      title: "Hassle-Free Operation",
      description: "No staff training needed. We manage everything from restocking to customer service."
    },
    {
      icon: "🏥",
      title: "Improved Safety",
      description: "Reduce late-night exits from campus, enhancing overall student safety and security."
    },
    {
      icon: "📈",
      title: "Revenue Sharing",
      description: "Earn a percentage of sales with no effort required. Additional income stream for your facility."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Why Choose Quick Bites?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Benefits designed for both students and hostel management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Student Benefits */}
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-primary">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">For Students</h3>
              <p className="text-muted-foreground">Making hostel life more comfortable and convenient</p>
            </div>
            
            <div className="space-y-4">
              {studentBenefits.map((benefit, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Management Benefits */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-secondary">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">For Hostel Management</h3>
              <p className="text-muted-foreground">Complete peace of mind with additional revenue</p>
            </div>
            
            <div className="space-y-4">
              {managementBenefits.map((benefit, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-secondary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;