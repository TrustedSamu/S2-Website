import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const AboutPage = styled.main`
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

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
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
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ImpressumSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${props => props.theme.colors.surface};
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px ${props => props.theme.colors.shadow};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.border};
`;

const ImpressumTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: var(--primary-red);
  text-align: center;
`;

const ImpressumContent = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 300;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
    .icon {
      width: 20px;
      margin-right: 1rem;
      color: var(--primary-red);
    }
  }
`;

const About: React.FC = () => {
  return (
    <AboutPage>
      <Container>
        <PageTitle>Über uns</PageTitle>
        <Content>
          <p>
            S2 ist ein innovatives Technologieunternehmen mit Sitz in Mannheim, das sich auf die Entwicklung
            fortschrittlicher KI-gestützter Sprachassistenzlösungen spezialisiert hat.
          </p>
          <p>
            Unsere Mission ist es, Unternehmen durch intelligente Automatisierung und
            natürliche Sprachverarbeitung dabei zu unterstützen, ihren Kundenservice
            auf ein neues Level zu heben.
          </p>
          <p>
            Gegründet von Samuel Sonnenwald und Philipp Strauss, vereint S2 technische Innovation
            mit praktischer Anwendbarkeit. Unser erfahrenes Team arbeitet kontinuierlich daran,
            unsere KI-Lösungen weiterzuentwickeln und perfekt auf die Bedürfnisse unserer Kunden
            abzustimmen.
          </p>
        </Content>

        <ImpressumSection>
          <ImpressumTitle>Impressum</ImpressumTitle>
          <ImpressumContent>
            <h3>Angaben gemäß § 5 TMG</h3>
            <p>
              S2 GmbH<br />
              Samuel Sonnenwald & Philipp Strauss
            </p>

            <h3>Kontakt</h3>
            <div className="contact-item">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              <p>Musterstraße 123<br />68159 Mannheim<br />Deutschland</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <p>+49 (0) 123 456 789</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <p>contact@s2-ai.com</p>
            </div>

            <h3>Vertretungsberechtigte Geschäftsführer</h3>
            <p>Samuel Sonnenwald<br />Philipp Strauss</p>

            <h3>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Mannheim<br />
              Registernummer: HRB XXXXX
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE XXX XXX XXX
            </p>

            <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>
              Samuel Sonnenwald<br />
              Philipp Strauss<br />
              Musterstraße 123<br />
              68159 Mannheim
            </p>
          </ImpressumContent>
        </ImpressumSection>
      </Container>
    </AboutPage>
  );
};

export default About; 