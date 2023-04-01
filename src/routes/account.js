import express from 'express'

const accountPage = express.Router()

const options = {
	path: '/account',
	title: 'Account',
	template: './account.ejs',
	messages: []
}

accountPage.get('/account', (request, response) => response.render('index', options))

export default accountPage