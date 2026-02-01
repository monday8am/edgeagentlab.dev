import React, { useEffect, useState } from 'react';
import type { TestDefinition, TestSuite } from '../types';
import './TestViewer.css';

const TestViewer: React.FC = () => {
    const [tests, setTests] = useState<TestDefinition[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        fetch('/tests/tool_tests.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch tests');
                return res.json();
            })
            .then((data: TestSuite) => {
                setTests(data.tests);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    if (loading) return <div className="text-center p-8">Loading tests...</div>;
    if (error) return <div className="text-error text-center p-8">Error: {error}</div>;

    return (
        <div className="test-viewer">
            <div className="test-grid">
                {tests.map((test) => (
                    <div
                        key={test.id}
                        className={`test-card ${expandedId === test.id ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(test.id)}
                    >
                        <div className="test-header">
                            <div className="test-title-row">
                                <h3>{test.name}</h3>
                                <span className="test-id">{test.id}</span>
                            </div>
                            <p className="test-query">"{test.query.text}"</p>
                        </div>

                        {expandedId === test.id && (
                            <div className="test-details animate-fade-in">

                                {test.description && (
                                    <div className="detail-section">
                                        <h4>Description</h4>
                                        <ul>
                                            {test.description.map((desc, i) => <li key={i}>{desc}</li>)}
                                        </ul>
                                    </div>
                                )}

                                <div className="detail-section">
                                    <h4>System Prompt</h4>
                                    <div className="code-block">{test.system_prompt}</div>
                                </div>

                                <div className="detail-section">
                                    <h4>Tools ({test.tools.length})</h4>
                                    <div className="tools-list">
                                        {test.tools.map(t => (
                                            <span key={t.function.name} className="tool-chip">
                                                {t.function.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {test.mock_tool_responses && (
                                    <div className="detail-section">
                                        <h4>Mock Responses</h4>
                                        <pre className="code-block json">
                                            {JSON.stringify(test.mock_tool_responses, null, 2)}
                                        </pre>
                                    </div>
                                )}

                                <div className="detail-section">
                                    <h4>Validation Rules</h4>
                                    <div className="rules-list">
                                        {test.rules.map((rule, idx) => (
                                            <div key={idx} className="rule-item">
                                                <span className="rule-type">{rule.type}</span>
                                                {rule.tool_name && <span className="rule-detail">tool: {rule.tool_name}</span>}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestViewer;
