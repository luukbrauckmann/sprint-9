import express from 'express'

const startPage = express.Router()

const options = {
	title: 'Start',
	template: './start.ejs'
}

startPage.get('/', (request, response) => response.render('index', options))

export default startPage