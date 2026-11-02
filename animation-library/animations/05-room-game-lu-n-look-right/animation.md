# Room_Game/Lu_N_Look_Right

Turn the head right, hold, then return.

## Files and paths

- [Sprite sheet](spritesheet-optimized-v1.png)
- [Playback metadata](animation.json)
- Portable folder: `animation-library/animations/05-room-game-lu-n-look-right/`
- Working export: `animation/sparky/improved/05-room-game-lu-n-look-right/optimized-v1/spritesheet.png`
- Original input: `unpolished anmations/05_Room_Game_Lu_N_Look_Right.png`

## Layout

| Setting | Value |
| --- | --- |
| Sheet | 2048 × 1920 RGBA PNG |
| Cell | 512 × 640 px |
| Grid | 4 columns × 3 rows |
| Frames | 22 |
| Duration | 2130 ms |
| Loop | true |
| Ground/root | (256, 592) |
| Reference scale | 400 px standing height |

The atlas stores 12 unique cells. The playback timeline has 22 exposures. For exposure i, use cell = frameMap[i], then crop x=(cell%columns)*cellWidth, y=Math.floor(cell/columns)*cellHeight. Repeated poses reuse the same stored cell. Do not play the physical atlas cells in order. Use the shared root and scale across animations; do not resize each changing pose separately. Seated/lying poses are naturally shorter; jump flight must stay above the floor.

## Timing

Use these durations in milliseconds for cells in playback order:

```json
[480,60,40,25,35,40,45,20,55,60,80,730,60,55,20,45,40,35,25,40,60,80]
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
    "./animations/05-room-game-lu-n-look-right/animation.json"
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

[Open in animator](../../demo.html?animation=05-room-game-lu-n-look-right) · [Back to library](../../README.md)
