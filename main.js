const linksSocialMedia = {
	github: 'gfmachad',
	linkedin: 'guilherme-fritzen-machado',
	instagram: 'gfmachad',
}

function changeSocialMediaLinks() {
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
changeSocialMediaLinks()

function getGithubInfos() {
	const url = `https://api.github.com/users/${linksSocialMedia.github}`

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			userName.textContent = data.name
			userLink.href = data.html_url
			userBio.textContent = data.bio
			userImg.src = data.avatar_url
			userLogin.textContent = data.login
		})
}
getGithubInfos()
