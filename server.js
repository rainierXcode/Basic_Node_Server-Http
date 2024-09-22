let http = require('http');
let fs = require('fs/promises');

http
  .createServer(async (req, res) => {
    try {
      let fileName = null;
      switch (req.url) {
        case '/':
          fileName = './index.html';
          break;
        case '/about':
          fileName = './about.html';
          break;
        case '/contact-me':
          fileName = './contact-me.html';
          break;
        default:
          fileName = './404.html';
      }
      const data = await fs.readFile(fileName, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    } catch (err) {
      console.log(err);
    }

    res.end();
  })
  .listen(8080);
