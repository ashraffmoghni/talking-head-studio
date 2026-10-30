# Talking Head Studio

A small editing toolkit for **Claude Code + HyperFrames**, made for clear, calm talking-head videos.

**Visual direction:** Quicksand, dark-blue keywords, warm-white graphic panels, readable captions, and purposeful motion. Designed with retirees and high-income viewers in mind; preview at phone size and adapt to the actual audience.

## Install by asking Claude Code

Copy this into **Claude Code** (terminal, IDE, or Claude desktop's Code workspace with local tools). Ordinary web chat alone cannot run the local editor:

> Install the talking-head editing toolkit from https://github.com/ashraffmoghni/talking-head-studio. Read its README and install its Claude Code plugin and the official HyperFrames plugin using the documented commands. Check Node.js, Git and FFmpeg, then tell me if anything is missing. Keep my footage local. Do not start an edit yet.

The equivalent terminal commands are:

```sh
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
claude plugin marketplace add ashraffmoghni/talking-head-studio
claude plugin install talking-head@ashraff-editing
```

Start a fresh Claude Code session after installation. Confirm both plugins appear in `claude plugin list`. The custom command is **`/talking-head:edit`**.

Prerequisites: Claude Code with an active account, **Node.js 22+**, npm, Git, and FFmpeg (including ffprobe). The plugins supply instructions; the local rendering tools still need to be available. Claude Code and any optional paid media services use the editor's own account. This toolkit supplies no credentials and requires no avatar or AI-voice service.

## Make the first edit

Open a local project folder containing the source video. Paste this prompt, replacing the filename:

> /talking-head:edit Edit `source.mp4` using the default style. Keep the speaker's real voice and meaning. Use Quicksand, navy highlighted words on a light background, and occasional explanatory graphics. Preserve Malay and English as spoken. Make a 10–15 second style preview first. Show it before applying the design to the whole clip.

Use clean footage or a clean cut with original audio. A previous finished export is useful as a reference, but its burned-in captions cannot be switched off. Do not layer a new caption track over existing captions.

Claude uses HyperFrames to initialize the actual video project, checks the source dimensions and frame rate, and copies the toolkit assets into that project. Keep the generated project's CLI version pin so teammates can reproduce the render. Every editor keeps source media and exports outside this public toolkit repo.

## What is included

| Item | Purpose |
| --- | --- |
| `/talking-head:edit` | Transcript-led editing, emphasis, overlays and review |
| [Style rules](plugins/talking-head/skills/edit/references/style.md) | Typography, colour, layout and motion defaults |
| Shared CSS | Consistent captions, cards and keyword treatments |
| Quicksand variable font | Local font rendering, with its SIL OFL license |
| Project brief | Record source, audience, timings, CTA and render settings |
| Asset-copy helper | Copy style assets into a new local video project |

Only two plugins are needed: this toolkit and official HyperFrames. HyperFrames includes the composition, CLI, registry and media guidance used by this workflow. There is no need to install separate copies of the same skills.

## Style at a glance

- Navy `#163A5F`, ink `#202A35`, warm white `#F7F8FA`.
- Quicksand 600 for captions and 700 for emphasis; avoid thin weights.
- At 1080 × 1920: captions start at 60 px, highlighted words at 70 px, graphic labels at 44 px. Fit and inspect rather than shrinking long copy indefinitely.
- One meaningful emphasized word or short phrase per thought. Give navy text an opaque light plate when it sits over footage.
- One graphic idea at a time. Use a reveal, comparison or short process when it explains the spoken point.
- Gentle entrances, stable reading holds and clean exits. Begin with roughly one major graphic per 8–12 seconds, adjusting to speech.
- Treat “interactive” as responsive storytelling: a question, a reveal, or an illustration timed to speech. An exported MP4 has no clickable controls.

The layout direction was informed by sampled frames of the Dr. Akhyar hydrogel talking-head edit and a knee-pain clinic edit: retain the prominent speaker and occasional upper graphic panel, improve small labels, and unify emphasis in navy. This is a visual reference assessment, not a full audio or frame-by-frame review. No source footage or extracted frames are distributed here.

## Update

```sh
claude plugin marketplace update ashraff-editing
claude plugin update talking-head@ashraff-editing
claude plugin marketplace update hyperframes
claude plugin update hyperframes@hyperframes
```

Start a fresh session afterward. Updates affect the installed toolkit; assets already copied into an active project remain under that project's control. Do not replace them blindly mid-edit.

## Local development

```sh
git clone https://github.com/ashraffmoghni/talking-head-studio.git
cd talking-head-studio
npm run validate
claude plugin validate .
claude plugin validate ./plugins/talking-head
claude --plugin-dir ./plugins/talking-head
```

No `npm install` is needed to validate this repository. To copy the brand assets after HyperFrames has initialized a new video project:

```sh
node plugins/talking-head/scripts/copy-style.mjs /absolute/path/to/video-project
```

The helper writes `assets/fonts/`, `assets/style/talking-head.css` and `EDIT-BRIEF.md`. It refuses to overwrite existing files. Load the CSS with `<link rel="stylesheet" href="assets/style/talking-head.css">` in the composition document; follow HyperFrames' current sub-composition styling rules when using scenes.

The repo is an installable editing toolkit, not a finished video or an automatic one-click editing service. Editorial decisions, transcription review and preview approval remain part of each job.

## Sources and rights

- [Official HyperFrames installation guide](https://github.com/heygen-com/hyperframes/blob/main/docs/guides/plugins.mdx)
- [Claude Code plugin marketplaces](https://code.claude.com/docs/en/plugin-marketplaces)
- [Quicksand source and SIL Open Font License](https://github.com/google/fonts/tree/main/ofl/quicksand)

The original toolkit code and instructions are MIT licensed; the bundled Quicksand font uses its own SIL OFL license. Names and third-party materials remain their owners' property. This toolkit is not affiliated with Anthropic, HeyGen or Google.
