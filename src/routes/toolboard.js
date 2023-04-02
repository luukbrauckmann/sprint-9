import express from 'express'
import { get, create } from '../lib/data-access.js'

const toolboardPage = express.Router()

const options = {
	path: '/toolboard',
	title: 'Toolboard',
	template: './toolboard.ejs',
	childTemplate: '',
	messages: []
}

toolboardPage.get('/toolboard', (request, response) => {
	options.childTemplate = ''

	response.render('index', { ...options })
	options.messages = []
})

toolboardPage.get('/toolboard/partners', async (request, response) => {
	options.childTemplate = './partners.ejs'
	const partners = await getPartners()

	response.render('index', { ...options, partners })
	options.messages = []
})

toolboardPage.get('/toolboard/partners/**/urls', async (request, response) => {
	options.childTemplate = './partner.ejs'
	const partner = { id: 'cle6xd3nz2k910bw003pdleif' }

	// options.messages = [
	// 	{ type: 'success', title: 'Fout!', detail: 'Er is iets misgegaan met het aanmaken van de URL. Dit kan mogelijk komen doordat de URL al bestaat.' },
	// 	{ type: 'error', title: 'Fout!', detail: 'Er is iets misgegaan met het aanmaken van de URL. Dit kan mogelijk komen doordat de URL al bestaat.' },
	// 	{ type: 'success', title: 'Fout!', detail: 'Er is iets misgegaan met het aanmaken van de URL. Dit kan mogelijk komen doordat de URL al bestaat.' },
	// 	{ type: 'error', title: 'Fout!', detail: 'Er is iets misgegaan met het aanmaken van de URL. Dit kan mogelijk komen doordat de URL al bestaat.' }
	// ]

	response.render('index', { ...options, partner })
	options.messages = []
})
toolboardPage.post('/toolboard/partners/**/urls', async (request, response) => {
	const { body } = request
	const post = await create('/urls', body)

	let message
	if (post.errors) message = { type: 'error', title: 'Fout!', detail: 'Er is iets misgegaan met het aanmaken van de URL. Dit kan mogelijk komen doordat de URL al bestaat.' }
	else message = { type: 'success', title: 'Gelukt!', detail: 'De URL is toegevoegd.' }
	options.messages.push(message)

	response.redirect(`/toolboard/partners/${ body.websiteId }/urls`)
})

toolboardPage.get('/toolboard/principes', async (request, response) => {
	options.childTemplate = './principes.ejs'
	const principes = await getPrincipes()

	response.render('index', { ...options, principes })
	options.messages = []
})

const getPrincipes = () => get('/principes')
	.then((res) => res.principes)

const getPartners = () => get('/websites')
	.then((res) => res.websites)

export default toolboardPage