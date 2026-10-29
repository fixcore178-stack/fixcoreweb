# FixCore 3D repair design

Reading: a local electronics repair website for customers in Trinidad, with a moving, three-dimensional workshop visual language.
Dials: ENERGY 3 / RHYTHM 3 / MOTION 3. Session direction: the owner explicitly requested substantially more 3D, moving parts and removal of unnecessary content.

- The opening phone is an animated exploded assembly: separating its screen, logic board, battery and screws explains the relationship between repairable parts.
- A separate laptop cutaway introduces the repair process through its lifting keyboard deck, storage module and rotating cooling fan.
- Small phone, laptop, desktop and processor objects identify the service categories without loading a WebGL engine or image assets.
- CSS perspective, metallic shading and contact shadows convey physical materials and layer order, rather than fabricated diagnostic readings.
- The device objects move in repeating, bounded cycles; an explicit pause control persists the visitor's choice and honors reduced-motion settings.
- An intersection observer pauses offscreen scenes to avoid unnecessary animation work.
- Service links tilt only in response to hover on fine-pointer devices; the form itself remains stationary to support accurate input.
- Raised button bases, quote-form depth and shallow surface shadows continue the physical language through the rest of the page.
- Alternating hero, service row, laptop cutaway and quote layout give the page changing compositions without repeated marketing blocks.
- Removed the separate parts diagrams, repeated why-us section, duplicate hours strip, empty gallery/testimonial components and closing CTA band; their useful information already appears in services, contact or the quote builder.
- Kept the local headline, logo, business details, service pages, pricing links, repair policies and existing quote behavior.
- Reduced the homepage FAQ to six questions needed before requesting a repair, with repair terms linked for remaining policies.
- Retained the existing cyan accent, Sora headings and readable Geist body text to keep FixCore recognizable.
- Both dark and light tokens remain active; a working theme choice remains in the header.
- Every device is labeled a simplified illustration; no customer claims, testimonials or diagnostic statistics are invented.

## Model refinement

- Replaced the large CSS perspective models with fixed-view SVG assemblies so edges remain parallel and parts share consistent proportions throughout motion.
- Use matching metal rims, screen glass, battery geometry and cyan wallpaper on phone and laptop to unify materials.
- Removed rotating screws and angle swings; only shallow separation, gentle vertical motion and cooling-fan rotation remain.
- Put component names below the models so labels never cross the device silhouettes.
- Retain the existing pause control, offscreen animation suspension and system reduced-motion support.
- Reduced the service-object angle range to a fixed presentation with a small vertical drift.
- Inspected rasterized SVG output for both large models; full-page browser checks remain necessary after deployment.

## Real 3D models

- Four real glTF models replace the hand-drawn devices. All are CC BY 4.0 from Sketchfab, so the credit must stay visible (footer plus under every viewer): "Custom Gaming PC" by Yolala1232 (PC), "Samsung Galaxy S26 Black [ LOW-POLY ]" by darky.vip21 (phone), "lenovo" by elyas_baloch (laptop) and "Adjustable Spanner/Wrench" by CGWorker (diagnostics). Everything about them (files, posters, camera angles, credit text, what we changed) lives in `src/data/models3d.ts`.
- Web copies are in `public/models/` and are versioned (-v1) because `public/_headers` caches /models/* for a year. Rename to -v2 if a model is ever re-exported.
  - PC: 74 MB / 1.0M triangles down to 2.9 MB. Floor plate removed, each part simplified to about 20% of its triangles, 1024 px WebP textures, meshopt, centred and scaled to 2 units.
  - Phone 30 KB, laptop 0.8 MB, wrench 0.2 MB, same pipeline. Laptop: body lifted from pure black to charcoal and a FixCore wallpaper added to the screen (it had no UVs, so they were generated). Wrench: no material in the source, so a steel finish was added and it is turned to face the camera on a diagonal.
- `Model3D.astro` lazy-loads `@google/model-viewer` (about 950 kB, 265 kB gzipped) and the model only when the element nears the viewport; the hero (`priority`) waits for the page load event instead. A pre-rendered poster shows first and stays as the fallback if WebGL fails; with Save-Data on, visitors tap to load.
- Auto-rotate follows the Pause 3D motion control and reduced-motion. Zoom and pan are off and touch-action is pan-y so the viewer never traps page scrolling.
- Where they appear: hero phone (live), the four service cards (poster images), the laptop section (live), the parts section (every tab shows the live model, with the old exploded diagram as a second view) and a "Take a look inside" section on each of the four service pages.
