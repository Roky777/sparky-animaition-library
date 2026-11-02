# Current rigged Sparky library

The main gallery now lists all 60 entries from the approved Sparky rig, including 50 timed clips and 10 static poses. Click a preview to inspect, **Download clip** for a self-contained ZIP, or **Save to folder** to write resources to a chosen game directory. Multi-select exports share the atlas, skeleton and browser runtime. See [rig integration](rig/README.md). The previous sprite-sheet gallery remains at [Earlier sprite sheets](legacy-sprites.html).

---

[Lossless atlas optimization and per-clip savings](OPTIMIZATION.md)

[Per-animation quality review](QUALITY_REVIEW.md)

[Open the animation library](index.html) · [App and export instructions](APP_README.md)

# Sparky animation library

27 playable review exports with the original Lucas animation names. Every clip has a transparent PNG, playback JSON and a Markdown integration guide. The library is portable: runtime assets live entirely inside this folder.

The left walk uses the user-approved eight researched key drawings and their original one-second timing. Right walk and happy left/right variants use corresponding complete drawings at the same head scale, cell size and floor anchor. Smiling uses an eight-key expression sequence. These are keyed sprite animations; no cutout rig, frame crossfade or optical-flow morph is applied. Earlier versions remain recoverable. The new variants remain available for visual review.

## Preview and compare

[Open the animator](demo.html?animation=06-common-walk-lu-walk-left&compare=07-common-walk-lu-walk-right). It includes Play, Pause, Restart, half-speed playback, frame stepping and a frame slider. Enable **Compare at the same scale** and choose a second clip. Both canvases use the same dimensions and reference scale. Shared controls play/pause/restart both clips; frame stepping maps their relative frame positions. Different actions retain their own durations.

