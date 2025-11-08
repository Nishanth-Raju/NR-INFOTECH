import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-in-right">
      <div className="container mx-auto">
        <div className="bg-card border border-border rounded-lg shadow-elegant p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, serve personalized content, and
              analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={declineCookies}>
              Decline
            </Button>
            <Button onClick={acceptCookies} className="bg-gradient-primary">
              Accept
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={declineCookies}
              className="ml-2"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
