# Repair and review status

The reported floating shoe fragment came from a neighboring source drawing crossing a nominal cell boundary. Rectangular row cuts did not solve it. The 23 generated exports now use complete-figure ownership masks: eroded cores identify individual figures, then original RGBA pixels are restored around each core. The four earlier exports remain unchanged.

## Left walk: drawn replacement

The v3 cutout rig was rejected because it distorted the legs and produced visible arm/hip cuts. It is inactive. Its numerical contact and connectivity checks did not establish acceptable artwork.

The current `Common/Walk/Lu_Walk_Left` export uses twelve complete newly drawn figures from built-in imagegen, selected from two half-cycle sheets and packed into a 750 ms loop. Full figures remain intact: only a uniform whole-figure scale and translation are applied. Source half-cycles, the opposite-contact reference, rejected drafts and every exact prompt are saved in the working folder. Source drawing order is recorded in `animation-drawn-v4.json`; prompts are in `drawn-v4-prompts.json`.

`node tests/walk-drawn.cjs` verifies complete connected silhouettes, no output clipping, no detached fragments and consistent head scale. The reviewed contact page is `../output/review/walk-drawn-v4-contact.png`. The replacement still requires artistic review for pose spacing and source contour continuity; the file checks do not make it a perfect animation.

## Targeted six-frame correction v5

Walk cells6–11 now use a matched six-frame redraw. The exaggerated passing knee received an additional single-frame correction. All other six PNG cells are byte-identical to v4, verified by `tests/walk-drawn.cjs`. Current sheet: `animations/06-common-walk-lu-walk-left/spritesheet-drawn-v5.png`; six-frame review sheet: `../animation/sparky/improved/06-common-walk-lu-walk-left/06_six_corrected_v5.png`. Exact built-in imagegen prompts are saved in `drawn-v5-prompts.json` in that working folder. The current whole-figure scale and contact registration are recorded in `animation-drawn-v5.json`.

## Repairs applied

- Figure masks prevent neighboring artwork from being copied into another cell. Source extraction audits are saved as `extraction-audit-v2.json` in the working folders.
- Invariant-head actions reuse one complete head drawing. Glove masks preserve hands that pass in front of the chin; original head-outline remnants are removed from the body layer.
- Stationary gestures correct neck-to-floor model-height drift. Walks keep a fixed head size, grounded soles and a small periodic bob instead of random height changes.
- Smile, nod and shake use one unchanged body, preventing shirt and lower-body redraw flicker.
- Standing idle, seated idle and sleep use one source drawing with localized continuous breathing, sampled every 40 ms. Standing soles remain fixed; seated and sleeping heads and floor contacts are protected. These clips have 60, 70 and 80 playback cells respectively.
- Clapping excludes the faulty crouched closing rows. A coherent five-drawing approach plays forward then backward in eight cells, with a brief contact exposure and a 600 ms loop. Extra repeated cells are not presented as new drawings.
- Working registry, portable sheets, individual frames, metadata and guides point to the repaired exports. Source artwork and previous versions remain recoverable.

## Verification

`node tests/figure-extraction.cjs` exercises nonuniform rows, crossings and thin connections between adjacent figures. `python3 tests/sparky-repair.py` checks all 644 playable cells for blue fragments above the flame head, fixed lower-body regions, breathing contacts/seams, landmark drift and the clap sequence. `node tests/sprite-player.mjs` checks exposure timing, looping, one-shot endings, seeking, pause/resume and speed across all 27 clips. `validation-report.json` records dimensions, transparency, edge clipping, source/copy hashes and registry parity.

All 27 clips decoded in the browser after the repairs; see `../output/review/browser-repair-load-checks.json`. Contact review pages are `../output/review/repaired-page-1.png` through `repaired-page-3.png`. These are sampled visual checks, supplemented by all-frame checks on the repaired cutting and registration failures.

## Remaining source limitations

