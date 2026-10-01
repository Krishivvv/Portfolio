# Life outside work — media

Drop files here and rebuild. `lib/life-media.ts` picks them up for /about (#life) and the home page's About section.

- `basketball-1.jpeg`, `basketball-2.jpeg`, … — basketball photos (any shape; frames follow each photo's own aspect ratio)
- `modelling.mp4` (or `modeling.mp4`) — a short clip: muted, loops while on screen, has a pause button; keep it under 25 MiB
- `modelling-poster.jpg` — the clip's first look (else the first modelling photo)
- `modelling-1.jpg`, … — modelling photos

Descriptions for screen readers live in `content/life.ts` (`mediaAlt`). `source/` keeps originals and is not published.

`modelling.mp4` is `source/modeling-original.mp4` turned upright (it was recorded on its side) and re-encoded for the web:
`ffmpeg -i source/modeling-original.mp4 -vf transpose=2 -an -c:v libx264 -crf 22 -preset slow -pix_fmt yuv420p -movflags +faststart modelling.mp4`
