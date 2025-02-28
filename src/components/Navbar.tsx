import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import whiteRedLogo from '../assets/New_Medium_White-Red.png';
import blackRedLogo from '../assets/New_Medium_Black-Red.png';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background: ${props => props.theme.colors.surfaceAlt};
  backdrop-filter: blur(5px);
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  color: ${props => props.theme.colors.text};
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  height: 40px;
  img {
    height: 100%;
    transition: opacity 0.3s ease;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  opacity: 0.9;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.text};
    transition: width 0.3s ease;
  }

  &:hover {
    opacity: 1;
    background: ${props => props.theme.colors.hover};

    &:after {
      width: calc(100% - 2rem);
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ThemeToggle = styled.button`
  background: ${props => props.theme.colors.hover};
  border: 1px solid ${props => props.theme.colors.border};
  cursor: pointer;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    background: ${props => props.theme.colors.hoverStrong};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ContactButton = styled(Link)`
  background: ${props => props.theme.colors.hover};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 0.1em;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    background: ${props => props.theme.colors.hoverStrong};
    transform: translateY(-1px);
  }
`;

const LoginButton = styled.a`
  background: var(--primary-red);
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 0.1em;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(255, 0, 0, 0.2);
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  height: 40px;
  display: block;
`;

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavbarContainer>
      <LeftSection>
        <LogoContainer>
          <LogoLink to="/">
            <img 
              src={theme === 'dark' ? whiteRedLogo : blackRedLogo} 
              alt="S2 Logo" 
            />
          </LogoLink>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/documentation">Dokumentation</NavLink>
          <NavLink to="/pricing">Preise</NavLink>
          <NavLink to="/about">Über uns</NavLink>
        </NavLinks>
      </LeftSection>
      <RightSection>
        <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </ThemeToggle>
        <ContactButton to="/contact">Kontakt</ContactButton>
        <LoginButton href="https://dashboard-gourmet-zxr1.vercel.app" target="_blank" rel="noopener noreferrer">
          Login
        </LoginButton>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar; 