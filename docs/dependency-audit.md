# Homepage dependency update — 2026-10-21

Implements the homepage batch from `remote/docs/dependency-upgrade-plan.md` in
the droplet repository. The starting checkout was clean and matched
`origin/main` at `108096f`. Only the manifest, lockfile, and this report change.

## Versions and resolution

Verified published versions with the npm registry on 2026-10-21, then ran
`bun add --dev --exact vite@7.3.7 postcss@8.5.31` and `bun update` (without
`--latest`). Direct pins for Autoprefixer 10.4.27 and Tailwind CSS 3.4.19 remain.
Vite 7.3 is still covered by the [Vite support policy](https://vite.dev/releases).

| Dependency | Before | After |
| --- | --- | --- |
| Vite | 7.3.2 | 7.3.7 |
| PostCSS | 8.5.8; nested 8.5.6 | 8.5.31, shared by Vite and Tailwind |
| esbuild | 0.27.3 | 0.28.2 |
| Rollup | 4.59.0 | 4.64.12 |
| nanoid | 3.3.11 | 3.3.20 |
| source-map-js | 1.2.1 | 1.2.2 |
| picomatch | 2.3.1 / 4.0.3 | 2.3.2 / 4.0.7 |
| Browserslist | 4.28.1 | 4.29.4 |
| baseline-browser-mapping | 2.10.0 | 2.11.30 |
| postcss-selector-parser | 6.1.2 | 6.1.5 |

The lockfile also refreshes compatible supporting packages and browser data.
Vite 7.3.7 declares esbuild `^0.27.0 || ^0.28.0`, so 0.28.2 resolves normally
and clears [GHSA-g7r4-m6w7-qqqr](https://github.com/advisories/GHSA-g7r4-m6w7-qqqr)
(fixed in 0.28.1). No override or esbuild downgrade is needed. `bun why postcss`
confirms that the old nested PostCSS copy has been removed.

## Audits and remaining advisories

`bun audit --json`: 22 distinct advisory IDs across 10 packages before; two
advisories across two packages after. The final full audit intentionally exits
1 because these findings remain. `bun audit --production --json` returns `{}`
and exits 0, both before and after. All dependencies are development tools;
production is static HTML/CSS/JavaScript, with no package-backed server.

| Remaining advisory | Dependency paths | Fix status and decision |
| --- | --- | --- |
| **High:** [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), stack exhaustion in nested brace patterns | `tailwindcss@3.4.19 → micromatch@4.0.8 → braces@3.0.3`; `tailwindcss → fast-glob@3.3.3 → micromatch → braces`; `tailwindcss → chokidar@3.6.0 → braces` | The registry's latest braces is 3.0.3; the advisory reports no published fix. Retain and track upstream. |
| **Moderate:** [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf), quadratic selector parsing | `tailwindcss@3.4.19 → postcss-selector-parser@6.1.5`; `tailwindcss → postcss-nested@6.2.0 → postcss-selector-parser` | Fixed in 7.1.6 (latest 7.1.7), outside both parents' 6.x ranges. Defer a forced major override or Tailwind migration to a separate compatibility change. The compatible update clears the separate recursion advisory GHSA-w9m9-85wc-3x92. |

Exposure assessment: Tailwind scans the repository's root HTML/JS files using
the fixed `./*.html` and `./*.js` patterns in `tailwind.config.js`; PostCSS
processes repository-owned `input.css` and local plugins. There is no upload,
remote CSS import, runtime selector parsing, or user-supplied glob configuration.
These packages operate on trusted build inputs, not visitor requests. Keep
build sources/configuration reviewed and development servers on loopback;
do not process untrusted patterns or CSS with this toolchain. This limits
exposure but does not remove the advisories from the dependency graph.

Recheck when braces publishes a fix or Tailwind/PostCSS Nested offers compatible
patched selector parsing. Reassess this deferral before introducing untrusted
build input. No audit suppression or dependency override was added.

## Validation

Environment: Bun 1.4.3, Node 26.7.0, Linux. This repository defines no automated
test, lint, or type-check scripts and contains no test files.

- `bun install --frozen-lockfile` succeeds in the checkout and in a fresh
  temporary copy without `node_modules`; the frozen install preserves the lock.
- `bun run build` succeeds in both locations. All generated files match the
  pre-upgrade build byte-for-byte (`diff -qr`), including HTML, CSS, JavaScript,
  and copied assets. The outdated Browserslist-data warning is gone.
- `node --check` passes for `music.js`, `vite.config.js`, `tailwind.config.js`,
  and `postcss.config.js`; `git diff --check` passes.
- Full and production-only audits rerun against the final lockfile, with the
  results and exceptions recorded above.
- Production preview on loopback: all 70 built files return HTTP 200 with
  matching content lengths, including waveforms, MP3s, images, and verification
  files. Dev home/music pages, CSS, JavaScript, and Vite client also return 200.
- Browser checks in the in-app Chromium browser at its 1280px desktop viewport:
  home layout/images, home/music links, direct music-page load, back/forward,
  all 17 track entries, previous/next and list selection, play/pause/stop,
  volume-slider interaction, waveform seeking/progress, and the Unicode
  `pół kawałka` MP3/waveform paths pass. Dev mode also loads the track list and
  waveform and plays after a user click. No responsive viewport override used.
- A fresh music-page visit can log the existing `NotAllowedError` from the
  unconditional `audio.play()` before user interaction. Clicking Play succeeds.
  The unchanged player source and byte-identical built JavaScript establish
  that this behavior predates the dependency update; fixing it is separate work.

No merge or deployment is part of this update.
