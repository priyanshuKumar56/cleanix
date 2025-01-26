import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";

function HeroSection() {
  return (
    <div className="relative min-h-[700px] flex items-center overflow-hidden bg-[url(/slide1_3.jpg)] ">
      {/* Background Image with Overlay */}

      {/* Content */}
      <div className="container relative z-10 text-white ">
        <div className="max-w-3xl text-center m-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-4  uppercase tracking-wide">
            The Best Cleaning Service Ever!
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Are <span className="">Certified</span> Company
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Our best-in-class WordPress solution, with additional optimization
            to make running a WooCommerce online storefronting and straight
            forward so you can.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-yellow-400 hover:bg-white text-blue-900 text-lg px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
              Take Our Service
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-200">5-star rated service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900/30 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
    </div>
  );
}

export default HeroSection;
