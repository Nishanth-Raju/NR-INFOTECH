import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Cloud Computing in 2024",
    excerpt:
      "Exploring the latest trends and innovations shaping the cloud computing landscape and what it means for businesses.",
    date: "December 15, 2023",
    readTime: "5 min read",
    category: "Technology",
    author: "Sarah Johnson",
  },
  {
    title: "Building Scalable Microservices Architecture",
    excerpt:
      "A comprehensive guide to designing and implementing microservices that can handle enterprise-level demands.",
    date: "December 10, 2023",
    readTime: "8 min read",
    category: "Development",
    author: "Michael Chen",
  },
  {
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt:
      "Essential security measures every organization should implement to protect their digital assets and data.",
    date: "December 5, 2023",
    readTime: "6 min read",
    category: "Security",
    author: "David Rodriguez",
  },
  {
    title: "AI and Machine Learning in Enterprise Applications",
    excerpt:
      "How artificial intelligence is revolutionizing business operations and customer experiences across industries.",
    date: "November 28, 2023",
    readTime: "7 min read",
    category: "AI/ML",
    author: "Sarah Johnson",
  },
  {
    title: "Mobile-First Development Strategy",
    excerpt:
      "Why prioritizing mobile experiences is crucial for success in today's digital landscape.",
    date: "November 20, 2023",
    readTime: "5 min read",
    category: "Mobile",
    author: "Michael Chen",
  },
  {
    title: "DevOps Culture: Building High-Performance Teams",
    excerpt:
      "Strategies for fostering collaboration between development and operations teams to accelerate delivery.",
    date: "November 15, 2023",
    readTime: "6 min read",
    category: "DevOps",
    author: "David Rodriguez",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, updates, and perspectives from the nrinfotech team
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">By {post.author}</span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
