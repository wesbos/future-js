/* eslint-disable */

// function callback(entries, observer) {
//   entries[0].target.innerHTML = `
//     <pre>
//       ${JSON.stringify(entries[0].contentRect, null, ' ')}
//     </pre>`;
// }

// const observer = new ResizeObserver(callback);

// // get some elements to observe
// const element = document.querySelector('.resize');
// observer.observe(element);

function callback(entries, observer) {

  entries[0].target.innerHTML = `
            <pre>
              ${JSON.stringify(entries[0].contentRect, null, ' ')}
            </pre>`;
}

const observer = new ResizeObserver(callback);

// get some elements to observe
const element = document.querySelector('.resize');
observer.observe(element);
