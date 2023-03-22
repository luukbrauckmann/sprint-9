import express from 'express'

const AccountPage = express.Router()

const options = {
	title: 'Account',
	template: './account.ejs'
}

AccountPage.get('/account', (request, response) => response.render('index', options))

export default AccountPage