const linksSocialMedia = {
	linkedin: 'guilherme-fritzen-machado',
	instagram: 'gfmachad',
}

function handleChangeSocialMediaLinks() {
	for (let li of socialLinks.children) {
		const social = li.getAttribute('class')
		if (
			social === 'linkedin'
				? (li.children[0].href = `https://www.${social}.com/in/${linksSocialMedia[social]}`)
				: (li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`)
		);
		console.log(social)
	}
	// userName.textContent = 'Guilherme Machado'
}
handleChangeSocialMediaLinks()