These exports are still under visual review. The right walk, happy walks, run, jump, wake-up and pickup retain independently drawn body poses. Their limb construction, contact spacing and some transitions remain uneven; a clean cut and correct timer cannot reconstruct missing motion drawings. The older left/right look and wondering clips also retain their existing transition drawings. They are not newly redrawn or certified production-ready by this repair.

Review at 1× and 0.5× with frame stepping. A production pass on those actions requires corrected body drawings or a consistent character rig, rather than adding duplicate exposures or blending mismatched images. Exact generation prompts, original source sheets and inactive experiments are retained in `../animation/sparky/improved/`.

## Research-first study (not published)

A separate researched-v6 study records human-gait sources, an authored8-key schematic and8 key drawings. The partial preview contains3 provisional in-betweens;5 intervals remain unresolved because generated drafts reverse support identities, regress to contact or merge shoes. The original24-frame target is not complete. No new production approval is claimed, and the main manifest still uses drawn-v5. `key-lock.json` verifies all8 original key files; raw RGBA packing also preserves their exact pixels in the partial sheet. See [research preview](demo.html?animation=06-common-walk-lu-walk-left).

## Approved gait and matching variants (v6)

The user approved the eight-key research sequence; it is now the active left walk, with original drawings and timing preserved. Right walk, happy left/right walks and Smiling have new eight-drawing exports using whole-figure extraction and the shared root. These variants await user review. Provisional research in-betweens remain separate. Exact built-in imagegen prompts and source artwork are in each working `approved-v6/` folder.

## Right-walk correction (v7)

The right walk was regenerated directly from the approved left-walk sheet, focusing on the corresponding forward-arm and raised-boot poses. Only the right clip was republished. Eight frames, one-second variable timing, 512 × 640 cells and root (256,592) match the left clip. Artwork is a generated directional adaptation, not a pixel-exact mirror; visual review remains pending. Sources, exact built-in imagegen prompt and loose frames are in `animation/sparky/improved/07-common-walk-lu-walk-right/approved-v7/`.

## Stationary gesture redraws (v3)

Entries 13–20 have new nine-stage built-in imagegen artwork, packed as complete figures. Head width is normalized and rendered soles are snapped to y592; no separated head/body layers are used. Source stages are reused for exact recovery paths and contact/terminal holds are explicit. Clipping, disconnected fragments, head-scale range and source/cell pixel parity are checked by `tests/gesture-polish.cjs`. Earlier artwork and metadata are preserved. These checks do not establish zero contour flicker or production approval. Review all eight at `gesture-review.html` and inspect the individual frames in the main animator.

## Remaining fourteen clips (v3)

Eight actions have new whole-character stages: Wondering, Run, Jump, Pointing, Air Hugs, Wake-up, Glass Pickup and Hip Dance. Running received pose-guide and four single-pose arm corrections. Flight frames have explicit clearance. The pickup reuses one empty pedestal behind the actor/cup and moves the initial glass onto that pedestal. Dance uses one intact source image with a continuous hip/shoulder displacement field and byte-identical shoe rows; it remains a subtle texture-based sway.

Six existing loops (Idle, blink, left/right look, seated idle, sleep) retain their exact image pixels and timing apart from whole-cell integer vertical translations. No independent redrawing was needed.

`tests/remaining-polish.py` checks 461 cells across these fourteen exports. Runtime metadata, timing, contact/flight placement, the static pedestal, fixed dance shoes and loop seam pass. Tests do not certify perfect anatomy, zero contour variation in generated drawings or final production quality. Review `remaining-review.html` at normal and half speed. Original assets, prompt sets, rejected candidates and earlier metadata remain available.


## Hip dance replacement (v4)

The user rejected the one-image displacement sway. It is now inactive. The active hip dance uses five selected complete drawings in eight playback cells: center, left transition, left extreme, left transition, center, right transition, right extreme, right transition. Hands rest on the hips; knees yield beneath the shifting pelvis. The 860 ms cycle gives each extreme a 160 ms exposure. The same drawings are reused for return paths, preventing independent return-drawing contour changes. Source stages with redundant extreme poses or extra shoe spread are excluded.

