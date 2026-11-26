# Shared AI coding workflow

`AGENTS.md` is the only source of project instructions. `CLAUDE.md` and `GEMINI.md` import it; Cursor, GitHub Copilot, and Windsurf adapters direct their agents to it. Keep adapters short and never copy policy into them.

Before work, pull `main` with `git pull --ff-only origin main`, then read `sync-state.json`. Resume the item marked `in_progress`/`next` before starting another component. All tools must use this repository's same `sync-state.json` and checked-in Figma cache; reuse cached data and fetch only missing information.

After each implementation, update `sync-state.json` with verified status and relevant paths/IDs. Validate the change before committing. Never commit API keys, access tokens, credentials, or sensitive configuration. Commit and push directly to `main` only after validation. When changing tools, stay on the same repository and branch and continue from the shared sync state. Keep context focused on the active item to reduce token use.

No UI component work is performed by this setup.
