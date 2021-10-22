//Animation

//Movimento de animação
const card = document.querySelector('.card')
const container = document.querySelector('.container')
//Definir constante
const imagesCard = document.querySelector('.imagesCard')

//Evento de movimentar animação
container.addEventListener('mousemove', (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
//Animar dentro
container.addEventListener('mouseenter', (e) => {
	//Movimentar imagem
	imagesCard.style.transform = 'translateZ(100px) rotateZ(0deg)'
})
//Animar fora
container.addEventListener('mouseleave', (e) => {
	card.style.transition = 'all 0.7s ease'
	card.style.transform = `rotateY(10deg) rotateX(0deg)`
	//Voltar
	imagesCard.style.transform = 'translateZ(0px) rotateZ(0deg)'
})

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
