import { useState } from "react";
import { Camera, Brain, Shield } from "lucide-react";
import Header from "@/components/MedGuard/Header";
import Footer from "@/components/MedGuard/Footer";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/MedGuard/AuthModal";

const Landing = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

  const openSignup = () => {
    setAuthMode("signup");
    setIsAuthOpen(true);
  };

  const openLogin = () => {
    setAuthMode("login");
    setIsAuthOpen(true);
  };

  const features = [
    {
      icon: Camera,
      title: "Scan medicine or prescription",
      description: "Simply take a photo of your medicine strip or upload an existing image.",
    },
    {
      icon: Brain,
      title: "Understands your health conditions",
      description: "Tell us about your age, conditions, and current medicines for personalized guidance.",
    },
    {
      icon: Shield,
      title: "Warns you if it may be unsafe",
      description: "Get clear, easy-to-understand safety alerts before you take any medicine.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-display-lg md:text-5xl text-foreground text-balance leading-tight">
              Check if a medicine is safe for you — before you take it.
            </h1>
            <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Upload a medicine strip or prescription. Get clear, personalized safety guidance.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="scan" 
                size="xl" 
                onClick={openSignup}
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                onClick={openLogin}
                className="w-full sm:w-auto text-muted-foreground hover:text-foreground"
              >
                Already have an account? Login
              </Button>
            </div>
          </div>
        </section>

        {/* Why This Exists Section */}
        <section className="px-6 py-16 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-display text-foreground text-center mb-12">
              Why MedGuard?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="card-elevated p-8 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Disclaimer Section */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="card-elevated p-8 md:p-12 bg-accent/30">
              <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
              <p className="text-lg text-foreground font-medium">
                MedGuard helps you understand medicines better.
              </p>
              <p className="text-muted-foreground mt-2">
                It does not replace a doctor's advice. Always consult healthcare professionals for medical decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="font-display text-display text-foreground mb-6">
              Ready to check your medicine?
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              It only takes a minute to get personalized safety guidance.
            </p>
            <Button 
              variant="scan" 
              size="xl" 
              onClick={openSignup}
              className="px-12"
            >
              Check My Medicine
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Landing;
