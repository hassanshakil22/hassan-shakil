import { motion } from "framer-motion";
import {
  Download,
  MapPin,
  GraduationCap,
  Code2,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  mobile: [
    "Flutter",
    "Dart",
    "GetX",
    "Provider",
    "REST APIs",  
    "Firebase",
    "Supabase",
  ],
  backend: ["Node.js", "Express", "Supabase", "Firebase", "REST APIs"],
  data: ["Pandas", "NumPy", "SQL" , "SnowFlake", "Data Analysis","Data Engineering"],
  tools: ["Git", "CI/CD", "GitHub Actions", "VS Code"],
};

const education = [
  {
    institution: "NED University of Engineering & Technology",
    degree: "BS Computer Science",
    period: "Aug 2024 – Present",
    location: "Karachi, Pakistan",
  },
  {
    institution: "Meritorious Science College",
    degree: "Pre-Engineering",
    period: "Jul 2022 – Jun 2024",
    location: "Karachi, Pakistan",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen">
      {/* Bio Section */}
      <div className="p-7 bg-muted/25 ">
        <div className="">
          {/* Hero Section */}

          <div className="container-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-sora font-bold mb-6">
                <span className="gradient-text">About Me</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Get to know the developer behind the code
              </p>
            </motion.div>
          </div>
        </div>
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Bio Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <span className="text-primary font-medium">
                    Currently At Halcon Systems Pvt Ltd
                  </span>
                </div>

                <h3 className="text-3xl font-sora font-bold mb-6">
                  Junior Flutter Developer with Full-Stack Ambitions
                </h3>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm currently leading the frontend development of a
                    management system from scratch at{" "}
                    <strong className="text-foreground">
                      Halcon Systems Pvt Ltd
                    </strong>
                    , where I handle client requirement gathering and UI
                    architecture design.
                  </p>

                  <p>
                    My journey started with mobile app development using
                    Flutter, but I'm actively expanding into full-stack
                    development. I'm planning to take ownership of backend
                    integration in our next project phase, combining my mobile
                    expertise with server-side technologies.
                  </p>

                  <p>
                    I have a strong interest in cloud technologies, security,
                    and building scalable systems. My goal is to become a
                    versatile developer who can handle the entire software
                    development lifecycle.
                  </p>
                </div>

                <div className="mt-8">
                  <Button className="btn-primary"  onClick={() => window.open("H-S Resume.pdf", "_blank")}>    
                    <Download className="mr-2 w-4 h-4" />
                    Download CV
                  </Button>
                </div>
              </motion.div>

              {/* Stats/Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-medium">Location</span>
                    </div>
                    <p className="text-muted-foreground">Karachi, Pakistan</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Code2 className="w-5 h-5 text-primary" />
                      <span className="font-medium">Specialization</span>
                    </div>
                    <p className="text-muted-foreground">
                      Flutter Mobile Development & UI/UX Design
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className="font-medium">Focus</span>
                    </div>
                    <p className="text-muted-foreground">
                      Transitioning to Full-Stack Development
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-sora font-bold text-center mb-16">
              Skills & <span className="gradient-text">Technologies</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, techs], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full hover:bg-primary/5">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4 capitalize text-primary">
                        {category === "mobile"
                          ? "Mobile Development"
                          : category === "backend"
                          ? "Backend Development"
                          : category === "data"
                          ? "Data Science"
                          : "Tools & Workflow"}
                      </h4>
                      <div className="space-y-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="tech-chip block w-full text-center"
                          >
                            {tech}
                          </span>
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

      {/* Education Section */}
      <div className="section-padding bg-muted/20">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-sora font-bold text-center mb-16">
              Education <span className="gradient-text">Timeline</span>
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <GraduationCap className="w-5 h-5 text-primary" />
                            <h4 className="text-xl font-semibold">
                              {edu.degree}
                            </h4>
                          </div>
                          <p className="text-lg font-medium text-muted-foreground mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {edu.location}
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className="tech-chip">{edu.period}</span>
                        </div>
                      </div>
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
