# Sparky · current reviewed character

This standalone package contains **50 animated clips and 10 still poses**, with the reviewed face, restored pre-leg-change hands, connected leg motion and stabilised shorts centre. Source artwork and animations are included locally; no CDN, build step or dependency installation is required.

Serve over HTTP and open `preview.html`. The gallery is one directory above at `../index.html`. Search by title, full animation path or collection. Open a card for the timeline, slow motion, backgrounds and transparent frame capture. The gallery repeats clips for browsing; `manifest.json` retains each clip's intended loop setting.

```js
import {SparkyRigPlayer} from './player.js';
const player = await SparkyRigPlayer.load();
const clip = player.manifest.animations.find(c => c.title === 'Clapping');
const view = player.add(document.querySelector('canvas'), clip.name, {loop: false});
// Other actions use their exact manifest name:
view.setAnimation('0Final/Idle/Idle_EB', {loop: true});
player.setPaused(true);
view.seek(0.5);
player.setSpeed(0.35);
```

Keep the complete exported directory structure. `files.json` lists every required resource for ZIP exports. All actions share a skeleton and painted character assets; selecting clips limits the manifest, while retaining the shared skeleton. Poses have zero duration. Dialogue entries contain motion and mouth cues, not new voice recordings.

The bundled Spine runtime's license is included at `runtime/vendor/SPINE-LICENSE.txt`; retain it when redistributing. Review its terms for your game's use. Character/source assets retain their existing ownership. The source rig files are required by the retargeting runtime.
