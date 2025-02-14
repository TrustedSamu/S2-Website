import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.theme === 'dark' ? 'var(--bg-dark)' : 'var(--bg-light)'};
  color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
  color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};
  font-weight: 300;
  letter-spacing: 0.1em;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: ${props => props.theme.theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : '#fff'};
  border-radius: 4px;
  padding: 3rem;
  box-shadow: 0 10px 30px ${props => props.theme.theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'};
  color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};
  border: 1px solid ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: inherit;
  
  .icon {
    font-size: 1.5rem;
    color: inherit;
    margin-right: 1rem;
    width: 30px;
    opacity: 0.9;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 300;
    color: inherit;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.theme === 'dark' ? 'var(--accent-dark)' : 'var(--accent-light)'};
  border-radius: 8px;
  box-shadow: 0 4px 6px ${props => props.theme.theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};
    font-weight: 300;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 4px;
    background: ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
    color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};

    &:focus {
      outline: none;
      border-color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};
  border: 1px solid ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};
  padding: 1rem 3rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 300;
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};
    color: ${props => props.theme.theme === 'dark' ? 'var(--bg-dark)' : 'var(--bg-light)'};
  }
`;

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactSection>
      <Container>
        <SectionTitle>Kontakt</SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <InfoItem>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <p>info@s2-ai.com</p>
            </InfoItem>
            <InfoItem>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <p>+49 (0) 123 456 789</p>
            </InfoItem>
            <InfoItem>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              <p>Musterstraße 123<br />12345 Berlin<br />Deutschland</p>
            </InfoItem>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Nachricht</label>
              <textarea id="message" required></textarea>
            </FormGroup>
            <SubmitButton type="submit">Nachricht senden</SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 