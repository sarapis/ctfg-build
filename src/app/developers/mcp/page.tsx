// Stable public host of the directory API + MCP, fronted by a Cloudflare edge that
// routes /mcp and /api/* to the origin box. This URL is cutover-stable — it stays the
// same as the origin moves (staging → directory → apex), so it's safe to publicize.
const API_BASE = "https://civictech.guide";

const code = "text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink";

const TOOLS = [
  { name: "search_projects", desc: "Full-text + faceted search. Params: query, category, status (defaults to active-only; pass \"all\" for every status), limit (1–50)." },
  { name: "get_project", desc: "Full detail for one project by slug (as returned by search_projects)." },
  { name: "list_categories", desc: "All category names + how many projects each contains — for discovering filter values." },
];

const DESKTOP_CONFIG = `"mcpServers": {
  "civictech-guide": {
    "command": "npx",
    "args": ["-y", "mcp-remote", "${API_BASE}/mcp"]
  }
}`;

export default function McpIntegrationPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-10 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          <h2 className="font-display text-[34px] font-medium tracking-[-0.01em] text-ink mb-6">Model Context Protocol (MCP) Integration</h2>

          <div className="space-y-6 text-[15px] leading-relaxed text-ink">
            <p>
              The Civic Tech Field Guide offers a public, high-performance API for developers and researchers to plug our dataset of ~12,000 civic tech projects directly into AI agents and analytics pipelines using the <strong>Model Context Protocol (MCP)</strong>.
            </p>
            <p>
              Connect the hosted MCP server to Claude, Cursor, or any MCP client and your assistant can query, read, and traverse the entire curated database in real time — powering Retrieval-Augmented Generation (RAG), data analysis, and grounded, hallucination-free answers.
            </p>

            <h3 className="font-display text-2xl font-medium text-ink mt-12 mb-4">Hosted MCP server</h3>
            <p>
              A ready-to-use, read-only MCP server is live over <strong>Streamable HTTP</strong> — <strong>no API key required</strong>:
            </p>
            <div className="bg-bg-alt p-4 rounded-xl border border-border-soft font-mono text-sm">
              POST <code className={code}>{API_BASE}/mcp</code>
            </div>
            <p>It exposes these tools:</p>
            <ul className="list-disc pl-6 space-y-2">
              {TOOLS.map((t) => (
                <li key={t.name}><code className={code}>{t.name}</code> — {t.desc}</li>
              ))}
            </ul>

            <h4 className="font-ui font-bold text-lg text-ink mt-8 mb-2">Connect from Claude Code</h4>
            <div className="bg-bg-alt p-4 rounded-xl border border-border-soft font-mono text-sm break-all">
              claude mcp add --transport http civictech-guide {API_BASE}/mcp
            </div>

            <h4 className="font-ui font-bold text-lg text-ink mt-8 mb-2">Connect from Claude Desktop, Cursor, or any config-file client</h4>
            <p>
              Add a custom/remote connector pointing at the endpoint above, or bridge a stdio client to it with <code className={code}>mcp-remote</code>:
            </p>
            <div className="bg-bg-alt p-4 rounded-xl border border-border-soft font-mono text-sm whitespace-pre overflow-x-auto">{DESKTOP_CONFIG}</div>
            <p className="text-sm text-ink-soft">
              A native one-line <code className={code}>@civictechguide/mcp</code> package is coming soon; until then <code className={code}>mcp-remote</code> gives you the same one-config-block setup.
            </p>

            <h3 className="font-display text-2xl font-medium text-ink mt-12 mb-4">Prefer raw data? Use the REST API</h3>
            <p>
              Rather than scraping, ingest structured JSON directly and bring your own vector DB:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Bulk Export:</strong> A paginated endpoint (<code className={code}>{API_BASE}/api/v1/projects/export</code>) that streams all ~12,000 projects as JSON.</li>
              <li><strong>Standardized Schema:</strong> Projects are normalized with <code className={code}>title</code>, <code className={code}>description</code>, <code className={code}>url</code>, <code className={code}>repository_url</code>, and flat arrays for <code className={code}>categories</code> and <code className={code}>tags</code>.</li>
              <li><strong>Bring Your Own Vector DB:</strong> Ingest locally, generate your own embeddings (e.g. Gemini <code className={code}>text-embedding-004</code>), and run semantic search entirely in your environment.</li>
              <li><strong>AI-Native:</strong> Feed the retrieved JSON straight into your LLM context for accurate, grounded responses.</li>
            </ul>

            <h3 className="font-display text-2xl font-medium text-ink mt-12 mb-4">Getting Started</h3>
            <p>
              The public read endpoints (MCP, export, search) require no API key — start querying right away. Only sync and admin endpoints require authentication.
            </p>
            <p>
              For sync or admin access, contact <a href="mailto:info@civictech.guide" className="text-primary hover:underline font-medium">info@civictech.guide</a> with a brief description of your project or agent, then pass the secret as <code className={code}>Authorization: Bearer YOUR_SECRET</code>.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-primary-tint border-l-4 border-primary p-6 rounded-r-xl sticky top-6">
            <h4 className="font-ui font-bold text-lg text-ink mb-4">API Endpoints</h4>

            <div className="space-y-6">
              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Base URL</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">{API_BASE}</code>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">MCP (Streamable HTTP)</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">POST /mcp</code>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Keyword Search</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block mb-2">GET /api/v1/projects/search</code>
                <em className="text-xs text-ink-soft block">Params: q, category, status, limit</em>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Project Detail</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">GET /api/v1/projects/:slug</code>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Bulk Export</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">GET /api/v1/projects/export</code>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
