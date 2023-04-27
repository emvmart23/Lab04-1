const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
    socket.on
    console.log('<h1>Un usuario se ha desconectado<h1>')
})

app.get('/', (req, resp) => {
    resp.end('<h1>Aplicacion de chat<h1>')
})

server.listen(3000,() => {
    console.log('Servidor corriendo en http://localhost:3000')
})