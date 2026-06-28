import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github, Smartphone, LayoutGrid } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* ─── Types ──────────────────────────────────────────── */
type PhaseState = "hidden-below" | "visible" | "hidden-above";
type ProjectDisplayType = "phone" | "card";

interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  stack: string[];
  summary: string;
  category: "mobile" | "web" | "fullstack" | "Data";
  image?: string;
  videoSrc?: string;
  gifSrc?: string;
  displayType: ProjectDisplayType;
  liveUrl?: string;
  repoUrl?: string;
  accentColor: string;
}

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number];

const snapVariants: Variants = {
  "hidden-below": {
    y: "90vh",
    opacity: 0,
    scale: 0.88,
    transition: { duration: 0.65, ease: EASE },
  },
  visible: {
    y: "0vh",
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
  "hidden-above": {
    y: "-90vh",
    opacity: 0,
    scale: 0.88,
    transition: { duration: 0.65, ease: EASE },
  },
};

/* ─── Project data ───────────────────────────────────── */
const allProjects: Project[] = [
  {
    id: "taste-app",
    title: "TASTE-APP",
    role: "Lead Frontend Developer",
    period: "2024",
    stack: ["Flutter", "REST APIs", "Provider", "Google Maps", "CI-CD"],
    summary:
      "Food delivery application with optimised UI/UX and seamless backend integration",
    category: "mobile",
    repoUrl: "https://github.com/hassanshakil22",
    videoSrc:
      "https://www.youtube.com/embed/ikkAbUN4Gkw?autoplay=1&mute=1&loop=1&playlist=ikkAbUN4Gkw&controls=0&modestbranding=1&rel=0&playsinline=1",
    displayType: "card", // Changed to card
    liveUrl: "https://appetize.io/app/b_q7xosak5q4wk6uv7yo4bhrkt64",
    accentColor: "#a78bfa",
  },
  {
    id: "guard-management",
    title: "GUARD-MANAGEMENT-APP",
    role: "Lead Frontend Developer",
    period: "2024",
    stack: ["Flutter", "REST APIs", "S3 Cloud Integration", "State Management"],
    summary:
      "Guard management application with real-time tracking and cloud integration",
    category: "mobile",
    repoUrl: "https://github.com/hassanshakil22",
    videoSrc: `${import.meta.env.BASE_URL}marlboro-tut-sped.mp4`,
    displayType: "phone",
    liveUrl: "https://appetize.io/app/b_dpm54tuql6iyaxtg2cbqbhztwa",
    accentColor: "#34d399",
  },
  {
    id: "ned-attendance",
    title: "NED Attendance Registration App",
    role: "Frontend Developer",
    period: "2024",
    stack: ["Flutter", "REST API", "Provider", "Data Integrity"],
    summary:
      "CSIT department attendance system with teacher-office data synchronisation",
    category: "mobile",
    repoUrl: "https://github.com/hassanshakil22",
    image: `${import.meta.env.BASE_URL}ARG.png`,
    displayType: "card",
    liveUrl: `${import.meta.env.BASE_URL}ARG.png`,
    accentColor: "#f472b6",
  },
  {
    id: "society-app",
    title: "Smart-Society App",
    role: "Flutter Developer",
    period: "2024",
    stack: ["Flutter", "UI-UX", "Responsive"],
    summary: "Flutter-integrated Society Management App's UI",
    category: "mobile",
    repoUrl: "https://github.com/hassanshakil22",
    image: `${import.meta.env.BASE_URL}smartSociety.png`,
    displayType: "card",
    liveUrl: `${import.meta.env.BASE_URL}smartSociety.png`,
    accentColor: "#60a5fa",
  },
  {
    id: "sp-500",
    title: "SP-500 ETL Airflow Pipeline",
    role: "Data Engineer",
    period: "2025",
    stack: [
      "Python",
      "Apache Airflow",
      "ETL",
      "Yahoo Finance",
      "Docker",
      "Ubuntu",
    ],
    summary:
      "Automating the full data ingestion workflow for S&P 500 market data using Apache Airflow",
    category: "Data",
    repoUrl: "https://github.com/hassanshakil22/airflow-etl-project-sp500",
    image: `${import.meta.env.BASE_URL}sp_500_architecture.png`,
    displayType: "card",
    liveUrl: `${import.meta.env.BASE_URL}sp_500_architecture.png`,
    accentColor: "#fb923c",
  },
  {
    id: "scd",
    title: "SCD Pipeline",
    role: "Data Engineer",
    period: "2025",
    stack: [
      "Python",
      "Apache Nifi",
      "S3",
      "Jupyter Notebook",
      "Docker",
      "Snowflake",
    ],
    summary:
      "Automating data engineering pipeline with Apache NiFi, AWS S3, and Snowflake for real-time SCD.",
    category: "Data",
    repoUrl:
      "https://github.com/hassanshakil22/Slowly-Changing-Dim-SCD-Snowflake",
    image: `${import.meta.env.BASE_URL}SCD_Architecture.png`,
    displayType: "card",
    liveUrl: `${import.meta.env.BASE_URL}SCD_Architecture.png`,
    accentColor: "#22d3ee",
  },
];

/* ─── Phone Frame ────────────────────────────────────── */
function PhoneFrame({
  videoSrc,
  gifSrc,
  accentColor,
  title,
  compact,
}: {
  videoSrc?: string;
  gifSrc?: string;
  accentColor: string;
  title: string;
  compact?: boolean;
}) {
  const w = compact ? 180 : 220;
  const h = compact ? 350 : 430;
  const br = compact ? 28 : 40;
  const notchW = compact ? "28px" : "44px";
  const camSize = compact ? "5px" : "7px";
  const camRight = compact ? "14px" : "24px";
  const screenInset = compact ? "12px 2px 6px 2px" : "18px 3px 10px 3px";
  const screenBr = compact ? 20 : 28;
  const btnH1 = compact ? "36px" : "56px";
  const btnTop1 = compact ? "58px" : "90px";
  const btnH2 = compact ? "22px" : "32px";
  const btnTop2 = compact ? "48px" : "75px";
  const btnTop3 = compact ? "76px" : "115px";
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-25 scale-75"
        style={{ background: accentColor }}
      />
      <div
        style={{
          width: `${w}px`,
          height: `${h}px`,
          background: "#000",
          borderRadius: `${br}px`,
          border: `2px solid ${accentColor}44`,
          boxShadow: `0 0 0 1px #ffffff08, 0 40px 80px -20px ${accentColor}66, inset 0 1px 0 #ffffff12`,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "11px",
            left: "50%",
            transform: "translateX(-50%)",
            width: notchW,
            height: "4px",
            background: "#1a1a1a",
            borderRadius: "2px",
            zIndex: 10,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "9px",
            right: camRight,
            width: camSize,
            height: camSize,
            background: "#111",
            borderRadius: "50%",
            border: "1px solid #2a2a2a",
            zIndex: 10,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: screenInset,
            borderRadius: `${screenBr}px`,
            overflow: "hidden",
            background: "#000",
          }}
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "inherit",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: btnTop1,
            right: "-3px",
            width: "3px",
            height: btnH1,
            background: "#0f0f0f",
            borderRadius: "0 2px 2px 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: btnTop2,
            left: "-3px",
            width: "3px",
            height: btnH2,
            background: "#0f0f0f",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: btnTop3,
            left: "-3px",
            width: "3px",
            height: btnH2,
            background: "#0f0f0f",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: `${br}px`,
            background:
              "linear-gradient(135deg,rgba(255,255,255,0.05) 0%,transparent 50%)",
            pointerEvents: "none",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}

/* ─── Single project slide inside the inner scroll ───── */
function ProjectSlide({
  project,
  index,
  total,
  containerRef,
}: {
  project: Project;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const slideRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<PhaseState>("hidden-below");
  const isPhone = project.displayType === "phone";

  useEffect(() => {
    const slide = slideRef.current;
    const container = containerRef.current;
    if (!slide || !container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("visible");
        } else {
          setPhase(
            entry.boundingClientRect.top > 0 ? "hidden-below" : "hidden-above",
          );
        }
      },
      { root: container, threshold: 0.5 },
    );
    observer.observe(slide);
    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <div
      ref={slideRef}
      style={{
        height: "100vh",
        flexShrink: 0,
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        position: "relative",
      }}
    >
      <div className="h-full flex items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 55% 45% at 50% 70%, ${project.accentColor}20 0%, transparent 70%)`,
          }}
        />

        {/* Watermark — desktop only */}
        <div className="absolute right-4 bottom-8 select-none pointer-events-none hidden sm:block">
          <span
            className="text-7xl md:text-8xl font-black leading-none"
            style={{ color: `${project.accentColor}0d` }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Progress dots — desktop sidebar */}
        <div className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 flex-col gap-2 z-20 hidden md:flex">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500"
              style={{
                width: i === index ? "8px" : "4px",
                height: i === index ? "8px" : "4px",
                background:
                  i === index
                    ? project.accentColor
                    : `${project.accentColor}30`,
                boxShadow:
                  i === index ? `0 0 8px ${project.accentColor}` : "none",
              }}
            />
          ))}
        </div>

        {/* Animated layout */}
        <motion.div
          animate={phase}
          variants={snapVariants}
          initial="hidden-below"
          className="relative z-10 w-full max-w-6xl mx-auto mt-20 px-4 sm:px-8 md:px-16
            flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16"
        >
          {/* ── Media ── */}
          {/* ── Media ── */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
            {isPhone ? (
              <PhoneFrame
                videoSrc={project.videoSrc}
                gifSrc={project.gifSrc}
                accentColor={project.accentColor}
                title={project.title}
                compact={window.innerWidth < 768}
              />
            ) : (
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  width: "560px",
                  maxWidth: "clamp(280px, 90vw, 560px)",
                  aspectRatio: "16/10", // <-- Changed from 16/9 to 16/10
                  border: `1px solid ${project.accentColor}33`,
                  boxShadow: `0 0 0 1px ${project.accentColor}22, 0 20px 60px -16px ${project.accentColor}44`,
                }}
              >
                {project.videoSrc ? (
                  project.videoSrc.includes("youtube.com") ||
                  project.videoSrc.includes("youtu.be") ? (
                    <iframe
                      src={project.videoSrc}
                      title={project.title}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: "none" }}
                    />
                  ) : (
                    <video
                      src={project.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover bg-black/30"
                    />
                  )
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-contain bg-black/30"
                  />
                )}

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg,${project.accentColor}10 0%,transparent 60%)`,
                  }}
                />
              </div>
            )}
          </div>

          {/* ── Info ── */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              {isPhone ? (
                <Smartphone
                  className="w-4 h-4"
                  style={{ color: project.accentColor }}
                />
              ) : (
                <LayoutGrid
                  className="w-4 h-4"
                  style={{ color: project.accentColor }}
                />
              )}
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: project.accentColor }}
              >
                {project.category === "Data"
                  ? "Data Engineering"
                  : isPhone
                    ? "Mobile App"
                    : "Project"}
              </span>
              {/* mobile counter */}
              <span className="ml-auto md:hidden text-xs text-zinc-500 tabular-nums">
                {index + 1}/{total}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-3">
              {project.role} · {project.period}
            </p>
            <p className="text-sm text-zinc-300 mb-4 leading-relaxed max-w-md mx-auto md:mx-0 line-clamp-3 md:line-clamp-none">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5 justify-center md:justify-start">
              {project.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-2 py-0.5 text-xs"
                  style={{
                    background: `${project.accentColor}18`,
                    border: `1px solid ${project.accentColor}33`,
                    color: project.accentColor,
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
            {/* Buttons — side by side on mobile too, full width available */}
            <div className="flex gap-2 sm:gap-3 justify-center md:justify-start">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none sm:w-36"
                >
                  <button
                    className="w-full flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105"
                    style={{
                      background: project.accentColor,
                      color: "#000",
                      boxShadow: `0 6px 20px ${project.accentColor}44`,
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View Live
                  </button>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none sm:w-36"
                >
                  <button
                    className="w-full flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105"
                    style={{
                      background: "transparent",
                      border: `1px solid ${project.accentColor}55`,
                      color: project.accentColor,
                    }}
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </button>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Main export ────────────────────────────────────── */
export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const snapped = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    // Fires as soon as the section peeks in (5% visible) → snap it full screen
    const enterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !snapped.current) {
          snapped.current = true;
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Reset lock when section fully leaves so scroll-back works
        if (!entry.isIntersecting) {
          snapped.current = false;
        }
      },
      { threshold: 0.2 },
    );

    enterObserver.observe(section);
    return () => enterObserver.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ height: "100vh", position: "relative" }}
    >
      {/* Inner vertical snap scroll container */}
      <div
        ref={scrollRef}
        style={{
          height: "100%",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          msOverflowStyle: "none",
          scrollbarWidth: "none" as const,
        }}
      >
        {/* Hero intro slide */}
        <div
          style={{
            height: "100vh",
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
          }}
          className="relative flex flex-col items-center justify-center text-center px-6"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute rounded-full blur-3xl opacity-20"
              style={{
                width: "500px",
                height: "500px",
                top: "-80px",
                left: "-120px",
                background: "radial-gradient(circle,#a78bfa,transparent)",
                animation: "pjFloat 8s ease-in-out infinite",
              }}
            />
            <div
              className="absolute rounded-full blur-3xl opacity-15"
              style={{
                width: "400px",
                height: "400px",
                bottom: "-60px",
                right: "-80px",
                background: "radial-gradient(circle,#34d399,transparent)",
                animation: "pjFloat 10s ease-in-out infinite reverse",
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
              My <span className="gradient-text">Personal Projects</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-10">
              Scroll down — each project snaps into view
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-zinc-500 tracking-widest uppercase">
                {allProjects.length} projects · scroll to explore
              </span>
              <svg
                width="20"
                height="28"
                viewBox="0 0 20 28"
                fill="none"
                className="text-zinc-500"
              >
                <rect
                  x="1"
                  y="1"
                  width="18"
                  height="26"
                  rx="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <motion.rect
                  x="8.5"
                  y="5"
                  width="3"
                  height="5"
                  rx="1.5"
                  fill="currentColor"
                  animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Project slides */}
        {allProjects.map((project, i) => (
          <ProjectSlide
            key={project.id}
            project={project}
            index={i}
            total={allProjects.length}
            containerRef={scrollRef}
          />
        ))}
      </div>

      <style>{`
        #projects > div::-webkit-scrollbar { display: none; }
        @keyframes pjFloat {
          0%,100% { transform:translateY(0) scale(1); }
          50% { transform:translateY(-28px) scale(1.04); }
        }
      `}</style>
    </section>
  );
}
