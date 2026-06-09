export default function McpIntegrationPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-10 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          <h2 className="font-display text-[34px] font-medium tracking-[-0.01em] text-ink mb-6">Model Context Protocol (MCP) Integration</h2>

          <div className="space-y-6 text-[15px] leading-relaxed text-ink">
            <p>
              The Civic Tech Field Guide offers a secure, high-performance API for developers and researchers to integrate our dataset of over 16,000 civic tech projects directly into AI agents and analytics pipelines using the <strong>Model Context Protocol (MCP)</strong>.
            </p>
            <p>
              By connecting your MCP server to our endpoints, your LLMs (like Google Gemini, Claude, or OpenAI) can directly query, embed, and perform semantic searches across our entire verified database in real-time. This powers use-cases like Retrieval-Augmented Generation (RAG), automated data analysis, trend discovery, and intelligent querying.
            </p>

            <h3 className="font-display text-2xl font-medium text-ink mt-12 mb-4">How It Works</h3>
            <p>
              Rather than relying on outdated web scraping or inefficient keyword searches, our system provides a standardized, machine-readable pipeline:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Bulk Export API:</strong> A memory-efficient streaming endpoint (<code className="text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink">/api/v1/projects/export</code>) that provides instant access to all ~16,000+ projects in a single, paginated JSON schema.</li>
              <li><strong>Standardized Schema:</strong> All projects are normalized with <code className="text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink">title</code>, <code className="text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink">description</code>, <code className="text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink">url</code>, <code className="text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink">repository_url</code>, and flat arrays for <code className="text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink">categories</code> and <code className="text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink">tags</code>.</li>
              <li><strong>Bring Your Own Vector DB:</strong> Ingest our raw data locally, generate your own embeddings (e.g. via Gemini <code className="text-sm bg-bg-alt px-1.5 py-0.5 rounded text-ink">text-embedding-004</code>), and perform lightning-fast semantic similarity searches entirely within your secure environment.</li>
              <li><strong>AI-Native:</strong> Provide the exact retrieved JSON structures to your LLM context window for highly accurate, hallucination-free responses.</li>
            </ul>

            <h3 className="font-display text-2xl font-medium text-ink mt-12 mb-4">Getting Started</h3>
            <p>
              Access to the MCP API endpoints is restricted to ensure stability and prevent abuse.
            </p>
            <p>
              To request an API key, please contact us at <a href="mailto:info@civictech.guide" className="text-primary hover:underline font-medium">info@civictech.guide</a> with a brief description of your project or agent.
            </p>
            <div className="bg-bg-alt p-4 rounded-xl border border-border-soft font-mono text-sm mt-4">
              Once approved, simply pass the key in your request headers:<br/><br/>
              <code>Authorization: Bearer YOUR_API_KEY</code>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-primary-tint border-l-4 border-primary p-6 rounded-r-xl sticky top-6">
            <h4 className="font-ui font-bold text-lg text-ink mb-4">API Endpoints</h4>

            <div className="space-y-6">
              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Export Stream</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block">GET /api/v1/projects/export</code>
              </div>

              <div>
                <strong className="block text-[13px] text-ink-soft uppercase tracking-[0.09em] mb-1">Keyword Search</strong>
                <code className="text-sm bg-bg-alt px-2 py-1 rounded text-ink break-all block mb-2">GET /api/v1/projects/search</code>
                <em className="text-xs text-ink-soft block">Params: q, category, status, limit</em>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
