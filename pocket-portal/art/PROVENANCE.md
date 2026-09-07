# Card artwork

Both images are generated procedurally by `scripts/make-card-art.mjs` from
value noise and gradients written in that file. There is no third-party source
material, no photography and no traced reference, so they carry no licence
obligations and can be redistributed with this project freely.

They are deliberately *not* imitations of any existing trading card. Real
Magic, Pokemon and sports card artwork is copyrighted and could not be used
here.

Deterministic: regenerating produces byte-identical files, so the visual
baselines stay valid. Regenerate with `pnpm run art`.

- `rift-shore.png`   512x512, the Spell Card art window
- `stadium-night.png` 512x512, the Player Card photo window
