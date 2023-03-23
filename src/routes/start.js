import express from 'express'

const StartPage = express.Router()

const options = {
	title: 'Start',
	template: './start.ejs'
}

StartPage.get('/', (request, response) => response.render('index', options))

export default StartPage