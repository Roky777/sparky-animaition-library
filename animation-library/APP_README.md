# Sparky animation library app

Start a local HTTP server in this directory (`python3 -m http.server 8000`), then open http://localhost:8000/index.html. No installation, API key, CDN or build step is required.

Browse the 29 animations, filter by collection or name, and select clips using their checkboxes. Gallery previews always repeat; exported metadata preserves each clip's intended loop or one-shot setting. Pause and speed controls affect previews only.

Download ZIP exports only selected animations. Extract its `sparky-animations/` folder into your game's served asset directory. Give the included `AGENT_INSTRUCTIONS.md` to your coding agent. Each clip includes a PNG sheet, JSON timing and its own Markdown guide; the pack also contains the browser player, manifest and preview example.

Save to game folder uses the browser's directory picker when supported. Choose your game directory. The app creates a new timestamped folder under `sparky-animations/` so existing game files are not overwritten. Unsupported browsers can use ZIP export instead. The browser controls access to the chosen directory.

The library packages the current artwork. Export checks verify paths, timing and resource completeness; they do not certify every animation's artistic quality.

## Animation studio

Open a card's arrow or Open animator to inspect the clip in the matching dark workspace. Use the frame thumbnail strip, onion skin (while paused), root/ground guides, background selector, zoom, same-scale comparison, PNG capture and integration-code copy. Space toggles playback, arrow keys step, R restarts, O toggles onion skin and G toggles guides while focus is outside a control. Fullscreen is available through the stage toolbar. Repeat and breathing toggles change the preview only; exported animation timing and loop metadata remain authoritative.

The current sheets are losslessly deduplicated. JSON frameCount counts timed exposures; atlasFrameCount counts physically stored poses. Use frameMap[i] to locate each playback exposure. Current app exports include this mapping and instructions.
