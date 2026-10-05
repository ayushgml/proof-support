# Proof website

Public pages-only deployment source for https://proof.itsayush.dev, hosted on Vercel. No private app source, credentials, analytics, external font requests, or runtime dependencies.

The canonical handoff copy is `AppStore/site/` in the private Proof repository. Copy only this directory when publishing to this public repository, excluding `.vercel/`, `.env*`, and `.DS_Store`. Keep public edits in sync with the private handoff copy.

Vercel: project `proof`, team `ayushgmls-projects`, repository root, production branch `main`, framework Other. `vercel.json` serves static files and clean routes. Connecting the public repository deploys future pushes automatically. Fonts are licensed under assets/fonts/OFL.txt.

GitHub Pages publishes `/docs` on `main`: these small redirect pages preserve the support/privacy/terms URLs inside the submitted build 1.0 (8). Do not configure a GitHub custom domain; proof.itsayush.dev belongs to Vercel.

All screenshot galleries contain real Simulator UI with example data. The extra schedule images show an empty example week. The generated brand backdrop and all eleven original device images are included in the downloadable press kit. No live App Store badge is shown while review is pending.

Release follow-up: once App Store availability is verified, replace the coming-soon text and release FAQ with a link to https://apps.apple.com/app/id6808937820. Do not claim approval before checking it.
