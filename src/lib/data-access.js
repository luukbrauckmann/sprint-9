import dotenv from "dotenv"
dotenv.config()

const { env } = process

export const get = async (endpoint, query) => {
	const url = `${env.API_URL}/${endpoint}`

	const options = {
    method: "GET"
	}

	return await fetch(url, options)
		.then((response) => response.json())
		.catch((error) => error)
}

export const create = async (endpoint) => {
	const url = `${env.API_URL}/${endpoint}`

	const options = {
    method: "POST",
		body: JSON.stringify(data)
	}

	return await fetch(url, options)
		.then((response) => response.json())
		.catch((error) => error)
}

export const update = async (endpoint) => {
	const url = `${env.API_URL}/${endpoint}`

	const options = {
    method: "PATCH",
		body: JSON.stringify(data)
	}

	return await fetch(url, options)
		.then((response) => response.json())
		.catch((error) => error)
}

export const remove = async (endpoint) => {
	const url = `${env.API_URL}/${endpoint}`

	const options = {
    method: "DELETE",
		body: JSON.stringify(data)
	}

	return await fetch(url, options)
		.then((response) => response.json())
		.catch((error) => error)
}