// Import server here and start the application
import server from './api/server.js'

const port = 8000

server.listen(port, () => console.log("server running on por 8000"))