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

export const create = async () => {
	const options = {
    method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: { "Content-Type": "application/json" },
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data)
	}

	return await fetch(env.API_URL, options)
		.then((response) => response.json())
		.catch((error) => error)
}

export const update = async () => {
	const options = {
    method: "PATCH",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: { "Content-Type": "application/json" },
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data)
	}

	return await fetch(env.API_URL, options)
		.then((response) => response.json())
		.catch((error) => error)
}

export const remove = async () => {
	const options = {
    method: "DELETE",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: { "Content-Type": "application/json" },
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data)
	}

	return await fetch(env.API_URL, options)
		.then((response) => response.json())
		.catch((error) => error)
}