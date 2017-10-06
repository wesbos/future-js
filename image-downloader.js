let fs = require('fs'),
  request = require('request');

let download = function(callback) {
  const uri = images.pop(); // take the last one off
  request.head(uri, (err, res, body) => {
    const extension = res.headers['content-type'].split('/').pop();
    const fileName = `${uri.split('/')[3]}.${extension}`;
    console.log("downloading...", fileName);
    request(uri).pipe(fs.createWriteStream('images/screenshots/' + fileName)).on('close', callback);
  });
};

var images = [
  'http://wes.io/mw8s/content',
  'http://wes.io/mvNc/content',
  'http://wes.io/mvvk/content',
  'http://wes.io/mvlO/content',
  'http://wes.io/mw1Y/content',
  'http://wes.io/mvjp/content',
  'http://wes.io/mul6/content',
  'http://wes.io/mul6/content',
  'http://wes.io/mv6R/content',
  'http://wes.io/mufS/content',
  'http://wes.io/mw88/content',
  'http://wes.io/mvxm/content',
  'http://wes.io/mvLf/content',
  'http://wes.io/mvHv/content',
  'http://wes.io/mvPr/content',
  'http://wes.io/muk4/content',
  'http://wes.io/mupq/content',
  'http://wes.io/mvSI/content',
  'http://wes.io/mvbJ/content',
  'http://wes.io/mvMC/content',
  'http://wes.io/mvMC/content',
  'http://wes.io/mw55/content',
  'http://wes.io/mv93/content',
  'http://wes.io/musk/content',
  'http://wes.io/mvNd/content',
  'http://wes.io/mvjO/content',
];

function start() {
  console.log('done');
  if (images.length) {
    download(start);
  }
}

download(start);
