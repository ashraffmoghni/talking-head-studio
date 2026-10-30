# Talking Head Studio

This repository distributes a Claude Code plugin and its style assets. Video projects and media belong in a separate local working folder.

For editing a video, use `/talking-head:edit` together with the official `/hyperframes:hyperframes` skill. If the custom plugin is not loaded, read `plugins/talking-head/skills/edit/SKILL.md` directly. Read the style reference linked there before designing.

For maintenance, keep the marketplace and plugin versions consistent. Run `npm run validate`, `claude plugin validate .`, and `claude plugin validate ./plugins/talking-head` after changes. Do not add clinic footage, transcripts, contact details, or render output to this public repository. Font licensing stays with the bundled font.

Keep this toolkit small: one editing skill, one style reference, shared CSS, a project brief, and a local asset-copy helper. Use official HyperFrames for the engine, transcription and render workflows; do not vendor another copy of its skills.
