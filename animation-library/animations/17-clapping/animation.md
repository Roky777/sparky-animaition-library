# Clapping

Hands approach along matching arcs, touch at the center, and release.

## Files and paths

- [Sprite sheet](spritesheet-optimized-v1.png)
- [Playback metadata](animation.json)
- Portable folder: `animation-library/animations/17-clapping/`
- Working export: `animation/sparky/improved/17-clapping/optimized-v1/spritesheet.png`
- Original input: `unpolished anmations/17_Clapping.png`

## Layout

| Setting | Value |
| --- | --- |
| Sheet | 2048 × 1920 RGBA PNG |
| Cell | 512 × 640 px |
| Grid | 4 columns × 3 rows |
| Frames | 16 |
| Duration | 640 ms |
| Loop | true |
| Ground/root | (256, 592) |
| Reference scale | 400 px standing height |

The atlas stores 9 unique cells. The playback timeline has 16 exposures. For exposure i, use cell = frameMap[i], then crop x=(cell%columns)*cellWidth, y=Math.floor(cell/columns)*cellHeight. Repeated poses reuse the same stored cell. Do not play the physical atlas cells in order. Use the shared root and scale across animations; do not resize each changing pose separately. Seated/lying poses are naturally shorter; jump flight must stay above the floor.

## Timing

Use these durations in milliseconds for cells in playback order:

```json
[70,35,35,35,35,35,35,35,80,35,35,35,35,35,35,35]
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
    "./animations/17-clapping/animation.json"
  );
  player.play();
  // player.seekFrame(0); // Pause and inspect a zero-based cell.
</script>
```

In another engine, map exposure i to cell=frameMap[i], then crop at `x=(cell%4)*512`, `y=Math.floor(cell/4)*640`, width512, height640; advance by `frameDurationsMs[i]`.

## Breathing

The bundled player applies a 1.5 px breath over 3600 ms and continues it during a final pose hold. Parameters and per-frame anatomical bands are in animation.json. Other engines must implement this transform; it is not baked into this PNG.

## Review

New variant: visual review is pending. Check identity, neighbor continuity, actual hand/foot contacts, neck/collar joins and the loop seam or final hold at 1× and 0.5×. Metadata checks verify packing and timing; they do not certify motion quality.

[Open in animator](../../demo.html?animation=17-clapping) · [Back to library](../../README.md)
