# Sparky Animation Library

A standalone browser library for the current reviewed Sparky character: **50 animated clips and 10 still poses**.

## Run locally

```sh
python3 -m http.server 8082
```

Open **http://localhost:8082/**. No build step, package installation, API key or CDN is needed. Serve over HTTP rather than opening the HTML directly.

## Browse and export

- Browse every action with live previews, search and category filters.
- Open a card for a large animation studio with timeline scrubbing, slow motion, replay, backgrounds and transparent PNG capture.
- Select actions and download a standalone ZIP, or save the pack to a game folder in supported browsers.
- Exported packs include the current painted character, source rig, manifests, bundled runtime, integration instructions and license.

The character includes the reviewed face, hands restored to the version before the leg changes, connected thigh/knee/ankle motion, and stabilised waistband and fly. Dialogue actions contain animation and mouth cues; voice recordings are not included in the gallery.

## Integration

```js
import {SparkyRigPlayer} from './animation-library/sparky/player.js';
const player = await SparkyRigPlayer.load();
const view = player.add(canvas, '0Final/Appreciation/Clapping', {loop: false});
view.setAnimation('0Final/Idle/Idle_EB', {loop: true});
```

Use exact names and loop flags from `animation-library/sparky/manifest.json`. Static poses have zero duration. All actions share the skeleton and painted assets. Keep the entire exported directory structure and bundled Spine license.

## Main files

- `index.html` — root entry into the gallery.
- `animation-library/index.html`, `rig-library.js`, `library.css` — gallery and exports.
- `animation-library/sparky/` — current self-contained character, inspector and runtime.
- `animation-library/legacy-sprites.html` — earlier sprite-sheet library, retained separately.

## Validation and GitHub

Run `node scripts/check-library.mjs` to check all 60 current entries, export resources, imported modules and atlas textures. Earlier sprite-sheet and rig checks remain included.

The app is static and uses relative paths, so it can be hosted at a repository subpath on GitHub Pages. Publish the repository root. `.nojekyll` is included. The latest assets are included by `.gitignore`; local authoring archives and private environment files remain excluded. A destination repository has not yet been selected for this revision.

See [current character integration notes](animation-library/sparky/README.md) for details.
