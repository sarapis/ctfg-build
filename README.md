# ctfg-build

The developer landing site for the [Civic Tech Field Guide](https://civictech.guide) — a static Next.js app documenting how to build on the world's largest curated civic tech dataset.

## Three ways to access the data

### MCP server

Connect Claude, Cursor, or any MCP client to live, curated civic-tech data in one config block.

```json
"mcpServers": {
  "civictech-guide": {
    "command": "npx",
    "args": ["-y", "@civictechguide/mcp"]
  }
}
```

Once connected, your assistant can search listings, pull project detail, and traverse categories. Example queries:

- "Find active govtech projects in Kenya"
- "Open-source participatory budgeting tools"
- "Who works on election integrity?"

### REST API

Clean JSON over HTTPS. No key required for public reads.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v1/projects` | Search and filter listings |
| GET | `/v1/projects/:slug` | Single project detail |
| GET | `/v1/categories` | Category tree |
| GET | `/v1/collections/:slug` | Curated collection |

```bash
curl "https://api.civictech.guide/v1/projects?category=govtech&country=KE&active=true"
```

### Showcase

Apps already running on the dataset:

- **[CTFG Directory](https://ctfg-frontend.devin-a8e.workers.dev)** — the flagship search and explore app
- **[CTFG PilotCity Mashup](https://luxury-syrniki-bfc3ca.netlify.app)** — Field Guide data blended with PilotCity for project-based learning
- **[CTFG Taxonomy Recommender](https://github.com/mstem/guidefinder)** — suggests categories and tags for any project using the directory's taxonomy

## Code & examples

All in the [`ctfg5`](https://github.com/sarapis/ctfg5) monorepo:

| Package | What it is |
|---|---|
| `packages/mcp` | The official MCP server — JavaScript, runnable with `npx` |
| `packages/api-examples` | Copy-paste fetch snippets in curl, Python, and JS |
| `packages/data` | Export scripts and JSON dumps of the full directory |
| `packages/notebooks` | Jupyter notebooks for analysing the dataset |

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Building

```bash
npm run build
```

Output goes to `out/` as a fully static export. If the site is deployed at a sub-path:

```bash
NEXT_PUBLIC_BASE_PATH=/your-path npm run build
```

## Stack

- [Next.js 16](https://nextjs.org) with `output: "export"` (static)
- React 19
- TypeScript
- Tailwind CSS v4
- Google Fonts: Space Grotesk, Archivo, Inter

## License

The Field Guide dataset is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to use and adapt with attribution.
