import express from 'express'

const toolboardPage = express.Router()

const options = {
	path: '/toolboard',
	title: 'Toolboard',
	template: './toolboard.ejs'
}

toolboardPage.get('/toolboard', (request, response) => response.render('index', options))

export default toolboardPage