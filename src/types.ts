export interface TestDefinition {
    id: string;
    name: string;
    description?: string[];
    domain?: string;
    context?: Record<string, unknown>;
    query: {
        text: string;
    };
    system_prompt: string;
    tools: ToolDefinition[];
    mock_tool_responses?: Record<string, string>;
    rules: RuleDefinition[];
}

export interface ToolDefinition {
    type: string;
    function: {
        name: string;
        description: string;
        parameters: {
            type: string;
            properties: Record<string, unknown>;
            required: string[];
        };
    };
}

export interface RuleDefinition {
    type: string;
    tool_name?: string;
    tool_names?: string[];
    min?: number;
    max?: number;
    args?: Record<string, unknown>;
    terms?: string[];
}

export interface TestSuite {
    tests: TestDefinition[];
}
