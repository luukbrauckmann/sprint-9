document.documentElement.classList.add('make-it-fancy')

addEventListener('focus', (event) => {
	console.log('Lol wat focus kaas?')
})

addEventListener('click', (event) => {
	const { target } = event
	if (!target.matches('button')) return
	console.log('Lol wat click kaas?')
})

addEventListener('submit', (event) => {
	console.log('Lol wat submit kaas?')
})