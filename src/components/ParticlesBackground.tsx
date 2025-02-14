import React, { useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';
import { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  background-color: ${props => props.theme.theme === 'dark' ? '#000000' : '#ffffff'};
  transition: background-color 0.3s ease;
`;

const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: theme === 'dark' ? "#000000" : "#ffffff",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ff0000",
            },
            links: {
              color: "#ff0000",
              distance: 150,
              enable: true,
              opacity: theme === 'dark' ? 0.6 : 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 100,
            },
            opacity: {
              value: theme === 'dark' ? 0.8 : 0.6,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
          detectRetina: true,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
      />
    </ParticlesContainer>
  );
};

export default ParticlesBackground; 