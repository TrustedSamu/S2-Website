import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactPage = styled.main`
  position: relative;
  padding: 8rem 2rem 4rem;
  min-height: 100vh;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 2;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  color: var(--primary-red);
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px ${props => props.theme.colors.shadow};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.border};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  .icon {
    font-size: 1.5rem;
    color: var(--primary-red);
    margin-right: 1rem;
    width: 30px;
  }

  div {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: 300;
      color: ${props => props.theme.colors.text};
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      opacity: 0.9;
      color: ${props => props.theme.colors.text};
    }
  }
`;

const ContactForm = styled.form`
  background: ${props => props.theme.colors.surface};
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px ${props => props.theme.colors.shadow};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.border};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.text};
    font-weight: 300;
  }

  input, textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 8px;
    background: ${props => props.theme.colors.surfaceAlt};
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-red);
      box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.1);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: var(--primary-red);
  color: white;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 300;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <ContactPage>
      <Container>
        <PageTitle>Kontakt</PageTitle>
        <ContactSection>
          <ContactInfo>
            <InfoItem>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              <div>
                <h3>Adresse</h3>
                <p>Musterstraße 123<br />12345 Berlin<br />Deutschland</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <div>
                <h3>Telefon</h3>
                <p>+49 (0) 123 456 789</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <div>
                <h3>E-Mail</h3>
                <p>contact@s2-ai.com</p>
              </div>
            </InfoItem>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <label>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>E-Mail</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Betreff</label>
              <input
                type="text"
                value={formData.subject}
                onChange={e => setFormData({...formData, subject: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Nachricht</label>
              <textarea
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">Nachricht senden</SubmitButton>
          </ContactForm>
        </ContactSection>
      </Container>
    </ContactPage>
  );
};

export default Contact; 