Working assets, stages, source candidates, and exact built-in imagegen prompts are in `animation/sparky/improved/27-intro-dance-lu-dance-hipmove/dance-v4/`. Rebuild with `node tools/build-dance-drawn.cjs`. Publishing prioritizes `animation-dance-v4.json`; the remaining-v3 builder skips the rejected warp.

All eight playable cells retain a 218 px warm-head width, connected complete silhouettes and opaque soles at y592. Tests verify opposite-direction shorts movement, exact repeated recovery cells, packing, timing and a loop seam no larger than interior changes. Shoe-color centroids vary by less than seven source pixels; independently drawn outlines still vary. This is a keyed animation for review, not a claim of subpixel-locked feet or production approval.


## Run vibration registration fix (v4)

The old neck landmark drifted into arm pixels during flight. Head centers jumped from x256 to x308 and x301.5 in frames 4 and 8. `registered-run-v4/` now translates complete RGBA drawings horizontally by [0,0,1,-52,0,1,0,-45] pixels. Head-center range is at most one pixel; no head/body seams or drawing changes are introduced. Vertical placement and flight clearance remain unchanged. Each step uses 80/65/65/110 ms contact/compression/passing/flight exposures, giving a 640 ms loop.

`animation-run-v4.json` takes precedence during publication. Original artwork, prompts and timing remain in `remaining-v3/`; rebuild using `node tools/register-run-v4.cjs`. Tests compare every corrected pixel to the corresponding translated original, verify the lateral-flight regression, timing parity, roots and packing. This fixes the large registration lurch, while independently drawn pose contours and uneven vertical body proportions remain a source-art limitation. Visual approval remains pending.


## Sleep nose bubble (v4)

Added a translucent teardrop bubble attached at nose (213,475). The original nose region is byte-identical throughout the breathing cycle, so this attachment stays fixed. A cosine-eased radius grows from 8 px to 22 px and shrinks over the existing 3200 ms, 80-frame loop. The effect is baked into the sprite sheet and individual frames, with no player-specific effect required. Editable `bubble.svg` and isolated overlay frames are saved in `animation/sparky/improved/24-sequence-4-sleep/sleep-bubble-v4/`.

All source character pixels outside the overlay are byte-preserved, including transparent RGB and the ground contacts. Tests verify radius range, growth/shrink sequence, loop continuity, unchanged character pixels, packing and playback. Rebuild with `node tools/build-sleep-bubble.cjs`; publication prioritizes `animation-sleep-bubble-v4.json`.


## Clear dance steps (v5)

The active dance replaces the previous hip-only sway with new built-in imagegen full-character side-step and feet-together tap poses. Seven selected source drawings form eight chronological playback cells over 960 ms; cells 1 and 5 use exactly the same center drawing. Tap exposures are 160 ms. All poses retain the same asymmetrical flame orientation, forward view and hands-on-hips gesture.

Working source, exact prompt, complete stages, playback frames and sheet are in `animation/sparky/improved/27-intro-dance-lu-dance-hipmove/dance-v5/`. Rebuild with `node tools/build-dance-steps.cjs`. Publishing prioritizes `animation-dance-v5.json`; v4 remains recoverable.

Checks verify actual wider shoe spans on side steps and narrower spans on taps, connected silhouettes, transparent margins, head-width range within two pixels, head-center range within two pixels, opaque ground contact at y592, the exact reused center and a small loop seam. The drawings are independently authored key poses; those checks do not establish frame-perfect limb trajectories or final artistic approval. This version is available for visual review at normal and half speed.


## Breathing across the library

