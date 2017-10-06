if (navigator.userAgent.includes('Firefox')) {
  document.body.classList.add('firefox');
}

const options = {
  threshold: [0, 1.0],
};

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.parentElement.classList.contains('current')) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
};

const observer = new IntersectionObserver(callback, options);

// get a list of all videos on the page
const videos = document.querySelectorAll('video');
// Observe each of those elements
videos.forEach(video => observer.observe(video));
