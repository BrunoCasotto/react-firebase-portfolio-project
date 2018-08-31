const http = require('http'),
  url = require('url'),
  path = require('path'),
  fs = require('fs'),
  mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
  },
  port = process.env.PORT || 4000


http.createServer((req, res) => {
  let uri = url.parse(req.url).pathname
  let filePath = ''
  if(uri === '/') {
    filePath = path.join(__dirname, '/build/index.html')
  } else {
    filePath = path.join(__dirname, 'build', uri)
  }

  const exist = fs.existsSync(filePath)
  if (exist) {
    const type = path.extname(filePath).split(".")[1]
    const mimeType = mimeTypes[type]

    res.writeHead(200, mimeType)
    const fileStream = fs.createReadStream(filePath)
    fileStream.pipe(res)
  } else {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Not found :/</h1>');
  }
}).listen(port)
