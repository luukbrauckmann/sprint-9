import dotenv from 'dotenv'
import express from 'express'

import startPage from './routes/start.js'
import toolboardPage from './routes/toolboard.js'
import accountPage from './routes/account.js'
import notFoundPage from './routes/not-found.js'

dotenv.config()
const { env } = process

const server = express()
const host = env.HOST_IP
const port = 3000

server.set('view engine', 'ejs')
server.set('views', './src/views')

server.use(express.static('./src/static'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', startPage)
server.get('/toolboard**', toolboardPage)
server.get('/account**', accountPage)
server.get('**', notFoundPage)

server.listen(port, () => {
	console.log(`App is served on port http://localhost:${port}/`)
	console.log(`App is network served http://${host}:${port}/`)
})