import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface ParticleBackgroundProps {
  id?: string;
  className?: string;
}

export const ParticleBackground = ({ id = "tsparticles", className }: ParticleBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => { }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: { opacity: 0 },
        fpsLimit: 60,

        interactivity: {
          events: {
            onClick: { enable: true, mode: "repulse" },   // click = explode outward
            onHover: { enable: true, mode: "grab" },      // hover = pull web toward cursor
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.6 },
            },
            repulse: {
              distance: 250,
              duration: 0.8,
            },
          },
        },

        particles: {
          /* ── greyscale nodes ── */
          color: { value: ["#ffffff", "#bbbbbb", "#777777"] },

          /* ── glowing web links ── */
          links: {
            enable: true,
            color: { value: "#aaaaaa" },
            distance: 130,
            opacity: 0.12,
            width: 0.7,
            triangles: {
              enable: true,         // fills triangles between linked nodes
              color: "#ffffff",
              opacity: 0.015,
            },
          },

          shape: { type: "circle" },

          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },  // bounce off edges — keeps web intact
            attract: { enable: false },
          },

          /* ── twinkling opacity ── */
          opacity: {
            value: { min: 0.2, max: 0.8 },
            animation: {
              enable: true,
              speed: 1.2,
              minimumValue: 0.1,
              sync: false,
            },
          },

          /* ── mix of tiny and a few bigger bright nodes ── */
          size: {
            value: { min: 0.8, max: 3.5 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.4,
              sync: false,
              destroy: "none",
              startValue: "random",
            },
          },

          number: {
            density: { enable: true, area: 700 },
            value: 70,
          },
        },

        detectRetina: true,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,

        responsive: [
          {
            maxWidth: 1280,
            options: {
              particles: { number: { value: 100 } },
            },
          },
          {
            maxWidth: 768,
            options: {
              particles: {
                number: { value: 80 },
                links: { distance: 100 },
              },
            },
          },
        ],
      }}
    />
  );
};