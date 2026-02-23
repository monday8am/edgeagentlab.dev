import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import TestViewer from '../../components/TestViewer';

const KoogAgentApp: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen animate-fade-in">
      <div className="container">

        <PageHeader
          backLink={{ href: '/', label: '← Edge Agent Lab' }}
          title="KoogAgent"
          subtitle="Edge AI Testing Platform for Android"
        />

        {/* Description */}
        <section className="page-section">
          <div className="prose">
            <p>
              KoogAgent is an Android app for browsing, downloading, and testing small language models
              directly on mobile devices. It integrates JetBrains Koog for agent orchestration with
              Google's inference libraries (LiteRT-LM and MediaPipe), providing a platform to evaluate
              how well models handle text generation and function calling in resource-constrained environments.
            </p>
            <p>
              Think of it as an alternative to Google's AI Edge Gallery, focused specifically on text
              generation and agentic workflows. It adds what AI Edge Gallery doesn't: agent framework
              integration, tool calling support via both runtimes, remote test definitions, and no
              HuggingFace sign-up requirement.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="page-section">
          <p className="section-title">Architecture</p>
          <div className="prose">
            <ul>
              <li>Four-module structure with 75.1% code sharing for KMP compatibility</li>
              <li>Bridge pattern: Koog AIAgent → LocalInferenceLLMClient → LiteRT-LM or MediaPipe native library</li>
              <li>JSON-defined test cases with three-layer validation</li>
              <li>Remote test loading from edgeagentlab.dev</li>
            </ul>
          </div>
        </section>

        {/* Models table */}
        <section className="page-section">
          <p className="section-title">Supported Models</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Size</th>
                <th>Runtime</th>
                <th>Tool Calling</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gemma 3 1B</td>
                <td>~1 GB</td>
                <td>LiteRT-LM (GPU)</td>
                <td>No (text gen only)</td>
                <td>✅ Working</td>
              </tr>
              <tr>
                <td>FunctionGemma 270M</td>
                <td>~288 MB</td>
                <td>LiteRT-LM</td>
                <td>Yes (fine-tuned)</td>
                <td>🔧 In progress</td>
              </tr>
              <tr>
                <td>Qwen3-0.6B</td>
                <td>~0.6 GB</td>
                <td>LiteRT-LM (CPU)</td>
                <td>Trained but crashes</td>
                <td>❌ Runtime issues</td>
              </tr>
              <tr>
                <td>Hammer2.1-0.5B</td>
                <td>~0.5 GB</td>
                <td>MediaPipe / LiteRT-LM</td>
                <td>Trained but broken</td>
                <td>❌ Runtime issues</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Screenshots */}
        <section className="page-section">
          <p className="section-title">Screenshots</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <div className="screenshot-placeholder">Screenshot: Model Selection</div>
            <div className="screenshot-placeholder">Screenshot: Inference Output</div>
            <div className="screenshot-placeholder">Screenshot: Test Runner</div>
          </div>
        </section>

        {/* Test definitions */}
        <section className="page-section">
          <p className="section-title">Test Definitions</p>
          <TestViewer />
        </section>

        {/* Links */}
        <section className="page-section">
          <p className="section-title">Links</p>
          <div className="resource-links">
            <a href="https://github.com/monday8am/koogagent" target="_blank" rel="noopener">
              GitHub — monday8am/koogagent
            </a>
            <span className="text-sm text-muted">Play Store — coming soon</span>
          </div>
        </section>

        {/* Related articles */}
        <section className="page-section">
          <p className="section-title">Related Articles</p>
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
            </div>
          </div>
        </section>

        <PageFooter />
      </div>
    </div>
  );
};

export default KoogAgentApp;
