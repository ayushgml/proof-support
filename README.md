# Proof website

Public pages-only deployment source for https://proof.itsayush.dev, hosted on Vercel. No private app source, credentials, analytics, external font requests, or runtime dependencies.

The canonical handoff copy is `AppStore/site/` in the private Proof repository. Copy only this directory when publishing to this public repository, excluding `.vercel/`, `.env*`, and `.DS_Store`. Keep public edits in sync with the private handoff copy.

Vercel: project `proof`, team `ayushgmls-projects`, repository root, production branch `main`, framework Other. `vercel.json` serves static files and clean routes. Connecting the public repository deploys future pushes automatically. Fonts are licensed under assets/fonts/OFL.txt.

GitHub Pages publishes `/docs` on `main`: these small redirect pages preserve the support/privacy/terms URLs inside the submitted build 1.0 (8). Do not configure a GitHub custom domain; proof.itsayush.dev belongs to Vercel.

All screenshot galleries contain real Simulator UI with example data. The extra schedule images show an empty example week. The generated brand backdrop and all eleven original device images are included in the downloadable press kit. Direct App Store download links are live; public availability was verified for India and the US on 2026-10-08.

The home page now has download calls to action, a live-release FAQ, a Smart App Banner identifier and accurate SoftwareApplication data. The metadata names daily accountability, goal planning and habit tracking. Website search metadata supports web discovery; it does not guarantee native App Store ranking.

Proof's X profile is https://x.com/tryproofapp. The footer links to the real
account, the Brand artwork gallery contains its generated header, and the
original press kit contains `Proof/social/x-header.png`. No social embeds or
tracking scripts are loaded on the website.
