import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Calendar, MapPin, Briefcase, ChevronRight,
  Target, ChevronLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

/* ─── Animation ─────────────────────────────────────── */
const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number];

const cardVariants: Variants = {
  enter: { x: "80%", opacity: 0, scale: 0.88, transition: { duration: 0.55, ease: EASE } },
  center: { x: "0%", opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
  exit: { x: "-80%", opacity: 0, scale: 0.88, transition: { duration: 0.45, ease: EASE } },
};

type SlidePhase = "enter" | "center" | "exit";

/* ─── Data ───────────────────────────────────────────── */
const experience = [
  {
    company: "Catalyst IT Solution",
    position: "Flutter Developer",
    period: "November 2025 – Present",
    location: "Karachi, Pakistan",
    type: "Full-Time",
    responsibilities: [
      <>Developing secure, production-grade financial apps for{' '}
        <span>
          <a href="https://apps.apple.com/us/app/js-investpro/id6449826258" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">JS</a>,{' '}
          <a href="https://apps.apple.com/us/app/ahl-nxg/id6449584885" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">AHL</a>,{' '}
          <a href="https://apps.apple.com/us/app/akd-tradepro/id6471224177" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">AKD</a>
        </span>
      </>,
      "Architecting and building custom SDKs to standardise features across mobile projects",
      "Re-engineering complete application architectures for scalability",
      "Implementing robust state management and modernising legacy codebases",
      "Upgrading Flutter versions and refactoring code to boost performance",
    ] as ReactNode[],
    achievements: [
      "Migrated legacy projects from Flutter 3.16 → 3.35 for enhanced stability",
      "Engineered a cross-platform FeedClient SDK using Kotlin Multiplatform (KMP)",
      "Architected production-ready code structures for multiple high-priority projects",
    ],
    technologies: ["Flutter", "Dart", "Java", "Kotlin", "REST APIs", "Server Feeds", "Provider"],
  },
  {
    company: "NEDUET CSIT Dept",
    position: "Lead Flutter Developer / Project Manager",
    period: "March 2025 – Present",
    location: "Karachi, Pakistan",
    type: "Part-Time",
    responsibilities: [
      "Leading full-stack development of Taste-Food App (frontend + backend)",
      "CI-CD and deployment via GitHub Actions on NameCheap",
      "Leading frontend development of ARG Attendance App for CSIT dept",
      "Handling foreign client requirement gathering and analysis",
    ],
    achievements: [
      "Delivered frontend components ahead of schedule",
      "Deployed backend via CI-CD (GitHub Actions) on NameCheap",
      "Established scalable UI architecture for future iterations",
      "Improved client communication by 40%",
    ],
    technologies: ["Flutter", "Dart", "Node", "Express", "REST APIs", "Provider"],
  },
  {
    company: "Halcon Systems Pvt Ltd",
    position: "Junior Flutter Developer",
    period: "June 2025 – August 2025",
    location: "Karachi, Pakistan",
    type: "Full-Time",
    responsibilities: [
      "Leading frontend development of management system from scratch",
      "Handling client requirement gathering and analysis",
      "Designing and implementing UI architecture patterns",
      "Planning backend integration for next project phase",
    ],
    achievements: [
      "Delivered frontend components ahead of schedule",
      "Established scalable UI architecture for future development",
      "Improved client communication by 40%",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "State Management", "UI/UX Design"],
  },
];

/* ─── Experience Card ────────────────────────────────── */
function ExperienceCard({ job, phase }: { job: typeof experience[0]; phase: SlidePhase }) {
  return (
    <motion.div animate={phase} variants={cardVariants} initial="enter" className="w-full max-w-4xl">
      <div className="rounded-3xl p-8 flex flex-col gap-6"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid hsl(var(--primary)/0.25)", boxShadow: "0 0 0 1px #ffffff06, 0 32px 64px -16px hsl(var(--primary)/0.18)", backdropFilter: "blur(20px)" }}>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "hsl(var(--primary)/0.12)", border: "1px solid hsl(var(--primary)/0.25)" }}>
              <Briefcase className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">{job.position}</h4>
              <p className="font-semibold text-primary">{job.company}</p>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-sm text-zinc-400">
            <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {job.period}</div>
            <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full text-primary"
              style={{ background: "hsl(var(--primary)/0.12)", border: "1px solid hsl(var(--primary)/0.25)" }}>
              {job.type}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2 text-primary">
              <ChevronRight className="w-4 h-4" /> Responsibilities
            </h5>
            <ul className="space-y-2">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-primary" />
                  <div>{r}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2 text-primary">
              <Target className="w-4 h-4" /> Achievements
            </h5>
            <ul className="space-y-2 mb-5">
              {job.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-yellow-400" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="tech-chip">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────────── */
export function ExperienceSection() {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<SlidePhase>("center");
  const isAnimating = useRef(false);

  function goTo(next: number) {
    if (isAnimating.current || next < 0 || next >= experience.length) return;
    isAnimating.current = true;
    setPhase("exit");
    setTimeout(() => {
      setCurrent(next);
      setPhase("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setPhase("center");
        setTimeout(() => { isAnimating.current = false; }, 600);
      }));
    }, 300);
  }

  const job = experience[current];

  return (
    <section id="experience" className="min-h-screen relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(var(--primary)/0.08) 0%, transparent 70%)" }} />

      <div className="min-h-screen flex flex-col px-12 py-16">
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-1">Career</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              My <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Nav + dots */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{ background: "hsl(var(--primary)/0.12)", border: "1px solid hsl(var(--primary)/0.3)" }}
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            <div className="flex items-center gap-2">
              {experience.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300 focus:outline-none"
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "8px",
                    background: i === current ? "hsl(var(--primary))" : "hsl(var(--primary)/0.25)",
                    boxShadow: i === current ? "0 0 10px hsl(var(--primary))" : "none",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(current + 1)}
              disabled={current === experience.length - 1}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{ background: "hsl(var(--primary)/0.12)", border: "1px solid hsl(var(--primary)/0.3)" }}
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>

            <span className="ml-1 text-zinc-500 text-sm tabular-nums">{current + 1}/{experience.length}</span>
          </div>
        </div>

        {/* Card */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <ExperienceCard key={current} job={job} phase={phase} />
        </div>
      </div>
    </section>
  );
}
