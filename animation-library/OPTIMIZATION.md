# Lossless animation optimization

Use frameMap[i] to locate each timed exposure in the deduplicated atlas. All distinct drawings and original durations are retained.

| Animation | Original cells | Stored poses | PNG before | PNG after |
| --- | ---: | ---: | ---: | ---: |
| Idle | 60 | 31 | 4.45 MiB | 2.06 MiB |
| Idle_EB | 85 | 49 | 6.95 MiB | 3.96 MiB |
| Intro/Lucas_Room_Touch/Lu_Wondering | 17 | 9 | 2.61 MiB | 1.12 MiB |
| Room_Game/Lu_N_Look_Left | 10 | 6 | 0.89 MiB | 0.47 MiB |
| Room_Game/Lu_N_Look_Right | 22 | 12 | 1.92 MiB | 0.88 MiB |
| Common/Walk/Lu_Walk_Left | 8 | 8 | 1.22 MiB | 0.98 MiB |
| Common/Walk/Lu_Walk_Right | 8 | 8 | 1.34 MiB | 1.05 MiB |
| Common/Happy_Walk/Lu_Happy_Walk_Left | 8 | 8 | 1.24 MiB | 0.98 MiB |
| Common/Happy_Walk/Lu_Happy_Walk_Right | 8 | 8 | 1.23 MiB | 0.98 MiB |
| Running_Animation | 8 | 8 | 1.09 MiB | 0.92 MiB |
| Toy_Garden/Happy_Jumping | 8 | 8 | 1.16 MiB | 0.98 MiB |
| Smiling | 8 | 8 | 1.12 MiB | 0.94 MiB |
| Wow | 17 | 9 | 2.50 MiB | 1.10 MiB |
| N2/Lu_Laugh_03_Tummy_Hand | 8 | 5 | 1.11 MiB | 0.58 MiB |
| Lu_Brave | 9 | 9 | 1.35 MiB | 1.12 MiB |
| Entry_Thumbs_Up | 9 | 9 | 1.37 MiB | 1.12 MiB |
| Clapping | 16 | 9 | 2.30 MiB | 1.08 MiB |
| Front_Hi | 21 | 10 | 3.54 MiB | 1.36 MiB |
| C_Saying_Yes | 17 | 9 | 2.46 MiB | 1.07 MiB |
| Saying_No | 17 | 9 | 2.49 MiB | 1.11 MiB |
| Entry_Pointing | 8 | 8 | 1.19 MiB | 1.00 MiB |
| Lu_Air_Hugs | 15 | 8 | 2.29 MiB | 0.98 MiB |
| Toy_Garden/Lu_Seat_Idle | 70 | 36 | 4.51 MiB | 2.28 MiB |
| Sequence/4/Sleep | 80 | 41 | 2.13 MiB | 1.04 MiB |
| Sequence/4/Sleep_Wakeup | 9 | 9 | 1.17 MiB | 0.98 MiB |
| Juice Mode/Idle_To_Pick_Glass | 9 | 9 | 1.61 MiB | 1.27 MiB |
| Cute_Bounce_Dance | 48 | 47 | 4.32 MiB | 4.04 MiB |
| Blowing_Whistle | 60 | 46 | 1.67 MiB | 1.06 MiB |
| Hip_Dance | 48 | 25 | 2.67 MiB | 1.51 MiB |

Total: 711 original exposures → 461 stored poses. PNGs: 63.9 → 38.0 MiB.
