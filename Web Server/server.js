const http = require('http')

const requestListener = (request, respond) => {
  respond.setHeader('Content-Type', 'application/json')
  respond.setHeader('X-Powered-By', 'NodeJS')
  const { url, method } = request

  if (url === '/') {
    if (method === 'GET') {
      respond.statusCode = 200
      respond.end('<h1>Ini adalah homepage!</h1>')
    } else {
      respond.statusCode = 400
      respond.end(`<h1>Halaman tidak dapat diakses dengan ${method} request!</h1>`)
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      respond.statusCode = 200
      respond.end('<h1>Halo! Ini adalah halaman about</h1>')
    } else if (method === 'POST') {
      let body = []

      request.on('data', (chunk) => {
        body.push(chunk)
      })

      request.on('end', () => {
        body = Buffer.concat(body).toString()
        const { name } = JSON.parse(body)
        respond.statusCode = 200
        respond.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`)
      })
    } else {
      respond.statusCode = 400
      respond.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`)
    }
  } else {
    respond.statusCode = 404
    respond.end('<h1>Halaman tidak ditemukan!</h1>')
  }
}

const server = http.createServer(requestListener)
const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})
