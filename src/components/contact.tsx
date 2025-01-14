import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  content: "Sr. no. 15/1 4A,Gulve vasti ,MIDC Bhosari, Pune, Maharashtra, India",
                },
                {
                  icon: Phone,
                  title: "Phone Number",
                  content: "+91 9822952989",
                },
                {
                  icon: Mail,
                  title: "Email Address",
                  content: "info@SwarajEnterprises.com",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Monday - Saturday: 9:00 AM - 6:00 PM",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <div className="aspect-video rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3780.8219376216116!2d73.8432138749656!3d18.62707708248735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1736850753133!5m2!1sen!2sin" width="600" height="450"   loading="lazy" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}