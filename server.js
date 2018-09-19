/*******************
*** DEPENDENCIES ***
*******************/
const express = require('express')
const path    = require('path')
const app     = express()
const port    = process.env.PORT || 8080
const server  = require('http').Server(app)
const io      = require('socket.io')(server)

// Random int from 25 to 75 
const mockTemperature = () => Math.floor(Math.random()*50) + 25


/*************
*** ROUTES ***
*************/
app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'user', 'index.html'))
})


/*************
*** SERVER ***
*************/
server.listen(port, () => {
    console.log('Running on port: ' + port)
})


/*************
*** SOCKET ***
*************/
io.on('connection', socket => {  
    setInterval( ()=> {
        io.emit('temperature', mockTemperature())
    }, 3000)  
})

