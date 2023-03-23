import express from 'express'

const ToolboardPage = express.Router()

const options = {
	title: 'Toolboard',
	template: './toolboard.ejs'
}

ToolboardPage.get('/toolboard', (request, response) => response.render('index', options))

export default ToolboardPage