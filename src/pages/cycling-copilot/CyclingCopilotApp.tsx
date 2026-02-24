import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

const CyclingCopilotApp: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen animate-fade-in">
      <div className="container">

        <PageHeader
          backLink={{ href: '/', label: '← Edge Agent Lab' }}
          title="Cycling Copilot"
          subtitle="Two-Model Agentic Demo"
        />

        {/* Description */}
        <section className="page-section">
          <div className="prose">
            <p>
              A proof-of-concept demonstrating how two on-device models can work together for an
              agentic experience. A cyclist mid-ride says "I'm tired, find me a flatter way to the
              campsite" and the system interprets intent, calls the right APIs, and responds naturally.
            </p>
            <p>
              FunctionGemma (270M) acts as a local intent router — classifying what the user wants
              (re-route, POI query, status check, trip logging) and extracting key constraints.
              Gemma 3 1B handles the natural language generation, producing human-readable responses
              from structured API results.
            </p>
            <p>
              This demo explores the "compound system" pattern Google describes for FunctionGemma:
              a lightweight edge model handling routing while bigger models handle the rest.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="page-section">
          <p className="section-title">Architecture</p>
          <pre className="arch-flow">{`Voice Input
    ↓
FunctionGemma 270M  (intent classification + parameter extraction)
    ↓
API Router (Koog)
    ↓
┌─────────────┬──────────────┬───────────────┐
Routing API   POI Database   Weather API
└─────────────┴──────────────┴───────────────┘
    ↓
Gemma 3 1B  (natural language response generation)
    ↓
User`}</pre>
        </section>

        {/* Why this use case */}
        <section className="page-section">
          <p className="section-title">Why this use case</p>
          <div className="prose">
            <ul>
              <li>Language input is genuinely ambiguous ("flatter" is subjective, "tired" implies preference changes)</li>
              <li>Multiple filter screens can't express combined constraints easily</li>
              <li>Failure is acceptable — a wrong route suggestion is not a safety risk</li>
              <li>Demonstrates the router pattern that FunctionGemma was designed for</li>
            </ul>
          </div>
        </section>

        {/* Honest limitations */}
        <section className="page-section">
          <p className="section-title">Honest Limitations</p>
          <div className="prose">
            <ul>
              <li>Offline routing is not feasible — routing algorithms are too complex for local computation</li>
              <li>Requires connectivity for API calls, which reduces the "edge AI" value proposition</li>
              <li>FunctionGemma needs fine-tuning for this specific domain — zero-shot won't work</li>
              <li>The demo is about proving the architecture, not building a production app</li>
            </ul>
          </div>
        </section>

        {/* Status */}
        <section className="page-section">
          <p className="section-title">Status</p>
          <p style={{ marginBottom: '0.75rem' }}>
            <span className="badge badge-in-dev">In development</span>
          </p>
          <p className="text-sm text-muted">
            Architecture designed, implementation pending.
          </p>
        </section>

        {/* Documentation */}
        <section className="page-section">
          <p className="section-title">Documentation</p>
          <div className="prose">
            <ul>
              <li>
                <a href="https://github.com/monday8am/edgelab/blob/main/docs/cyclingcopilot/roadmap.md" target="_blank" rel="noopener">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="https://github.com/monday8am/edgelab/blob/main/docs/cyclingcopilot/ui-architecture.md" target="_blank" rel="noopener">
                  UI Architecture
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Links */}
        <section className="page-section">
          <p className="section-title">Links</p>
          <div className="resource-links">
            <span className="text-sm text-muted">GitHub — <a href="#TODO_CYCLING_GITHUB_URL">coming soon</a></span>
            <a
              href="https://monday8am.com/blog/2026/02/08/lets-talk-about-functiongemma.html"
              target="_blank"
              rel="noopener"
              className="text-sm"
            >
              Let's Talk About FunctionGemma — monday8am.com
            </a>
          </div>
        </section>

        <PageFooter />
      </div>
    </div>
  );
};

export default CyclingCopilotApp;
