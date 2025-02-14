import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faDatabase, 
  faChartLine, 
  faPiggyBank,
  faHeadset,
  faShieldHalved
} from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  z-index: 2;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.background};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: inherit;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: 0.2em;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
`;

const Product = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 8px;
  padding: 3rem;
  box-shadow: 0 10px 30px ${props => props.theme.colors.shadow};
  transition: transform 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text};

  h3 {
    font-size: 2rem;
    color: inherit;
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.1em;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 300;
    opacity: 0.9;
    color: inherit;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Feature = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme.colors.surfaceAlt};
  border-radius: 8px;
  transition: transform 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text};

  .icon {
    font-size: 2rem;
    color: inherit;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    color: inherit;
    font-weight: 300;
    letter-spacing: 0.1em;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    text-align: center;
    font-weight: 300;
    opacity: 0.8;
    color: inherit;
  }

  &:hover {
    transform: translateY(-5px);
    background: ${props => props.theme.colors.hover};
  }
`;

const Features: React.FC = () => {
  return (
    <FeaturesSection id="features">
      <Container>
        <SectionTitle>Unsere Lösungen</SectionTitle>
        <ProductGrid>
          <Product>
            <h3>Gourmet KI-Sprachassistent</h3>
            <p>
              Gourmet ist mehr als nur ein Chatbot - es ist Ihr intelligenter Kundenservice-Partner.
              Mit fortschrittlicher NLP-Technologie und nahtloser Datenbankintegration bietet Gourmet
              ein Serviceerlebnis, das menschliche Interaktion perfekt nachbildet.
            </p>
            <FeatureGrid>
              <Feature>
                <FontAwesomeIcon icon={faBrain} className="icon" />
                <h4>KI-gestützte NLP</h4>
                <p>Versteht und verarbeitet natürliche Sprache mit höchster Präzision</p>
              </Feature>
              <Feature>
                <FontAwesomeIcon icon={faDatabase} className="icon" />
                <h4>Datenintegration</h4>
                <p>Nahtlose Verbindung mit Ihren bestehenden Systemen und Datenbanken</p>
              </Feature>
              <Feature>
                <FontAwesomeIcon icon={faChartLine} className="icon" />
                <h4>Lernfähig</h4>
                <p>Kontinuierliche Verbesserung durch maschinelles Lernen</p>
              </Feature>
            </FeatureGrid>
          </Product>

          <Product>
            <h3>Ultravox Kostenoptimierung</h3>
            <p>
              Ultravox revolutioniert die Wirtschaftlichkeit Ihres Kundenservice durch intelligente
              Automatisierung. Erfahren Sie mehr über unsere umfassenden Features und Vorteile in
              der Dokumentation.
            </p>
            <FeatureGrid>
              <Feature>
                <FontAwesomeIcon icon={faPiggyBank} className="icon" />
                <h4>Kosteneffizienz</h4>
                <p>Signifikante Einsparungen durch intelligente Automatisierung</p>
              </Feature>
              <Feature>
                <FontAwesomeIcon icon={faHeadset} className="icon" />
                <h4>24/7 Verfügbarkeit</h4>
                <p>Ununterbrochener Service ohne zusätzliche Personalkosten</p>
              </Feature>
              <Feature>
                <FontAwesomeIcon icon={faShieldHalved} className="icon" />
                <h4>Qualitätssicherung</h4>
                <p>Konsistente Servicequalität rund um die Uhr</p>
              </Feature>
            </FeatureGrid>
          </Product>
        </ProductGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features; 