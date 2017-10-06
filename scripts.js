const options = {
  threshold: [0, 1.0],
};

const callback = entries => {
  // Entries are elements that are within view
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.parentElement.classList.contains('current')) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
};

const observer = new IntersectionObserver(callback, options);

// get some elements to observe
const videos = document.querySelectorAll('video');
// Observe each of those elements
videos.forEach(video => observer.observe(video));
