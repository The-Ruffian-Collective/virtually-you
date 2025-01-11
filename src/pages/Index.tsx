import { ArrowRight, Camera, Share2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Upload Your Photo",
    description: "Take or upload a full-body photo to start your virtual fitting journey",
    icon: Camera,
  },
  {
    title: "Try On Outfits",
    description: "Browse our collection and see how clothes look on your body instantly",
    icon: ShoppingBag,
  },
  {
    title: "Share Your Looks",
    description: "Get feedback from friends by sharing your virtual try-on results",
    icon: Share2,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair animate-fadeIn">
              AI Before You Buy – Virtually!
            </h1>
            <p className="mt-6 text-xl sm:text-2xl max-w-2xl mx-auto text-gray-200">
              Experience the latest fashion without leaving your home.
            </p>
            <div className="mt-10">
              <Link to="/try-on">
                <Button size="lg" className="bg-fashion-secondary hover:bg-fashion-secondary/90">
                  Try Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-fashion-primary font-playfair">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Three simple steps to revolutionize your shopping experience
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="flex justify-center">
                    <feature.icon className="h-12 w-12 text-fashion-secondary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-fashion-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-fashion-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-playfair">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join thousands of fashion enthusiasts who are already shopping smarter.
          </p>
          <div className="mt-8">
            <Link to="/try-on">
              <Button size="lg" className="bg-fashion-secondary hover:bg-fashion-secondary/90">
                Start Your Virtual Try-On
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;