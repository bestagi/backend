const http = require('http')

const requestListener = (request, respond) => {
  respond.setHeader('Content-Type', 'application/json')
  respond.setHeader('X-Powered-By', 'NodeJS')
  const { url, method } = request

  if (url === '/') {
    if (method === 'GET') {
      respond.statusCode = 200
      respond.end(JSON.stringify({
        message: 'Ini adalah homepage'
      }))
    } else {
      respond.statusCode = 400
      respond.end(JSON.stringify({
        message: `Halaman tidak dapat diakses dengan ${method} request!`
      }))
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      respond.statusCode = 200
      respond.end(JSON.stringify({
        message: 'Halo! Ini adalah halaman about'
      }))
    } else if (method === 'POST') {
      let body = []

      request.on('data', (chunk) => {
        body.push(chunk)
      })

      request.on('end', () => {
        body = Buffer.concat(body).toString()
        const { name } = JSON.parse(body)
        respond.statusCode = 200
        respond.end(JSON.stringify({
          message: `Halo, ${name}! Ini adalah halaman about`
        }))
      })
    } else {
      respond.statusCode = 400
      respond.end(JSON.stringify({
        message: `Halaman tidak dapat diakses menggunakan ${method} request`
      }))
    }
  } else {
    respond.statusCode = 404
    respond.end(JSON.stringify({
      message: 'Halaman tidak ditemukan!'
    }))
  }
}

const server = http.createServer(requestListener)
const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})
