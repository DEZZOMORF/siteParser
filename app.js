const app           = require('express')();
const fs            = require('fs');
const request       = require('request');
const port          = 1000;
const url           = "https://habr.com"

app.get("/", (req, res) => {
    request(url, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    fs.writeFile('text.html', body, function (err) {
        if (err) return console.log(err);
        res.send("Файл создан");
      });
});
})

app.listen(port, () => console.log('Start on port: ' + port));