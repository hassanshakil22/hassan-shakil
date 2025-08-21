import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, ChevronRight, Target, Users, Code } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    company: "Halcon Systems Pvt Ltd",
    position: "Junior Flutter Developer",
    period: "June 2025 – Present",
    location: "Karachi, Pakistan",
    type: "Full-time",
    responsibilities: [
      "Leading frontend development of management system from scratch",
      "Handling client requirement gathering and analysis",
      "Designing and implementing UI architecture patterns",
      "Planning backend integration ownership for next project phase",
      "Collaborating with stakeholders to define project scope and deliverables"
    ],
    achievements: [
      "Successfully delivered frontend components ahead of schedule",
      "Established scalable UI architecture for future development",
      "Improved client communication and requirement clarity by 40%"
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "State Management", "UI/UX Design"]
  }
];

const featurePlaybooks = [
  {
    title: "Pagination Pattern",
    description: "Efficient data loading with infinite scroll and pull-to-refresh",
    technologies: ["Flutter", "Provider", "REST API"]
  },
  {
    title: "Offline-First Architecture",
    description: "Robust data synchronization with local caching strategies",
    technologies: ["SQLite", "Sync Manager", "State Management"]
  },
  {
    title: "Error Boundaries",
    description: "Graceful error handling with user-friendly fallback UIs",
    technologies: ["Flutter", "Error Handling", "UX Design"]
  },
  {
    title: "Real-time Updates",
    description: "Live data synchronization with WebSocket integration",
    technologies: ["WebSocket", "Stream Management", "Firebase"]
  }
];

const careerGoals = [
  {
    icon: Target,
    title: "Full-Stack Mastery",
    description: "Expanding backend development skills with Node.js, databases, and cloud services"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Growing into technical leadership roles and mentoring junior developers"
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Contributing to Flutter ecosystem and sharing knowledge with the community"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen">
      {/* Hero Section */}
      <div className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-sora font-bold mb-6">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional journey and the patterns I've learned along the way
            </p>
          </motion.div>
        </div>
      </div>

      {/* Current Experience */}
      <div className="section-padding bg-muted/20">
        <div className="container-padding">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-sora font-bold text-center mb-12">
                Professional <span className="gradient-text">Experience</span>
              </h3>

              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                              <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-semibold">{job.position}</h4>
                              <p className="text-lg font-medium text-primary">{job.company}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {job.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <Badge variant="secondary" className="tech-chip">
                              {job.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-8">
                      
                      {/* Responsibilities */}
                      <div>
                        <h5 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <ChevronRight className="w-5 h-5 text-primary" />
                          Key Responsibilities
                        </h5>
                        <ul className="space-y-3">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">
                                {responsibility}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-3">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-semibold mb-4">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} className="tech-chip">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Playbooks */}
      <div className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-sora font-bold text-center mb-4">
              Feature <span className="gradient-text">Playbooks</span>
            </h3>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Reusable patterns and solutions I've developed for common mobile app challenges
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {featurePlaybooks.map((playbook, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="glass-card h-full hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3">{playbook.title}</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {playbook.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {playbook.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Career Goals */}
      <div className="section-padding bg-muted/20">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-sora font-bold text-center mb-4">
              Future <span className="gradient-text">Aspirations</span>
            </h3>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Where I'm heading next in my development journey
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {careerGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-card h-full text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <goal.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold mb-4">{goal.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {goal.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}