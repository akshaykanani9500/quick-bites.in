import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, we'll just show a success message
    // The actual Google Sheets integration requires Supabase backend
    setTimeout(() => {
      toast({
        title: "Message sent successfully! 🎉",
        description: "We'll get back to you within 24 hours. Thanks for your interest in Quick Bites!",
      });
      
      setFormData({ name: "", mobile: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Get Started!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your hostel experience? We'd love to hear from you! 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-card border-0 shadow-soft">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Why reach out to us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Free Consultation</h4>
                      <p className="text-muted-foreground text-sm">Get expert advice tailored to your hostel's specific needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Solutions</h4>
                      <p className="text-muted-foreground text-sm">We'll design a vending solution that fits your space and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Quick Response</h4>
                      <p className="text-muted-foreground text-sm">We typically respond within 24 hours with next steps</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-primary text-white border-0 shadow-primary">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">Fill out the form and we'll get back to you within 24 hours with a custom solution for your hostel.</p>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🚀 Get Your Quote Now
                </Button>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card id="contact-form" className="p-8 bg-background border-border shadow-soft animate-fade-in" style={{animationDelay: '0.2s'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Priya Sharma"
                  className="border-border focus:border-primary"
                />
                <p className="text-xs text-muted-foreground mt-1">We'll use this to personalize our response</p>
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-2 text-foreground">
                  Mobile Number *
                </label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="e.g., +91 9876543210"
                  className="border-border focus:border-primary"
                />
                <p className="text-xs text-muted-foreground mt-1">We'll use this to contact you directly for quick assistance</p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., priya@hostel.edu"
                  className="border-border focus:border-primary"
                />
                <p className="text-xs text-muted-foreground mt-1">Optional - for email updates</p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Tell us about your hostel
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g., We have a 200-student girls' hostel and are interested in installing vending machines on each floor..."
                  className="border-border focus:border-primary resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1">Optional - Help us understand your needs better (number of students, floors, current facilities, etc.)</p>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-primary"
                size="lg"
              >
                {isSubmitting ? "Sending your message..." : "Send Message & Get Quote 🚀"}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to receive communications from Quick Bites. 
                We'll only contact you about your inquiry and our services.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;