Added pose-aware runtime breathing to 22 clips: stationary gestures receive a 3 px rise over 3200 ms, while moving actions receive 0.65 px. Idle, blink, seated and sleep use baked breathing instead. Glass pickup is excluded from the whole-sheet transform to protect the rigid pedestal. The bundled player and root sprite runner share one continuous vertical mapping with rigid upper drawing, C1 chest extension and fixed lower-contact band. Per-frame anatomy bands are recorded in `breathEffect`; runtime effects are not baked into those 22 PNGs.

The breathing clock continues across action-loop wraps and final one-shot holds. Explicit Pause, seek and destroy stop it. The source action timer and exposure sequence remain unchanged. Tests verify continued drawing during held frames, breathing after a one-shot completes, shared mapped boundaries, fixed lower-body region, pause behavior and invalid-parameter rejection.

Seated idle replaces the old barely visible local chest ripple with a continuous 3.8 px upper-body rise, baked at 25 fps over 2800 ms. It uses one canonical intact character; rows535+ are byte-identical across all70 frames. Source artwork is in `registration-v3/`; new exports are in `breathing-v5/`. Per-pixel checks verify fixed contacts, the visible rise and a symmetric seamless cycle. Visual review remains pending.


## Common scale correction (v6)

Audited all active frames and found separate scale conventions: seated/sleeping median opaque head silhouettes were approximately28% larger in area than Idle; walk and expression families also used different scales. All27 clips now use one common standing-idle head-silhouette area reference (31602 source pixels). A single fixed whole-character scale is applied to every original frame in a clip, about root(256,592). Original exposure sequences and loop settings are unchanged. Contact frames retain y592; flight clearance scales about that root. No changing pose bounds or per-frame scale estimates drive playback.

Each `scale-v6/` folder preserves the pre-normalization complete source sheet and metadata. One resize from the source prevents cumulative resampling. The published `spritesheet-scale-v6.png` is authoritative; earlier exports remain recoverable. Median normalized head-silhouette areas differ by less than0.5% across27 clips. Baked breathing and the sleep bubble transform with the character; runtime breathing bands are recomputed from normalized art.

`tests/library-scale.cjs` checks actual final cells, reference size, fixed per-sheet transforms, whole-figure extent ratios, contact/flight placement, original exposures and packed/loose pixel parity. Existing gesture/walk/remaining regression checks now explicitly inspect their preserved pre-scale action sources; the new scale checks cover their transformed outputs. Opaque head masks can change at touching glove edges, so whole-figure extent checks avoid mistaking occlusion for a zoom. This scale correction preserves intentional projection, breathing and existing source drawing proportions. Those pose differences are not certified as newly corrected anatomy.


## Front_Hi cutout repair (v8)

Removed the active isolated-arm compositing and shoulder-rotation inbetween that left gaps beside the sleeve and glove. Every exposure now matches an intact registered source drawing byte for byte before common scale normalization. Ten authored drawings form 21 timed exposures over 2245 ms; lowering exactly reverses the lift. New output is in `18-front-hi/front-hi-v8/`; the rejected v7 rig remains recoverable but inactive. Low-arm and raised-hand poses were inspected in the browser. Source drawing differences remain; this change does not certify zero vibration.

`node tests/front-hi-and-dance.cjs 18-front-hi` checks intact source parity, connected artwork, clipping, source pose count, exposure timing and exact recovery. `node tests/sprite-player.mjs` passes for all 27 clips.


## Dance glove/contact cleanup

Removed disconnected old glove outlines and shoe specks from the HipMove lower-body layers. The fixed glove mask now uses a narrow outline expansion so it cannot retain shorts stripes. Moving glove masks preserve nearby garment stripes. The connected pants and legs are kept; their contact alignment moves only the lower body and extends the waist underneath the intact shirt. Opaque fixed-upper pixels prevent changing underlying art from leaking through. This removes the previous five-pixel vertical jumps caused by specks influencing sole detection.

