import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SUPABASE_URL = "https://greyqyzhrbtbmgizttua.supabase.co";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I will respond shortly.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 lg:px-16 bg-secondary/30"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Contact
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            For project inquiries, collaborations, or to discuss how architecture 
            can serve your vision, please reach out.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-sans tracking-wider text-muted-foreground uppercase mb-2">
                Location
              </p>
              <p className="font-serif text-xl">Mumbai, Maharashtra</p>
              <p className="text-muted-foreground">India</p>
            </div>

            <div>
              <p className="text-sm font-sans tracking-wider text-muted-foreground uppercase mb-2">
                Email
              </p>
              <a
                href="mailto:studio@akshaykumar.arch"
                className="font-serif text-xl hover:text-muted-foreground transition-colors"
              >
                studio@akshaykumar.arch
              </a>
            </div>

            <div>
              <p className="text-sm font-sans tracking-wider text-muted-foreground uppercase mb-2">
                Practice Hours
              </p>
              <p className="text-muted-foreground">
                Monday — Friday<br />
                10:00 — 18:00 IST
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-background border-border focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-background border-border focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="bg-background border-border focus:border-foreground transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background hover:bg-foreground/90 font-sans tracking-wider uppercase text-sm py-6"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div
          className={`mt-24 pt-12 border-t border-border text-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm text-muted-foreground font-sans">
            © {new Date().getFullYear()} Akshay Kumar Architecture. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
