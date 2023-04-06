document.documentElement.classList.add('make-it-fancy')

/**
 * Berichten verbergen
 * @param {Event} event
 */
addEventListener('click', (event) => {
	const { target } = event
	if (target && !target.matches('button') && !target.classList.contains('message')) return
	const parent = target.parentElement.parentElement
	parent.style.display = 'none'
})

addEventListener('submit', (event) => {
	console.log('submit')
})