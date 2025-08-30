// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, Github, Search, Filter } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";

// interface Project {
//   id: string;
//   title: string;
//   role: string;
//   period: string;
//   stack: string[];
//   summary: string;
//   outcomes: string[];
//   category: 'mobile' | 'web' | 'fullstack';
//   image?: string;
//   liveUrl?: string;
//   repoUrl?: string;
// }

// const projects: Project[] = [
//   {
//     id: "taste-app",
//     title: "TASTE-APP",
//     role: "Lead Developer",
//     period: "2024",
//     stack: ["Flutter", "REST APIs", "Firebase", "State Management"],
//     summary: "Food delivery application with optimized UI/UX and seamless backend integration",
//     outcomes: ["~30% faster development velocity", "Smooth ordering flows", "Real-time order tracking"],
//     category: "mobile",
//     repoUrl: "#"
//   },
//   {
//     id: "ned-attendance",
//     title: "NED Attendance Registration App",
//     role: "Frontend Developer",
//     period: "2024",
//     stack: ["Flutter", "REST API", "Provider", "Data Integrity"],
//     summary: "CSIT department attendance system with teacher-office data synchronization",
//     outcomes: ["Department-wide deployment", "Planning university-wide scaling", "Improved attendance accuracy"],
//     category: "mobile",
//     repoUrl: "#"
//   },
//   {
//     id: "medbot",
//     title: "MedBot",
//     role: "Flutter Developer",
//     period: "2024",
//     stack: ["Flutter", "API Integration", "Conversational UI", "Healthcare"],
//     summary: "Flutter-integrated chatbot providing fast medical information (non-diagnostic)",
//     outcomes: ["Fast medical info access", "User-friendly chat interface", "Healthcare data integration"],
//     category: "mobile",
//     repoUrl: "#"
//   },
//   {
//     id: "weather-app",
//     title: "Weather App",
//     role: "Solo Developer",
//     period: "2023",
//     stack: ["Flutter", "REST API", "Geolocation", "Caching"],
//     summary: "Weather application with location-based forecasts and offline caching",
//     outcomes: ["Real-time weather data", "Offline functionality", "Location-based services"],
//     category: "mobile",
//     repoUrl: "#"
//   },
//   {
//     id: "ecommerce-app",
//     title: "E-Commerce App",
//     role: "UI/UX Developer",
//     period: "2023",
//     stack: ["Flutter", "Figma", "State Management", "UI/UX"],
//     summary: "Complete e-commerce application built from Figma designs with cart and checkout flows",
//     outcomes: ["Pixel-perfect implementation", "Smooth user experience", "Complete shopping flow"],
//     category: "mobile",
//     repoUrl: "#"
//   },
//   {
//     id: "crypto-tracker",
//     title: "Crypto Tracker",
//     role: "Solo Developer",
//     period: "2023",
//     stack: ["Flutter", "GetX", "REST API", "Charts"],
//     summary: "Cryptocurrency tracking application with real-time price updates and portfolio management",
//     outcomes: ["Real-time crypto data", "Portfolio tracking", "Interactive charts"],
//     category: "mobile",
//     repoUrl: "#"
//   }
// ];

// const categories = [
//   { id: 'all', name: 'All Projects' },
//   { id: 'mobile', name: 'Mobile Apps' },
//   { id: 'web', name: 'Web Apps' },
//   { id: 'fullstack', name: 'Full-Stack' }
// ];

// export default function Projects() {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredProjects = projects.filter(project => {
//     const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
//     const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="section-padding">
//         <div className="container-padding">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center mb-16"
//           >
//             <h1 className="text-4xl md:text-6xl font-sora font-bold mb-6">
//               My <span className="gradient-text">Projects</span>
//             </h1>
//             <p className="text-xl text-muted-foreground">
//               Showcasing mobile apps and full-stack solutions I've built
//             </p>
//           </motion.div>

//           {/* Filters */}
//           <div className="max-w-4xl mx-auto mb-12">
//             <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
//               {/* Search */}
//               <div className="relative flex-1 max-w-md">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
//                 <Input
//                   placeholder="Search projects or technologies..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 glass"
//                 />
//               </div>

//               {/* Category Filter */}
//               <div className="flex items-center gap-2">
//                 <Filter className="w-4 h-4 text-muted-foreground" />
//                 <div className="flex gap-2">
//                   {categories.map((category) => (
//                     <Button
//                       key={category.id}
//                       variant={selectedCategory === category.id ? "default" : "outline"}
//                       onClick={() => setSelectedCategory(category.id)}
//                       className={selectedCategory === category.id ? "btn-primary" : "btn-secondary"}
//                     >
//                       {category.name}
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="section-padding bg-muted/20" id="projects">
//         <div className="container-padding">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedCategory + searchTerm}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
//             >
//               {filteredProjects.map((project, index) => (
//                 <motion.div
//                   key={project.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -8 }}
//                   className="group"
//                 >
//                   <Card className="glass-card h-full hover:shadow-glow transition-all duration-300">
                    
//                     {/* Project Image Placeholder */}
//                     <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-2xl flex items-center justify-center">
//                       <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center">
//                         <span className="text-2xl font-bold text-primary">
//                           {project.title.charAt(0)}
//                         </span>
//                       </div>
//                     </div>

//                     <CardHeader>
//                       <div className="flex items-start justify-between">
//                         <div>
//                           <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                           <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                             <span>{project.role}</span>
//                             <span>•</span>
//                             <span>{project.period}</span>
//                           </div>
//                         </div>
//                         <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                           {project.liveUrl && (
//                             <Button size="icon" variant="ghost" asChild>
//                               <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                                 <ExternalLink className="w-4 h-4" />
//                               </a>
//                             </Button>
//                           )}
//                           {project.repoUrl && (
//                             <Button size="icon" variant="ghost" asChild>
//                               <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
//                                 <Github className="w-4 h-4" />
//                               </a>
//                             </Button>
//                           )}
//                         </div>
//                       </div>
//                     </CardHeader>

//                     <CardContent>
//                       <p className="text-muted-foreground mb-4 leading-relaxed">
//                         {project.summary}
//                       </p>

//                       {/* Tech Stack */}
//                       <div className="mb-4">
//                         <div className="flex flex-wrap gap-2">
//                           {project.stack.slice(0, 3).map((tech) => (
//                             <Badge key={tech} variant="secondary" className="tech-chip">
//                               {tech}
//                             </Badge>
//                           ))}
//                           {project.stack.length > 3 && (
//                             <Badge variant="outline" className="text-xs">
//                               +{project.stack.length - 3} more
//                             </Badge>
//                           )}
//                         </div>
//                       </div>

//                       {/* Key Outcomes */}
//                       <div>
//                         <h4 className="text-sm font-medium mb-2 text-primary">Key Outcomes:</h4>
//                         <ul className="text-sm text-muted-foreground space-y-1">
//                           {project.outcomes.slice(0, 2).map((outcome, idx) => (
//                             <li key={idx} className="flex items-start gap-2">
//                               <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
//                               {outcome}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {/* Empty State */}
//           {filteredProjects.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-16"
//             >
//               <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
//               <p className="text-muted-foreground">
//                 Try adjusting your search or filter criteria
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }