# Animation quality review

All 27 clips received a playback-stability pass. Technical checks passed for all 603 final cells. This report separates those checks from subjective motion quality.

| Animation | Final frames | Runtime secondary motion | Source-art review |
| --- | ---: | --- | --- |
| [Idle](demo.html?animation=01-idle) | 60 | Baked motion only | Continuous baked motion |
| [Idle_EB](demo.html?animation=02-idle-eb) | 85 | Baked motion only | Continuous baked motion |
| [Intro/Lucas_Room_Touch/Lu_Wondering](demo.html?animation=03-intro-lucas-room-touch-lu-wondering) | 17 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Room_Game/Lu_N_Look_Left](demo.html?animation=04-room-game-lu-n-look-left) | 10 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Room_Game/Lu_N_Look_Right](demo.html?animation=05-room-game-lu-n-look-right) | 22 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Common/Walk/Lu_Walk_Left](demo.html?animation=06-common-walk-lu-walk-left) | 8 | Action only | Approved left-walk source retained |
| [Common/Walk/Lu_Walk_Right](demo.html?animation=07-common-walk-lu-walk-right) | 8 | Action only | Check pose spacing and anatomy in studio |
| [Common/Happy_Walk/Lu_Happy_Walk_Left](demo.html?animation=08-common-happy-walk-lu-happy-walk-left) | 8 | Action only | Check pose spacing and anatomy in studio |
| [Common/Happy_Walk/Lu_Happy_Walk_Right](demo.html?animation=09-common-happy-walk-lu-happy-walk-right) | 8 | Action only | Check pose spacing and anatomy in studio |
| [Running_Animation](demo.html?animation=10-running-animation) | 8 | Action only | Check pose spacing and anatomy in studio |
| [Toy_Garden/Happy_Jumping](demo.html?animation=11-toy-garden-happy-jumping) | 8 | Action only | Check pose spacing and anatomy in studio |
| [Smiling](demo.html?animation=12-smiling) | 8 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Wow](demo.html?animation=13-wow) | 17 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [N2/Lu_Laugh_03_Tummy_Hand](demo.html?animation=14-n2-lu-laugh-03-tummy-hand) | 8 | Action only | Check pose spacing and anatomy in studio |
| [Lu_Brave](demo.html?animation=15-lu-brave) | 9 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Entry_Thumbs_Up](demo.html?animation=16-entry-thumbs-up) | 9 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Clapping](demo.html?animation=17-clapping) | 16 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Front_Hi](demo.html?animation=18-front-hi) | 21 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [C_Saying_Yes](demo.html?animation=19-c-saying-yes) | 17 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Saying_No](demo.html?animation=20-saying-no) | 17 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Entry_Pointing](demo.html?animation=21-entry-pointing) | 8 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Lu_Air_Hugs](demo.html?animation=22-lu-air-hugs) | 15 | Stable 1.5 px / 3600 ms breathing | Check pose spacing and anatomy in studio |
| [Toy_Garden/Lu_Seat_Idle](demo.html?animation=23-toy-garden-lu-seat-idle) | 70 | Baked motion only | Continuous baked motion |
| [Sequence/4/Sleep](demo.html?animation=24-sequence-4-sleep) | 80 | Baked motion only | Continuous baked motion |
| [Sequence/4/Sleep_Wakeup](demo.html?animation=25-sequence-4-sleep-wakeup) | 9 | Action only | Check pose spacing and anatomy in studio |
| [Juice Mode/Idle_To_Pick_Glass](demo.html?animation=26-juice-mode-idle-to-pick-glass) | 9 | Action only | Check pose spacing and anatomy in studio |
| [Cute_Bounce_Dance](demo.html?animation=27-intro-dance-lu-dance-hipmove) | 48 | Baked motion only | Continuous baked motion |

Validation: `node tests/library-quality.cjs`, `node tests/library-scale.cjs`, `node tests/sprite-player.mjs`, action regression tests, and `python3 tools/validate-animation-library.py`.

Contact sheets and measurements: `../output/library-motion-review/`. No automatic measurement certifies premium animation or supplies missing inbetween drawings.


Blowing_Whistle was added after the original quality pass. Its fixed grip/body/feet, joined prop, clipping, extension and loop seam are checked by `node tests/whistle.cjs`. Original generated art and exact prompt are in `animation/sparky/improved/28-blowing-whistle/whistle-v1/`. Artistic review remains separate from those checks.


Cute_Bounce_Dance replaces the hip-sway variant. Source: `cute-bounce-v1/`; tests check rigid head size, fixed shoe pixels, two matching bounce beats and the loop seam.


[Hip Dance](demo.html?animation=29-hip-dance) is restored alongside Cute Bounce Dance. The restored clip passes atlas pixel/timing parity, common-scale, runtime playback and resource checks; it retains its original artistic-review status.


Bounce/whistle polish revision2: alternating hand bops with a rigid-head bounce; party paper unrolls without stripe compression and has an eased hold/recoil. Pixel, contact, scale and timing checks pass; live browser review was unavailable.
