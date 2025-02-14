import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faDatabase,
  faChartLine,
  faPiggyBank,
  faGlobe,
  faRobot,
  faCode,
  faLock,
  faCloud
} from '@fortawesome/free-solid-svg-icons';

const DetailedFeaturesPage = styled.main`
  position: relative;
  padding: 8rem 2rem 4rem;
  min-height: 100vh;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    z-index: -1;
  }
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
  max-width: 1000px;
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

const Section = styled.section`
  margin-bottom: 8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProductSection = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 16px;
  padding: 4rem;
  margin-bottom: 6rem;
  box-shadow: 0 10px 30px ${props => props.theme.colors.shadow};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.border};
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: var(--primary-red);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const Feature = styled.div`
  background: ${props => props.theme.colors.surfaceAlt};
  padding: 3rem;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-5px);
    background: ${props => props.theme.colors.hover};
    box-shadow: 0 10px 20px ${props => props.theme.colors.shadow};
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
    color: var(--primary-red);
  }

  h4 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    width: 100%;
    text-align: center;
    color: ${props => props.theme.colors.text};
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: left;
    margin: 1.5rem 0;
    width: 100%;

    li {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      line-height: 1.6;
      opacity: 0.9;
      padding-left: 2rem;
      position: relative;
      color: ${props => props.theme.colors.text};

      &:before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--primary-red);
        font-size: 1.4rem;
        line-height: 1.4;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const TechSpecs = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  border: 1px solid ${props => props.theme.colors.border};
  width: 100%;
  backdrop-filter: blur(5px);

  h5 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    color: var(--primary-red);
    text-align: center;
  }

  ul {
    margin: 0;
    
    li {
      font-size: 1.1rem;
      color: ${props => props.theme.colors.text};
      
      &:before {
        font-size: 1.2rem;
      }
    }
  }
`;

