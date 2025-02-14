import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faVolumeHigh,
  faCode,
  faBook,
  faRobot,
  faBrain, 
  faDatabase, 
  faChartLine, 
  faPiggyBank,
  faHeadset,
  faGlobe,
  faGears
} from '@fortawesome/free-solid-svg-icons';

const DocumentationSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  z-index: 2;
  min-height: 100vh;
  background-color: ${props => props.theme.theme === 'dark' ? 'var(--bg-dark)' : 'var(--bg-light)'};
  color: ${props => props.theme.theme === 'dark' ? 'var(--text-light)' : 'var(--text-dark)'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: inherit;
    z-index: -1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: inherit;
  color: inherit;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: inherit;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: 0.2em;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
`;

const Tab = styled.button<{ active?: boolean }>`
  padding: 1rem 2rem;
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  opacity: ${props => props.active ? 1 : 0.7};
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.active ? 'var(--primary-red)' : 'transparent'};
    transition: all 0.3s ease;
  }

  &:hover {
    opacity: 1;
  }

  .icon {
    margin-right: 0.5rem;
  }
`;

const ContentContainer = styled.div`
  margin-top: 2rem;
`;

const DocsContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  border-right: 1px solid ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  padding-right: 2rem;

  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
    border-bottom: 1px solid ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

const NavItem = styled.a<{ active?: boolean }>`
  display: block;
  padding: 0.5rem 1rem;
  color: inherit;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  opacity: ${props => props.active ? 1 : 0.7};
  background: ${props => props.active ? (props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)') : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    background: ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  }
`;

const Content = styled.div`
  background-color: inherit;
  color: inherit;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    color: inherit;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    color: inherit;
  }

  code {
    background: ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    color: inherit;
  }
`;

const DemoContainer = styled.div`
  background: ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#fff'};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 10px 30px ${props => props.theme.theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'};
  border: 1px solid ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  color: inherit;

  h3, h4 {
    color: inherit;
  }

  p {
    color: inherit;
  }
`;

const AudioSample = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 4px;
  background: ${props => props.theme.theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.02)'};
  margin-bottom: 1rem;
  color: inherit;
`;

const PlayButton = styled.button`
  background: ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'transparent'};
  border: 1px solid ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
  color: inherit;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const SampleInfo = styled.div`
  flex: 1;
  color: inherit;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    font-weight: 300;
    color: inherit;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
    color: inherit;
  }
`;

const ChatContainer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  padding-top: 2rem;
  color: inherit;

  h4 {
    color: inherit;
  }

  p {
    color: inherit;
  }
`;

