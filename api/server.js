import express from "express"
import ownerRouter from './owner.js'
import authorRouter from './authors.js'
import bookstoreRouter from './bookstores.js'
import bookRouter from './books.js'

const server = express()

server.use(express.json())

server.use("/api/owners", ownerRouter)
server.use('/api/authors', authorRouter )
server.use('/api/bookstore', bookstoreRouter )
server.use('/api/books', bookRouter )

export default server