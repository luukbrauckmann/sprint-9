import express from 'express'

const notFoundPage = express.Router()

const options = {
	title: 'Niet gevonden',
	template: './not-found.ejs'
}

notFoundPage.get('*', (request, response) => response.render('index', options))

export default notFoundPage