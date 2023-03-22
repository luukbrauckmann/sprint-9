const env = process.env

export const get = async () => {
	console.log(env.API_URL)

	const options = {
    method: "GET",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: { "Content-Type": "application/json" },
		redirect: "follow",
		referrerPolicy: "no-referrer"
	}

	return await fetch(env.API_URL, options)
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