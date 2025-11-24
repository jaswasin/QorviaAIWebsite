import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertConsultationRequestSchema, type InsertConsultationRequest } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Sparkles,
  Brain,
  Target,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Linkedin,
  TrendingUp,
  Shield,
  Clock,
  Award,
} from "lucide-react";

import heroImage from "@assets/generated_images/hero_background_tech_workspace.png";
import caseStudy1 from "@assets/generated_images/case_study_ai_implementation.png";
import caseStudy2 from "@assets/generated_images/case_study_process_automation.png";
import caseStudy3 from "@assets/generated_images/case_study_customer_service_ai.png";
import caseStudy4 from "@assets/generated_images/case_study_digital_cloning.png";
import caseStudy5 from "@assets/generated_images/case_study_enterprise_ai_dashboard.png";
import caseStudy6 from "@assets/generated_images/case_study_healthcare_ai.png";
import aboutImage from "@assets/generated_images/about_section_team_collaboration.png";
import teamCEO from "@assets/generated_images/team_photo_ceo.png";
import teamCTO from "@assets/generated_images/team_photo_cto.png";
import teamResearch from "@assets/generated_images/team_photo_research_director.png";
import teamEngineer from "@assets/generated_images/team_photo_lead_engineer.png";
import teamSpecialist from "@assets/generated_images/team_photo_specialist.png";
import teamSuccess from "@assets/generated_images/team_photo_client_success.png";