From the project root, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/animation-library/demo.html
```

## Animations

| # | Original Lucas clip | Frames | Duration | Playback | Guide |
| --- | --- | --- | --- | --- | --- |
| 01 | `Idle` | 31 stored poses | 2.4s | Loop | [Use this clip](animations/01-idle/animation.md) |
| 02 | `Idle_EB` | 49 stored poses | 3.4s | Loop | [Use this clip](animations/02-idle-eb/animation.md) |
| 03 | `Intro/Lucas_Room_Touch/Lu_Wondering` | 9 stored poses | 1.535s | Once, hold ending | [Use this clip](animations/03-intro-lucas-room-touch-lu-wondering/animation.md) |
| 04 | `Room_Game/Lu_N_Look_Left` | 6 stored poses | 2.2s | Loop | [Use this clip](animations/04-room-game-lu-n-look-left/animation.md) |
| 05 | `Room_Game/Lu_N_Look_Right` | 12 stored poses | 2.13s | Loop | [Use this clip](animations/05-room-game-lu-n-look-right/animation.md) |
| 06 | `Common/Walk/Lu_Walk_Left` | 8 stored poses | 1s | Loop | [Use this clip](animations/06-common-walk-lu-walk-left/animation.md) |
| 07 | `Common/Walk/Lu_Walk_Right` | 8 stored poses | 1s | Loop | [Use this clip](animations/07-common-walk-lu-walk-right/animation.md) |
| 08 | `Common/Happy_Walk/Lu_Happy_Walk_Left` | 8 stored poses | 1s | Loop | [Use this clip](animations/08-common-happy-walk-lu-happy-walk-left/animation.md) |
| 09 | `Common/Happy_Walk/Lu_Happy_Walk_Right` | 8 stored poses | 1s | Loop | [Use this clip](animations/09-common-happy-walk-lu-happy-walk-right/animation.md) |
| 10 | `Running_Animation` | 8 stored poses | 0.64s | Loop | [Use this clip](animations/10-running-animation/animation.md) |
| 11 | `Toy_Garden/Happy_Jumping` | 8 stored poses | 1.22s | Once, hold ending | [Use this clip](animations/11-toy-garden-happy-jumping/animation.md) |
| 12 | `Smiling` | 8 stored poses | 1.76s | Once, hold ending | [Use this clip](animations/12-smiling/animation.md) |
| 13 | `Wow` | 9 stored poses | 1.325s | Once, hold ending | [Use this clip](animations/13-wow/animation.md) |
| 14 | `N2/Lu_Laugh_03_Tummy_Hand` | 5 stored poses | 0.49s | Loop | [Use this clip](animations/14-n2-lu-laugh-03-tummy-hand/animation.md) |
| 15 | `Lu_Brave` | 9 stored poses | 1.305s | Once, hold ending | [Use this clip](animations/15-lu-brave/animation.md) |
| 16 | `Entry_Thumbs_Up` | 9 stored poses | 1.305s | Once, hold ending | [Use this clip](animations/16-entry-thumbs-up/animation.md) |
| 17 | `Clapping` | 9 stored poses | 0.64s | Loop | [Use this clip](animations/17-clapping/animation.md) |
| 18 | `Front_Hi` | 10 stored poses | 2.245s | Once, hold ending | [Use this clip](animations/18-front-hi/animation.md) |
| 19 | `C_Saying_Yes` | 9 stored poses | 1.08s | Once, hold ending | [Use this clip](animations/19-c-saying-yes/animation.md) |
| 20 | `Saying_No` | 9 stored poses | 1.085s | Once, hold ending | [Use this clip](animations/20-saying-no/animation.md) |
| 21 | `Entry_Pointing` | 8 stored poses | 1.17s | Once, hold ending | [Use this clip](animations/21-entry-pointing/animation.md) |
| 22 | `Lu_Air_Hugs` | 8 stored poses | 1.375s | Once, hold ending | [Use this clip](animations/22-lu-air-hugs/animation.md) |
| 23 | `Toy_Garden/Lu_Seat_Idle` | 36 stored poses | 2.8s | Loop | [Use this clip](animations/23-toy-garden-lu-seat-idle/animation.md) |
| 24 | `Sequence/4/Sleep` | 41 stored poses | 3.2s | Loop | [Use this clip](animations/24-sequence-4-sleep/animation.md) |
| 25 | `Sequence/4/Sleep_Wakeup` | 9 stored poses | 1.495s | Once, hold ending | [Use this clip](animations/25-sequence-4-sleep-wakeup/animation.md) |
| 26 | `Juice Mode/Idle_To_Pick_Glass` | 9 stored poses | 1.405s | Once, hold ending | [Use this clip](animations/26-juice-mode-idle-to-pick-glass/animation.md) |
| 27 | `Cute_Bounce_Dance` | 47 stored poses | 1.6s | Loop | [Use this clip](animations/27-intro-dance-lu-dance-hipmove/animation.md) |

## Shared registration and size

All current library exports use **512 × 640 px** cells and root/ground anchor **(256, 592)**. Standing reference height is approximately **400 px**. Sitting, crouching and sleeping are naturally shorter, and jump flight remains above the ground; do not resize those poses to fill standing height. A shared reference scale sets the head size. Stationary gestures and walks correct model-height drift using neck-to-floor landmarks; walks retain a small repeating support bob. Crouch, jump flight and wake-up retain their source displacement. Independently drawn body poses can still differ in anatomy and spacing.

The reusable player draws native cells. The demo uses equal-size viewports for direct comparison. Scale both the cell and root by the same factor when integrating into another engine.

## Folder and paths

```text
animation-library/
  README.md
  manifest.json
  player.js
  demo.html
  validation-report.json
  REVIEW.md
  animations/<stable-id>/
    spritesheet-*.png           Active name is in animation.json
    spritesheet.png             Identical convenience copy
    animation.json              Grid, timing, loop and root
    animation.md                Action-specific integration guide
```

Project root: `/Users/rax/Desktop/lucas/`

Portable library: `/Users/rax/Desktop/lucas/animation-library/`

Working sheets, individual frames, original generated artwork and exact prompts: `/Users/rax/Desktop/lucas/animation/sparky/improved/<stable-id>/`

Current playable cells are in each clip’s `scale-v6/frames/`, with the active sheet in `scale-v6/spritesheet.png`. Earlier source variants remain in their original folders. Inactive portable versions are archived in `animation/sparky/improved/archive/portable-before-isolation-v2/`. Original source keys remain in `unpolished anmations/` and root reference images. Repeated earlier inputs remain recoverably archived in `animation/sparky/source-archive/unpolished-duplicates/`.

## Use a clip in a browser game

Put this HTML inside `animation-library/`, serve over HTTP, and adjust the metadata path for another clip:

```html
<canvas id="character" style="height:500px;width:auto"></canvas>
<script type="module">
  import { SpriteSheetPlayer } from "./player.js";
  const player = await SpriteSheetPlayer.load(
    document.querySelector("#character"),
    "./animations/06-common-walk-lu-walk-left/animation.json"
  );
  player.play();
