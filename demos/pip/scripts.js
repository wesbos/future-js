const videoEl = document.getElementById('video');
const PiP = document.getElementById('picture-in-picture');

// picture-in-picture
if (videoEl.webkitSupportsPresentationMode && typeof videoEl.webkitSetPresentationMode === 'function') {
  // Toggle PiP when the user clicks the button.
  PiP.addEventListener('click', event => {
    videoEl.webkitSetPresentationMode('picture-in-picture');
  });
} else {
  PiP.disabled = true;
}
