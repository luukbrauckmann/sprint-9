import express from 'express'

const accountPage = express.Router()

const options = {
	title: 'Account',
	template: './account.ejs'
}

accountPage.get('/account', (request, response) => response.render('index', options))

export default accountPage