</script>
```

| Method | Behavior |
| --- | --- |
| `play()` | Play or resume; restart a completed one-shot |
| `pause()` | Freeze playback without accumulating paused wall time |
| `restart()` | Return to frame 0 and play |
| `seekFrame(index)` | Pause on a zero-based frame |
| `setSpeed(0.5)` | Half speed; use `1` for normal speed |
| `destroy()` | Stop before removing the canvas |

An explicit `{ loop: true }` third argument can override the recommended loop behavior. Do not automatically loop wake-up or pickup actions, whose end states differ from their beginnings.

## Use another engine

For zero-based cell `i`:

```js
const x = (i % data.columns) * data.cellWidth;
const y = Math.floor(i / data.columns) * data.cellHeight;
ctx.drawImage(sheet, x, y, data.cellWidth, data.cellHeight,
  0, 0, data.cellWidth, data.cellHeight);
```

Use `frameDurationsMs[i]` for exposure and stop at `frameCount`; unused trailing cells are transparent. Cells are already packed in timeline order. Do not apply the source-key order a second time, individually trim/recenter each pose, or add a second breathing transform to a breathing export.

## Rebuild and validate

From the project root:

```sh
node tools/build-sparky-library.cjs
python3 tools/sparky-collection-report.py
python3 tools/validate-animation-library.py
node tests/sprite-player.mjs
node tests/figure-extraction.cjs
node tests/walk-drawn.cjs
python3 tests/sparky-repair.py
python3 tools/write-library-guide.py
```

`tools/remaining-animation-jobs.json` contains the exact prompts for the 23 new sheets. Each generated clip also stores its prompt in its working folder. The builder packs existing generated files; it does not make network generation calls. It isolates complete figures, registers anatomical landmarks and applies the action-specific stabilization recorded in each working animation.json. No frame crossfade or optical-flow morph is used.

`validation-report.json` records file, dimension, alpha, frame coverage, timing and registry checks. [REVIEW.md](REVIEW.md) records the scope of visual review and what remains before production approval.

## Gesture redraws

[Open all eight gestures at the same scale](index.html). Wow, tummy laugh, Brave, thumbs-up, clapping, Front_Hi, Saying_Yes and Saying_No use new nine-stage full-character drawings. Planted soles are registered at y592 and head width is normalized before packing. Contact/recovery paths and gesture-specific holds are recorded in each clip JSON. The new artwork is ready for visual review; pixel checks do not certify completely vibration-free motion.

Working assets and exact built-in imagegen prompts: `animation/sparky/improved/<clip>/polished-v3/`. Rebuild with `node tools/build-gesture-polish.cjs`, publish with `node tools/build-sparky-library.cjs`, and run `node tests/gesture-polish.cjs`.


## Remaining animation repairs

[Review the remaining fourteen clips](index.html). Wondering, running, jumping, pointing, air hugs, wake-up, glass pickup and hip dance have new working exports in `animation/sparky/improved/<clip>/remaining-v3/`. Built-in imagegen supplied the new artwork, pose-guide corrections and individual runner arm corrections; exact prompts are saved alongside the sources. Source stages that swapped the pointing arm or added a redundant hug blink are excluded from playback.

Running now uses `registered-run-v4/` with complete source drawings translated to a consistent head-center anchor. This removes 46–52 px flight-frame lateral jumps caused by the old neck detector. Both steps use matching 80/65/65/110 ms phase exposures in a 640 ms loop; rebuild with `node tools/register-run-v4.cjs`. Running retains two flight phases, and jumping uses explicit vertical displacement instead of grounding the airborne frames. The pickup uses one empty pedestal raster with the character/glass rendered in front. Hip dance now uses crisp complete hands-on-hips side-step and close-foot tap drawings in `animation/sparky/improved/27-intro-dance-lu-dance-hipmove/dance-v5/`. Eight playback cells form a 960 ms loop; head scale and horizontal anchor are shared, and the exact center drawing is reused halfway through. The earlier one-image displacement sway was rejected and remains inactive. Exact prompts and earlier candidates are retained.

Idle, blink, both looks and sleep preserve their prior artwork and exposures. Seated idle now has a replacement upper-body breath in `breathing-v5/`. Integer-pixel translations align their floor baseline at y592. Their preserved working exports and earlier metadata are in `registration-v3/`. Sleep now adds an expanding/contracting translucent nose bubble in `sleep-bubble-v4/`, baked into all 80 cells over the original 3.2-second cycle. Its editable vector and overlay frames are included; rebuild with `node tools/build-sleep-bubble.cjs`.

Rebuild the source registration with `node tools/register-existing-loops.cjs`, rebuild new action assets with `node tools/build-remaining-polish.cjs`, publish with `node tools/build-sparky-library.cjs`, and verify with `python3 tests/remaining-polish.py`. The checks cover exact source/copy pixels, contact/flight placement, the fixed pedestal and dance packing. Rebuild the drawn dance separately with `node tools/build-dance-steps.cjs`. Visual/artistic approval remains pending.


## Research-first left-walk study

[Open the gait research and key-pose preview](demo.html?animation=06-common-walk-lu-walk-left). Eight key drawings are compared with an authored human-gait schematic. The separate breakdown preview contains three provisional in-betweens; five intervals still need corrected art. The user-approved eight-key sequence is now the active left walk. The separate provisional in-between experiment remains incomplete and is not used in the library. Research links, exact prompts, locked key hashes and rejected-drawing notes are included in that folder.


## Continuous breathing

The bundled player and root sprite runner now apply slow continuous breathing according to each clip’s `breathEffect` metadata. Quiet gestures use a 3 px rise over 3.2 seconds; moving actions use 0.65 px. The upper drawing moves rigidly, the chest extends through a smooth connected mapping, and pixels below each pose’s fixed contact band retain their position. The clock continues across action loops and during final one-shot holds. Explicit Pause and frame inspection freeze it.

Idle, blink, seated idle and sleep already contain baked breathing and receive no second transform. The seated breathing source in `breathing-v5/` has a 3.8 px head/shoulder rise over 2.8 seconds and fixed rows y535 onward. Its active `scale-v6/` export applies the same locked scale to that motion and its contact region. Glass pickup excludes the runtime transform to keep its pedestal rigid. Its existing reach/lift motion is retained.

Runtime breathing is included automatically when using `SpriteSheetPlayer`; other engines must implement the `breathEffect` mapping described in the individual guides. The seated breathing and sleeping bubble remain baked in their sprite sheets. Rebuild the seated sheet with `node tools/build-seated-breathing.cjs`, then publish with `node tools/build-sparky-library.cjs`. Runtime policy is in `tools/breathing-policy.cjs`.


## Locked character scale across all sheets

All 27 active sheets now use `animation/sparky/improved/<clip>/scale-v6/`. One fixed uniform whole-character scale per sheet matches its median opaque head-silhouette area to the standing Idle reference. This includes the eyes and mouth, avoiding blink-dependent estimates. Ground/root remains (256,592); sitting, crouching and flight retain their natural pose heights. There is no per-frame resizing to changing pose bounds.

The original sheets and metadata are retained as `scale-v6/source.png` and `scale-v6/source-animation.json`. Each new frame is resized once from that original, preventing cumulative resampling. `animation-scale-v6.json` takes precedence during publication. Rebuild with `node tools/normalize-library-scale.cjs`, then `node tools/build-sparky-library.cjs`. After changing upstream action artwork, use `node tools/normalize-library-scale.cjs --refresh-source` to adopt it; previous inputs are archived by content hash.

Run `node tests/library-scale.cjs` to check every normalized frame, fixed scaling, common median head size, exposure preservation and contact/flight placement. Earlier gesture/walk/remaining tests continue checking their original action sources; the scale test validates the final transformed exports. Head turns, nods, expression shape changes and independently drawn anatomy can still change the silhouette; a scale lock does not redraw those proportions.


### Front_Hi arm repair

The current Front_Hi uses intact whole-character drawings from `animation/sparky/improved/18-front-hi/front-hi-v8/`. The previous cutout-arm rig is inactive. Its 21 exposures run for 2245 ms and lower the hand along the reversed lift sequence. The published sheet remains `animations/18-front-hi/spritesheet-scale-v6.png`.

Optimized sheets use `frameMap`: never assume playback frame i is physical cell i. The bundled player handles this automatically.


### Party whistle

| 28 | `Blowing_Whistle` | 46 stored poses | 2s | Loop | [Use this clip](animations/28-blowing-whistle/animation.md) |

Find it under Celebrations in the library. A rainbow paper blower extends and retracts while Sparky holds it to his lips. Includes PNG, timing, frame map and integration guide. This is a visual animation; no sound file is bundled.


### Cute Bounce Dance

The rejected hands-on-hips dance is replaced by a simple happy two-beat bounce with raised fists and a close stance. [Open the new dance](demo.html?animation=27-intro-dance-lu-dance-hipmove). Its stable asset ID is retained for existing game links; the exported name is `Cute_Bounce_Dance`. Earlier dance drafts are inactive and excluded from ZIPs.


### Both dance choices

- [Cute Bounce Dance](demo.html?animation=27-intro-dance-lu-dance-hipmove): little raised-fist bounce.
- [Hip Dance](demo.html?animation=29-hip-dance): restored hands-on-hips sway.

Both are active, independently selectable and included in ZIP exports.
