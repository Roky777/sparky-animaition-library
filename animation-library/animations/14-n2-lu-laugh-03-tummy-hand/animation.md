# N2/Lu_Laugh_03_Tummy_Hand

A gentle laugh beat with a hand on the tummy, followed by recovery.

## Files and paths

- [Sprite sheet](spritesheet-optimized-v1.png)
- [Playback metadata](animation.json)
- Portable folder: `animation-library/animations/14-n2-lu-laugh-03-tummy-hand/`
- Working export: `animation/sparky/improved/14-n2-lu-laugh-03-tummy-hand/optimized-v1/spritesheet.png`
- Original input: `unpolished anmations/14_N2_Lu_Laugh_03_Tummy_Hand.png`

## Layout

| Setting | Value |
| --- | --- |
| Sheet | 1536 × 1280 RGBA PNG |
| Cell | 512 × 640 px |
| Grid | 3 columns × 2 rows |
| Frames | 8 |
| Duration | 490 ms |
| Loop | true |
| Ground/root | (256, 592) |
| Reference scale | 400 px standing height |

The atlas stores 5 unique cells. The playback timeline has 8 exposures. For exposure i, use cell = frameMap[i], then crop x=(cell%columns)*cellWidth, y=Math.floor(cell/columns)*cellHeight. Repeated poses reuse the same stored cell. Do not play the physical atlas cells in order. Use the shared root and scale across animations; do not resize each changing pose separately. Seated/lying poses are naturally shorter; jump flight must stay above the floor.

## Timing

Use these durations in milliseconds for cells in playback order:

```json
[105,45,45,45,115,45,45,45]
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
    "./animations/14-n2-lu-laugh-03-tummy-hand/animation.json"
  );
  player.play();
  // player.seekFrame(0); // Pause and inspect a zero-based cell.
</script>
```

In another engine, map exposure i to cell=frameMap[i], then crop at `x=(cell%3)*512`, `y=Math.floor(cell/3)*640`, width512, height640; advance by `frameDurationsMs[i]`.

## Breathing

The action supplies its own body motion; no extra breathing deformation during locomotion, laughter, flight or waking.

## Review

New variant: visual review is pending. Check identity, neighbor continuity, actual hand/foot contacts, neck/collar joins and the loop seam or final hold at 1× and 0.5×. Metadata checks verify packing and timing; they do not certify motion quality.

[Open in animator](../../demo.html?animation=14-n2-lu-laugh-03-tummy-hand) · [Back to library](../../README.md)
