import functions from 'firebase-functions'
import express from 'express'

import startPage from './routes/start.js'
import toolboardPage from './routes/toolboard.js'
import accountPage from './routes/account.js'
import notFoundPage from './routes/not-found.js'

const server = express()

server.set('view engine', 'ejs')
server.set('views', './views')
server.set('trust proxy', true)

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

export const app = functions.https.onRequest(server)