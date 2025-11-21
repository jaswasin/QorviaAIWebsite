import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold tracking-tight font-display hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-logo"
          >
            Qorvia<span className="text-primary">.ai</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-process"
            >
              How We Work
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-team"
            >
              Team
            </button>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="hover-elevate active-elevate-2"
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="default"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="hover-elevate active-elevate-2"
              data-testid="button-theme-toggle-mobile"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <button
              className="hover-elevate active-elevate-2 p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-4 py-3 rounded-md text-left transition-colors"
                data-testid="link-mobile-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-4 py-3 rounded-md text-left transition-colors"
                data-testid="link-mobile-process"
              >
                How We Work
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-4 py-3 rounded-md text-left transition-colors"
                data-testid="link-mobile-portfolio"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-4 py-3 rounded-md text-left transition-colors"
                data-testid="link-mobile-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-sm font-medium tracking-wide hover-elevate active-elevate-2 px-4 py-3 rounded-md text-left transition-colors"
                data-testid="link-mobile-team"
              >
                Team
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="mt-2"
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
