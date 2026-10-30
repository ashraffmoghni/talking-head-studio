---
name: edit
description: Edit real talking-head footage with HyperFrames using Quicksand, navy emphasis, readable captions and restrained explanatory graphics. Use for this toolkit's clinic and expert videos, or when the user requests its calm minimal style.
---

# Talking-head editing

Work with the user's local footage and preserve the real speaker's voice and meaning. Apply the defaults in [references/style.md](references/style.md), unless the user's brief overrides them. The intended tone is warm, assured and easy to follow.

## Start with the source

1. Load the installed official `/hyperframes:hyperframes` skill, including its captions and overlays references. If it is missing, use the repository README's official installation route; report setup failures accurately. Do not guess its runtime contract or install duplicate standalone skills.
2. Inspect the file's duration, dimensions, frame rate and audio. Check sampled frames throughout for existing subtitles or graphics. Ask for a clean source if burned-in captions prevent the requested edit; retain a finished export as a visual reference.
3. Use an existing transcript if supplied. Otherwise transcribe in the spoken language; for Malay, use the multilingual Whisper model and `--language ms`, not `small.en`. Preserve natural Malay/English code-switching. Review names, negations and medical terms against audio; mark uncertainty rather than inventing words. Segment SRT timestamps are not word timings: align words before using word-synchronised highlights.
4. Keep source media, transcripts and exports in the user's local project. Never push them to the public toolkit. Uploads to transcription, stock or cloud-render services require the user's request; use local tools by default.

## Make a small design preview

For a new style, choose a useful 10–15 second excerpt and make the preview first. If the user explicitly asks for the full edit or no stops, continue within that scope. Record source, aspect ratio, frame rate, transcript language, duration and CTA in the project brief. Preserve the source frame rate unless delivery requirements specify otherwise; the default reference layout is 1080 × 1920 portrait, not an instruction to crop every source.

Initialize the video project using the current HyperFrames CLI. Its scaffold should pin the CLI version. Use `--skip-skills` with the installed plugin and `--skip-transcribe` when managing the transcript separately. Copy this skill's `assets/fonts` and `assets/style` into the project's `assets/` and `assets/EDIT-BRIEF.md` into the project root as `EDIT-BRIEF.md`; the plugin's `scripts/copy-style.mjs` helper can do this without overwriting files. Never edit inside the installed plugin cache.

Use the included CSS as the brand starting point, not as a complete timed composition. Search the official HyperFrames registry before implementing a named effect; restyle selected source to match this brief. A normal film needs only captions and a few overlay components, not a new UI framework or many plugins.

## Edit around meaning

- Keep the speaker prominent. Let a graphic enter when it clarifies a spoken idea and leave once understood.
- Prefer natural phrase captions, one or two lines with roughly 4–6 words per group. Align to real speech; do not delay captions to satisfy a word-count rule.
- Highlight one meaningful keyword or short phrase per thought. Use navy on a light plate over footage, or navy text on the light graphic panel. Reserve larger 1.15–1.2× emphasis space up front so captions do not jump or collide.
- Use an occasional comparison, 2–3 step sequence, number or simple line illustration. Keep diagrams accurate and appropriately sourced. Do not generate clinical evidence, patient outcomes, diagnoses, testimonials or treatment guarantees.
- Retain uncertainty in the spoken message. Never turn “mungkin” into a definite claim. A graphic must not make a stronger assertion than the speaker.
- Make substantive cuts at complete thought boundaries. Do not remove qualifications or reassemble statements into a new meaning.
- Keep speech clear. Music is optional, quiet and removable; never replace the real voice. Avoid attention sounds on every word.
- Use pauses, questions and timed reveals for engagement. Do not promise clickable interaction in an MP4.

## Review and handoff

Run the current HyperFrames checks, inspect snapshots at each graphic state, then watch the preview with sound. Verify caption timing, font loading, navy contrast, speaker visibility, medical terms, no clipped enlarged words, no stale graphics, safe areas, and clear audio. Review at approximately phone viewing size; reduce copy before making it too small.

Show the preview for a style decision when that is the requested stage. If a file is requested, follow HyperFrames' render and review procedure, verify export duration and audio, and deliver the editable project and MP4 separately. State whether the result is a preview or a final export, with any unresolved transcript uncertainties.