All16 final cells now retain identical upper-body pixels and planted soles at y592, with the same clip-wide scale. Existing step/tap, mirrored-leg, timing, loop and common-scale checks pass. The tap and wide-step poses were checked in the browser. No new source drawings or extra timing frames were added.

## Library-wide motion stability pass

All 27 current clips were measured and contact sheets inspected. The final cells contain no clipped figure at a cell edge; separate connected parts only occur in glass pickup, where the pedestal is intentional. Common-scale checks cover the final PNGs rather than metadata alone. Pose-contour measurements and contact sheets are retained in `output/library-motion-review/`.

Removed runtime breathing from the four approved walks, running, jumping, tummy laughter and wake-up. These actions already contain their own body motion; an independent chest deformation changed their silhouettes during gameplay. Stationary gestures now use one fixed anatomical breathing boundary throughout each clip, a 1.5 px maximum rise and a 3600 ms cycle. This replaces the previous frame-specific boundaries and 3 px amplitude. Baked idle, blink, seated, sleep and dance retain their existing motion, and pickup retains its rigid pedestal.

This is a playback-stability correction, not a declaration that all original drawings are premium. Several actions still use sparse, independently drawn poses; export checks cannot certify their anatomy or smoothness. Preserve approved walks and review uncertain actions at normal and half speed before replacing source drawings. In particular, head-look projection, Front_Hi drawing differences, jump support/flight transitions and wake-up pose spacing still need artistic review.


## Blowing_Whistle

New Sparky party-blower loop from one complete generated character drawing. The hand, mouthpiece, face, clothes and feet stay fixed. Only the paper beyond the glove changes length with eased extension and retraction; its curled tip keeps a constant size. Duration1600ms at30fps before lossless atlas deduplication. No whistle audio is supplied. Source, exact prompt and build instructions are in `28-blowing-whistle/whistle-v1/`. Tests verify fixed character pixels, connected prop, no clipping, phase length and loop continuity.


## Cute_Bounce_Dance replacement

Replaced the rejected hands-on-hips hip sway with a new complete happy mascot pose: relaxed close stance, softly bent elbows and raised fists. A continuous 5 px vertical bounce gives two gentle beats over1600ms, with small 2 px hand bops. Head proportions stay rigid; shoes remain byte-identical. No separated limb layers or changing frame scale. New source and exact prompt are in `27-intro-dance-lu-dance-hipmove/cute-bounce-v1/`. Old dance artwork is retained only for recovery and is excluded from active exports. The legacy stable ID remains so existing links resolve to the replacement. Pixel, contact, connected-figure, scale, timing and loop tests cover the new output. Artistic approval is still the user’s decision.


## Hip Dance restored as a separate clip

At the user’s request, restored the earlier continuous hands-on-hips sway under `29-hip-dance` / `Hip_Dance`. Cute_Bounce_Dance remains active at its existing ID. The restored clip uses the preserved dance-v9 artwork and motion, common scale normalization, fixed shoe contacts and lossless deduplicated export. There is no added runtime breathing deformation. Both entries are independently selectable in the Dance collection.


## Bounce and party-whistle motion polish

Cute Bounce Dance now rises6 source pixels with small alternating1.5px vertical hand bops, replacing the earlier shared horizontal hand drift. One continuous inverse map preserves clothing/limb joins, a rigid head and byte-identical shoe rows. No additional runtime breathing is applied. The two-beat1600ms cycle is still30fps.

Blowing Whistle now reveals paper at its original stripe width; the previous horizontally squeezed strip is removed. The curled tip translates at fractional-pixel positions. A2000ms cycle includes a short rest, eased extension, fully-open hold and eased recoil. Character, grip and mouthpiece remain byte-identical. Tests compare revealed stripe pixels with the fully open source to prevent stripe compression, and check joined anatomy, fixed contacts, loop continuity and source/export parity.

Technical and source-image inspection passed. Live browser inspection was unavailable during this revision, so this update is not marked artistically approved.
