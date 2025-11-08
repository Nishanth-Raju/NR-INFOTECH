import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities and clear paths for professional advancement.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented individuals in a supportive and inclusive environment.",
  },
  {
    icon: Briefcase,
    title: "Work-Life Balance",
    description: "Flexible schedules and remote work options to fit your lifestyle.",
  },
];

const openings = [
  {
    title: "Senior Full Stack Developer",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    location: "New York, NY / Hybrid",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    location: "Austin, TX / Remote",
    type: "Full-time",
  },
];

export function Careers() {
  return (
    <section id="careers" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your career with a company that values innovation, growth, and work-life balance
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-card-hover transition-shadow animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Open Positions */}
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-8 text-center">Open Positions</h3>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-shadow border-border/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="flex flex-wrap gap-4 text-base">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </CardDescription>
                    </div>
                    <Button className="bg-gradient-primary hover:shadow-elegant">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see a position that fits?</p>
            <Button variant="outline" size="lg">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
