import { Target, Users, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Committed to delivering solutions that create lasting impact and drive success.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Building strong partnerships through transparency, communication, and trust.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Embracing cutting-edge technologies to solve complex challenges creatively.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "Maintaining the highest standards in every project we undertake.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About nrinfotech</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2008, nrinfotech has grown from a small startup to a leading technology
              solutions provider, serving clients across the globe. Our journey is built on a
              foundation of innovation, expertise, and unwavering commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that technology should empower businesses, not complicate them. That's why
              we focus on creating intuitive, scalable, and secure solutions that align with your
              business objectives and drive measurable results.
            </p>
            <p className="text-lg text-muted-foreground">
              With a team of over 50 dedicated professionals, we combine deep technical expertise
              with industry knowledge to deliver solutions that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in-up">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-card-hover transition-shadow border-border/50"
              >
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in-up">
          {[
            { label: "Countries Served", value: "25+" },
            { label: "Industry Awards", value: "30+" },
            { label: "Active Clients", value: "200+" },
            { label: "Support Rating", value: "4.9/5" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
