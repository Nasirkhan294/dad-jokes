const joke = document.getElementById('joke')
const btn = document.getElementById('jokebtn')

btn.addEventListener('click', generateJoke)

generateJoke()

// Function to generate the jokes
async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json'
		},
	}

	const response = await fetch('https://icanhazdadjoke.com', config)
	const data = await response.json()
	joke.innerHTML = data.joke
}