export default function Home() {
  const { toast } = useToast();

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      projectDescription: "",
      budgetRange: "",
    },
  });

  const consultationMutation = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      return apiRequest("POST", "/api/consultations", data);
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    consultationMutation.mutate(data);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const services = [
    {
      icon: Sparkles,
      title: "Digital Cloning",
      description:
        "Create intelligent, personalized digital replicas that scale your expertise. Our cutting-edge digital cloning technology enables businesses to replicate human intelligence, personality, and decision-making processes at scale. Perfect for customer service, sales, and knowledge preservation.",
      features: ["Voice & personality cloning", "Behavioral pattern analysis", "Scalable deployment", "Real-time learning"],
    },
    {
      icon: Brain,
      title: "AI Consultancy",
      description:
        "Strategic AI implementation tailored to your business goals. From initial strategy to full deployment, we guide your organization through every step of AI transformation. Our expert team ensures seamless integration and measurable ROI for your AI initiatives.",
      features: ["Custom AI strategy", "Implementation roadmap", "Team training", "Ongoing optimization"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your business needs, challenges, and goals to create a tailored AI strategy.",
      icon: Target,
    },
    {
      number: "02",
      title: "Strategy",
      description: "Develop a comprehensive roadmap with clear milestones and measurable success metrics.",
      icon: Brain,
    },
    {
      number: "03",
      title: "Implementation",
      description: "Deploy cutting-edge AI solutions with minimal disruption to your operations.",
      icon: Zap,
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous monitoring and refinement to ensure maximum performance and ROI.",
      icon: TrendingUp,
    },
  ];

  const caseStudies = [
    {
      image: caseStudy1,
      title: "Enterprise AI Transformation",
      client: "Fortune 500 Tech Company",
      category: "AI Consultancy",
      outcome: "45% reduction in operational costs through intelligent automation",
    },
    {
      image: caseStudy2,
      title: "Process Automation Suite",
      client: "Global Manufacturing Corp",
      category: "AI Implementation",
      outcome: "3x productivity increase with AI-powered workflow optimization",
    },
    {
      image: caseStudy3,
      title: "Customer Service AI",
      client: "Leading E-commerce Platform",
      category: "Digital Cloning",
      outcome: "90% query resolution rate with personalized digital assistants",
    },
    {
      image: caseStudy4,
      title: "Digital Clone Deployment",
      client: "Professional Services Firm",
      category: "Digital Cloning",
      outcome: "Scaled expertise to 10,000+ clients simultaneously",
    },
    {
      image: caseStudy5,
      title: "Predictive Analytics Platform",
      client: "Financial Services Leader",
      category: "AI Consultancy",
      outcome: "Improved forecast accuracy by 67% using custom AI models",
    },
    {
      image: caseStudy6,
      title: "Healthcare AI Integration",
      client: "Multi-Hospital Network",
      category: "AI Implementation",
      outcome: "30% faster diagnosis with AI-assisted medical imaging",
    },
  ];

  const team = [
    {
      image: teamCEO,
      name: "Mrs. Anjali",
      role: "CEO & Co-Founder",
      bio: "Former AI Research Lead at Stanford. 15+ years pioneering machine learning applications.",
      linkedin: "https://www.linkedin.com/in/anjali-saini-553b0a39/",
    },
    {
      image: teamCTO,
      name: "Mrs. Pooja",
      role: "CTO",
      bio: "Ex-Google AI architect. Built scalable ML systems serving millions of users daily.",
      linkedin: "#",
    },
    {
      image: teamResearch,
      name: "Dr. Elena Rodriguez",
      role: "AI Research Director",
      bio: "PhD in Neural Networks. Published researcher with 50+ citations in top AI journals.",
      linkedin: "#",
    },
    {
      image: teamEngineer,
      name: "David Park",
      role: "Lead AI Engineer",
      bio: "Full-stack AI developer. Specialized in deploying production-ready ML solutions.",
      linkedin: "#",
    },
    {
      image: teamSpecialist,
      name: "Amira Hassan",
      role: "Digital Cloning Specialist",
      bio: "Expert in personality modeling and behavioral AI. Created 100+ digital clones.",
      linkedin: "#",
    },
    {
      image: teamSuccess,
      name: "James Mitchell",
      role: "Head of Client Success",
      bio: "10+ years in enterprise solutions. Ensures seamless AI adoption and client satisfaction.",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-display" data-testid="heading-hero">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-description">
            Pioneering digital cloning and AI consultancy solutions that scale your expertise 
            and revolutionize your operations. Trusted by 50+ leading enterprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-base px-8 backdrop-blur-md bg-primary/90 hover:bg-primary border border-primary-border"
              data-testid="button-hero-consultation"
            >
              Request Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="text-base px-8 backdrop-blur-md bg-background/10 border-white/30 text-white hover:bg-background/20"
              data-testid="button-hero-services"
            >
              Explore Services
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2" data-testid="trust-indicator-clients">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>50+ Enterprise Clients</span>
            </div>
            <div className="flex items-center gap-2" data-testid="trust-indicator-satisfaction">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2" data-testid="trust-indicator-support">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight font-display" data-testid="heading-services">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-services-description">
              Cutting-edge AI solutions designed to transform your business operations and scale your impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-8 hover-elevate active-elevate-2 transition-all" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader className="p-0 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center gap-2" data-testid={`service-feature-${service.title.toLowerCase().replace(/\s+/g, '-')}-${featureIndex + 1}`}>
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="ghost"
                    className="mt-6 px-0 hover:bg-transparent"
                    data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight font-display" data-testid="heading-process">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-process-description">
              A proven methodology that ensures successful AI implementation from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.number}
                className="relative"
                data-testid={`process-step-${index + 1}`}
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4" data-testid={`process-icon-${index + 1}`}>
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20 mb-2 font-display" data-testid={`process-number-${index + 1}`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`process-title-${index + 1}`}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`process-description-${index + 1}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight font-display" data-testid="heading-portfolio">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-portfolio-description">
              Real results from our AI implementations across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate active-elevate-2 transition-all group"
                data-testid={`card-case-study-${index + 1}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-case-study-${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-sm">View Case Study →</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" data-testid={`badge-category-${index + 1}`}>
                      {study.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2" data-testid={`text-case-study-title-${index + 1}`}>{study.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-3" data-testid={`text-case-study-client-${index + 1}`}>
                    {study.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium" data-testid={`text-case-study-outcome-${index + 1}`}>{study.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Qorvia.ai team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight font-display" data-testid="heading-about">
                About Qorvia.ai
              </h2>
              <p className="text-lg leading-relaxed mb-6" data-testid="text-about-intro">
                We're pioneers in digital cloning and AI consultancy, dedicated to transforming 
                businesses through intelligent automation and scalable AI solutions. Our team of 
                world-class AI researchers and engineers brings decades of combined experience 
                from leading tech companies and academic institutions.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8" data-testid="text-about-mission">
                Founded with the vision of making advanced AI accessible to enterprises of all sizes, 
                we've successfully delivered transformative solutions to over 50 clients across healthcare, 
                finance, manufacturing, and professional services.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center" data-testid="stat-projects">
                  <div className="text-3xl font-bold text-primary mb-2 font-display">200+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center" data-testid="stat-clients">
                  <div className="text-3xl font-bold text-primary mb-2 font-display">50+</div>
                  <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                </div>
                <div className="text-center" data-testid="stat-satisfaction">
                  <div className="text-3xl font-bold text-primary mb-2 font-display">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "Enterprise Security", text: "SOC 2 compliant infrastructure" },
                  { icon: Award, title: "Industry Recognition", text: "Award-winning AI solutions" },
                  { icon: Users, title: "Expert Team", text: "PhDs and industry veterans" },
                  { icon: Clock, title: "24/7 Support", text: "Dedicated client success team" },
                ].map((value, valueIndex) => (
                  <div key={value.title} className="flex items-start gap-3" data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0" data-testid={`value-icon-${valueIndex + 1}`}>
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1" data-testid={`value-title-${valueIndex + 1}`}>{value.title}</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`value-text-${valueIndex + 1}`}>{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight font-display" data-testid="heading-team">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-team-description">
              World-class AI experts passionate about transforming businesses through intelligent technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-8 hover-elevate active-elevate-2 transition-all" data-testid={`card-team-${index + 1}`}>
                <div className="flex justify-center mb-6">
                  <Avatar className="w-32 h-32 border-4 border-primary/10" data-testid={`avatar-team-${index + 1}`}>
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold mb-1" data-testid={`text-team-name-${index + 1}`}>{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-4" data-testid={`text-team-role-${index + 1}`}>{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6" data-testid={`text-team-bio-${index + 1}`}>{member.bio}</p>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover-elevate active-elevate-2"
                  data-testid={`button-linkedin-${index + 1}`}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight font-display" data-testid="heading-contact">
              Request a Consultation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-contact-description">
              Let's discuss how AI can transform your business. Our experts are ready to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@company.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} data-testid="input-company" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="digital-cloning">Digital Cloning</SelectItem>
                                <SelectItem value="ai-consultancy">AI Consultancy</SelectItem>
                                <SelectItem value="both">Both Services</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="budgetRange"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-budget">
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under-50k">Under $50,000</SelectItem>
                                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                                <SelectItem value="250k-plus">$250,000+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="projectDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project and goals..."
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="textarea-description"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={consultationMutation.isPending}
                      data-testid="button-submit-consultation"
                    >
                      {consultationMutation.isPending ? "Submitting..." : "Submit Request"}
                      {!consultationMutation.isPending && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6" data-testid="card-response-time">
                <h3 className="font-semibold mb-4 flex items-center gap-2" data-testid="heading-response-time">
                  <Clock className="w-5 h-5 text-primary" />
                  Response Time
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-response-time">
                  We typically respond to consultation requests within 24 hours during business days.
                </p>
              </Card>

              <Card className="p-6" data-testid="card-office-hours">
                <h3 className="font-semibold mb-4" data-testid="heading-office-hours">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between" data-testid="office-hours-weekday">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-testid="office-hours-saturday">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-testid="office-hours-sunday">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-contact-info">
                <h3 className="font-semibold mb-4" data-testid="heading-contact-info">Alternative Contact</h3>
                <div className="space-y-3 text-sm">
                  <div data-testid="contact-email">
                    <p className="text-muted-foreground mb-1">Email</p>
                    <p className="font-medium">contact@qorvia.ai</p>
                  </div>
                  <div data-testid="contact-phone">
                    <p className="text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
