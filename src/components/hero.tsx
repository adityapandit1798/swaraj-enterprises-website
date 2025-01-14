import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative w-full">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
          alt="Industrial Machinery"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center space-y-8 py-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Welcome to Swaraj Enterprises - Leaders in Industrial Machinery
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Pioneering excellence in industrial machinery solutions since 1970. We specialize in 
            precision engineering, delivering top-quality drilling, tapping, and lathe machines 
            that power manufacturing success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="text-lg px-8">
              Explore Our Products
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Factory Tour
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border/50 w-full">
            {[
              { number: "50+", label: "Years Experience" },
              { number: "1000+", label: "Machines Delivered" },
              { number: "24/7", label: "Support Available" },
              { number: "100%", label: "Quality Assured" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">{stat.number}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}