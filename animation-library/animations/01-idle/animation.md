# Idle

A quiet standing breathing loop.

## Files and paths

- [Sprite sheet](spritesheet-optimized-v1.png)
- [Playback metadata](animation.json)
- Portable folder: `animation-library/animations/01-idle/`
- Working export: `animation/sparky/improved/01-idle/optimized-v1/spritesheet.png`
- Original input: `Sparky_Idle_3_Key_Review.png`

## Layout

| Setting | Value |
| --- | --- |
| Sheet | 3584 × 3200 RGBA PNG |
| Cell | 512 × 640 px |
| Grid | 7 columns × 5 rows |
| Frames | 60 |
| Duration | 2400 ms |
| Loop | true |
| Ground/root | (256, 592) |
| Reference scale | 400 px standing height |

The atlas stores 31 unique cells. The playback timeline has 60 exposures. For exposure i, use cell = frameMap[i], then crop x=(cell%columns)*cellWidth, y=Math.floor(cell/columns)*cellHeight. Repeated poses reuse the same stored cell. Do not play the physical atlas cells in order. Use the shared root and scale across animations; do not resize each changing pose separately. Seated/lying poses are naturally shorter; jump flight must stay above the floor.

## Timing

Use these durations in milliseconds for cells in playback order:

```json
[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]
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
    "./animations/01-idle/animation.json"
  );
  player.play();
  // player.seekFrame(0); // Pause and inspect a zero-based cell.
</script>
```

In another engine, map exposure i to cell=frameMap[i], then crop at `x=(cell%7)*512`, `y=Math.floor(cell/7)*640`, width512, height640; advance by `frameDurationsMs[i]`.

## Breathing

Breathing already exists in these playback cells.

## Review

New variant: visual review is pending. Check identity, neighbor continuity, actual hand/foot contacts, neck/collar joins and the loop seam or final hold at 1× and 0.5×. Metadata checks verify packing and timing; they do not certify motion quality.

[Open in animator](../../demo.html?animation=01-idle) · [Back to library](../../README.md)
