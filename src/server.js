import dotenv from 'dotenv'
import express from 'express'

import startPage from './routes/start.js'
import toolboardPage from './routes/toolboard.js'
import accountPage from './routes/account.js'
import notFoundPage from './routes/not-found.js'

const server = express()
const port = 3000

dotenv.config()

server.set('view engine', 'ejs')
server.set('views', './src/views')

server.use(express.static('./src/static'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', startPage)
server.get('/toolboard', toolboardPage)
server.get('/account', accountPage)
server.get('**', notFoundPage)

server.listen(port, () => console.log(`App is served on port http://localhost:${port}/`))