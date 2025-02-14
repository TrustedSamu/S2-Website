import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

declare global {
  interface Window {
    particlesJS: any;
    pJSDom: any[];
  }
}

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initParticles = () => {
      if (typeof window.particlesJS !== 'undefined' && containerRef.current) {
        // Clean up previous instance if it exists
        if (window.pJSDom && window.pJSDom.length > 0) {
          window.pJSDom[0].pJS.fn.vendors.destroypJS();
          window.pJSDom = [];
        }

        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: '#ff0000'
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: theme === 'light' ? 0.6 : 0.8,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ff0000',
              opacity: theme === 'light' ? 0.4 : 0.6,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      }
    };

    // Initialize particles with a slight delay to ensure DOM is ready
    const timeoutId = setTimeout(initParticles, 100);

    return () => {
      clearTimeout(timeoutId);
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, [theme]);

  return <ParticlesContainer id="particles-js" ref={containerRef} />;
};

export default ParticlesBackground; 