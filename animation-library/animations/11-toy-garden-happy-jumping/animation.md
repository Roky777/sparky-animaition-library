# Toy_Garden/Happy_Jumping

Anticipate, jump into the air, descend, land and recover.

## Files and paths

- [Sprite sheet](spritesheet-optimized-v1.png)
- [Playback metadata](animation.json)
- Portable folder: `animation-library/animations/11-toy-garden-happy-jumping/`
- Working export: `animation/sparky/improved/11-toy-garden-happy-jumping/optimized-v1/spritesheet.png`
- Original input: `unpolished anmations/11_Toy_Garden_Happy_Jumping.png`

## Layout

| Setting | Value |
| --- | --- |
| Sheet | 2048 × 1280 RGBA PNG |
| Cell | 512 × 640 px |
| Grid | 4 columns × 2 rows |
| Frames | 8 |
| Duration | 1220 ms |
| Loop | false |
| Ground/root | (256, 592) |
| Reference scale | 400 px standing height |

The atlas stores 8 unique cells. The playback timeline has 8 exposures. For exposure i, use cell = frameMap[i], then crop x=(cell%columns)*cellWidth, y=Math.floor(cell/columns)*cellHeight. Repeated poses reuse the same stored cell. Do not play the physical atlas cells in order. Use the shared root and scale across animations; do not resize each changing pose separately. Seated/lying poses are naturally shorter; jump flight must stay above the floor.

## Timing

Use these durations in milliseconds for cells in playback order:

```json
[180,80,100,70,110,80,100,500]
```

Play once and hold the final pose. Restart deliberately; do not loop an item pickup or wake-up into its beginning.

## Play in a browser

Put this HTML inside `animation-library/` and serve it over HTTP:

```html
<canvas id="character" style="height:500px;width:auto"></canvas>
<script type="module">
  import { SpriteSheetPlayer } from "./player.js";
  const player = await SpriteSheetPlayer.load(
    document.querySelector("#character"),
    "./animations/11-toy-garden-happy-jumping/animation.json"
  );
  player.play();
  // player.seekFrame(0); // Pause and inspect a zero-based cell.
</script>
```

In another engine, map exposure i to cell=frameMap[i], then crop at `x=(cell%4)*512`, `y=Math.floor(cell/4)*640`, width512, height640; advance by `frameDurationsMs[i]`.

## Breathing

The action supplies its own body motion; no extra breathing deformation during locomotion, laughter, flight or waking.

## Review

New variant: visual review is pending. Check identity, neighbor continuity, actual hand/foot contacts, neck/collar joins and the loop seam or final hold at 1× and 0.5×. Metadata checks verify packing and timing; they do not certify motion quality.

[Open in animator](../../demo.html?animation=11-toy-garden-happy-jumping) · [Back to library](../../README.md)
