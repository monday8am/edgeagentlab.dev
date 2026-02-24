import React from 'react';
import PageFooter from '../../components/PageFooter';
import ThemeToggle from '../../components/ThemeToggle';

const HubApp: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen animate-fade-in">
      <div className="container">

        {/* Hub header */}
        <header className="hub-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1>Edge Agent Lab</h1>
            <p className="hub-tagline">Testing the boundaries of on-device AI on Android</p>
            <p className="hub-description">
              A collection of apps and experiments exploring agentic workflows with small language models on mobile devices.
            </p>
            <p className="hub-author">by <a href="https://monday8am.com" target="_blank" rel="noopener">Anton</a></p>
          </div>
          <ThemeToggle />
        </header>

        {/* Apps section */}
        <section className="page-section">
          <p className="section-title">Apps</p>
          <div className="app-grid">

            {/* Explorer card */}
            <div className="app-card">
              <h3>Explorer</h3>
              <p className="app-subtitle">Edge AI Testing Platform</p>
              <p>
                Browse, download, and test small language models for text generation and function
                calling on Android. An alternative to Google's AI Edge Gallery focused on agentic workflows.
              </p>
              <ul className="app-features">
                <li>Multi-runtime support (LiteRT-LM, MediaPipe)</li>
                <li>Koog agent integration</li>
                <li>Remote test definitions</li>
                <li>No HuggingFace login required</li>
              </ul>
              <span className="badge badge-active">Active development</span>
              <div className="app-links">
                <a href="/explorer/">Learn more →</a>
                <a href="https://github.com/monday8am/edgelab" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>

            {/* Cycling Copilot card */}
            <div className="app-card">
              <h3>Cycling Copilot</h3>
              <p className="app-subtitle">Agentic Demo — Two-Model Architecture</p>
              <p>
                A proof-of-concept using FunctionGemma (270M) as a local intent router and
                Gemma 3 1B for natural language generation. Voice-driven mid-ride assistance for cyclists.
              </p>
              <ul className="app-features">
                <li>FunctionGemma routes intent → API calls</li>
                <li>Gemma 3 1B generates human response</li>
                <li>Compound system pattern on-device</li>
              </ul>
              <span className="badge badge-in-dev">In development</span>
              <div className="app-links">
                <a href="/cycling-copilot/">Learn more →</a>
                <span className="link-muted">GitHub coming soon</span>
              </div>
            </div>

          </div>
        </section>

        {/* Research section */}
        <section className="page-section">
          <p className="section-title">Research &amp; Writing</p>
          <div className="article-list">
            <div className="article-item">
              <span className="article-date">Feb 2026</span>
              <a
                className="article-title"
                href="https://monday8am.com/blog/2026/02/08/lets-talk-about-functiongemma.html"
                target="_blank"
                rel="noopener"
              >
                Let's Talk About FunctionGemma
              </a>
              <span className="article-brief">Decision tree for when (not) to use FunctionGemma on mobile</span>
            </div>
            <div className="article-item">
              <span className="article-date">Dec 2025</span>
              <a
                className="article-title"
                href="https://monday8am.com/blog/2025/12/10/function-calling-edge-ai.html"
                target="_blank"
                rel="noopener"
              >
                Researching Tool Calling in On-Device AI
              </a>
              <span className="article-brief">Model conversion pipelines, runtime comparison, test results</span>
            </div>
            <div className="article-item">
              <span className="article-date">Oct 2025</span>
              <a
                className="article-title"
                href="https://monday8am.com/blog/2025/10/01/flat-notifications-edge-ai.html"
                target="_blank"
                rel="noopener"
              >
                From Flat Notifications to Edge AI
              </a>
              <span className="article-brief">Koog + MediaPipe integration prototype for context-aware notifications</span>
            </div>
          </div>
        </section>

        {/* Resources section */}
        <section className="page-section">
          <p className="section-title">Resources</p>
          <p className="text-sm text-muted mb-4">Test endpoint</p>
          <div className="test-endpoint">
            <code>https://edgeagentlab.dev/tests/tool_tests.json</code>
          </div>
          <div className="resource-links mt-4">
            <a href="https://github.com/monday8am/skills" target="_blank" rel="noopener" className="text-sm">
              functiongemma-trainer — agent skill for fine-tuning FunctionGemma (270M) for on-device function calling
            </a>
            <a href="https://monday8am.com/assets/docs/decision_tree_v2.html" target="_blank" rel="noopener" className="text-sm">
              FunctionGemma decision tree — is your use case a good fit?
            </a>
            <a href="https://gorilla.cs.berkeley.edu/leaderboard.html" target="_blank" rel="noopener" className="text-sm">
              Berkeley BFCL Leaderboard
            </a>
            <a href="https://ai.google.dev/edge/mediapipe/solutions/genai/llm_inference" target="_blank" rel="noopener" className="text-sm">
              Google AI Edge Torch
            </a>
            <a href="https://developer.android.com/ml/edge-ai/litertrm" target="_blank" rel="noopener" className="text-sm">
              LiteRT-LM docs
            </a>
            <a href="https://docs.koog.io" target="_blank" rel="noopener" className="text-sm">
              Koog docs
            </a>
          </div>
        </section>

        <PageFooter />
      </div>
    </div>
  );
};

export default HubApp;
