let chuckJokeElement = document.querySelector('p')
let buttonElement = document.querySelector('button')
let selectElement = document.getElementById('select-joke')
let formElement = document.querySelector('form')
let div = document.createElement('div')
let secondForm = document.getElementById('second-form')

buttonElement.textContent = 'random joke'


buttonElement.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((res) => {
            return res.json()
            })
        
        .then((joke) => {
            chuckJokeElement.textContent = joke.value
        })

})


fetch('https://api.chucknorris.io/jokes/categories')
    .then((res) => {
        return res.json()
    })
    .then((category) => {
        category.map(cat => {
           let categoryElement = document.createElement('option')
           categoryElement.textContent = cat
           selectElement.append(categoryElement)
                    })
                })


                formElement.addEventListener('submit', (e) => {
                    e.preventDefault()
                    const form = e.target
                    const button = form.querySelector('button')
                    const select = form.querySelector('select')
                    const p = form.querySelector('p')
                    button.addEventListener('click', () => {
                        fetch(`https://api.chucknorris.io/jokes/random?category=${select.value}`)
                        .then((res) => {
                            return res.json()
                        })
                        .then((joke) => {
                            p.textContent = joke.value
                        })
                    })  
                    
                })
                

                secondForm.addEventListener('submit', (e) => {
                    e.preventDefault()
                    const form = e.target
                    const button = form.querySelector('button')
                    const p = form.querySelector('p')
                    const input = form.querySelector('input')

                    button.addEventListener('click', () => {
                        fetch(`https://www.boredapi.com/api/activity`)
                        .then((res) => {
                            return res.json()
                        })
                        .then((data) => {
                            console.log(data.activity)
                        })
                    })

                })


                // 3. Sukurti galimybę ieškoti juokelių pagal užklausos frazę.
                // 4. Sukurti galimybę ieškoti juokelių pagal užklausos frazę nurodytoje kategorijoje.
                







                document.body.append(div)