/* eslint-disable */


const video = document.querySelector('.handsome');

async function go() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
}

const strip = document.querySelector('.strip');
const canvas = document.querySelector('#paint');
const ctx = canvas.getContext('2d');

function takePhoto() {
  console.log('Taking photo!');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome.jpg');
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firsChild);
}




go().catch(err => {
  alert(err.message);
});
