let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');
let URL = 'https://habr.com/ru/post/';
let x = 1;
let n = 1;
let data = [];

req();

function req() {

  request(URL + x, function (err, res, body) {
    if (err) throw err;
    if (res.statusCode === 200) {
      if (isInteger(x / 1000)) {
        n++;
        data = [];
      }
      let $ = cheerio.load(body);
      data.push({
        title: $('.post__title-text').text(),
        text: $('.post__text.post__text-html.js-mediator-article').text(),
        href: URL + x,
      });
      fs.writeFileSync(`data${n}.txt`, JSON.stringify(data), 'utf8');
      if (err) throw err;
      x++;
      return req();
    } else {
      x++;
      return req();
    }
  });
}

function isInteger(num) {
  return (num ^ 0) === num;
}