// Public host of the directory API. NOTE: migration staging host — swap to
// https://directory.civictech.guide at DNS cutover.
const API_BASE = "https://staging-directory.civictech.guide";

const code = "text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink";

const TOOLS = [
  { name: "search_projects", desc: "Full-text + faceted search. Params: query, category, status (defaults to active-only; pass \"all\" for every status), limit (1–50)." },
  { name: "get_project", desc: "Full detail for one project by slug (as returned by search_projects)." },
  { name: "list_categories", desc: "All category names + how many projects each contains — for discovering filter values." },
];

const DESKTOP_CONFIG = `"mcpServers": {
  "civictech-guide": {
    "command": "npx",
    "args": ["-y", "mcp-remote", "${API_BASE}/api/mcp"]
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
              The Civic Tech Field Guide offers a public, high-performance API for developers and researchers to plug our dataset of ~16,000 civic tech projects directly into AI agents and analytics pipelines using the <strong>Model Context Protocol (MCP)</strong>.
            </p>
            <p>
              Connect the hosted MCP server to Claude, Cursor, or any MCP client and your assistant can query, read, and traverse the entire curated database in real time — powering Retrieval-Augmented Generation (RAG), data analysis, and grounded, hallucination-free answers.
            </p>

            <h3 className="font-display text-2xl font-medium text-ink mt-12 mb-4">Hosted MCP server</h3>
            <p>
              A ready-to-use, read-only MCP server is live over <strong>Streamable HTTP</strong> — <strong>no API key required</strong>:
            </p>
            <div className="bg-bg-alt p-4 rounded-xl border border-border-soft font-mono text-sm">
              POST <code className={code}>{API_BASE}/api/mcp</code>
            </div>
            <p>It exposes these tools:</p>
            <ul className="list-disc pl-6 space-y-2">
              {TOOLS.map((t) => (
                <li key={t.name}><code className={code}>{t.name}</code> — {t.desc}</li>
              ))}
            </ul>

            <h4 className="font-ui font-bold text-lg text-ink mt-8 mb-2">Connect from Claude Code</h4>
            <div className="bg-bg-alt p-4 rounded-xl border border-border-soft font-mono text-sm break-all">
              claude mcp add --transport http civictech-guide {API_BASE}/api/mcp
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
              <li><strong>Bulk Export:</strong> <code className={code}>{API_BASE}/api/v1/projects/export</code> returns <code className={code}>{'{ data, meta: { total, limit, offset } }'}</code>. It is <strong>paginated</strong> — max <code className={code}>limit</code> is 1000 (default 500) — so page with <code className={code}>offset</code> until <code className={code}>offset + data.length ≥ meta.total</code> (~15,800) to ingest the whole directory.</li>
              <li><strong>Standardized Schema:</strong> Projects are normalized with <code className={code}>title</code>, <code className={code}>description</code>, <code className={code}>url</code>, <code className={code}>repository_url</code>, and flat arrays for <code className={code}>categories</code> and <code className={code}>tags</code>.</li>
              <li><strong>Bring Your Own Vector DB:</strong> Ingest locally, generate your own embeddings (e.g. Gemini <code className={code}>text-embedding-004</code>), and run semantic search entirely in your environment.</li>
              <li><strong>AI-Native:</strong> Feed the retrieved JSON straight into your LLM context for accurate, grounded responses.</li>
            </ul>

            <h4 className="font-ui font-bold text-lg text-ink mt-8 mb-2">Filtering &amp; status</h4>
            <p>
              Search results default to <strong>active projects only</strong>. Pass <code className={code}>status</code> = <code className={code}>Active</code>, <code className={code}>Inactive</code>, <code className={code}>N/A</code> (comma-separate for multiple, case-insensitive), or <code className={code}>all</code> to include every status. <code className={code}>limit</code> ranges 1–100 for REST search (1–50 for the MCP tool); an unknown <code className={code}>status</code> returns a 400.
            </p>

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
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">POST /api/mcp</code>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Keyword Search</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block mb-2">GET /api/v1/projects/search</code>
                <em className="text-xs text-ink-soft block">Params: q, category, tags, country, status, openSource, limit (1–100), offset</em>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Project Detail</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">GET /api/v1/projects/:slug</code>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Bulk Export</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">GET /api/v1/projects/export</code>
                <em className="text-xs text-ink-soft block">Paginated — {'{ data, meta }'}, limit ≤ 1000</em>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Categories</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">GET /api/v1/categories</code>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Facets</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">GET /api/v1/facets</code>
                <em className="text-xs text-ink-soft block">Filter option values (categories, tags, statuses, countries…)</em>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
