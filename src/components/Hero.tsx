import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import whiteRedLogo from '../assets/New_Small_White-Red.png';
import blackRedLogo from '../assets/New_Small_Black-Red.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const LogoContainer = styled.div`
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;

  img {
    height: 120px;
    width: auto;
    
    @media (max-width: 768px) {
      height: 80px;
    }
  }
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  margin-bottom: 4rem;
  max-width: 800px;
  line-height: 1.6;
  color: inherit;
  font-weight: 300;
  letter-spacing: 0.1em;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards 0.3s;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 4px;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards 0.6s;

  h2 {
    color: inherit;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.2em;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.8;
    font-size: 1.1rem;
    color: inherit;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CTAButton = styled.button`
  background-color: transparent;
  color: inherit;
  border: 1px solid currentColor;
  padding: 1rem 3rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 300;

  &:hover {
    background-color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};
    color: ${props => props.theme.theme === 'dark' ? 'var(--bg-dark)' : 'var(--bg-light)'};
  }
`;

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <HeroSection>
      <LogoContainer>
        <img 
          src={theme === 'dark' ? whiteRedLogo : blackRedLogo} 
          alt="S2 Logo" 
        />
      </LogoContainer>
      <Tagline>Die Zukunft der KI-gestützten Sprachkommunikation</Tagline>
      <CTAContainer>
        <h2>Entdecken Sie Gourmet</h2>
        <p>
          Revolutionieren Sie Ihr Kundenservice mit unserem KI-gestützten Sprachassistenten.
          Gourmet kombiniert fortschrittliches NLP mit nahtloser Datenbankintegration für
          ein unvergleichliches Serviceerlebnis.
        </p>
        <CTAButton>Mehr erfahren</CTAButton>
      </CTAContainer>
    </HeroSection>
  );
};

export default Hero; 