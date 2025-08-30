import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hassanshakil.workspace@gmail.com",
    href: "mailto:hassanshakil.workspace@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92-305-9167616",
    href: "tel:+923059167616"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: "#"
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "PKT (UTC+5)",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/hassanshakil22",
    username: "hassanshakil22"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/hassanshakil22",
    username: "hassanshakil22"
  },
  {
    icon: Code,
    label: "LeetCode",
    href: "https://leetcode.com/u/hassanshakil22",
    username: "hassanshakil22"
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual email service)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" id="contact">
      {/* Hero Section with Particles */}
      <section className="relative overflow-hidden">
        <ParticleBackground />        
        <div className="container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-sora font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-muted/20">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-sora">Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder="Your full name"
                            className="glass"
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">{errors.name.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="your@email.com"
                            className="glass"
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          {...register("subject")}
                          placeholder="What's this about?"
                          className="glass"
                        />
                        {errors.subject && (
                          <p className="text-sm text-destructive">{errors.subject.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          placeholder="Tell me about your project or just say hello..."
                          rows={6}
                          className="glass resize-none"
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                
                {/* Contact Details */}
                <div>
                  <h3 className="text-2xl font-sora font-semibold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      >
                        <Card className="glass-card hover:bg-primary/5 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                {item.href === "#" ? (
                                  <p className="font-medium">{item.value}</p>
                                ) : (
                                  <a
                                    href={item.href}
                                    className="font-medium hover:text-primary transition-colors"
                                  >
                                    {item.value}
                                  </a>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex">
                  <h3 className="text-2xl font-sora font-semibold mb-6">Connect Online</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        <Card className="glass-card hover:bg-primary/5 transition-colors">
                          <CardContent className="p-4">
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4"
                            >
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <social.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">{social.label}</p>
                                <p className="font-medium hover:text-primary transition-colors">
                                  @{social.username}
                                </p>
                              </div>
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Note */}
                <Card className="glass-card border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Response Time</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          I typically respond within 24 hours. For urgent matters, 
                          feel free to reach out via phone or LinkedIn.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}