const DetailedFeatures: React.FC = () => {
  return (
    <DetailedFeaturesPage>
      <Container>
        <PageTitle>Technische Details & Spezifikationen</PageTitle>
        <Introduction>
          <p>
            Entdecken Sie die technischen Details und fortschrittlichen Funktionen unserer
            KI-gestützten Sprachassistenten. Hier finden Sie umfassende Informationen zu
            allen Features, Integrationen und technischen Spezifikationen.
          </p>
        </Introduction>

        <Section>
          <ProductSection>
            <SectionTitle>Gourmet KI-Sprachassistent</SectionTitle>
            <FeatureGrid>
              <Feature>
                <FontAwesomeIcon icon={faBrain} className="icon" />
                <h4>NLP & KI-Engine</h4>
                <ul>
                  <li>State-of-the-Art Transformer-Modelle</li>
                  <li>98% Erkennungsgenauigkeit</li>
                  <li>Latenzzeit unter 100ms</li>
                  <li>Kontextverstehen bis 2000 Tokens</li>
                </ul>
                <TechSpecs>
                  <h5>Technische Details</h5>
                  <ul>
                    <li>BERT & GPT-basierte Modelle</li>
                    <li>Neuronale Netze mit 175B Parametern</li>
                    <li>Kontinuierliches Online-Learning</li>
                  </ul>
                </TechSpecs>
              </Feature>

              <Feature>
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                <h4>Sprachverarbeitung</h4>
                <ul>
                  <li>30+ unterstützte Sprachen</li>
                  <li>Dialekterkennung & Adaption</li>
                  <li>Echtzeit-Übersetzung</li>
                  <li>Sentiment-Analyse</li>
                </ul>
                <TechSpecs>
                  <h5>Unterstützte Sprachen</h5>
                  <ul>
                    <li>Alle europäischen Hauptsprachen</li>
                    <li>Asiatische Sprachen (CN, JP, KR)</li>
                    <li>50+ regionale Dialekte</li>
                  </ul>
                </TechSpecs>
              </Feature>

              <Feature>
                <FontAwesomeIcon icon={faDatabase} className="icon" />
                <h4>Datenverwaltung</h4>
                <ul>
                  <li>Enterprise-Grade Datenbanken</li>
                  <li>Echtzeitanalyse & Skalierung</li>
                  <li>DSGVO-konforme Speicherung</li>
                  <li>End-to-End Verschlüsselung</li>
                </ul>
                <TechSpecs>
                  <h5>Systemanforderungen</h5>
                  <ul>
                    <li>Hochverfügbare Cloud-Infrastruktur</li>
                    <li>Automatische Backups</li>
                    <li>Geo-Redundanz</li>
                  </ul>
                </TechSpecs>
              </Feature>
            </FeatureGrid>
          </ProductSection>

          <ProductSection>
            <SectionTitle>Ultravox Kostenoptimierung</SectionTitle>
            <FeatureGrid>
              <Feature>
                <FontAwesomeIcon icon={faChartLine} className="icon" />
                <h4>Analytics & Vorhersage</h4>
                <ul>
                  <li>KI-gestützte Prognosemodelle</li>
                  <li>Ressourcenoptimierung</li>
                  <li>Kapazitätsplanung</li>
                  <li>Trendanalysen</li>
                </ul>
                <TechSpecs>
                  <h5>Analytics-Features</h5>
                  <ul>
                    <li>Machine Learning Algorithmen</li>
                    <li>95% Prognosegenauigkeit</li>
                    <li>Real-time Dashboards</li>
                  </ul>
                </TechSpecs>
              </Feature>

              <Feature>
                <FontAwesomeIcon icon={faRobot} className="icon" />
                <h4>Prozessautomatisierung</h4>
                <ul>
                  <li>Intelligente Workflows</li>
                  <li>Selbstlernende Systeme</li>
                  <li>Automatische Eskalation</li>
                  <li>24/7 Verfügbarkeit</li>
                </ul>
                <TechSpecs>
                  <h5>Automatisierungsgrad</h5>
                  <ul>
                    <li>200+ vordefinierte Prozesse</li>
                    <li>Anpassbare Workflows</li>
                    <li>Multi-Step Automatisierung</li>
                  </ul>
                </TechSpecs>
              </Feature>

              <Feature>
                <FontAwesomeIcon icon={faPiggyBank} className="icon" />
                <h4>Kostenoptimierung</h4>
                <ul>
                  <li>70% Kostenreduktion</li>
                  <li>ROI-Tracking in Echtzeit</li>
                  <li>Automatische Skalierung</li>
                  <li>Bedarfsbasierte Abrechnung</li>
                </ul>
                <TechSpecs>
                  <h5>Einsparungspotenzial</h5>
                  <ul>
                    <li>-70% Personalkosten</li>
                    <li>-45% Betriebskosten</li>
                    <li>300% ROI im ersten Jahr</li>
                  </ul>
                </TechSpecs>
              </Feature>
            </FeatureGrid>
          </ProductSection>
        </Section>

        <Section>
          <SectionTitle>Enterprise Integration</SectionTitle>
          <FeatureGrid>
            <Feature>
              <FontAwesomeIcon icon={faCode} className="icon" />
              <h4>API & Entwicklung</h4>
              <ul>
                <li>REST & GraphQL APIs</li>
                <li>Webhook-Integration</li>
                <li>SDK für alle Plattformen</li>
                <li>Umfassende Dokumentation</li>
              </ul>
              <TechSpecs>
                <h5>API-Spezifikationen</h5>
                <ul>
                  <li>OpenAPI 3.0 Standard</li>
                  <li>GraphQL Schema v4</li>
                  <li>WebSocket Support</li>
                </ul>
              </TechSpecs>
            </Feature>

            <Feature>
              <FontAwesomeIcon icon={faCloud} className="icon" />
              <h4>Cloud & Infrastruktur</h4>
              <ul>
                <li>Multi-Cloud Support</li>
                <li>Kubernetes-native</li>
                <li>Auto-Skalierung</li>
                <li>99.99% Verfügbarkeit</li>
              </ul>
              <TechSpecs>
                <h5>Cloud-Provider</h5>
                <ul>
                  <li>AWS, Azure, Google Cloud</li>
                  <li>Private Cloud Option</li>
                  <li>Hybrid-Deployment</li>
                </ul>
              </TechSpecs>
            </Feature>

            <Feature>
              <FontAwesomeIcon icon={faLock} className="icon" />
              <h4>Sicherheit & Compliance</h4>
              <ul>
                <li>End-to-End Verschlüsselung</li>
                <li>DSGVO-Konformität</li>
                <li>ISO 27001 zertifiziert</li>
                <li>Audit-Logging</li>
              </ul>
              <TechSpecs>
                <h5>Sicherheitsfeatures</h5>
                <ul>
                  <li>TLS 1.3, AES-256</li>
                  <li>2FA/MFA Support</li>
                  <li>SOC 2 Type II</li>
                </ul>
              </TechSpecs>
            </Feature>
          </FeatureGrid>
        </Section>
      </Container>
    </DetailedFeaturesPage>
  );
};

export default DetailedFeatures;
