import TestViewer from './components/TestViewer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-primary">
      <div className="container">
        <header className="mb-12 pt-8">
          <h1 className="mb-2">Edge Agent Lab</h1>
          <p className="text-xl text-secondary font-light">
            Testing platform for on-device AI agents
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <a href="https://github.com/monday8am/koogagent" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="/tests/tool_tests.json" target="_blank">Raw JSON</a>
          </div>
        </header>

        <main>
          <section className="mb-16">
            <h2 className="mb-6 text-2xl">What is this?</h2>
            <p className="text-muted mb-4 max-w-3xl">
              Edge Agent Lab is an Android testing platform for evaluating small language model (SLM)
              agents directly on mobile devices. It provides tools to test function calling capabilities,
              measure inference performance, and understand where edge AI succeeds and fails.
            </p>
            <p className="text-muted max-w-3xl">
              Built with <a href="https://github.com/JetBrains/koog" target="_blank" rel="noopener noreferrer">JetBrains Koog</a>
              {' '}for agent orchestration and Google's <a href="https://ai.google.dev/edge/litert/inference/lm" target="_blank" rel="noopener noreferrer">LiteRT-LM</a>
              {' '}for on-device inference.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="mb-6 text-2xl">Test Endpoint</h2>
            <p className="text-muted mb-4">The app fetches test definitions from this URL:</p>
            <div className="test-endpoint">
              <code>GET https://edgeagentlab.dev/tests/tool_tests.json</code>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6 text-2xl">Resources</h2>
            <div className="links-grid">
              <a href="https://github.com/monday8am/koogagent" className="link-card" target="_blank" rel="noopener noreferrer">
                <h3>GitHub Repository</h3>
                <p>Source code and documentation</p>
              </a>
              <a href="https://monday8am.com/blog/2025/10/01/flat-notifications-edge-ai.html" className="link-card" target="_blank" rel="noopener noreferrer">
                <h3>Article: From Flat Notifications to Edge AI</h3>
                <p>The original prototype</p>
              </a>
              <a href="https://monday8am.com/blog/2025/12/10/function-calling-edge-ai.html" className="link-card" target="_blank" rel="noopener noreferrer">
                <h3>Article: Tool Calling Research</h3>
                <p>Model conversion and testing</p>
              </a>
              <a href="/tests/tool_tests.json" className="link-card" target="_blank" rel="noopener noreferrer">
                <h3>Test Definitions</h3>
                <p>View raw JSON test file</p>
              </a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6 text-2xl">Roadmap <span className="badge badge-wip">WIP</span></h2>
            <div className="text-muted space-y-2">
              <p><strong>Current:</strong> Static test JSON hosted here, fetched by the app.</p>
              <p><strong>Next:</strong> Web-based test editor for creating custom evaluation scenarios.</p>
              <p><strong>Later:</strong> Performance tracking and visualization across devices.</p>
            </div>
          </section>

          <section id="test-viewer" className="mb-12 pt-12">
            <h2 className="mb-6 text-2xl">Test Inspector</h2>
            <p className="text-muted mb-8 max-w-2xl">
              Below are the active test definitions served to the Android application.
            </p>
            <TestViewer />
          </section>
        </main>

        <footer className="mt-20 py-8 text-center text-muted text-sm">
          <p>
            Built by <a href="https://monday8am.com" target="_blank" rel="noreferrer">Angel Anton</a> ·
            <a href="https://github.com/monday8am/koogagent" target="_blank" rel="noreferrer"> View on GitHub</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
