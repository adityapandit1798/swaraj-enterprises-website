import { Award, Users, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1974"
              alt="Factory Floor"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-lg">
              <p className="text-primary-foreground font-bold text-4xl">50+</p>
              <p className="text-primary-foreground/80 text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Legacy of Excellence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Since 1970, Swaraj Enterprises has been at the forefront of industrial innovation. 
                What began as a small workshop has grown into a leading manufacturer of precision 
                machinery, serving clients across multiple Enterprises.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Our commitment to quality, innovation, and customer satisfaction has made us a 
                trusted partner for businesses seeking reliable industrial solutions. We combine 
                traditional craftsmanship with modern technology to deliver exceptional results.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Shield,
                  title: "Quality Assured",
                  description: "ISO 9001:2015 certified manufacturing processes",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Skilled engineers and technicians",
                },
                {
                  icon: Target,
                  title: "Precision Focus",
                  description: "Industry-leading accuracy standards",
                },
                {
                  icon: Award,
                  title: "Recognition",
                  description: "Multiple industry excellence awards",
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-none bg-background">
                  <CardContent className="p-4 flex gap-4">
                    <item.icon className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}