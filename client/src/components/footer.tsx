import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
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

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">
              Qorvia<span className="text-primary">.ai</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Pioneering the future of AI consultancy and digital cloning technology. 
              Transforming businesses with intelligent, scalable solutions.
            </p>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="hover-elevate active-elevate-2"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover-elevate active-elevate-2"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover-elevate active-elevate-2"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover-elevate active-elevate-2"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-footer-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-footer-portfolio"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-footer-about"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-footer-team"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest insights on AI and digital transformation.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Qorvia.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
