import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Rocket, Shield, Zap } from "lucide-react";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with nrinfotech
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="getting-started" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="api">API Reference</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              <TabsContent value="getting-started" className="space-y-6 animate-fade-in">
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Rocket className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Quick Start Guide</CardTitle>
                    <CardDescription className="text-base">
                      Get up and running with nrinfotech services in minutes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                    <h3>1. Create an Account</h3>
                    <p>
                      Sign up for a nrinfotech account to access our full suite of services. Visit our
                      portal and complete the registration process.
                    </p>

                    <h3>2. Configure Your Environment</h3>
                    <p>
                      Set up your development environment with our CLI tools and SDKs. We support
                      multiple programming languages and frameworks.
                    </p>

                    <h3>3. Deploy Your First Application</h3>
                    <p>
                      Use our intuitive dashboard to deploy your application with just a few clicks.
                      Our platform handles scaling and monitoring automatically.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="api" className="space-y-6 animate-fade-in">
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">API Documentation</CardTitle>
                    <CardDescription className="text-base">
                      Comprehensive API reference for developers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="authentication">
                        <AccordionTrigger>Authentication</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-4">
                            All API requests require authentication using an API key. Include your
                            key in the Authorization header:
                          </p>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code>Authorization: Bearer YOUR_API_KEY</code>
                          </pre>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="endpoints">
                        <AccordionTrigger>Available Endpoints</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>
                              <code className="bg-muted px-2 py-1 rounded">GET /api/v1/users</code> -
                              Retrieve user information
                            </li>
                            <li>
                              <code className="bg-muted px-2 py-1 rounded">
                                POST /api/v1/projects
                              </code>{" "}
                              - Create a new project
                            </li>
                            <li>
                              <code className="bg-muted px-2 py-1 rounded">
                                PUT /api/v1/projects/:id
                              </code>{" "}
                              - Update project details
                            </li>
                            <li>
                              <code className="bg-muted px-2 py-1 rounded">
                                DELETE /api/v1/projects/:id
                              </code>{" "}
                              - Delete a project
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="rate-limits">
                        <AccordionTrigger>Rate Limits</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            API requests are limited to 1000 requests per hour per API key. Rate
                            limit information is included in response headers.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides" className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-card-hover transition-shadow border-border/50">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-2">
                        <Zap className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle>Performance Optimization</CardTitle>
                      <CardDescription>
                        Best practices for optimizing application performance
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-card-hover transition-shadow border-border/50">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-2">
                        <Shield className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle>Security Best Practices</CardTitle>
                      <CardDescription>
                        Essential security measures for your applications
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="support" className="space-y-6 animate-fade-in">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Need Help?</CardTitle>
                    <CardDescription className="text-base">
                      We're here to support you every step of the way
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Email Support</h3>
                      <p className="text-muted-foreground">
                        Reach out to our support team at support@nrinfotech.com
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Community Forum</h3>
                      <p className="text-muted-foreground">
                        Join our community forum to connect with other developers and get answers to
                        your questions
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Live Chat</h3>
                      <p className="text-muted-foreground">
                        Available Monday-Friday, 9am-6pm PST for immediate assistance
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
