const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html')
    res.setHeader('Manuel', 'Manuel is awesome')
    res.write('<html>')
    res.write('<head><title>Testing my server</title></head>')
    res.write('<body><h1>Welcome to my server page!</h1>')
    res.write('<a href="https://github.com/manoy96/NodeJS-playground">Here is my Github</a>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
  if (req.url === '/api') {
    const jane = {
      book: 'Pride and Prejudice',
      movie: 'Persuasion',
      age: 41,
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(jane))
    return res.end()
  }
  // if (req.url === '/user'){
  //   const body = [];
  //   req.on('data', chunk => {
  //     body.push(chunk)
  //   })
  //   req.on('end', () => {
  //     const parsedBody = Buffer.concat(body).toString()
  //     console.log(parsedBody.split('=')[1])
  //   })
  //   res.statusCode = 302
  //   res.setHeader('Location', '/')
  //   res.end()
  // }
})

const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
        social: {
            twitter: 'https://twitter.com/',
            facebook: 'https://www.facebook.com/',
        },
    web: {
        blog: 'https://wesbos.com'
    }
    }
};
console.log(wes);
concat()


server.listen(3000)