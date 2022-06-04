const http = require('http')

const requestListener = (request, respond) => {
  respond.setHeader('Content-Type', 'text/html')
  respond.statusCode = 200
  const { method } = request

  if (method === 'GET') {
    respond.end('<h1>Res GET!</h1>')
  }

  if (method === 'POST') {
    let body = []

    request.on('data', (chunk) => {
      body.push(chunk)
    })

    request.on('end', () => {
      body = Buffer.concat(body).toString()
      respond.end(`<h1>Hai, ${body}!</h1>`)
    })
  }
}

const server = http.createServer(requestListener)
const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})
