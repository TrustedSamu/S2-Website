import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faUsers,
  faHeadset,
  faRobot,
  faChartLine,
  faShieldHalved,
  faGlobe,
  faServer,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

const PricingPage = styled.main`
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

const Introduction = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 6rem;
  background: ${props => props.theme.colors.surface};
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px ${props => props.theme.colors.shadow};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.border};
  
  p {
    font-size: 1.4rem;
    line-height: 1.8;
    opacity: 0.9;
    margin: 0;
    color: ${props => props.theme.colors.text};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.border};
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    color: var(--primary-red);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.9;
    color: ${props => props.theme.colors.text};
  }
`;

const QuoteSection = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 16px;
  padding: 4rem;
  margin-top: 4rem;
  box-shadow: 0 10px 30px ${props => props.theme.colors.shadow};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.border};
`;

const QuoteForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
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

  input, select, textarea {
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
  grid-column: 1 / -1;
  width: fit-content;
  justify-self: center;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.colors.text};

  .icon {
    font-size: 1.5rem;
    color: var(--primary-red);
  }

  p {
    font-size: 1.1rem;
    font-weight: 300;
  }
`;

const Pricing: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    size: '',
    requirements: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <PricingPage>
      <Container>
        <PageTitle>Maßgeschneiderte Lösungen</PageTitle>
        <Introduction>
          <p>
            Jedes Unternehmen ist einzigartig. Deshalb bieten wir individuelle Preismodelle,
            die perfekt auf Ihre spezifischen Anforderungen und Ziele zugeschnitten sind.
          </p>
        </Introduction>

        <FeaturesGrid>
          <FeatureCard>
            <FontAwesomeIcon icon={faBuilding} className="icon" />
            <h3>Unternehmensgröße</h3>
            <p>Flexible Skalierung für Unternehmen jeder Größe, von Startups bis zu Großkonzernen.</p>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <h3>Nutzerzahl</h3>
            <p>Bedarfsgerechte Lizenzmodelle basierend auf Ihrer aktiven Nutzerbasis.</p>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faHeadset} className="icon" />
            <h3>Support-Level</h3>
            <p>Wählen Sie zwischen verschiedenen Support-Levels für optimale Betreuung.</p>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faRobot} className="icon" />
            <h3>KI-Funktionen</h3>
            <p>Modulare Erweiterungen für spezifische KI-Anforderungen und Use-Cases.</p>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <h3>Analysen & Reports</h3>
            <p>Maßgeschneiderte Analytics-Pakete für datengetriebene Entscheidungen.</p>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faServer} className="icon" />
            <h3>Infrastruktur</h3>
            <p>Flexible Hosting-Optionen: Cloud, On-Premise oder Hybrid-Lösungen.</p>
          </FeatureCard>
        </FeaturesGrid>

        <QuoteSection>
          <PageTitle>Angebot anfordern</PageTitle>
          <QuoteForm onSubmit={handleSubmit}>
            <FormGroup>
              <label>Unternehmensname</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={e => setFormData({...formData, companyName: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Branche</label>
              <input
                type="text"
                value={formData.industry}
                onChange={e => setFormData({...formData, industry: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Unternehmensgröße</label>
              <select
                value={formData.size}
                onChange={e => setFormData({...formData, size: e.target.value})}
                required
              >
                <option value="">Bitte wählen</option>
                <option value="1-10">1-10 Mitarbeiter</option>
                <option value="11-50">11-50 Mitarbeiter</option>
                <option value="51-200">51-200 Mitarbeiter</option>
                <option value="201-1000">201-1000 Mitarbeiter</option>
                <option value="1000+">1000+ Mitarbeiter</option>
              </select>
            </FormGroup>
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
              <label>Telefon</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </FormGroup>
            <FormGroup style={{ gridColumn: '1 / -1' }}>
              <label>Anforderungen & Wünsche</label>
              <textarea
                value={formData.requirements}
                onChange={e => setFormData({...formData, requirements: e.target.value})}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">Angebot anfordern</SubmitButton>
          </QuoteForm>

          <ContactInfo>
            <ContactItem>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <p>contact@s2-ai.com</p>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <p>+49 (0) 123 456 789</p>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faGlobe} className="icon" />
              <p>www.s2-ai.com</p>
            </ContactItem>
          </ContactInfo>
        </QuoteSection>
      </Container>
    </PricingPage>
  );
};

export default Pricing; 