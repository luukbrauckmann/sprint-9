
import express from 'express'
import network from './lib/network.js'

import startPage from './routes/start.js'
import toolboardPage from './routes/toolboard.js'
import accountPage from './routes/account.js'
import notFoundPage from './routes/not-found.js'

const server = express()
const host = network.getExposedIp()
const port = 3000

server.set('view engine', 'ejs')
server.set('views', './views')
server.set('trust proxy', true)

server.use(express.static('./public'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

/* Routes */
server.get('/', startPage)
server.post('/', startPage)

server.get('/toolboard**', toolboardPage)
server.post('/toolboard**', toolboardPage)

server.get('/account**', accountPage)
server.post('/account**', accountPage)

server.get('**', notFoundPage)

server.listen(port, () => {
	console.log(`App is served on port http://localhost:${port}/`)
	console.log(`App is network served http://${host}:${port}/`)
})