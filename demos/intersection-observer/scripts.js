/* eslint-disable */


const options = {
  // Specify the scroller, uses viewport if omitted
  root: document.querySelector('.scrollingDiv'),
  // Optional margin offset
  rootMargin: '100px',
  // Thresholds as to when you'd like it to alert you
  // off, half, and totally on
  threshold: [0, 0.5, 1.0],
};


const callback = (entries, observer) => {
  // Entries are elements that are within view
  entries.forEach(entry => {
    // only using 1.0 threshold here
    if (entry.isIntersecting && entry.intersectionRatio >= 1) {
      console.log(entry);
      entry.target.classList.add('visible'); // CSS will animate it in
    } else {
      entry.target.classList.remove('visible'); // animate out
    }
    // at this point you can also un-observe for a single animation
    // observer.unobserve(entry.target);
  });
};



const observer = new IntersectionObserver(callback, options);






// get some elements to observe
const boxes = document.querySelectorAll('.box');
// Observe each of those elements
boxes.forEach(box => observer.observe(box));
