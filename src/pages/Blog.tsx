import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "flutter-state-management",
    title: "Flutter State Management—When to Pick GetX vs Provider",
    excerpt: "A comprehensive guide to choosing the right state management solution for your Flutter project. We'll explore the pros, cons, and use cases for GetX and Provider.",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Flutter", "State Management", "GetX", "Provider"],
    published: true
  },
  {
    id: "shipping-faster-ui-checklist",
    title: "Shipping Faster: My UI Architecture Checklist",
    excerpt: "The essential checklist I follow when architecting Flutter UIs for scalability and maintainability. Learn from real project experiences.",
    date: "2024-12-10",
    readTime: "6 min read",
    tags: ["Flutter", "UI Architecture", "Best Practices"],
    published: true
  },
  {
    id: "mobile-to-fullstack",
    title: "From Mobile to Full-Stack: Lessons Planning Server Integrations",
    excerpt: "My journey from Flutter mobile development to planning backend integrations. Key lessons learned about API design and full-stack thinking.",
    date: "2024-12-05",
    readTime: "10 min read",
    tags: ["Full-Stack", "APIs", "Backend", "Career Growth"],
    published: true
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post =>
    post.published && (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-sora font-bold mb-6">
              My <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Thoughts on Flutter development, full-stack architecture, and lessons learned along the way
            </p>
          </motion.div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-muted/20">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="glass-card hover:shadow-glow transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <h2 className="text-2xl font-sora font-semibold mb-3 hover:text-primary transition-colors">
                              <a href={`/blog/${post.id}`} className="animated-link">
                                {post.title}
                              </a>
                            </h2>
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {formatDate(post.date)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="hover:bg-primary/10 group">
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="tech-chip">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-sora font-semibold mb-4">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get notified when I publish new articles about Flutter development and full-stack architecture.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input 
                    placeholder="your@email.com" 
                    className="glass flex-1"
                  />
                  <Button className="btn-primary">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}