# Cute_Bounce_Dance

A cute little two-beat bounce: happy smile, raised fists, soft knees and tiny hand bops.

## Files and paths

- [Sprite sheet](spritesheet-optimized-v1.png)
- [Playback metadata](animation.json)
- Portable folder: `animation-library/animations/27-intro-dance-lu-dance-hipmove/`
- Working export: `animation/sparky/improved/27-intro-dance-lu-dance-hipmove/optimized-v1/spritesheet.png`
- Original input: `animation/sparky/improved/27-intro-dance-lu-dance-hipmove/cute-bounce-v1/sources/character.png`

## Layout

| Setting | Value |
| --- | --- |
| Sheet | 4096 × 3840 RGBA PNG |
| Cell | 512 × 640 px |
| Grid | 8 columns × 6 rows |
| Frames | 48 |
| Duration | 1600 ms |
| Loop | true |
| Ground/root | (256, 592) |
| Reference scale | 400 px standing height |

The atlas stores 47 unique cells. The playback timeline has 48 exposures. For exposure i, use cell = frameMap[i], then crop x=(cell%columns)*cellWidth, y=Math.floor(cell/columns)*cellHeight. Repeated poses reuse the same stored cell. Do not play the physical atlas cells in order. Use the shared root and scale across animations; do not resize each changing pose separately. Seated/lying poses are naturally shorter; jump flight must stay above the floor.

## Timing

Use these durations in milliseconds for cells in playback order:

```json
[33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33,33,34,33]
```

Wrap after the final exposure; do not append another duplicated endpoint.

## Play in a browser

Put this HTML inside `animation-library/` and serve it over HTTP:

```html
<canvas id="character" style="height:500px;width:auto"></canvas>
<script type="module">
  import { SpriteSheetPlayer } from "./player.js";
  const player = await SpriteSheetPlayer.load(
    document.querySelector("#character"),
    "./animations/27-intro-dance-lu-dance-hipmove/animation.json"
  );
  player.play();
  // player.seekFrame(0); // Pause and inspect a zero-based cell.
</script>
```

In another engine, map exposure i to cell=frameMap[i], then crop at `x=(cell%8)*512`, `y=Math.floor(cell/8)*640`, width512, height640; advance by `frameDurationsMs[i]`.

## Breathing

Dance motion is baked into these cells; no extra runtime transform.

## Review

New variant: visual review is pending. Check identity, neighbor continuity, actual hand/foot contacts, neck/collar joins and the loop seam or final hold at 1× and 0.5×. Metadata checks verify packing and timing; they do not certify motion quality.

[Open in animator](../../demo.html?animation=27-intro-dance-lu-dance-hipmove) · [Back to library](../../README.md)
