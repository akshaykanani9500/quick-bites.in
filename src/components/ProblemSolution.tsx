import { Card } from "@/components/ui/card";

const ProblemSolution = () => {
  const problems = [
    {
      icon: "🌙",
      title: "Late Night Cravings",
      description: "Hostels close their canteens early, leaving students hungry during late-night study sessions."
    },
    {
      icon: "🏃‍♂️",
      title: "Safety Concerns",
      description: "Students, especially girls, face safety risks when going out late at night for food or essentials."
    },
    {
      icon: "⏰",
      title: "Limited Access Hours",
      description: "Campus stores have restricted timings, making it difficult to get necessities when needed."
    },
    {
      icon: "💸",
      title: "High Delivery Costs",
      description: "Online food delivery charges premium rates for late-night orders, making it expensive."
    }
  ];

  const solutions = [
    {
      icon: "🤖",
      title: "Smart Vending Technology",
      description: "Advanced vending machines with intuitive interfaces and real-time inventory tracking."
    },
    {
      icon: "🍕",
      title: "Wide Product Range",
      description: "From snacks and beverages to daily essentials and study materials - all in one place."
    },
    {
      icon: "📱",
      title: "Digital Payments",
      description: "Accept all major UPI platforms, digital wallets, and contactless payments."
    },
    {
      icon: "🔄",
      title: "Auto-Restocking",
      description: "AI-powered inventory management ensures machines are always stocked and functional."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Problem Statement */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Student <span className="bg-gradient-primary bg-clip-text text-transparent">Problem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Students face daily challenges that affect their comfort, safety, and academic performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border shadow-soft hover:shadow-primary transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div>
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive smart vending solutions designed specifically for the hostel environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-6 bg-gradient-primary/5 border-primary/20 shadow-soft hover:shadow-secondary transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;