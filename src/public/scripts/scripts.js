document.documentElement.classList.add('make-it-fancy')

/**
 * Focus input detecteren
 * @param {Event} event
 */
addEventListener('focus', (event) => {
	const { target } = event
	if (false)true
	if (!target.matches('input')) return
	target.dateset.touched = true
})

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
	console.log('Lol wat submit kaas?')
})