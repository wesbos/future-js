var fs = require('fs'),
    request = require('request');

var download = function(callback){
  const uri = images.pop(); // take the last one off
  request.head(uri, function(err, res, body){
    const extension = res.headers['content-type'].split('/').pop();
    const fileName = `${uri.split('/')[3]}.${extension}`;
    console.log("downloading...", fileName);
    request(uri).pipe(fs.createWriteStream('images/screenshots/' + fileName)).on('close', callback);
  });
};


var images = [
"http://wes.io/fgHm/content",
"http://wes.io/ffxI/content",
"http://wes.io/fg83/content",
"http://wes.io/fh59/content",
"http://wes.io/fgzx/content",
"http://wes.io/fgh5/content",
"http://wes.io/fgnB/content",
"http://wes.io/fhDp/content",
"http://wes.io/fgx0/content",
"http://wes.io/fgIK/content",
"http://wes.io/fg1n/content",
"http://wes.io/fgbz/content",
"http://wes.io/fggs/content",
"http://wes.io/fgfW/content",
"http://wes.io/fgir/content",
"http://wes.io/fgnM/content",
"http://wes.io/fffe/lol",
"http://wes.io/ffjW/lol",
"http://wes.io/ffq2/content",
"http://wes.io/ffls/content",
"http://wes.io/ffjT/content",
"http://wes.io/ffsj/content",
"http://wes.io/fgUE/content",
"http://wes.io/fgCq/content",
"http://wes.io/fgHO/content",
"http://wes.io/fgLW/content",
"http://wes.io/fgCZ/content",
"http://wes.io/ffvp/content",
"http://wes.io/fgsY/content",
"http://wes.io/fgnc/content",
"http://wes.io/fgl6/content",
"http://wes.io/fgvC/content",
"http://wes.io/fgck/content",
"http://wes.io/fh1U/content",
"http://wes.io/fgXl/content",
"http://wes.io/fh6L/content",
"http://wes.io/fgiQ/content",
"http://wes.io/fgzh/content",
"http://wes.io/fgfo/content",
"http://wes.io/fgmB/content",
"http://wes.io/fgrF/content",
"http://wes.io/fh01/content",
"http://wes.io/fgdA/content",
"http://wes.io/fhAQ/content",
"http://wes.io/fh13/content",
"http://wes.io/fhAe/content",
"http://wes.io/fh0F/content",
"http://wes.io/fh8u/content",
"http://wes.io/fgbo/content",
"http://wes.io/fgWF/content",
"http://wes.io/fgmT/content",
"http://wes.io/fgbG/content",
"http://wes.io/fgz3/content",
"http://wes.io/fgbJ/content",
"http://wes.io/fh2l/content",
"http://wes.io/fgWl/content",
"http://wes.io/fgyV/content",
"http://wes.io/fgYU/content",
"http://wes.io/fgtC/content",
"http://wes.io/fgrg/content",
"http://wes.io/fgfu/content",
"http://wes.io/fgzX/content",
"http://wes.io/fgzk/content",
"http://wes.io/fhEM/content",
];

function start() {
  console.log('done');
  if(images.length) {
    download(start);
  }
}

download(start);