const ChatInput = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  input {
    flex: 1;
    padding: 0.8rem;
    border: 1px solid ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 4px;
    background: ${props => props.theme.theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.02)'};
    color: inherit;

    &:focus {
      outline: none;
      border-color: var(--primary-red);
    }

    &::placeholder {
      color: ${props => props.theme.theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
    }
  }

  button {
    padding: 0.8rem 2rem;
    background: var(--primary-red);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const FeatureShowcase = styled.div`
  margin-top: 3rem;
`;

const FeatureSection = styled.div`
  margin-bottom: 6rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionIntro = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: inherit;
    font-weight: 300;
    letter-spacing: 0.1em;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    opacity: 0.9;
  }
`;

const FeatureCategory = styled.div`
  margin-bottom: 4rem;

  h4 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: inherit;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-align: center;
  }
`;

const Product = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 8px;
  padding: 3rem;
  box-shadow: 0 10px 30px ${props => props.theme.colors.shadow};
  transition: transform 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text};
  margin-bottom: 4rem;

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
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme.colors.surfaceAlt};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border};

  h4 {
    font-size: 2.5rem;
    color: var(--primary-red);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    font-weight: 300;
    letter-spacing: 0.05em;
    margin-bottom: 0;
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

const Documentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('docs');
  const [activePage, setActivePage] = useState('getting-started');

  return (
    <DocumentationSection id="documentation">
      <Container>
        <SectionTitle>Dokumentation</SectionTitle>
        
        <TabContainer>
          <Tab 
            active={activeTab === 'docs'} 
            onClick={() => setActiveTab('docs')}
          >
            <FontAwesomeIcon icon={faBook} className="icon" />
            Dokumentation
          </Tab>
          <Tab 
            active={activeTab === 'demo'} 
            onClick={() => setActiveTab('demo')}
          >
            <FontAwesomeIcon icon={faRobot} className="icon" />
            Features & Demo
          </Tab>
          <Tab 
            active={activeTab === 'api'} 
            onClick={() => setActiveTab('api')}
          >
            <FontAwesomeIcon icon={faCode} className="icon" />
            API Referenz
          </Tab>
        </TabContainer>

        <ContentContainer>
          {activeTab === 'docs' && (
            <DocsContainer>
              <Sidebar>
                <NavItem 
                  href="#getting-started" 
                  active={activePage === 'getting-started'}
                  onClick={() => setActivePage('getting-started')}
                >
                  Erste Schritte
                </NavItem>
                <NavItem 
                  href="#installation" 
                  active={activePage === 'installation'}
                  onClick={() => setActivePage('installation')}
                >
                  Installation
                </NavItem>
                <NavItem 
                  href="#configuration" 
                  active={activePage === 'configuration'}
                  onClick={() => setActivePage('configuration')}
                >
                  Konfiguration
                </NavItem>
                <NavItem 
                  href="#integration" 
                  active={activePage === 'integration'}
                  onClick={() => setActivePage('integration')}
                >
                  Integration
                </NavItem>
                <NavItem 
                  href="#customization" 
                  active={activePage === 'customization'}
                  onClick={() => setActivePage('customization')}
                >
                  Anpassung
                </NavItem>
              </Sidebar>
              <Content>
                <h3>Erste Schritte mit S2 Voice AI</h3>
                <p>
                  S2 Voice AI ist eine fortschrittliche Sprachassistenz-Lösung, die sich nahtlos in Ihre
                  bestehende Infrastruktur integrieren lässt. Mit unserer API können Sie in wenigen
                  Schritten einen intelligenten Sprachassistenten implementieren.
                </p>
                <p>
                  Beginnen Sie mit der Installation unseres SDK:
                </p>
                <code>npm install @s2-ai/voice-assistant</code>
                <p>
                  Nach der Installation können Sie den Assistenten mit wenigen Zeilen Code initialisieren:
                </p>
                <code>
                  import {'{'} S2VoiceAssistant {'}'} from '@s2-ai/voice-assistant';<br />
                  <br />
                  const assistant = new S2VoiceAssistant({'{'}<br />
                  &nbsp;&nbsp;apiKey: 'YOUR_API_KEY',<br />
                  &nbsp;&nbsp;language: 'de-DE'<br />
                  {'}'});
                </code>
              </Content>
            </DocsContainer>
          )}

          {activeTab === 'demo' && (
            <DemoContainer>
              <FeatureShowcase>
                {/* Technical Capabilities Section */}
                <FeatureSection>
                  <SectionIntro>
                    <h3>Technische Fähigkeiten</h3>
                    <p>
                      Unsere KI-Plattform basiert auf modernsten Deep Learning Modellen und 
                      fortschrittlicher Sprachverarbeitung. Entdecken Sie die technischen 
                      Möglichkeiten unserer Systeme.
                    </p>
                  </SectionIntro>

                  <FeatureCategory>
                    <h4>Sprachverarbeitung</h4>
                    <FeatureGrid>
                      <Feature>
                        <FontAwesomeIcon icon={faBrain} className="icon" />
                        <h4>Natural Language Understanding</h4>
                        <p>Kontextbasierte Sprachanalyse mit 98% Erkennungsgenauigkeit, Unterstützung für komplexe Satzstrukturen und Dialekte</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faGlobe} className="icon" />
                        <h4>Multilinguale Verarbeitung</h4>
                        <p>Echtzeit-Übersetzung und Verarbeitung in 30+ Sprachen, inklusive regionaler Dialekte und Akzente</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faHeadset} className="icon" />
                        <h4>Sentiment Analysis</h4>
                        <p>Erkennung von Emotionen und Stimmungen mit 95% Genauigkeit für angepasste Gesprächsführung</p>
                      </Feature>
                    </FeatureGrid>
                  </FeatureCategory>

                  <FeatureCategory>
                    <h4>KI & Machine Learning</h4>
                    <FeatureGrid>
                      <Feature>
                        <FontAwesomeIcon icon={faChartLine} className="icon" />
                        <h4>Adaptives Lernen</h4>
                        <p>Selbstlernende Modelle mit kontinuierlicher Verbesserung durch A/B Testing und Feedback-Schleifen</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faDatabase} className="icon" />
                        <h4>Wissensmanagement</h4>
                        <p>Dynamische Wissensdatenbank mit automatischer Aktualisierung und kontextbasierter Informationsextraktion</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faRobot} className="icon" />
                        <h4>Verhaltensmodellierung</h4>
                        <p>KI-gestützte Analyse von Kundenverhalten und Präferenzen für personalisierte Interaktionen</p>
                      </Feature>
                    </FeatureGrid>
                  </FeatureCategory>
                </FeatureSection>

                {/* Integration & APIs Section */}
                <FeatureSection>
                  <SectionIntro>
                    <h3>Integration & APIs</h3>
                    <p>
                      Flexible Schnittstellen und Integrationsoptionen ermöglichen eine nahtlose 
                      Einbindung in bestehende Systeme und Workflows.
                    </p>
                  </SectionIntro>

                  <FeatureCategory>
                    <h4>Systemintegration</h4>
                    <FeatureGrid>
                      <Feature>
                        <FontAwesomeIcon icon={faDatabase} className="icon" />
                        <h4>CRM-Konnektoren</h4>
                        <p>Vorgefertigte Integrationen für Salesforce, SAP, Microsoft Dynamics und weitere CRM-Systeme</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faGears} className="icon" />
                        <h4>Workflow-Automation</h4>
                        <p>REST APIs für Custom Workflows, Zapier-Integration und automatisierte Prozessabläufe</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faHeadset} className="icon" />
                        <h4>Omnichannel-Support</h4>
                        <p>Integration mit Telefonie, Chat, Email und Social Media Plattformen über einheitliche API</p>
                      </Feature>
                    </FeatureGrid>
                  </FeatureCategory>
                </FeatureSection>

                {/* Analytics & Reporting Section */}
                <FeatureSection>
                  <SectionIntro>
                    <h3>Analytics & Reporting</h3>
                    <p>
                      Umfassende Analyse- und Reporting-Funktionen für datengesteuerte 
                      Entscheidungen und kontinuierliche Optimierung.
                    </p>
                  </SectionIntro>

                  <FeatureCategory>
                    <h4>Echtzeit-Analytics</h4>
                    <FeatureGrid>
                      <Feature>
                        <FontAwesomeIcon icon={faChartPie} className="icon" />
                        <h4>Performance Metrics</h4>
                        <p>Echtzeit-KPIs wie Antwortzeiten, Lösungsraten, Kundenzufriedenheit und Kosteneffizienz</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faClockRotateLeft} className="icon" />
                        <h4>Predictive Analytics</h4>
                        <p>ML-basierte Vorhersagen für Anrufvolumen, Ressourcenbedarf und Kundenverhalten</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faShieldHalved} className="icon" />
                        <h4>Qualitätsmonitoring</h4>
                        <p>Automatische Qualitätsbewertung und Compliance-Überprüfung aller Interaktionen</p>
                      </Feature>
                    </FeatureGrid>
                  </FeatureCategory>

                  <FeatureCategory>
                    <h4>Business Intelligence</h4>
                    <FeatureGrid>
                      <Feature>
                        <FontAwesomeIcon icon={faChartLine} className="icon" />
                        <h4>Trend-Analyse</h4>
                        <p>Identifikation von Kundentrends, häufigen Problemen und Optimierungspotentialen</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faUserGroup} className="icon" />
                        <h4>Kundenanalyse</h4>
                        <p>Detaillierte Einblicke in Kundenverhalten, Präferenzen und Interaktionsmuster</p>
                      </Feature>
                      <Feature>
                        <FontAwesomeIcon icon={faPiggyBank} className="icon" />
                        <h4>ROI-Tracking</h4>
                        <p>Automatische Berechnung von Kosteneinsparungen und Return on Investment</p>
                      </Feature>
                    </FeatureGrid>
                  </FeatureCategory>
                </FeatureSection>

                {/* Use Cases Section */}
                <FeatureSection>
                  <SectionIntro>
                    <h3>Anwendungsfälle</h3>
                    <p>
                      Entdecken Sie konkrete Einsatzszenarien und wie unsere Technologie 
                      verschiedene Branchen transformiert.
                    </p>
                  </SectionIntro>

                  <FeatureGrid>
                    <Feature>
                      <FontAwesomeIcon icon={faHeadset} className="icon" />
                      <h4>Kundenservice</h4>
                      <p>24/7 First-Level-Support mit 90% Lösungsrate, automatische Eskalation und nahtlose Übergabe an Agenten</p>
                    </Feature>
                    <Feature>
                      <FontAwesomeIcon icon={faGears} className="icon" />
                      <h4>Prozessautomatisierung</h4>
                      <p>Automatisierung von Routineaufgaben wie Terminvereinbarungen, Statusabfragen und Dokumentenverarbeitung</p>
                    </Feature>
                    <Feature>
                      <FontAwesomeIcon icon={faDatabase} className="icon" />
                      <h4>Datenanalyse</h4>
                      <p>Automatische Erfassung und Analyse von Kundenfeedback, Markttrends und Servicequalität</p>
                    </Feature>
                  </FeatureGrid>
                </FeatureSection>

                {/* Interactive Demo Section */}
                <FeatureSection>
                  <SectionIntro>
                    <h3>Live Demo</h3>
                    <p>
                      Testen Sie unsere Technologie in Echtzeit und erleben Sie die 
                      Leistungsfähigkeit unserer KI-Systeme.
                    </p>
                  </SectionIntro>

                  <AudioSample>
                    <PlayButton>
                      <FontAwesomeIcon icon={faPlay} />
                    </PlayButton>
                    <SampleInfo>
                      <h4>Komplexe Kundenanfrage</h4>
                      <p>Demonstration der kontextbasierten Sprachverarbeitung und intelligenten Problemlösung</p>
                    </SampleInfo>
                    <FontAwesomeIcon icon={faVolumeHigh} />
                  </AudioSample>

                  <AudioSample>
                    <PlayButton>
                      <FontAwesomeIcon icon={faPlay} />
                    </PlayButton>
                    <SampleInfo>
                      <h4>Mehrsprachiger Support</h4>
                      <p>Beispiel für mehrsprachige Kommunikation und automatische Übersetzung</p>
                    </SampleInfo>
                    <FontAwesomeIcon icon={faVolumeHigh} />
                  </AudioSample>

                  <ChatContainer>
                    <h4>Interaktive Demo</h4>
                    <p>Testen Sie die KI-gestützte Sprachverarbeitung:</p>
                    
                    <ChatInput>
                      <input 
                        type="text" 
                        placeholder="Stellen Sie eine Frage oder beschreiben Sie ein Problem..."
                      />
                      <button>Testen</button>
                    </ChatInput>
                  </ChatContainer>
                </FeatureSection>
              </FeatureShowcase>
            </DemoContainer>
          )}

          {activeTab === 'api' && (
            <Content>
              <h3>API Referenz</h3>
              <p>
                Unsere REST API ermöglicht Ihnen vollständige Kontrolle über die Sprachverarbeitung
                und Integration. Hier finden Sie eine vollständige Dokumentation aller verfügbaren
                Endpunkte und Parameter.
              </p>
              {/* API documentation content */}
            </Content>
          )}
        </ContentContainer>
      </Container>
    </DocumentationSection>
  );
};

export default Documentation; 