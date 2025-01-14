import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    title: "Industrial Drilling Machine",
    description: "High-precision drilling machine for industrial applications",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470",
    features: [
      "Variable speed control",
      "Digital depth display",
      "Automatic feed system",
      "Coolant system",
    ],
  },
  {
    title: "CNC Tapping Machine",
    description: "Advanced CNC tapping machine with superior accuracy",
    image: "https://images.unsplash.com/photo-1565439371131-f6be759c4e1c?q=80&w=1470",
    features: [
      "Multi-axis control",
      "Tool changer system",
      "Touch screen interface",
      "Thread monitoring",
    ],
  },
  {
    title: "Precision Lathe Machine",
    description: "Heavy-duty lathe machine for complex turning operations",
    image: "https://images.unsplash.com/photo-1612690669207-fed642192c40?q=80&w=1470",
    features: [
      "Digital readout system",
      "Quick change toolpost",
      "Spindle speed control",
      "Safety interlocks",
    ],
  },
];

export function Products() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Premium Machinery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of high-precision industrial machines, engineered for 
            performance and built to last.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <svg
                        className="mr-2 h-4 w-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button className="flex-1">Request Quote</Button>
                <Button variant="outline" className="flex-1">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}