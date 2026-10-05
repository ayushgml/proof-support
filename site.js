// Every gallery remains available without JavaScript. Native buttons work with keyboard and touch.
const controls = [...document.querySelectorAll("[data-gallery]")];
const panels = [...document.querySelectorAll("[data-gallery-panel]")];
function selectGallery(name) {
  controls.forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.gallery === name)),
  );
  panels.forEach((p) => {
    p.hidden = p.dataset.galleryPanel !== name;
  });
}
controls.forEach((b) =>
  b.addEventListener("click", () => selectGallery(b.dataset.gallery)),
);
if (controls.length) selectGallery("iphone");
