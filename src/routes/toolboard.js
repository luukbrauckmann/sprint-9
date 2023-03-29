import express from 'express'
import { get } from '../lib/data-access.js'

const toolboardPage = express.Router()

const options = {
	path: '/toolboard',
	title: 'Toolboard',
	template: './toolboard.ejs',
	childTemplate: '',
}

toolboardPage.get('/toolboard', (request, response) => response.render('index', { ...options }))

toolboardPage.get('/toolboard/partners', async (request, response) => {
	options.childTemplate = './partners.ejs'
	const partners = await getPartners()

	return response.render('index', { ...options, partners })
})

toolboardPage.get('/toolboard/principes', async (request, response) => {
	options.childTemplate = './principes.ejs'
	const principes = await getPrincipes()

	return response.render('index', { ...options, principes })
})

const getPrincipes = () => get('/principes')
	.then((res) => res.principes)

const getPartners = () => get('/websites')
	.then((res) => res.websites)

export default toolboardPage