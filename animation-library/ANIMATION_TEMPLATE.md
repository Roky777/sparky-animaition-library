# Animation name

Describe the visible action, start pose and ending pose. State whether it repeats or plays once.

## Files

- Sprite sheet: [spritesheet.png](spritesheet.png)
- Playback data: [animation.json](animation.json)
- Project path: `animation-library/animations/<stable-id>/`
- Original clip name: `<exact clip name>`

## Sprite-sheet layout

| Setting | Actual value |
| --- | --- |
| PNG dimensions | width × height px |
| Cell dimensions | width × height px |
| Grid | columns × rows |
| Playable frames | frameCount |
| Unused cells | columns × rows − frameCount |
| Frame order | Row-major, left to right then top to bottom |
| Total duration | Sum of all frameDurationsMs |
| Loop | true / false |
| Root | x, y within each untrimmed cell |

## Timing

Explain the important movement beats, holds, impacts and recovery. Give exact frame durations from `animation.json`; distinguish uniform FPS from variable frame exposures.

## Play the animation

From an HTML page directly inside `animation-library/`:

```html
<canvas id="character" style="height:400px;width:auto"></canvas>
<script type="module">
  import { SpriteSheetPlayer } from "./player.js";
  const player = await SpriteSheetPlayer.load(
    document.querySelector("#character"),
    "./animations/<stable-id>/animation.json"
  );
  player.play();
</script>
```

Replace the ID with the actual folder name. Explain any engine-specific placement, loop or one-shot ending behavior. Keep cells untrimmed, use their common root and play only `frameCount` cells.

## Notes

Describe baked secondary motion, props, contact points, facing direction, known approximations and review status. State whether the game should apply world movement separately.

[Back to library](../../README.md) · [Open the demo](../../demo.html)
