import io from 'socket.io-client'

//It connects once, and since 'import' caches, 'socket' is used as a singleton
const socket = io.connect('http://localhost:8080')  
  
export default socket
